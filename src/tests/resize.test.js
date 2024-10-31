import { startFontSize } from '../utils/resize.js'

describe('check font resizing', () => {
    test('font size when screen width is greater than 700px', () => {
        expect(startFontSize(800)).toBe(70)
    })

    test('font size when screen width is less than 700px', () => {
        expect(startFontSize(300)).toBe(30)
    })

    test('font size when screen width is equal 700px', () => {
        expect(startFontSize(700)).toBe(70)
    })
})