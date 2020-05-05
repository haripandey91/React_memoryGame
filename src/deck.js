import Banana from './img/banana.png'
import Cherry from './img/cherry.png'
import Avocado from './img/avocado.png'
import Apple from './img/apple.png'
import Mandarine from './img/mandarine.png'
import Mango from './img/mango.png'
import Tomato from './img/tomato.png'
import Watermelon from './img/watermelon.png'


function shuffle(array){
    const _array = array.slice(0)
    for( let i=0; i < array.length - 1; i++ ){
        let randomIndex = Math.floor(Math.random() * (i +1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }

    return _array
}

export default function initializeDeck() {
    let id = 0
    const cards = [Apple, Avocado, Banana, Cherry,
         Mandarine, Mango, Tomato, Watermelon].reduce((acc, type) => {
        acc.push({
            id: id++,
            type,
        })
        acc.push({
            id: id++,
            type,
        })
        return acc
    }, [])

    return shuffle(cards)
}