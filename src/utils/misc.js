export function arraySubstract(arr1, arr2) {
    const newArr = []

    for (let item of arr1) {
        let isMatch = false
        for (let el of arr2) {
            if (el.x === item.x && el.y === item.y) {
                isMatch = true
                break
            }
        }
        if (!isMatch) {
            newArr.push({ ...item })
        }
    }

    return newArr
}
