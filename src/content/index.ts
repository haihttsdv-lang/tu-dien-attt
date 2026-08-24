import type { ContentBundle } from "../data/schema/models";
import { topics } from "./topics";
import { contentBlocks } from "./topics/content-blocks";
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
  contentBlocks,
  terms,
  auditPrograms,
  interviewQuestions,
  evidenceItems,
  complianceObligations: [],
  incidentPlaybooks: []
};
