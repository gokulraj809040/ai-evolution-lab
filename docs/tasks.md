# 75-Task Master Checklist

## Phase 1 — Project Setup and Architecture (8 Tasks)
- [x] **P1-T1.1:** Create React + TypeScript + Vite project
- [x] **P1-T1.2:** Install/configure Tailwind CSS
- [x] **P1-T1.3:** Install/configure Vitest and React Testing Library
- [x] **P1-T1.4:** Plan folder structure: engine, components, hooks, types and tests
- [x] **P1-T1.5:** Define model types: Token, Context, NgramModel, Candidate, PredictionResult
- [x] **P1-T1.6:** Agree on word tokenization, punctuation handling and BOS/EOS conventions
- [x] **P1-T1.7:** Define shared input/output tracing interface
- [ ] **P1-T1.8:** Initialize Git and project progress documents

## Phase 2 — N-gram Training Engine (8 Tasks)
- [ ] **P2-T2.1:** Implement `normalizeText()` for case, whitespace and agreed punctuation rules
- [ ] **P2-T2.2:** Implement `tokenize()` to convert text into tokens
- [ ] **P2-T2.3:** Implement sentence splitting and explicit BOS/EOS handling
- [ ] **P2-T2.4:** Implement `extractNgrams()` for N=1, N=2 and N=3
- [ ] **P2-T2.5:** Implement `trainModel()` using a nested Map of context → next-token counts
- [ ] **P2-T2.6:** Count duplicate observations correctly
- [ ] **P2-T2.7:** Add input/output console traces for each training function
- [ ] **P2-T2.8:** Write Vitest tests for tokenization, N-gram extraction and counts

## Phase 3 — Prediction and Decoding Engine (13 Tasks)
- [ ] **P3-T3.1:** Implement `extractContext()` using the last N−1 tokens
- [ ] **P3-T3.2:** Implement `lookupCandidates()` to find candidate continuations
- [ ] **P3-T3.3:** Implement `calculateProbabilities()` as count ÷ context total
- [ ] **P3-T3.4:** Rank predictions with deterministic tie-breaking
- [ ] **P3-T3.5:** Implement `decodeGreedy()`
- [ ] **P3-T3.6:** Implement probability-weighted random sampling
- [ ] **P3-T3.7:** Implement temperature scaling
- [ ] **P3-T3.8:** Implement Top-K filtering and renormalization
- [ ] **P3-T3.9:** Implement Top-P filtering and renormalization
- [ ] **P3-T3.10:** Implement safe unknown-context handling and optional lower-order backoff
- [ ] **P3-T3.11:** Build `predictNext()` to coordinate all prediction steps
- [ ] **P3-T3.12:** Log every prediction function's input and output
- [ ] **P3-T3.13:** Write Vitest tests, including controlled randomness

## Phase 4 — React Live Prediction and Suggestion Popup (12 Tasks)
- [ ] **P4-T4.1:** Create training corpus textarea with sample data
- [ ] **P4-T4.2:** Add N selector and Train button
- [ ] **P4-T4.3:** Connect Train to `trainModel()` and store the model in React state
- [ ] **P4-T4.4:** Detect changed training text and show a retrain-required state
- [ ] **P4-T4.5:** Create the user's prompt input
- [ ] **P4-T4.6:** Implement a 400 ms debounced prediction hook/effect
- [ ] **P4-T4.7:** Call `predictNext()` after typing pauses, without retraining
- [ ] **P4-T4.8:** Display next-word candidates, counts and probabilities in a popup
- [ ] **P4-T4.9:** Allow clicking a suggestion to append the selected word
- [ ] **P4-T4.10:** Handle unknown context, empty prompt and disabled/untrained states
- [ ] **P4-T4.11:** Prevent stale predictions when typing or training changes
- [ ] **P4-T4.12:** Test debounce timing and popup interactions using fake timers

## Phase 5 — Multi-word Text Generation (9 Tasks)
- [ ] **P5-T5.1:** Implement `generateText()` as a repeated prediction/decoding loop
- [ ] **P5-T5.2:** Append each generated token and update the context
- [ ] **P5-T5.3:** Support maximum new-token limits
- [ ] **P5-T5.4:** Stop generation on EOS or when no valid continuation exists
- [ ] **P5-T5.5:** Expose decoding settings (Greedy, Sampling, Temperature, Top-K and Top-P)
- [ ] **P5-T5.6:** Create the Generate button and generated-output panel
- [ ] **P5-T5.7:** Trace every iteration, including candidates, choice and updated context
- [ ] **P5-T5.8:** Implement Reset/Clear controls
- [ ] **P5-T5.9:** Test stopping conditions, context updates and deterministic generation

## Phase 6 — Testing and Model Evaluation (10 Tasks)
- [ ] **P6-T6.1:** Run a complete suite of unit tests for the engine
- [ ] **P6-T6.2:** Test all major UI workflows end-to-end at the component/integration level
- [ ] **P6-T6.3:** Prepare separate training and held-out evaluation examples
- [ ] **P6-T6.4:** Implement top-1 next-token accuracy measurement
- [ ] **P6-T6.5:** Implement unknown-context rate measurement
- [ ] **P6-T6.6:** Measure generated-text repetition and unique-token diversity
- [ ] **P6-T6.7:** Compare decoding strategies on controlled prompts
- [ ] **P6-T6.8:** Test edge cases: empty corpus, short prompts, invalid N and invalid settings
- [ ] **P6-T6.9:** Document actual measured results and failure cases
- [ ] **P6-T6.10:** Run TypeScript checks and production build

## Phase 7 — Optional Model Visualizations (6 Tasks — Optional)
- [ ] **P7-T7.1:** Add tokenization preview
- [ ] **P7-T7.2:** Show sliding-window context/target pairs
- [ ] **P7-T7.3:** Build a nested Map/frequency explorer
- [ ] **P7-T7.4:** Display candidate probability charts
- [ ] **P7-T7.5:** Add a step-by-step prediction trace viewer
- [ ] **P7-T7.6:** Add generation replay and decoder comparisons

## Phase 8 — GitHub Delivery and Final Review (9 Tasks)
- [ ] **P8-T8.1:** Review source structure and code quality
- [ ] **P8-T8.2:** Run final type checks, tests and build
- [ ] **P8-T8.3:** Configure GitHub Actions for automated checks
- [ ] **P8-T8.4:** Write README: setup, usage, architecture and algorithms
- [ ] **P8-T8.5:** Add evaluation report and known limitations
- [ ] **P8-T8.6:** Prepare screenshots/demo and explain the full pipeline
- [ ] **P8-T8.7:** Review Git diff and prepare meaningful commits
- [ ] **P8-T8.8:** Push to dedicated ngram-text-generator GitHub repository after approval
- [ ] **P8-T8.9:** Verify repository contents and complete final technical assessment
