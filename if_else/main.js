//exercise 1

function evenOdd(num){
    if (num % 2 === 0) {
        return ('The number is even')
    }else{
        return ('The number is odd')
    }
}
evenOdd(11)

//exercise 2

function largestNum() {

    let num1 = prompt('ingrese un numero')
    let num2 = prompt('ingrese un numero')

    if (!Number.isInteger(num1 * 1) || !Number.isInteger(num2 * 1)) {
        alert("mete números tío")
        largestNum()
        return
    }
    if (num1 < num2) {
        console.log('Este numero es el mayor', num2)
    } else if (num1 > num2) {
        console.log('Este numero es el mayor', num1)
    } else {
        console.log('Son iguales')
    }
}

largestNum()

//exercise 3

function triangle(lado1, lado2, lado3) {
    if (lado1 === lado2 === lado3) {
        return 'The triangle is equilateral'
    }else if(lado1 === lado2 || lado1 === lado3 || lado3 === lado2){
        return 'The triangle is isosceles'
    }else{
        return 'The triangle is scalene'
    }
}
triangle()

//exercise 4

function isInRange(num, start, end) {
    if (num > start && num < end) {
        return console.log('is true')
    }else{
        return console.log('is false')
    }
}
isInRange(3,1,10)

//exercise 5

function evalOperation(num1, num2, operation) {
    if (operation === '+') {
        return num1 + num2
    }else if(operation === '-'){
        return num1 - num2
    }else if(operation === '*'){
        return num1 * num2
    }else if(operation === '/'){
        return num1 / num2
    }
}
evalOperation(1,2,'-')

//exercise 6

function isLeapYear(year) {
    if (year % 4 === 0) {
        return console.log('es bisiesto');
    }else{
        return console.log('No es bisiesto');
    }
}
isLeapYear(2024)

//exercise 7

function numDaysOfMonth(num) {
    let month = prompt('Escribe del 1 al 12 el mes que quieres saber los días que tiene')

    if (month >=12 || month < 1) {
    return alert('Introduce un mes valido')
    }
    if (month = 1 || 3 || 5 || 7 || 8 || 10 || 12) {
        return alert('Este mes tiene 31 días')
    } else{
        return alert('Este mes tiene 30 días')
    }
}
numDaysOfMonth()
