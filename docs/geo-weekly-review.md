# HurricaneHub GEO Weekly Review

Run this review once a week after exporting Bing Webmaster Tools AI Performance data for the latest 7 days and the preceding 7 days.

## Inputs

- AI Search Queries CSV
- AI Page Stats CSV
- Previous week's two CSV files when available

## Command

```bash
npm run geo:weekly -- "/path/to/AISearchQueriesReport.csv" "/path/to/AIPageStatsReport.csv"
```

## Decision Rules

1. Update an existing page when a query has at least 50 citations or 15% citation share and the current URL only partially answers it.
2. Create a new page only when the intent is distinct, persists for two weekly reports, and no existing page can answer it without becoming unfocused.
3. Treat named-storm demand as time-sensitive. Verify NHC status, advisory time, position, and lifecycle before changing live content.
4. Protect evergreen growth. Track live/current, state/local, forecast education, preparedness, and recovery separately from named storms.
5. Flag concentration risk when one page exceeds 30% of citations or the top 10 pages exceed 80%.
6. Do not interpret citations as visits, clicks, rankings, or conversions.
7. Publish only source-verifiable answers with a visible checked or modified time and links to official sources.

## Weekly Output

- Total queries, pages, and citations
- Top 10 query and page concentration
- New and declining queries
- New and declining cited pages
- Queries with high citation share but weak page coverage
- Existing URLs to update
- New URLs justified by persistent distinct intent
- Topics to defer because they are temporary, duplicated, unsafe, or unsupported
