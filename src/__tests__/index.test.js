const countDown = require('../index.js');

describe('count',()=>{
    it('count down numbers', ()=>{
        const result = countDown(7)
        expect(result).toBe(7, 6, 5, 4 ,3, 2 ,1)
    })
    it('count down numbers', ()=>{
        const result = countDown(2)
        expect(result).toBe(2 ,1)
    })
})
