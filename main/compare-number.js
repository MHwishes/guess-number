class CompareNumber {
    
   static getResult(result,input) {

        const getA=(resultArray, inputArray)=>{

            return  resultArray.map(result=> {
                return result === inputArray[resultArray.indexOf(result)] ? 1 : 0;
            }).reduce((a,b)=>a+b);
        };

        const  getB = (resultArray, inputArray)=> {

            return  resultArray.map(result=> {
                return result != inputArray[resultArray.indexOf(result)] &&
                inputArray.some(input=>input === result) ? 1 : 0;
            }).reduce((a,b)=>a+b);
        };

        const resultArray = result.split('');
        const inputArray = input.split('');

        const countA = getA(resultArray, inputArray);

        const countB = getB(resultArray, inputArray);

        return `${countA}A${countB}B`;

    }

}


module.exports = CompareNumber;