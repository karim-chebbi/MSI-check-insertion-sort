function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    // Move elements of arr[0..i-1], that are greater than key,
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Test the function
let numbers = [5, 2, 9, 1, 5, 6];
console.log("Sorted array:", insertionSort(numbers));
