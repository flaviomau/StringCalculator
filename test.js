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
})