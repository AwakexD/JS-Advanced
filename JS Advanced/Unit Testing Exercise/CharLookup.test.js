const expect = require('chai').expect;
const LookupChar = require('./CharLookup');

describe('Char Lookup', () => { 
    it('Should return correct char with correct parameters', () => {
        let actual = LookupChar('str', 1);
        expect(actual).to.equal('t');
    })

    it("Should return 'Incorrect index' when index is incorrect", () => {
        let actual = LookupChar('string', 200);
        expect(actual).to.equal('Incorrect index');
    })

    describe('Invalid Parameters', () => { 
        it('Should return undefined when string or index are invalid data type', () => {
            expect(LookupChar(null, 2)).to.be.undefined;
            expect(LookupChar('str', [1])).to.be.undefined;
        })
    })

    //ToDo: More Tests
 })