const assert = require('assert')
const {add} = require('./calculator')

describe('String Calculator tests', function(){
    it('sum 1,2,5', function(){
        const expected = 8
        const result = add('1,2,5')
        assert.deepEqual(expected, result)
    })

    it('sum empty array', function(){
        const expected = 0
        const result = add('')
        assert.deepEqual(expected, result)
    })

    it('sum null array', function(){
        const expected = 0
        const result = add(null)
        assert.deepEqual(expected, result)
    })

    it('sum array with line feed case 1', function(){
        const expected = 6
        const result = add('1\n,2,3')
        assert.deepEqual(expected, result)
    })

    it('sum array with line feed case 2', function(){
        const expected = 7
        const result = add('1,\n2,4')
        assert.deepEqual(expected, result)
    })

    it('sum array changing separator case 1', function(){
        const expected = 8
        const result = add('//;\n1;3;4')
        assert.deepEqual(expected, result)
    })

    it('sum array changing separator case 2', function(){
        const expected = 6
        const result = add('//$\n1$2$3')
        assert.deepEqual(expected, result)
    })

    it('sum array changing separator case 3', function(){
        const expected = 13
        const result = add('//@\n2@3@8')
        assert.deepEqual(expected, result)
    })

    it('sum array with negative value', function(){
        assert.throws(() => add('1,2,-3,-4'), Error)
    })
})