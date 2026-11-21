# Functional Requirements

## 1. Training Corpus Processing
- Accept arbitrary multi-line text input.
- Support N-gram orders: Unigram ($N=1$), Bigram ($N=2$), Trigram ($N=3$).
- Normalize case and whitespace deterministically.
- Segment sentences and insert `<BOS>` and `<EOS>` markers.

## 2. Inference & Next-Token Prediction
- Accept real-time user prompts.
- Debounce keystrokes by 400 ms.
- Extract the last $N-1$ tokens as active context.
- Look up matching continuation candidates.
- Compute normalized conditional probability distribution:
  $$P(w_i \mid w_{i-N+1}^{i-1}) = \frac{\text{Count}(w_{i-N+1}^i)}{\sum_{w} \text{Count}(w_{i-N+1}^{i-1}, w)}$$
- Support Greedy decoding with deterministic alphabetical tie-breaking.
- Support sampling with Temperature ($T > 0$), Top-K, and Top-P (nucleus).

## 3. Autoregressive Text Generation
- Iteratively predict and append tokens up to a configurable maximum limit.
- Terminate generation when `<EOS>` is selected or when a dead-end context is encountered.

## 4. Observability
- All pipeline functions emit structured `TraceStep` events logging input, output, and execution time.
