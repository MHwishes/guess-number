const CompareNumber = require('../main/compare-number.js');

describe('guess-number', ()=> {
    
    it('return XAXB',()=>{
        [{
            input:'1234',
            answer:'1234',
            result:'4A0B'
        },{
            input:'5678',
            answer:'1234',
            result:'0A0B'

        },{
            input:'1432',
            answer:'1234',
            result:'2A2B'
        },{
            input:'2143',
            answer:'1234',
            result:'0A4B'
        }].forEach(example=>{
            const result=CompareNumber.getResult(example.answer,example.input );
            expect(result).toEqual(example.result);
        })
    })

});