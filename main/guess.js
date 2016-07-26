const  AnswerGenerator=require('../main/answer-generator.js');
const CompareNumber=require('../main/compare-number.js');


class Guess{
    static buildGuessNum(input){
        
        const answer=AnswerGenerator.buildAnswerGenerator();
        
        return  CompareNumber.getResult(answer,input);
    }
}


module.exports=Guess;