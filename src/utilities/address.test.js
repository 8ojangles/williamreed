const { simpleAddressFormatter } = require('./address');

describe('simpleAddressFormatter', () => {
    it('should format address with spaces correctly', () => {
        const address = "Skelton Penrith Cumbria CA11 9SE";
        const result = simpleAddressFormatter(address);
        expect(result).toBe("Penrith, Cumbria");
    });

    it('should format address with commas correctly', () => {
        const address = "King St, Fordwich, Canterbury CT2 0DB";
        const result = simpleAddressFormatter(address);
        expect(result).toBe("Fordwich, Canterbury");
    });

    it('should format complex address correctly', () => {
        const address = "North York Moors National Park Oldstead Yorkshire YO61 4BL";
        const result = simpleAddressFormatter(address);
        expect(result).toBe("Oldstead, Yorkshire");
    });

    it('should handle addresses with extra commas correctly', () => {
        const address = "Some Place, Some City, Some County, Some Postcode";
        const result = simpleAddressFormatter(address);
        expect(result).toBe("Some County, Some Postcode");
    });

    it('should handle addresses with missing parts correctly', () => {
        const address = "Some Place, Some Postcode";
        const result = simpleAddressFormatter(address);
        expect(result).toBe("Some Place, Some Postcode");
    });

    it('should handle empty address string correctly', () => {
        const address = "";
        const result = simpleAddressFormatter(address);
        expect(result).toBe("");
    });
});