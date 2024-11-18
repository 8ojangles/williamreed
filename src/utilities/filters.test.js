const { filterByParamRange, filterByParamValue } = require('./filters');

describe('filterByParamRange', () => {
    it('should filter objects by parameter range', () => {
        const items = [
            { name: 'Item 1', value: 10 },
            { name: 'Item 2', value: 20 },
            { name: 'Item 3', value: 30 },
            { name: 'Item 4', value: 40 }
        ];

        const result = filterByParamRange(items, 'value', 15, 35);
        expect(result).toEqual([
            { name: 'Item 2', value: 20 },
            { name: 'Item 3', value: 30 }
        ]);
    });

    it('should return an empty array if no objects match the range', () => {
        const items = [
            { name: 'Item 1', value: 10 },
            { name: 'Item 2', value: 20 }
        ];

        const result = filterByParamRange(items, 'value', 25, 35);
        expect(result).toEqual([]);
    });

    it('should return an empty array if parameter does not exist', () => {
        const items = [
            { name: 'Item 1', value: 10 },
            { name: 'Item 2', value: 20 }
        ];

        const result = filterByParamRange(items, 'nonexistent', 10, 20);
        expect(result).toEqual([]);
    });
});

describe('filterByParamValue', () => {
    it('should filter objects by parameter value in array', () => {
        const items = [
            { name: 'Item 1', tags: ['tag1', 'tag2'] },
            { name: 'Item 2', tags: ['tag2', 'tag3'] },
            { name: 'Item 3', tags: ['tag3', 'tag4'] },
            { name: 'Item 4', tags: ['tag4', 'tag5'] }
        ];

        const result = filterByParamValue(items, 'tags', 'tag3');
        expect(result).toEqual([
            { name: 'Item 2', tags: ['tag2', 'tag3'] },
            { name: 'Item 3', tags: ['tag3', 'tag4'] }
        ]);
    });

    it('should return an empty array if no objects match the value', () => {
        const items = [
            { name: 'Item 1', tags: ['tag1', 'tag2'] },
            { name: 'Item 2', tags: ['tag2', 'tag3'] }
        ];

        const result = filterByParamValue(items, 'tags', 'tag4');
        expect(result).toEqual([]);
    });

    it('should return an empty array if parameter does not exist', () => {
        const items = [
            { name: 'Item 1', tags: ['tag1', 'tag2'] },
            { name: 'Item 2', tags: ['tag2', 'tag3'] }
        ];

        const result = filterByParamValue(items, 'nonexistent', 'tag1');
        expect(result).toEqual([]);
    });

    it('should return an empty array if parameter is not an array', () => {
        const items = [
            { name: 'Item 1', tags: 'tag1' },
            { name: 'Item 2', tags: 'tag2' }
        ];

        const result = filterByParamValue(items, 'tags', 'tag1');
        expect(result).toEqual([]);
    });
});