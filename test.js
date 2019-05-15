const assert = require('assert')
const {add} = require('./calculator')

describe('String Calculator tests', function(){
    it('sum 2+2', function(){
        const expected = 4
        const result = add('2,2')
        assert.equal(expected, result)
    })
})