import React from 'react'

function TimeToRead({minutes}) {
    let coffeeTotal = [' · '];
    if (minutes < 30) {
        const coffeeCups = Math.ceil(minutes/5)
        const coffeeEmoji = '☕️'
        for (let i=0; i<coffeeCups; i++) {
            coffeeTotal.push(coffeeEmoji)
        }
      }
      else {
         const bentoBoxes = Math.ceil(minutes/10)
         const bentoEmoji = '🍱'
         for (let i=0; i<bentoBoxes; i++) {
            coffeeTotal.push(bentoEmoji)
        }
      }

  return (
    <small>{coffeeTotal.join('')} 
    {`  ${minutes} min read`}
    </small>
  )
}

export default TimeToRead