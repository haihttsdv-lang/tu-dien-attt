import type { ContentBundle } from "../data/schema/models";
import { topics } from "./topics";
import { contentBlocks } from "./topics/content-blocks";
import { contentBlocksPlNew } from "./topics/content-blocks-pl-new";
import { contentBlocksCm } from "./topics/content-blocks-cm";
import { contentBlocksQt } from "./topics/content-blocks-qt";
import { contentBlocksKt } from "./topics/content-blocks-kt";
import { contentBlocksVh } from "./topics/content-blocks-vh";
import { contentBlocksNh } from "./topics/content-blocks-nh";
import { contentBlocksKg } from "./topics/content-blocks-kg";
import { contentBlocksCc } from "./topics/content-blocks-cc";
import { contentBlocksMn } from "./topics/content-blocks-mn";
import { contentBlocksT2 } from "./topics/content-blocks-t2";
import { contentBlocksT2Pl } from "./topics/content-blocks-t2-pl";
import { contentBlocksT2Cm } from "./topics/content-blocks-t2-cm";
import { contentBlocksT2Qt } from "./topics/content-blocks-t2-qt";
import { contentBlocksT2Kt } from "./topics/content-blocks-t2-kt";
import { contentBlocksT2Nh } from "./topics/content-blocks-t2-nh";
import { contentBlocksT2Vh } from "./topics/content-blocks-t2-vh";
import { contentBlocksT2Kg } from "./topics/content-blocks-t2-kg";
import { contentBlocksT2Cc } from "./topics/content-blocks-t2-cc";
import { contentBlocksT2Mn } from "./topics/content-blocks-t2-mn";
import { contentBlocksT2PlNew } from "./topics/content-blocks-t2-pl-new";
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
    ...contentBlocksPlNew,
    ...contentBlocksCm,
    ...contentBlocksQt,
    ...contentBlocksKt,
    ...contentBlocksVh,
    ...contentBlocksNh,
    ...contentBlocksKg,
    ...contentBlocksCc,
    ...contentBlocksMn,
    ...contentBlocksT2,
    ...contentBlocksT2Pl,
    ...contentBlocksT2Cm,
    ...contentBlocksT2Qt,
    ...contentBlocksT2Kt,
    ...contentBlocksT2Nh,
    ...contentBlocksT2Vh,
    ...contentBlocksT2Kg,
    ...contentBlocksT2Cc,
    ...contentBlocksT2Mn,
    ...contentBlocksT2PlNew
  ],
  terms,
  auditPrograms,
  interviewQuestions,
  evidenceItems,
  complianceObligations: [],
  incidentPlaybooks: []
};
