const CompareNumber = require('../main/main.js');

const AnswerGenerator = require('../main/answer-generator.js');

describe('guess-number', ()=> {
    it('4A0B', ()=> {
        const compareNumber = new CompareNumber('1234', '1234');
        const result = compareNumber.getResult();

        expect(result).toEqual('4A0B');
    });

    it('0A0B', ()=> {
        const compareNumber = new CompareNumber('1234', '5678');
        const result = compareNumber.getResult();

        expect(result).toEqual('0A0B');
    });

    it('2A2B', ()=> {
        const compareNumber = new CompareNumber('1234', '1432');
        const result = compareNumber.getResult();

        expect(result).toEqual('2A2B');
    });


    it('0A4B', ()=> {
        const compareNumber = new CompareNumber('1234', '2143');
        const result = compareNumber.getResult();

        expect(result).toEqual('0A4B');
    });


    it('should generator answer', ()=> {

        const result = AnswerGenerator.buildAnswerGenerator();

        const resultArray = result.split('');

        for (let a of resultArray) {
            expect(result.indexOf(a)).toEqual(result.lastIndexOf(a));
        }
    })


});