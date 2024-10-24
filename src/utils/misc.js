export function arraySubstract(arr1, arr2) {
    return arr1.filter(item1 => 
        !arr2.some(item2 => 
            JSON.stringify(item1) === JSON.stringify(item2)
        )
    );
}