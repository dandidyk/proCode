

// class Swapi {
//     constructor () {
//         this._apiBase = 'https://swapi.co/api'
//     }
    

//     async getResource (url) {
//         const res = await fetch(`${this._apiBase}${url}`)

//         if ( !res.ok ) {
//             throw new Error(res.status)
//         }

//         console.log(res)

//         return await res.json()
//     }

//     async getAllpeople () {
//         const res = await this.getResource('/people')
//         return res.result
//     }
// }

// const swapi = new Swapi()

// swapi.getAllpeople().then(res => {
//     console.log(res)
// })

// не понял почему-то через класс возникает cors

fetch('https://swapi.co/api/people').then(res => res.json())
.then(jsonRes => {
    
    const peopleArr = jsonRes.results

    const ul = document.querySelector('ul')

    let listPeople = ''

    peopleArr.forEach( person => {
        const template = `
            <li>
                ${person.name}
                <ul>
                    <li>height: ${person.height}</li>
                    <li>mass: ${person.mass}</li>
                    <li>hair color: ${person.hair_color}</li>
                    <li>skin color: ${person.skin_color}</li>
                    <li>birth year: ${person.birth_year}</li>
                </ul>
            </li>
        `
        listPeople += template
    })

    ul.innerHTML = listPeople
})
.catch(error => console.log('some error happen', error))