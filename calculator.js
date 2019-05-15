function add(numbers) {
    let separator = ','

    if (!numbers || numbers.length == 0 || numbers.replace('\n', '').length == 0)
        return 0

    const filteredNumbers = numbers.replace('\n', '')

    const values = filteredNumbers.split(separator)
    const result = values.reduce((acc, value) => {
        return parseInt(acc) + parseInt(value)
    })

    return parseInt(result)
}

module.exports = {
    add
}