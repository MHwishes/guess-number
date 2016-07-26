'use strict';
class AnswerGenerator {

    static buildAnswerGenerator() {
        const answerArray = [];

        while (answerArray.length < 4) {
            const answer = Math.floor(Math.random()*10);
            const a= answerArray.find(a=>a === answer);

            if (!a) {
                answerArray.push(answer);
            }
        }

        return answerArray.join('');
    }
}

module.exports=AnswerGenerator;