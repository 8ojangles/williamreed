const { sortListOptions, getSortLabel, getSortFunction } = require('./sorting');

describe('getSortLabel', () => {
    it('should return the correct label for a given value', () => {
        expect(getSortLabel('rankAsc')).toBe('Rank (ascending)');
        expect(getSortLabel('rankDesc')).toBe('Rank (descending)');
        expect(getSortLabel('nameAsc')).toBe('Name (ascending)');
        expect(getSortLabel('nameDesc')).toBe('Name (descending)');
    });

    it('should return undefined for an unknown value', () => {
        expect(getSortLabel('unknown')).toBeUndefined();
    });
});

describe('getSortFunction', () => {
    const items = [
        { name: 'Item A', rank: 2 },
        { name: 'Item B', rank: 1 },
        { name: 'Item C', rank: 3 }
    ];

    it('should return a function that sorts by rank ascending', () => {
        const sortFunction = getSortFunction('rankAsc');
        const sortedItems = items.slice().sort(sortFunction);
        expect(sortedItems).toEqual([
            { name: 'Item B', rank: 1 },
            { name: 'Item A', rank: 2 },
            { name: 'Item C', rank: 3 }
        ]);
    });

    it('should return a function that sorts by rank descending', () => {
        const sortFunction = getSortFunction('rankDesc');
        const sortedItems = items.slice().sort(sortFunction);
        expect(sortedItems).toEqual([
            { name: 'Item C', rank: 3 },
            { name: 'Item A', rank: 2 },
            { name: 'Item B', rank: 1 }
        ]);
    });

    it('should return a function that sorts by name ascending', () => {
        const sortFunction = getSortFunction('nameAsc');
        const sortedItems = items.slice().sort(sortFunction);
        expect(sortedItems).toEqual([
            { name: 'Item A', rank: 2 },
            { name: 'Item B', rank: 1 },
            { name: 'Item C', rank: 3 }
        ]);
    });

    it('should return a function that sorts by name descending', () => {
        const sortFunction = getSortFunction('nameDesc');
        const sortedItems = items.slice().sort(sortFunction);
        expect(sortedItems).toEqual([
            { name: 'Item C', rank: 3 },
            { name: 'Item B', rank: 1 },
            { name: 'Item A', rank: 2 }
        ]);
    });

    it('should return the default sorting function (sortRankAscending) when the arg is unknown', () => {
        const sortFunction = getSortFunction('unknown');
        const sortedItems = items.slice().sort(sortFunction);
        expect(sortedItems).toEqual([
            { name: 'Item B', rank: 1 },
            { name: 'Item A', rank: 2 },
            { name: 'Item C', rank: 3 }
        ]);
    });
});