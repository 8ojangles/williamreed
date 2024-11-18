// There is a limit to how much you can process an
// address string without a proper address parser.
// Some examples of raw addresses from the data:
// "Skelton Penrith Cumbria CA11 9SE" - spaces
// "King St, Fordwich, Canterbury CT2 0DB" - commas
// "North York Moors National Park Oldstead Yorkshire YO61 4BL"
// "Gurnards Head St. Ives Cornwall TR26 3DE"
// I have accommodated "St. Ives" with a simple check but
// given the addresses are formatted with either spaces or
// commas (or both!) it is difficult to handle
// all potential cases.
// At this point, I would recommend either serving the
// address formatted from the API ("<city>, <county>")
// or an address object with separate fields for each part
// to allow for processing in the front-end
// e.g. { houseNumber: "24", street: "King St", city: "Fordwich", county: "Canterbury", postcode: "CT2 0DB" }

const postcodeRegex = /[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i;
const trailingSpaceOrCommaRegex = /[,\s]*$/;

function simpleAddressFormatter(addressStr) {
    if (!addressStr) {
        return '';
    }

    const addressNoPostcode = addressStr.replace(postcodeRegex, '').trim();
    const trimmed = addressNoPostcode.replace(trailingSpaceOrCommaRegex, "");
    let splitAddr;
    if (trimmed.includes(',')) {
        splitAddr = trimmed.split(', ');
    } else {
        splitAddr = trimmed.split(' ');
    }
    const len = splitAddr.length;
    const stPrefixIndex = splitAddr.indexOf('St.');
    if (stPrefixIndex !== -1) {
        splitAddr[stPrefixIndex + 1] = `${splitAddr[stPrefixIndex]} ${splitAddr[stPrefixIndex + 1]}`;
    }
    
    
    return `${splitAddr[len - 2]}, ${splitAddr[len - 1]}`;
}


export { simpleAddressFormatter };