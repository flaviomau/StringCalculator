function add(numbers) {
    let separator = ','

    if (!numbers || numbers.length == 0)
        return 0

    const values = numbers.split(separator)
    const result = values.reduce((acc, value) => {
        return parseInt(acc) + parseInt(value)
    })

    return parseInt(result)
}

module.exports = {
    add
}