
if ( 5 || 'a' || true || [] || {} ) {
    console.log('Условие сработает')
}

if ( null || NaN || undefined || 0 || '' ) {
    console.log('Условие не сработает')
}

let openDoor = false
let alarmOn = false

const door = document.getElementById('door')
const alarm = document.getElementById('alarm')
const formText = document.querySelector('.form__text')


document.getElementsByTagName('form')[0]
    .addEventListener('click', e => {
        e.preventDefault()
        const button = e.target;

        const checkAlarm = () => {

            const openText = openDoor ? 'открыта' : 'закрыта'
            const alarmText = alarmOn ? 'включена' : 'выключена'

            // if ( openDoor && alarmOn ) {
            //     formText.textContent = 'Сигнализация включена, а дверь открыта'
            // }
            // if ( openDoor && !alarmOn ) {
            //     formText.textContent = 'Сигнализация выключена, а дверь открыта'
            // }
            // if ( !openDoor && !alarmOn ) {
            //     formText.textContent = 'Сигнализация выключена и дверь закрыта'
            // }
            // if ( !openDoor &&  alarmOn ) {
            //     formText.textContent = 'Сигнализация включена, а дверь закрыта'
            // }
            formText.textContent = `Сигнализация ${alarmText}, а дверь ${openText}`
        }

        if ( button.id === 'door' ) {
            openDoor = !openDoor
            button.classList.toggle('open')
        } else if ( button.id === 'alarm' ) {
            alarmOn = !alarmOn
            button.classList.toggle('on')
        } 
        checkAlarm()
    })
