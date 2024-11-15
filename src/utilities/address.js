// Not simple in anyway - SORT YOUR DATA OUT
// Proper address formatters are incredibly complicated
// and beyond the scope of this.
// some examples of raw addresses from the data:
// "Skelton Penrith Cumbria CA11 9SE" - spaces
// "King St, Fordwich, Canterbury CT2 0DB" - commas
// "North York Moors National Park Oldstead Yorkshire YO61 4BL"
// - where do you even start with that one?
// I'm not afraid to admit this is an absolute bodge job
function simpleAddressFormatter(addressStr) {
    const splitAddr = addressStr.split(' ');
    const pcRemoved = splitAddr.slice(0, -2).join(' ').split(', ');
    const arrLen = pcRemoved.length;

    if (arrLen === 1 && !pcRemoved[0].includes(',')) {
        return pcRemoved[0].split(' ').slice(0, -2).join(', ');
    }

    return `${pcRemoved[arrLen - 2]}, ${pcRemoved[arrLen - 1].replace(',', '')}`.replace(',,', ',');
}


export { simpleAddressFormatter };