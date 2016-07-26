'use strict';
var scanf = require('scanf');
//const Guess = require('../main/guess.js');
const AnswerGenerator = require('../main/answer-generator.js');
const CompareNumber = require('../main/compare-number.js');

class GuessNumber {

   static guessNumber() {
       const isUnique=(item,index,array)=>{
           return array.lastIndexOf(item)===index;
       };

        console.log(`Welcome!
`);

        let times ;
        const answer = AnswerGenerator.buildAnswerGenerator();

        for (times = 6; times > 0; times--) {

            console.log(`Please input your number(${times}):`);
            const input = scanf('%s');

            if(!input.split('').every(isUnique)){
                console.log('Cannot input duplicate numbers');
                return;
            }

            const result = CompareNumber.getResult(answer, input);

            if (input === answer) {
                console.log(`Congratulations`);
                break;
            } else {
                console.log(result);
            }
        }
        if (times === 0) {
            console.log(`Game Over`);
            console.log(`正确答案是:${answer}`);
        }

        return 0;
    }
}



GuessNumber.guessNumber();

module.exports = GuessNumber ;