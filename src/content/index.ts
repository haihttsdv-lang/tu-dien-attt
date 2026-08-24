import type { ContentBundle } from "../data/schema/models";
import { topics } from "./topics";
import { contentBlocks } from "./topics/content-blocks";
import { contentBlocksCm } from "./topics/content-blocks-cm";
import { contentBlocksQt } from "./topics/content-blocks-qt";
import { contentBlocksKt } from "./topics/content-blocks-kt";
import { contentBlocksVh } from "./topics/content-blocks-vh";
import { contentBlocksNh } from "./topics/content-blocks-nh";
import { contentBlocksKg } from "./topics/content-blocks-kg";
import { contentBlocksCc } from "./topics/content-blocks-cc";
import { contentBlocksMn } from "./topics/content-blocks-mn";
import { legalDocuments, documentArticles, documentRelations } from "./documents";
import { frameworks } from "./frameworks";
import { terms } from "./terms";
import {
  controlRequirements,
  mappings,
  auditPrograms,
  interviewQuestions,
  evidenceItems
} from "./audit-tools";

export const contentBundle: ContentBundle = {
  topics,
  legalDocuments,
  documentArticles,
  documentRelations,
  frameworks,
  controlRequirements,
  mappings,
  contentBlocks: [
    ...contentBlocks,
    ...contentBlocksCm,
    ...contentBlocksQt,
    ...contentBlocksKt,
    ...contentBlocksVh,
    ...contentBlocksNh,
    ...contentBlocksKg,
    ...contentBlocksCc,
    ...contentBlocksMn
  ],
  terms,
  auditPrograms,
  interviewQuestions,
  evidenceItems,
  complianceObligations: [],
  incidentPlaybooks: []
};
