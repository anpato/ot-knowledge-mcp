import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { searchConditions } from './tools/search-conditions.js';
import { getTreatments } from './tools/get-treatments.js';
import { lookupAssessments } from './tools/lookup-assessments.js';
import { searchGlossary } from './tools/search-glossary.js';
import { getInterventions } from './tools/get-interventions.js';
import { getComprehensiveOverview } from './tools/get-comprehensive-overview.js';
import { fetchWebResource } from './tools/fetch-web-resource.js';
import { searchClinicalGuidelines } from './tools/search-clinical-guidelines.js';
import { withToolLogging } from './utils/tool-logger.js';

const bodySystemEnum = z.enum([
  'neurological', 'musculoskeletal', 'cardiopulmonary', 'integumentary',
  'sensory', 'cognitive', 'psychosocial', 'developmental',
]);

const ageGroupEnum = z.enum(['pediatric', 'adolescent', 'adult', 'geriatric']);

const approachTypeEnum = z.enum([
  'remedial', 'compensatory', 'adaptive', 'preventive', 'educational',
  'sensory-based', 'cognitive-behavioral', 'biomechanical', 'neurodevelopmental',
]);

const assessmentDomainEnum = z.enum([
  'adl', 'iadl', 'motor', 'sensory', 'cognitive', 'psychosocial',
  'balance', 'upper-extremity', 'functional-performance',
]);

const glossaryCategoryEnum = z.enum([
  'anatomy', 'assessment', 'intervention', 'theory', 'general', 'legislation',
]);

const evidenceLevelEnum = z.enum([
  'strong', 'moderate', 'limited', 'emerging', 'expert-opinion',
]);

export function createOTServer(): McpServer {
  const server = new McpServer({
    name: 'OT Knowledge Base',
    version: '1.0.0',
  });

  server.registerTool(
    'search_conditions',
    {
      title: 'Search OT Conditions',
      description:
        'Search the occupational therapy conditions database. Filter by text query, body system, and/or age group.',
      inputSchema: {
        query: z.string().optional().describe('Text to search in condition names, descriptions, aliases, and symptoms'),
        bodySystem: bodySystemEnum.optional().describe('Filter by body system'),
        ageGroup: ageGroupEnum.optional().describe('Filter by age group'),
      },
      annotations: { readOnlyHint: true },
    },
    async (args) => withToolLogging('search_conditions', args, () => searchConditions(args)),
  );

  server.registerTool(
    'get_treatments',
    {
      title: 'Get Treatment Techniques',
      description:
        'Find occupational therapy treatment techniques. Filter by text query, applicable condition, approach type, and/or age group.',
      inputSchema: {
        query: z.string().optional().describe('Text to search in treatment names, descriptions, aliases, and indications'),
        conditionId: z.string().optional().describe('Filter by applicable condition ID (e.g., "stroke", "tbi")'),
        approachType: approachTypeEnum.optional().describe('Filter by treatment approach type'),
        ageGroup: ageGroupEnum.optional().describe('Filter by age group'),
      },
      annotations: { readOnlyHint: true },
    },
    async (args) => withToolLogging('get_treatments', args, () => getTreatments(args)),
  );

  server.registerTool(
    'lookup_assessments',
    {
      title: 'Lookup Assessments',
      description:
        'Find occupational therapy assessments and evaluation tools. Filter by text query, assessment domain, applicable condition, and/or age group.',
      inputSchema: {
        query: z.string().optional().describe('Text to search in assessment names, descriptions, aliases, and acronyms'),
        domain: assessmentDomainEnum.optional().describe('Filter by assessment domain'),
        conditionId: z.string().optional().describe('Filter by applicable condition ID'),
        ageGroup: ageGroupEnum.optional().describe('Filter by population age group'),
      },
      annotations: { readOnlyHint: true },
    },
    async (args) => withToolLogging('lookup_assessments', args, () => lookupAssessments(args)),
  );

  server.registerTool(
    'search_glossary',
    {
      title: 'Search OT Glossary',
      description:
        'Search the occupational therapy glossary of terms and abbreviations. Filter by text query and/or category.',
      inputSchema: {
        query: z.string().optional().describe('Text to search in terms, definitions, abbreviations, and usage examples'),
        category: glossaryCategoryEnum.optional().describe('Filter by glossary category'),
      },
      annotations: { readOnlyHint: true },
    },
    async (args) => withToolLogging('search_glossary', args, () => searchGlossary(args)),
  );

  server.registerTool(
    'get_interventions',
    {
      title: 'Get Evidence-Based Interventions',
      description:
        'Get evidence-based interventions for a specific condition. Returns intervention details with evidence levels, outcome measures, and key references.',
      inputSchema: {
        conditionId: z.string().describe('Condition ID (required, e.g., "stroke", "dementia", "autism")'),
        evidenceLevel: evidenceLevelEnum.optional().describe('Minimum evidence level filter (e.g., "moderate" returns moderate and strong)'),
      },
      annotations: { readOnlyHint: true },
    },
    async (args) => withToolLogging('get_interventions', args, () => getInterventions(args)),
  );

  server.registerTool(
    'get_comprehensive_overview',
    {
      title: 'Get Comprehensive Condition Overview',
      description:
        'Get a comprehensive overview for a condition including its description, symptoms, OT role, applicable treatments, recommended assessments, and evidence-based interventions — all in one structured response.',
      inputSchema: {
        conditionId: z.string().describe('Condition ID (required, e.g., "stroke", "parkinsons", "cerebral-palsy")'),
      },
      annotations: { readOnlyHint: true },
    },
    async (args) => withToolLogging('get_comprehensive_overview', args, () => getComprehensiveOverview(args)),
  );

  server.registerTool(
    'fetch_web_resource',
    {
      title: 'Fetch Web Resource',
      description:
        'Fetch content from a web URL and convert it to clean markdown format. Useful for retrieving clinical guidelines, research articles, or documentation from authoritative sources.',
      inputSchema: {
        url: z.string().describe('URL to fetch (required, must be http or https)'),
        includeLinks: z.boolean().optional().describe('Whether to preserve hyperlinks in the markdown output (default: true)'),
        timeout: z.number().optional().describe('Request timeout in milliseconds (default: 15000)'),
      },
      annotations: { readOnlyHint: true },
    },
    async (args) => withToolLogging('fetch_web_resource', args, () => fetchWebResource(args)),
  );

  server.registerTool(
    'search_clinical_guidelines',
    {
      title: 'Search Clinical Guidelines',
      description:
        'Search a curated database of authoritative clinical practice guidelines and evidence-based resources relevant to occupational therapy. Returns URLs and descriptions that can be fetched using the fetch_web_resource tool.',
      inputSchema: {
        topic: z.string().optional().describe('Filter guidelines by topic or condition (e.g., "stroke", "arthritis", "mental-health")'),
      },
      annotations: { readOnlyHint: true },
    },
    async (args) => withToolLogging('search_clinical_guidelines', args, () => searchClinicalGuidelines(args)),
  );

  return server;
}
