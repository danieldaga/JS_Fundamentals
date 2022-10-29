//Exercise 1

const citizen1 = {
    name: 'Daniel',
    lastname: 'García',
    age: 29,
}

//exercise 2

citizen1.city = 'Madrid'
citizen1.age = 28

console.log(citizen1);

//exercise 3
let citizen = citizen1
function checkCitizenship(citizen) {
    if (citizen1.age >= 18) {
        citizen1.canVote = true
    }else{
        citizen1.canVote = false
    }
}

checkCitizenship()
console.log(citizen1);

//exercise 4

