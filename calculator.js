function add(_numbers) {
    let separator = ','
    let numbers = _numbers
    let negativeNumbers = ''

    if (!numbers || numbers.length == 0 || numbers.replace('\n', '').length == 0)
        return 0

    if (numbers.startsWith('//')) {
        const index = numbers.indexOf('\n')

        if (index < 0) // out of pattern
            return 0
        separator = numbers.substring(2, index)
        numbers = numbers.substring(index)
    }

    const filteredNumbers = numbers.replace('\n', '')

    const values = filteredNumbers.split(separator)

    const result = values.reduce((acc, value) => {
        if (value < 0)
            negativeNumbers = negativeNumbers.concat(',',value)
        else if(value > 1000)
            return parseInt(acc)
        else
            return parseInt(acc) + parseInt(value)                
    })
    
    if(negativeNumbers.length > 0){
        throw new Error('Negatives not allowed' + negativeNumbers)
    }
    else
        return parseInt(result)
}

module.exports = {
    add
}