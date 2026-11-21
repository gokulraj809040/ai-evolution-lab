//1. The atomic symbol "Token"
export type Token = string;

//2. The preceeding sequence of tokens
export type Context = readonly Token[];

//3. Serialized string for map lookups
export type ContextKey = string;

//4. The trained statical frequency container

export interface NgramModel {
    readonly n: number;
    readonly frequencies: Map<ContextKey, Map<Token, number>>;
    readonly vocabulary: Set<Token>;
    readonly totalObservations: number;
}

export const BOS_TOKEN: Token = '<BOS>';
export const EOS_TOKEN: Token = '<EOS>';