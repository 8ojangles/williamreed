const sortListOptions = [
    { value: 'rankAsc', label: 'Rank (ascending)' },
    { value: 'rankDesc', label: 'Rank (descending)' },
    { value: 'nameAsc', label: 'Name (ascending)' },
    { value: 'nameDesc', label: 'Name (descending)' }
];

function getSortLabel(value) {
    console.log(value);
    const result = sortListOptions.find((option) => option.value === value);
    return result && result.label;
}

function sortRankAscending(a, b) {
    return a.rank - b.rank;
}

function sortRankDescending(a, b) {
    return b.rank - a.rank;
}

function sortNameAscending(a, b) {
    return a.name.localeCompare(b.name);
}

function sortNameDescending(a, b) {
    return b.name.localeCompare(a.name);
}

function getSortFunction(selectedSortOption) {
    switch (selectedSortOption) {
        case 'rankAsc':
            return sortRankAscending;
        case 'rankDesc':
            return sortRankDescending;
        case 'nameAsc':
            return sortNameAscending;
        case 'nameDesc':
            return sortNameDescending;
        default:
            return sortRankAscending;
    }
};

export { sortListOptions, sortRankAscending, sortRankDescending, sortNameAscending, sortNameDescending, getSortLabel, getSortFunction };