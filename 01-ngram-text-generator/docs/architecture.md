# Engine Architecture & Data Flow

## 1. High-Level Data Flow

```text
Raw Corpus Text
      │
      ▼
normalizeText()          Standardizes case, trims whitespace, handles punctuation
      │
      ▼
tokenize()               Splits text into discrete Token[] array
      │
      ▼
extractNgrams()          Extracts (Context, Target) observation pairs
      │
      ▼
trainModel()             Accumulates observations into nested Map<ContextKey, Map<Token, number>>
      │
      ▼
  NgramModel             Statistical model stored in memory
      │
      ├───────────────────────────────┐
      │ (Prompt Inference)            │ (Text Generation)
      ▼                               ▼
extractContext()                generateText()
      │                               │
      ▼                               ▼
lookupCandidates()              predictNext() loop
      │                               │
      ▼                               ▼
calculateProbabilities()        Append token, update context, check <EOS>
      │
      ▼
decode() (Greedy / Sampling / Temp / Top-K / Top-P)
      │
      ▼
PredictionResult
```

## 2. Directory Responsibilities

- `src/engine/`: Pure TypeScript statistical functions (Zero React/DOM dependencies).
- `src/types/`: Strict domain interfaces and contracts.
- `src/hooks/`: React state adapters and debounce logic.
- `src/components/`: Presentational UI components.
- `src/test/`: Unit and integration test suites.
