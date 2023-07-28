export const range = (start = 0, stop, step = 1) => {
    const result = []
    if (typeof stop !== 'number') {
        step = 1
        stop = step
    }
    for (let i = start; i < stop; i += step) {
        result.push(i);
    }
    return result;
}

class Range extends Array {
    constructor(start = 0, stop, step = 1) {
        super()
        if (typeof stop !== 'number') {
            step = 1
            stop = step
        }
        for (let i = start; i < stop; i += step) {
            this.push(i);
        }
        return this;
    }
}
export const x = new Range(0, 10, 2)