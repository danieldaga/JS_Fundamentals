//Exercise 1

let citizen1 = {
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
let name = citizen1.name
let lastname = citizen1.lastname
let age = citizen1.age
function createCitizen(name, lastname, age){
    if (name &&lastname && age) {
        return citizen1 = {
            name: name,
            lastname: lastname,
            age: age,
        }
    }
}
createCitizen('dani', 'gr', 29)
console.log(citizen1);

//exercise 5

let citizen2 = createCitizen('jose', 'rodriguez', 89)
console.log(citizen2);

//exercise 6 y 7

let newCitizen = citizen1
function checkVoting (newCitizen) {
    if (newCitizen.hasOwnProperty('canVote')) {
        return true
    }else{
        return checkCitizenship(citizen2)
    }
}
checkVoting(citizen1)

//exercise 8

    function showValues(citizen1){
    Object.values(citizen1)
    return
}
showValues(citizen1)

//exercise 9

function deleteLastProp(citizen) {
    if (Object.keys(citizen).length > 4) {
        delete citizen.canVote()
    }else if(Object.keys(citizen).length <= 4){
        return false
    }
}
deleteLastProp(citizen1)

//exercise 10.1

let playerOne = {
    name: 'Tyler',
    HP: 100,
    damage: 15,
    
}
let playerTwo = {
    name: 'Chuck',
    HP: 80,
    damage: 10,
}

//exercise 10.2

// playerOne.attack = (enemy) => enemy.HP -= playerOne.damage

// playerTwo.attack = (enemy) => enemy.HP -= playerTwo.damage
// playerOne.attack(playerTwo)
// playerTwo.attack(playerOne)

//exercise 10.3

console.log(playerOne, playerTwo);

//exercise 10.4 ?

function fight(Tyler, Chuck) {
    for (let i = 0; i <= playerTwo.HP; i++) {
        playerOne.attack = (enemy) => {
            enemy.HP -= playerOne.damage
            if (enemy.HP <= 0) {
                enemy.HP = 0
            }
        }
        playerOne.attack(playerTwo)
        let numberOfAttacks = (i.length)
        console.log(`${playerOne.name} ha derrotado a ${playerTwo.name} en ${numberOfAttacks} rondas`)
    }
}
fight(playerOne, playerTwo)
console.log(playerOne, playerTwo);