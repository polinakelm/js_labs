const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function calculateSumOfSquares() {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += Math.pow(arr[i][j], 2);
        }
    }

    console.log("Исходный массив:", arr);
    console.log("Сумма квадратов элементов массива:", sum);
    document.getElementById("result").innerHTML = `Сумма квадратов элементов массива: ${sum}`;
}