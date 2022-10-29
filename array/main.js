//Exercise 1.1

const month = ["January", "February", "Marj", "April", "Mei"]
month[2] = 'March'
month[4] = 'May'

//Exercise 1.2

let newMonth = ["June", "July", "August", "September"]
let totalMonths 
function newArray(month, newMonth) {
    totalMonths = month.concat(newMonth)
    // totalMonths =[...month, ...newMonth] igual a la forma anterior
    return totalMonths
}
newArray(month, newMonth)

//Exercise 1.3

totalMonths.push("October", "November", "December")
console.log(totalMonths);

//exercise 2 ?¿??¿?¿?

function changeArray(num1, num2, num3) {
    if (num1 > num2) {
        totalMonths.pop()
    }
    if (num2 > num3 && num2 < 10){
        totalMonths.shift()
    }
    if (num2 > num3 || num2 > num1) {
        totalMonths.push('October')
    }else{
        console.log('Bad Luck')
    }
}

changeArray(7, 24, 7)
console.log(totalMonths);

//exercise 3.1

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let positionWednesday = days.indexOf('Wednesday')
let lengthWednesday = days.length[2]
function position(posi) {
    if (lengthWednesday > positionWednesday) {
        return console.log(days.reverse(days))
    }
}
position(2)

