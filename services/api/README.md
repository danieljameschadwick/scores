# api

The ingest backend needs to query 3rd parties for game data, parse and persist data for the frontend to display.

Currently, we ingest data from mocks -> normalise -> present on the client.

We require the ingester to:
- Normalise scores to a common format,
- Add extra information that may not available in API:
  - Abbreviations, logos etc. (provided from a 'core' data set)
