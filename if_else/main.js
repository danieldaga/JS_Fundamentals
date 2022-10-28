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

function moreLargest(num1, num2) {
    if (num1 > num2) {
        return ('The largest number is '[num1])
    }else if (num1 < num2){
        return ('The largest number is '[num2])
    }else{
        return ('The numbers are equal')
    }
}
moreLargest (2, 1)

//exercise 3

function triangle(lado1, lado2, lado3) {
    if (lado1 === lado2 === lado3) {
        return ('The triangle is equilateral')
    }else if(lado1 === lado2 < lado3){
        return ('The triangle is isosceles')
    }else{
        return ('The triangle is scalene')
    }
}
