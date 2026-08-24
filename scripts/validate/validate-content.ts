/**
 * FR-T02: quet toan bo kho, that bai neu ton tai noi dung quy pham thieu
 * nguon, co nguon hang C, hoac trich dan toi dieu khoan khong ton tai.
 * Chay doc lap voi UI (dung trong CI/local, khong phu thuoc trinh duyet).
 *
 *   npm run validate:content
 */
import { Topic as TopicSchema } from "../../src/data/schema/models";
import { validateBundle } from "../../src/core/source-validator";
import { contentBundle } from "../../src/content";

let hasError = false;

function fail(message: string): void {
  hasError = true;
  console.error(`  ✗ ${message}`);
}

function ok(message: string): void {
  console.log(`  ✓ ${message}`);
}

console.log("== Kiem tra toan ven noi dung (FR-T01/T02, NFR-05) ==\n");

// 1. Zod schema cho tung ban ghi
console.log("1. Kiem tra schema tung ban ghi...");
let schemaErrors = 0;
for (const topic of contentBundle.topics) {
  const r = TopicSchema.safeParse(topic);
  if (!r.success) {
    schemaErrors++;
    fail(`Topic "${topic.id}" khong hop le: ${r.error.message}`);
  }
}
if (schemaErrors === 0) ok(`${contentBundle.topics.length} Topic hop le schema`);

// 2. FR-T01/T02 — nguon cho ContentBlock
console.log("\n2. Kiem tra nguon cua ContentBlock (FR-T01, FR-T02, NFR-05)...");
const violations = validateBundle(contentBundle);
if (violations.length === 0) {
  ok(`0 vi pham tren ${contentBundle.contentBlocks.length} ContentBlock — dat NFR-05`);
} else {
  for (const v of violations) {
    fail(`[${v.contentBlockId}] ${v.reason}: ${v.detail}`);
  }
}

// 3. Toan ven tham chieu topicId
console.log("\n3. Kiem tra topicId duoc tham chieu deu ton tai...");
const topicIds = new Set(contentBundle.topics.map((t) => t.id));
let refErrors = 0;
for (const cb of contentBundle.contentBlocks) {
  if (!topicIds.has(cb.topicId)) {
    refErrors++;
    fail(`ContentBlock "${cb.id}" tro toi topicId "${cb.topicId}" khong ton tai`);
  }
}
for (const topic of contentBundle.topics) {
  for (const relId of topic.relatedTopicIds) {
    if (!topicIds.has(relId)) {
      refErrors++;
      fail(`Topic "${topic.id}" co relatedTopicIds tro toi "${relId}" khong ton tai`);
    }
  }
}
if (refErrors === 0) ok("Moi tham chieu topicId hop le");

// 4. Ma nhom (group) phai khop tien to id (NFR-08 — du lieu tu mo ta chinh no)
console.log("\n4. Kiem tra ma nhom khop tien to Topic.id...");
let groupErrors = 0;
for (const topic of contentBundle.topics) {
  if (!topic.id.startsWith(`${topic.group}-`)) {
    groupErrors++;
    fail(`Topic "${topic.id}" co group="${topic.group}" khong khop tien to id`);
  }
}
if (groupErrors === 0) ok("Moi Topic co group khop tien to id");

// 5. Canh bao mem: T1 khong vuot 200 tu (URD 5.11, checklist 18.3) — chi canh bao
console.log("\n5. Canh bao (khong lam that bai build): do dai tang T1...");
let warnCount = 0;
for (const cb of contentBundle.contentBlocks) {
  if (cb.tier !== "T1") continue;
  const wordCount = cb.body.trim().split(/\s+/).length;
  if (wordCount > 200) {
    warnCount++;
    console.warn(`  ⚠ ContentBlock "${cb.id}" tang T1 co ${wordCount} tu (>200, URD 5.11)`);
  }
}
if (warnCount === 0) ok("Moi ContentBlock T1 trong gioi han 200 tu");

console.log("");
if (hasError) {
  console.error("KET QUA: THAT BAI — xem chi tiet vi pham o tren.\n");
  process.exit(1);
} else {
  console.log("KET QUA: DAT — khong co vi pham cuong che nguon.\n");
  process.exit(0);
}
