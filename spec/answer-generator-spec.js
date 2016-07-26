const AnswerGenerator = require('../main/answer-generator.js');

describe('AnswerGenerator', ()=> {

     it('should generator answer', ()=> {
         
         const isUnique = (item, index, array)=> {
             return array.lastIndexOf(item) === index;
         };


         const answer = AnswerGenerator.buildAnswerGenerator();
         expect(answer.length).toEqual(4);
         expect(answer.split('').every(isUnique)).toBeTruthy();
         expect(AnswerGenerator.buildAnswerGenerator()).not.toEqual(AnswerGenerator.buildAnswerGenerator());
     });

});