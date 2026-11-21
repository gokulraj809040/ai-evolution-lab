export interface TraceStep<TInput = unknown, TOutput = unknown> {
    readonly runId?: string;
    readonly functionName: string;
    readonly input: TInput;
    readonly output: TOutput;
    readonly durationMs?: number;
    readonly timestamp?: number;
}

export type TracerCallback = (step: TraceStep) => void;