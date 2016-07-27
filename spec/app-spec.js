
const  Game=require('../main/app.js');
const AnswerGenerator = require('../main/answer-generator.js');

describe('guess number',()=>{
    beforeEach(() => {
        spyOn(AnswerGenerator, 'buildAnswerGenerator').and.returnValue('1234');
        spyOn(console, 'log');
    });

    it('should congrats user when guess the right answer', () => {

        spyOn(Game, 'inputNumber').and.returnValue('1234');
        Game.guessNumber();
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        //expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        expect(console.log).toHaveBeenCalledWith(`Congratulations!`);

    });


    it('should game over when run out of chance', () => {

        spyOn(Game, 'inputNumber').and.returnValue('1235');
        Game.guessNumber();
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        for (let i = 6; i >0; i--) {
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
            expect(console.log).toHaveBeenCalledWith('3A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over');
        expect(console.log).toHaveBeenCalledWith(`正确答案是:1234`);
    });
    it('should prompt invalid input', () => {

        spyOn(Game, 'inputNumber').and.returnValue('1123');
        Game.guessNumber();
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
       // expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
    });

});

