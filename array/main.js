//Exercise 1.1

const month = ["January", "February", "Marj", "April", "Mei"]
month[2] = 'March'
month[4] = 'May'

//Exercise 1.2

let newMonth = ["June", "July", "August", "September"]
let totalMonths 
function newArray(month, newMonth) {
    totalMonths = month.concat(newMonth)
    
    return totalMonths
}
newArray(month, newMonth)

//Exercise 1.3

totalMonths.push("October", "Noember", "December")
console.log(totalMonths);

//exercise 2 ?¿??¿?¿?

function changeArray(num1, num2, num3) {
    if (num1 > num2) {
        return totalMonths.pop()
    }else if (num2 > num3 < 10){
        return totalMonths.shift()
    }else if (num2 > num3 > num1) {
        return totalMonths.push('October')
    }else{
        console.log('Bad Luck')
    }
}

changeArray(5, 24, 8)
console.log(totalMonths);

