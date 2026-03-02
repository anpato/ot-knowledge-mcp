# Problem Statement

The OT Knowledge MCP server currently only exposes tools but lacks MCP resources that can be dynamically added by users. The system needs to support:
1. User-added knowledge base resources (documents, articles, clinical notes)
2. Redacted evaluation examples for reference
3. State-specific resources (can be in-code or user-provided)

# Current State Overview

The server uses `@modelcontextprotocol/sdk` McpServer class and registers 8 tools for querying static OT data (conditions, treatments, assessments, interventions, glossary, clinical guidelines). Data is hardcoded in TypeScript files under `src/data/`. The clinical guidelines tool shows a pattern of curated external resources with topics, URLs, and descriptions. There is no resource registration currently - only tool registration. The server uses bearer token authentication, OpenTelemetry instrumentation, and runs as a stateless HTTP service.

# Proposed Changes

## 1. Storage Layer

Add SQLite database with Prisma ORM:
* Use Prisma with SQLite provider for type-safe database access
* Create `prisma/schema.prisma` with Resource model
* Database file location configurable via `DATABASE_URL` env variable (default: `file:./data/resources.db`)
* Support three resource types: `KNOWLEDGE_BASE`, `EVALUATION_EXAMPLE`, `STATE_SPECIFIC` (enum)
* Schema: Resource model with id, type (enum), title, content, metadata (JSON), createdAt, updatedAt
* Add indexes on type and metadata fields for efficient filtering
* Prisma will handle migrations and type generation automatically

## 2. State-Specific Resources

Create built-in state resources for common US states:
* Create `src/data/state-resources.ts` with licensing requirements, common state-specific regulations
* Include fields: state code, licensure info, scope of practice notes, continuing education requirements
* Make extensible so users can add state-specific clinical resources

## 3. MCP Resource API

Register MCP resources in `src/server.ts`:
* Implement `listResources()` handler to list all available resources (built-in + user-added)
* Implement `readResource(uri)` handler to fetch resource content by URI
* Use URI format: `ot-knowledge://resource-type/resource-id`
* Return resource content as text or JSON based on content type

## 4. Resource Management Tools

Add new MCP tools for managing user resources:
* `add_knowledge_resource`: Add new user knowledge resource (document, article, notes)
* `add_evaluation_example`: Add redacted evaluation example with metadata (condition, setting, format)
* `search_resources`: Search across all resources by query, type, tags, condition
* `list_state_resources`: List state-specific resources filtered by state

## 5. Data Persistence

Implement database operations with Prisma:
* Run Prisma migrations on server startup (or use `prisma migrate deploy` in production)
* CRUD operations via Prisma Client with type safety
* Prisma transactions for atomic multi-resource operations
* Validate resource metadata structure before persisting (Prisma handles core validation)
* Add environment variable `DATABASE_URL` for database location
* Create seed script to populate built-in state resources on first run

## 6. Resource Schema

Define TypeScript interfaces in `src/types/index.ts`:
* `UserResource`: base interface with id, type, title, content, metadata, createdAt
* `KnowledgeBaseResource`: extends UserResource with tags, url, summary
* `EvaluationExample`: extends UserResource with conditionId, setting, ageGroup, redactionNotes
* `StateResource`: extends UserResource with stateCode, category (licensing, regulation, clinical)

## 7. Testing Considerations

Ensure resources work with existing infrastructure:
* Resources should respect bearer token auth like tools
* Resource access should be logged via existing tool logger pattern
* OpenTelemetry traces should include resource reads

## Implementation Order

1. Add Prisma dependencies: `prisma` (dev), `@prisma/client` (prod)
2. Initialize Prisma with `prisma init --datasource-provider sqlite`
3. Define Prisma schema in `prisma/schema.prisma` with Resource model and ResourceType enum
4. Define TypeScript type helpers in `src/types/index.ts` for metadata structures
5. Create Prisma Client singleton in `src/lib/prisma.ts`
6. Create resource manager in `src/storage/resource-manager.ts` with business logic using Prisma Client
7. Add state-specific resources data in `src/data/state-resources.ts`
8. Create seed script `prisma/seed.ts` to populate state resources
9. Run initial migration and generate Prisma Client types
10. Initialize database and run migrations in `src/index.ts` on startup
11. Register MCP resource handlers in `src/server.ts`
12. Implement resource management tools in `src/tools/`
13. Update package.json with prisma scripts and seed config
14. Update README with resource usage examples
15. Add `DATABASE_URL` to `.env.example`
