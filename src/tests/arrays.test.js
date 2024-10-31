import { arraySubstract } from "../utils/misc.js"

describe('array subtracts', () => {
    test('subtracts one (x,y) matched item from array', () => {
        const arr1 = [{ x: 1, y: 1, color: 'red' }, { x: 2, y: 2, color: 'blue' }, { x: 3, y: 3, color: 'green' }]
        const arr2 = [{ x: 2, y: 2, color: 'blue' }]
        const result = arraySubstract(arr1, arr2)
        expect(result).toEqual([{ x: 1, y: 1, color: 'red' }, { x: 3, y: 3, color: 'green' }])
    })

    test('return unchanged array if no (x,y) matches are found', () => {
        const arr1 = [{ x: 1, y: 1, color: 'red' }, { x: 2, y: 2, color: 'blue' }, { x: 3, y: 3, color: 'green' }]
        const arr2 = [{ x: 2, y: 5, color: 'red' }]
        const result = arraySubstract(arr1, arr2)
        expect(result).toEqual(arr1)
    })

    test('return empty array if all items match by coords', () => {
        const arr1 = [{ x: 1, y: 1, color: 'red' }]
        const arr2 = [{ x: 1, y: 1, color: 'red' }]
        const result = arraySubstract(arr1, arr2)
        expect(result).toEqual([])
    })

    test('handles first empty array correctly', () => {
        const arr1 = []
        const arr2 = [{ x: 1, y: 1, color: 'red' }]
        const result = arraySubstract(arr1, arr2)
        expect(result).toEqual([])
    })

    test('handles second empty array correctly', () => {
        const arr1 = [{ x: 1, y: 1, color: 'red' }]
        const arr2 = []        
        const result = arraySubstract(arr1, arr2)
        expect(result).toEqual(arr1)
    })
})

