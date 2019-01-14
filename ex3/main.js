
const userArr = [
    { name: 'Bohdan', surname: 'Didyk', birthday: new Date(1994, 01, 31)},
    { name: 'Vlad', surname: 'Nahornyi', birthday: new Date(1997, 03, 30)},
    { name: 'Name2', surname: 'Surname2', birthday: new Date(2018, 00, 12)},
    { name: 'Name3', surname: 'Surname3', birthday: new Date(2016, 7, 4)},
    { name: 'Name4', surname: 'Surname4', birthday: new Date(2015, 55, 12)},
    { name: 'Name5', surname: 'Surname5', birthday: new Date(1018, 6, 7)},
    { name: 'Name6', surname: 'Surname6', birthday: new Date(983, 13, 3)},
    { name: 'Name7', surname: 'Surname7', birthday: new Date(1968, 6, 1)},
    { name: 'Name8', surname: 'Surname8', birthday: new Date(1752, 04, 21)},
]

const Person = function ({name, surname, birthday})  {
    this.name = name
    this.surname = surname,
    this.birthday = birthday
    this.getAge = function () {
        const now = new Date()
        let currentYear = 0;
        if ( now.getMonth() < this.birthday.getMonth() ||
            now.getMonth() === this.birthday.getMonth() &&
            now.getDate() <= this.birthday.getDate()
        ) {
            currentYear = 1
        } 

        return  new Date().getFullYear() - this.birthday.getFullYear() - currentYear
    },
    this.getInfo = function () {
        let yearName = 'лет'
        const userAge = this.getAge();
        if ( Math.abs(userAge % 10) === 1 ) {
            yearName = 'год'
        } else if ( 2 <= Math.abs(userAge % 10)
                    && Math.abs(userAge % 10) <= 4 ) {
            yearName = 'года'
        }
       return `Юзеру по имени '${this.name}' ${userAge} ${yearName}`   
    }
}

const person1 = new Person(userArr[0])
const person2 = new Person(userArr[1])
const person3 = new Person(userArr[2])
const person4 = new Person(userArr[3])
const person5 = new Person(userArr[4])
const person6 = new Person(userArr[5])
const person7 = new Person(userArr[6])
const person8 = new Person(userArr[7])
const person9 = new Person(userArr[8])

console.log(person3.getAge())
console.log(person5.getInfo())