arr = [8, 5, 1, 5, 7, 6]

function sortDesc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swapped = true
            }
        }
    }
    return arr
}
console.log("After sorting: ", sortDesc(arr))