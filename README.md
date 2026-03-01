# OT Knowledge MCP Server

A Model Context Protocol (MCP) server providing a comprehensive occupational therapy knowledge base. This server enables AI assistants to access curated OT resources including clinical conditions, evidence-based interventions, standardized assessments, treatment techniques, and professional terminology.

## Features

- **Conditions Database**: Search and filter OT-relevant conditions by body system and age group
- **Evidence-Based Interventions**: Access interventions with evidence levels and outcome measures
- **Standardized Assessments**: Lookup OT assessments and evaluation tools by domain and population
- **Treatment Techniques**: Find treatment approaches filtered by condition and methodology
- **Professional Glossary**: Search OT terminology, abbreviations, and definitions
- **Clinical Guidelines**: Access authoritative clinical practice guidelines
- **Web Resource Fetching**: Retrieve and convert web content to markdown format
- **OpenTelemetry Integration**: Full observability with traces and metrics
- **Bearer Token Authentication**: Secure API access with configurable authentication

## MCP Tools

### `search_conditions`
Search the OT conditions database with optional filters.

**Parameters:**
- `query` (optional): Text search in condition names, descriptions, aliases, and symptoms
- `bodySystem` (optional): Filter by body system (neurological, musculoskeletal, cardiopulmonary, integumentary, sensory, cognitive, psychosocial, developmental)
- `ageGroup` (optional): Filter by age group (pediatric, adolescent, adult, geriatric)

### `get_treatments`
Find occupational therapy treatment techniques.

**Parameters:**
- `query` (optional): Text search in treatment names, descriptions, and indications
- `conditionId` (optional): Filter by applicable condition ID (e.g., "stroke", "tbi")
- `approachType` (optional): Filter by approach (remedial, compensatory, adaptive, preventive, educational, sensory-based, cognitive-behavioral, biomechanical, neurodevelopmental)
- `ageGroup` (optional): Filter by age group

### `lookup_assessments`
Find OT assessments and evaluation tools.

**Parameters:**
- `query` (optional): Text search in assessment names, descriptions, and acronyms
- `domain` (optional): Filter by domain (adl, iadl, motor, sensory, cognitive, psychosocial, balance, upper-extremity, functional-performance)
- `conditionId` (optional): Filter by applicable condition ID
- `ageGroup` (optional): Filter by population age group

### `search_glossary`
Search the OT glossary of terms and abbreviations.

**Parameters:**
- `query` (optional): Text search in terms, definitions, and usage examples
- `category` (optional): Filter by category (anatomy, assessment, intervention, theory, general, legislation)

### `get_interventions`
Get evidence-based interventions for a specific condition.

**Parameters:**
- `conditionId` (required): Condition ID (e.g., "stroke", "dementia", "autism")
- `evidenceLevel` (optional): Minimum evidence level (strong, moderate, limited, emerging, expert-opinion)

### `get_comprehensive_overview`
Get a comprehensive overview for a condition including description, symptoms, OT role, treatments, assessments, and interventions.

**Parameters:**
- `conditionId` (required): Condition ID (e.g., "stroke", "parkinsons", "cerebral-palsy")

### `search_clinical_guidelines`
Search curated clinical practice guidelines relevant to OT.

**Parameters:**
- `topic` (optional): Filter by topic or condition (e.g., "stroke", "arthritis", "mental-health")

### `fetch_web_resource`
Fetch content from a web URL and convert to markdown.

**Parameters:**
- `url` (required): URL to fetch (must be http or https)
- `includeLinks` (optional): Preserve hyperlinks in markdown output (default: true)
- `timeout` (optional): Request timeout in milliseconds (default: 15000)

## Installation

### Prerequisites

- Node.js 22 or later
- pnpm package manager

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd ot-knowledge-mcp
```

2. Install dependencies:
```bash
pnpm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure:
- `API_KEY`: Generate using `node -e "console.log(require('./dist/middleware/auth.js').generateApiKey())"` or set your own secure token
- `PORT`: Server port (default: 3100)
- `LOG_LEVEL`: Logging level (trace, debug, info, warn, error, fatal)
- `NODE_ENV`: Environment (development or production)
- `OTEL_SERVICE_NAME`: Service name for telemetry
- `OTEL_EXPORTER_OTLP_ENDPOINT`: OpenTelemetry collector endpoint
- `OTEL_TRACES_SAMPLER`: Trace sampling strategy
- `OTEL_TRACES_SAMPLER_ARG`: Sampling ratio

4. Build and start:
```bash
pnpm build
pnpm start
```

Or for development with automatic rebuild:
```bash
pnpm dev
```

The server will be available at `http://localhost:3100/mcp`

## Docker Deployment

### Build Docker Image

```bash
docker build -t ot-knowledge-mcp .
```

### Run with Docker

```bash
docker run -d \
  -p 3100:3100 \
  -e API_KEY=ot_sk_your_secure_token \
  -e OTEL_EXPORTER_OTLP_ENDPOINT=http://your-collector:4318 \
  --name ot-knowledge-mcp \
  ot-knowledge-mcp
```

### Docker Compose

```yaml
version: '3.8'
services:
  ot-knowledge-mcp:
    build: .
    ports:
      - "3100:3100"
    environment:
      - API_KEY=ot_sk_your_secure_token
      - PORT=3100
      - LOG_LEVEL=info
      - NODE_ENV=production
      - OTEL_SERVICE_NAME=ot-knowledge-mcp
      - OTEL_EXPORTER_OTLP_ENDPOINT=http://otel-collector:4318
      - OTEL_TRACES_SAMPLER=parentbased_always_on
    restart: unless-stopped
```

## API Endpoints

### Health Check
```bash
GET /health
```

Returns server health metrics including PID, memory usage, and CPU usage.

### Uptime
```bash
GET /uptime
```

Returns server status and uptime in seconds.

### MCP Endpoint
```bash
POST /mcp
Authorization: Bearer ot_sk_your_token_here
Content-Type: application/json
```

The main MCP endpoint for tool invocations. Requires Bearer token authentication.

## Authentication

The server uses Bearer token authentication for the `/mcp` endpoint. Configure the `API_KEY` environment variable with a secure token.

**Generate an API key:**
```bash
node -e "console.log(require('./dist/middleware/auth.js').generateApiKey())"
```

Or manually create a token in the format: `ot_sk_<48 random hex characters>`

**Making authenticated requests:**
```bash
curl -X POST http://localhost:3100/mcp \
  -H "Authorization: Bearer ot_sk_your_token_here" \
  -H "Content-Type: application/json" \
  -d '{"method": "tools/list"}'
```

To disable authentication (not recommended for production), leave `API_KEY` empty in `.env`.

## Graceful Shutdown

The server implements graceful shutdown to ensure clean termination:

- Handles `SIGTERM` and `SIGINT` signals for proper shutdown
- Stops accepting new HTTP connections
- Closes active MCP server connections
- Flushes OpenTelemetry traces and metrics
- 30-second timeout for forced shutdown if graceful shutdown hangs
- Handles uncaught exceptions and unhandled promise rejections

To stop the server gracefully, send `SIGTERM` or press `Ctrl+C` (`SIGINT`).

## OpenTelemetry Observability

The server includes comprehensive observability with OpenTelemetry:

- **Traces**: All HTTP requests and MCP tool invocations are traced
- **Metrics**: Request counters, durations, and custom metrics
- **Instrumentation**: Automatic Node.js instrumentation for HTTP, DNS, and more

Configure the OpenTelemetry collector endpoint in the `OTEL_EXPORTER_OTLP_ENDPOINT` environment variable. Traces and metrics are exported via OTLP over HTTP.

## Logging

Structured logging with Pino:

- **Development mode** (`NODE_ENV=development`): Pretty-printed logs for readability
- **Production mode** (`NODE_ENV=production`): JSON-formatted logs for aggregation

Log levels: `trace`, `debug`, `info`, `warn`, `error`, `fatal`

## Project Structure

```
ot-knowledge-mcp/
├── src/
│   ├── config/          # Configuration (logger, telemetry, metrics)
│   ├── data/            # Knowledge base data (glossary, assessments, interventions)
│   ├── middleware/      # Authentication middleware
│   ├── tools/           # MCP tool implementations
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions (web fetch, search, logging)
│   ├── index.ts         # Application entry point
│   └── server.ts        # MCP server configuration
├── dist/                # Compiled JavaScript output
├── .env.example         # Environment variable template
├── Dockerfile           # Docker build configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Development

### Build
```bash
pnpm build
```

### Start
```bash
pnpm start
```

### Development Mode
```bash
pnpm dev
```

## License

[Add your license here]

## Contributing

[Add contributing guidelines here]

## Support

[Add support information here]
