# Architecture Decision Records (ADRs)

## ADR-001: Pure TypeScript Engine Decoupled from React
- **Status:** Accepted
- **Context:** To ensure the statistical language model can be tested independently and ported to any runtime (browser, Node, Web Worker).
- **Decision:** All algorithms reside under `src/engine/` with zero React or DOM dependencies.

## ADR-002: ContextKey String Serialization for Map Lookups
- **Status:** Accepted
- **Context:** JavaScript `Map` compares keys by reference equality (`['a', 'b'] !== ['a', 'b']`).
- **Decision:** Context tuples are serialized to deterministic strings (`ContextKey`) using space-separated concatenation (`context.join(' ')`).

## ADR-003: Progressive Type Discovery
- **Status:** Accepted
- **Context:** Defining all future types upfront violates YAGNI.
- **Decision:** Types are introduced concept-by-concept as the features that use them are built.
