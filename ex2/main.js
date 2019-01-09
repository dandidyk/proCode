const obj = {
    name: 'Bohdan',
    surname: 'Didyk',
    age: 24
}

for (let key in obj) {
    console.log( obj[key] )
}

const technology = ['html','css','js']

for (let i = 0; i < technology.length; i++ ) {
    console.log(technology[i]);
}

technology.forEach( el => console.log( el ))



for (let res = []; res.length < 20;) {
    
    let randNum =  Math.floor(Math.random()*( 100 - 1 + 1)) + 1

     if ( randNum <= 20 && randNum >= 5) {
        res.push(randNum)
        
     }

     if ( res.length === 20) console.log(res)
}

