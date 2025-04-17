# 🃏 Insertion Sort in JavaScript

This repository contains an implementation of the **Insertion Sort** algorithm using JavaScript.

Insertion sort is a simple sorting technique that mimics how we sort playing cards in our hands. It builds the sorted array one item at a time by comparing and inserting each element into its correct position.

---

## 📌 How It Works

- Start from the second element (index `1`).
- Compare it to the previous elements.
- Shift the larger elements to the right.
- Insert the current element into the correct sorted position.

---

## 💻 Code Example

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Example usage
let numbers = [5, 2, 9, 1, 5, 6];
console.log("Sorted array:", insertionSort(numbers));
🧪 Example Output
bash
Copy
Edit
Sorted array: [1, 2, 5, 5, 6, 9]
🚀 Getting Started
Clone the repository:

bash
Copy
Edit
git clone https://github.com/karim-chebbi/MSI-check-insertion-sort
cd insertion-sort-js
Run it using Node.js or in the browser console.

📚 Learn More
Wikipedia: Insertion Sort

GeeksForGeeks - Insertion Sort

🧑‍💻 Author
Karim Chebbi

GitHub: https://github.com/karim-chebbi
