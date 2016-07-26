
const Guess = require('../main/guess.js');
const AnswerGenerator=require('../main/answer-generator.js');

describe('guess',()=>{
    it('should get correct result',()=>{
        spyOn(AnswerGenerator,'buildAnswerGenerator').and.returnValue('1234');

       const result=Guess.buildGuessNum('1234');
       
        expect(result).toEqual('4A0B');

    })
});