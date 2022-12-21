type Replace<O extends Record<string, any>, K extends keyof O, F = any> = {
    [P in keyof (Omit<O, K> & {[X in K]:F})]: (Omit<O, K> & {[X in K]:F})[P]
}

