let base_url =  "http://localhost:3001"
let data 

let less15 = document.querySelector('.less-15years')
let less25 = document.querySelector('.less-25years')
let others = document.querySelector('.less-others')

let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
let f = 0

let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')

let a_span = document.querySelector('.a')
let b_span = document.querySelector('.b')
let c_span = document.querySelector('.c')

let less15S = document.querySelector('.less-15S')
let less25S = document.querySelector('.less-25S')
let lessothS = document.querySelector('.less-othS')

let description = document.querySelector('.descr') 

let thisYear = new Date().getFullYear()

axios.get(base_url + '/cars')
.then(res => {
    if(res.status === 200 || res.status === 201) {
        data = res.data
        reload(data)
    }
})
.catch(err => console.log(err))

function reload(arr) {
    arr.forEach(element => {

        let rest = thisYear - element.year

        let box = document.createElement('div')
        let name = document.createElement('h4')
        let vin = document.createElement('span')
        let year = document.createElement('span')
        let btn = document.createElement('button')
        let link = document.createElement('a') 

        link.href = `Descr.html?id=${element.id_}`

        box.classList.add('box')
        name.classList.add('name')
        vin.classList.add('vin')
        year.classList.add('vin')
        btn.classList.add('btn')

        name.innerHTML = element.manufacturer + ' ' + element.model
        vin.innerHTML = 'VIN:' + ' ' + element.vin
        year.innerHTML = 'Year:' + ' ' + element.year
        btn.innerHTML = 'Подробнее'

        box.append(name)
        box.append(vin)
        box.append(year)
        box.append(link)
        link.append(btn)

        link.onclick = () => {
            description.append(name)
            description.append(vin)
            description.append(year)
        }

        if (rest <= 15) {
            less15.append(box)
            a++
            if (a > 8) {
                less15S.append(box)
                d++
                a_span.innerHTML = d
                less15S.classList.add('disactive')
                first.onclick = () => {
                        first.innerHTML = ''
                        less15S.classList.remove('disactive')
                    }
                }
            } else if ( rest <= 25) {
                less25.append(box)
                b++
                if (b > 8) {
                    less25S.append(box)
                    e++
                    b_span.innerHTML = e
                    less25S.classList.add('disactive')
                    second.onclick = () => {
                            second.innerHTML = ''
                            less25S.classList.remove('disactive')
                        }
                    }
            } else {
                others.append(box)
                c++
                if (c > 8) {
                    lessothS.append(box)
                    f++
                    c_span.innerHTML = f
                    lessothS.classList.add('disactive')
                    third.onclick = () => {
                            third.innerHTML = ''
                            lessothS.classList.remove('disactive')
                        }
                    }
            }
    
        });
    }
