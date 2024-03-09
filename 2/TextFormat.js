function printEverySecondChar() {
    const inputString = document.getElementById("inputString").value;
    const length = inputString.length;
    let result = "";

    for (let i = length - 1; i >= 0; i -= 2) {
        result += inputString.charAt(i);
    }

    console.log(result);
    document.getElementById("result").innerHTML = result;
}