const  CompareNumber=require('../main/main.js');
describe('guess-number',()=>{
    it('4A0B',()=>{
        const  compareNumber=new CompareNumber('1234','1234');
        const result=compareNumber.getResult();
        
        expect(result).toEqual('4A0B');
    });

    it('1A0B',()=>{
        const  compareNumber=new CompareNumber('1234','1567');
        const result=compareNumber.getResult();

        expect(result).toEqual('1A0B');
    });

    it('2A2B',()=>{
        const  compareNumber=new CompareNumber('1234','1432');
        const result=compareNumber.getResult();

        expect(result).toEqual('2A2B');
    });

    it('3A0B',()=>{
        const  compareNumber=new CompareNumber('1234','1237');
        const result=compareNumber.getResult();

        expect(result).toEqual('3A0B');
    });
    
    it('0A4B',()=>{
        const  compareNumber=new CompareNumber('1234','2143');
        const result=compareNumber.getResult();

        expect(result).toEqual('0A4B');
    });
    
});