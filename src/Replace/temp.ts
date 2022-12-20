type Replace<O extends Record<string, any>, K extends keyof O, F = any> = Omit<O, K> & {
    [K in keyof O]: F
};