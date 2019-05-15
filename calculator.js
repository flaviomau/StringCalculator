function add(_numbers) {
    let separator = ','
    let separators = []
    let numbers = _numbers
    let negativeNumbers = ''

    if (!numbers || numbers.length == 0 || numbers.replace('\n', '').length == 0)
        return 0

    if (numbers.startsWith('//')) {
        const index = numbers.indexOf('\n')

        if (index < 0)
            throw new Error('Out of pattern')

        separator = numbers.substring(2, index)
        separators = separator.split(',')

        numbers = numbers.substring(index)
    }

    let filteredNumbers = numbers.replace('\n', '')
    
    if(separators.length == 0)
        separators.push(separator)

    separator = ','

    

    separators.map( sep => {
        const toScape = [ '.','[','{','(',')','\\','^','$','|','?','*','+']
        const toReplace = [ '\\.','\\[','\\{','\\(','\\)','\\','\\^','\\\$','\\|','\\?','\\*','\\+']
        const index = toScape.indexOf(sep)        
        
        if( index > -1)
            sep = toReplace[index]

        filteredNumbers = filteredNumbers.replace(new RegExp(sep, 'gi'), separator)
    })

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