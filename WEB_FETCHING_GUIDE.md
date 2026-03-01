# Web Fetching Capabilities

The OT Knowledge MCP server now supports fetching external web resources! This enables AI assistants to access up-to-date clinical guidelines, research articles, and documentation from authoritative sources.

## New Tools

### 1. `fetch_web_resource`

Fetches content from any web URL and converts it to clean markdown format.

**Parameters:**
- `url` (required, string): The URL to fetch (must be http or https)
- `includeLinks` (optional, boolean): Whether to preserve hyperlinks (default: true)
- `timeout` (optional, number): Request timeout in milliseconds (default: 15000)

**Example usage:**
```json
{
  "url": "https://www.aota.org/practice/practice-essentials/evidence-based-practice",
  "includeLinks": true
}
```

**Features:**
- Converts HTML to clean markdown
- Extracts page title
- Handles timeouts gracefully
- Validates URLs (only http/https allowed)
- Truncates very large pages (500KB limit)
- Returns formatted output with source attribution

### 2. `search_clinical_guidelines`

Searches a curated database of 12 authoritative clinical practice guidelines and evidence-based resources.

**Parameters:**
- `topic` (optional, string): Filter by topic/condition (e.g., "stroke", "arthritis", "mental-health")

**Example usage:**
```json
{
  "topic": "stroke"
}
```

**Curated Sources Include:**
1. **AOTA Evidence-Based Practice Resources** - Systematic reviews and evidence-based literature
2. **Stroke Rehabilitation Guidelines** (AHA/ASA) - Clinical practice guidelines for stroke
3. **WHO Rehabilitation Guidelines** - International rehabilitation resources
4. **NICE Clinical Guidelines** (UK) - Evidence-based guidelines for various conditions
5. **CDC Arthritis Program** - Evidence-based interventions for arthritis
6. **Autism Intervention Guidelines** - Evidence-based practices for autism spectrum disorder
7. **Traumatic Brain Injury Guidelines** (BIAA) - TBI rehabilitation resources
8. **Parkinson's Disease Clinical Guidelines** - Guidelines for Parkinson's management
9. **Geriatric Care Guidelines** (AGS) - Fall prevention, dementia care, functional assessment
10. **Hand Therapy Clinical Practice Guidelines** (ASHT) - Hand therapy evidence
11. **Mental Health Practice Guidelines** (AOTA) - OT in mental health settings
12. **Spinal Cord Injury Practice Guidelines** (PVA) - Comprehensive SCI care guidelines

## Workflow Example

A typical workflow combining both tools:

1. **Discover guidelines:**
   ```
   Use search_clinical_guidelines with topic "stroke"
   ```

2. **Fetch specific content:**
   ```
   Use fetch_web_resource with the URL from search results
   ```

## Safety Features

- **URL Validation**: Only http and https protocols are allowed
- **Timeout Protection**: 15-second default timeout prevents hanging requests
- **Content Limits**: Pages larger than 500KB are truncated to prevent excessive memory use
- **Error Handling**: Clear error messages for network failures, invalid URLs, and unsupported content types
- **User Agent**: Identifies as "OT-Knowledge-MCP/1.0" for transparency

## Technical Details

### Implementation
- **HTML Parser**: Uses `node-html-markdown` for fast, clean conversion
- **HTTP Client**: Native Node.js `fetch` API
- **Architecture**: Follows existing MCP tool patterns with Zod schema validation

### File Structure
```
src/
  utils/
    web-fetch.ts         # Core fetching and conversion logic
  tools/
    fetch-web-resource.ts           # MCP tool for web fetching
    search-clinical-guidelines.ts   # MCP tool for guideline search
```

## Future Enhancements

Potential improvements for future versions:
- Rate limiting for public deployments
- Caching mechanism to reduce redundant fetches
- robots.txt compliance
- Support for PDF extraction
- Custom content extraction rules for specific domains
- Enhanced error recovery and retry logic

## Notes

- The server now has **8 total tools** (6 original + 2 new)
- All new tools are marked as read-only operations
- The web fetching utility is reusable and can be extended for additional use cases
- Content is returned in markdown format optimized for AI consumption
