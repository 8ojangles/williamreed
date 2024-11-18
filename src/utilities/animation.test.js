const { calculateDelay } = require('./animation');

describe('calculateDelay', () => {
    const defaultDelay = 200;

    it('should return 200 when i is 0', () => {
        const result = calculateDelay(0);
        expect(result).toBe(1 * defaultDelay);
    });

    it('should return 400 when i is 2', () => {
        const result = calculateDelay(2);
        expect(result).toBe(2 * defaultDelay);
    });

    it('should return 600 when i is 3', () => {
        const result = calculateDelay(3);
        expect(result).toBe(3 * defaultDelay);
    });

    it('should return default delay when i is negative', () => {
        const result = calculateDelay(-1);
        expect(result).toBe(defaultDelay);
    });

    it('should return default delay when i is not a number', () => {
        const result = calculateDelay('a');
        expect(result).toBe(defaultDelay);
    });

    it('should return default delay when i is undefined', () => {
        const result = calculateDelay(undefined);
        expect(result).toBe(defaultDelay);
    });

    it('should return default delay when i is null', () => {
        const result = calculateDelay(null);
        expect(result).toBe(defaultDelay);
    });
});