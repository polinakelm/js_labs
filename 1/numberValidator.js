function validateNumber() {
    const inputNumber = document.getElementById("inputNumber").value;
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    const num = parseInt(inputNumber);
        if (isNaN(num)) {
            error.innerHTML = "Ошибка! Введеная информация не является числом.";
            result.innerHTML = "";
        } else {
            error.innerHTML = "";
            const numLength = inputNumber.length;
            const numFirst = inputNumber.charAt(0);
            result.innerHTML = `Количество разрядов: ${numLength}<br />Первая цифра: ${numFirst}`;
			console.log(`Количество разрядов: ${numLength}`);
			console.log(`Первая цифра: ${numFirst}`);
        }
}