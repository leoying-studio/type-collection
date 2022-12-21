type Replace<O extends Record<string, any>, K extends keyof O, F = any> = Omit<O, K> & {
    [P in K]: F
};