

// document.querySelector('.wrapper').addEventListener('click', (ev) => {
//     const el = ev.target
//     const elClassL = el.classList
//     const left1 = document.querySelectorAll('.left').length
//     const left2 = document.querySelectorAll('.left2').length
//     const right1 = document.querySelectorAll('.right').length
//     const right2 = document.querySelectorAll('.right2').length

//     if ( !elClassL.contains('live-block') ) return

//     console.log('click', left1, right1)

//     const move = ( where , position, elClassL = el.classList  ) => {
//         if ( where === 'toRight' && position === 2) {
//             elClassL.add('right2')
//             elClassL.remove('left')
//             elClassL.remove('left2')
            
//         } else if ( where === 'toRight' && position === 1 ) {
//             elClassL.add('right')
//             elClassL.remove('right2')
//             elClassL.remove('left')
//             elClassL.remove('left2')
            
//         } else if ( where === 'toLeft' && position === 2 ) {
//             elClassL.add('left2')
//             elClassL.remove('right')
//             elClassL.remove('right2')
            
//         } else if ( where === 'toLeft' && position === 1 ) {
//             elClassL.add('left')
//             elClassL.remove('left2')
//             elClassL.remove('right')
//             elClassL.remove('right2')
            
//         }
   
//     }

//     if ( (elClassL.contains('left') || elClassL.contains('left2') )  && right1 ) {
//         move('toRight', 2)
//     } else if (elClassL.contains('left') || elClassL.contains('left2') ) {
//         move('toRight', 1) 
//         if (left2 && !elClassL.contains('left2')) {
//             move('toLeft', 1, document.querySelector('.left2').classList )
//         }
//     } else if ( ( elClassL.contains('right') || elClassL.contains('right2') ) && left1 )  {
//         move('toLeft', 2)
//     } else if (  elClassL.contains('right') || elClassL.contains('right2')  ) {
//         move('toLeft', 1)
//         if (right2 && !elClassL.contains('right2')) {
//             move('toRight', 1, document.querySelector('.right2').classList )
//         }
//     }
    

// })




document.querySelector('.wrapper').addEventListener('click', (ev) => {
    const el = ev.target
    const elClassL = el.classList
    const left1 = document.querySelectorAll('.left').length
    const left2 = document.querySelectorAll('.left2').length
    const right1 = document.querySelectorAll('.right').length
    const right2 = document.querySelectorAll('.right2').length

    if ( !elClassL.contains('live-block') ) return


    const move = ( where , position, elClassL = el.classList  ) => {
        if ( where === 'toRight' && position === 2) {
            elClassL.add('right2')
            elClassL.remove('left')
            elClassL.remove('left2')
            
        } else if ( where === 'toRight' && position === 1 ) {
            elClassL.add('right')
            elClassL.remove('right2')
            elClassL.remove('left')
            elClassL.remove('left2')
            
        } else if ( where === 'toLeft' && position === 2 ) {
            elClassL.add('left2')
            elClassL.remove('right')
            elClassL.remove('right2')
            
        } else if ( where === 'toLeft' && position === 1 ) {
            elClassL.add('left')
            elClassL.remove('left2')
            elClassL.remove('right')
            elClassL.remove('right2')
            
        }
   
    }

    if ( (elClassL.contains('left') || elClassL.contains('left2') )  && right1 ) {
        move('toRight', 2, document.querySelector(`.center>.${elClassL[1]}`).classList )
        move('toRight', 2)
    } else if (elClassL.contains('left') || elClassL.contains('left2') ) {
        if (left2 && elClassL.contains('left')) {
            move('toLeft', 1, document.querySelector('.center>.left2').classList )
            move('toLeft', 1, document.querySelector('.left2').classList )
        }
        
        move('toRight', 1, document.querySelector(`.center>.${elClassL[1]}`).classList )
        move('toRight', 1) 
        
    } else if ( ( elClassL.contains('right') || elClassL.contains('right2') ) && left1 )  {
        move('toLeft', 2, document.querySelector(`.center>.${elClassL[1]}`).classList )
        move('toLeft', 2)
    } else if (  elClassL.contains('right') || elClassL.contains('right2')  ) {
        if (right2 && elClassL.contains('right')) {
            console.log(!elClassL.contains('right2'))
            move('toRight', 1, document.querySelector(`.center>.right2`).classList )
            move('toRight', 1, document.querySelector('.right2').classList )
        }
       
        move('toLeft', 1, document.querySelector(`.center>.${elClassL[1]}`).classList )
        move('toLeft', 1)
        
        
        
    }

    
    

})