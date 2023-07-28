export const pipeline = (input, methods) => methods.reduce((y, f) => f(y), input)
