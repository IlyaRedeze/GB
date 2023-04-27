const num1 = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));
const num2 = 9/5*num1+32;
alert(`Цельсий: ${num1}, Фаренгейт: ${num2.toFixed(1)}.`);