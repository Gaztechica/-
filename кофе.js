let вода = `фильтрованная вoда`
let кофе = "порция эспрессо"
let кофе2 = "свежемолотое черный кофе"
let молоко = "топленное молоко"
let молоко2 = "горячее молоко"
let молоко3 = "вспененное молоко"
let сахар = "рафинированный сахар"
let cofe = 'кофе: способ приготовления'

let cofe1 = 'эспрессо'
let cofe2 = 'капучино'
let cofe3 = 'латте'

let step= `1.налить ${вода} в кофемашину`
let step1= `2.добавить ${кофе2} в кофемашину`
let step2= `3.налить в чашку готовый кофе`
let step3= `4.добавить ${молоко}`
let step4= `5.добавить ${сахар}`
let step5= `6.перемешать`
let step8= `2.добавить ${кофе} в кофемашину`
let step6= `4.добавить ${молоко2}`
let step7= `4.добавить ${молоко3}`

let smallCup = 'маленький'
let mediumCup = 'средний'
let bigCup = 'большой'
// Меняй названия кофе: эспрессо, капучино, латте
let cof = 'латте'
// / Меняй размер чашки кофе: маленький, средний, большой
let cup = 'маленький'

// чашка: эспресcо
let small = `маленькая чашка 100м/гр. цена ${100}руб`
let medium = `средняя чашка 150 м/гр. цена ${200}руб`
let big = `большая чашка 200 м/гр. цена ${300}руб.`

//  чашка: капучино
let smallCof2 = `маленькая чашка 100м/гр. цена ${150}руб`
let mediumCof2 = `средняя чашка 150 м/гр. цена ${250}руб`
let bigCof2 = `большая чашка 200 м/гр. цена ${350}руб.`
// let smallCof2 = 150
// let mediumCof2 = 250
// let bigCof2 = 350
// // чашка: латте
let smallCof3 = `маленькая чашка 100м/гр. цена ${180}руб`
let mediumCof3 = `средняя чашка 150 м/гр. цена ${270}руб`
let bigCof3 = `большая чашка 200 м/гр. цена ${390}руб.`
// let smallCof3 = 180
// let mediumCof3 = 270
// let bigCof3 = 390

if (cof == cofe1) {
    if (cup == smallCup) {
        console.log(small)
    }
    else if (cup == mediumCup) {
        console.log(medium)
            }
           else if (cup == bigCup) {
                console.log(big)
                    }

    console.log(cofe, cofe1,'\n',step,'\n', step1, '\n',step2, '\n',step3, '\n',step4, '\n',step5)
}
    else if (cof == cofe2) {
        if (cup == smallCup) {
            console.log(smallCof2)
        }
        else if (cup == mediumCup) {
            console.log(mediumCof2)
                }
               else if (cup == bigCup) {
                    console.log(bigCof2)
                        }
    console.log(cofe, cofe2,'\n',step,'\n', step8, '\n',step2, '\n',step6, '\n',step4, '\n',step5)
}
    else if (cof == cofe3) {
        if (cup == smallCup) {
            console.log(smallCof3)
        }
        else if (cup == mediumCup) {
            console.log(mediumCof3)
                }
               else if (cup == bigCup) {
                    console.log(bigCof3)
                        }

        console.log(cofe, cofe3,'\n',step,'\n', step8, '\n',step2, '\n',step7, '\n',step4, '\n',step5)
    }





