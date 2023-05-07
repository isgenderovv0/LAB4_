let A = [1, 2, 3, 4, 5];

let min = A[0];
let max = A[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] < min) {
        min = A[i];
    }
    if (A[i] > max) {
        max = A[i];
    }
}

alert(`Ən kiçik ədəd: ${min} \nƏn böyük ədəd: ${max}`);