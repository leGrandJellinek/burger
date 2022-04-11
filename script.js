/* Основная продукция */
let product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 400,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
    freshBurger:{
        name: 'Гамбургер Fresh',
        price: 20500,
        kcall: 900,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
    freshCombo:{
        name: 'Fresh Combo',
        price: 31900,
        kcall: 1300,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    }
}

/* Доп продукция */

let extraProduct = {
    doubleMayonnaise:{
        name: 'Двойной майонез',
        price: 1000,
        kcall: 100
    },
    lettuce: {
        name: 'Салатный лист',
        price: 3000,
        kcall: 40
    },
    cheese:{
        name: 'Сыр',
        price: 5000,
        kcall: 130
    }
}

let btnPlusOrMinus = document.querySelectorAll('.main__product-btn')
    ,checkExtraProduct = document.querySelectorAll('.main__product-checkbox')
    ,addCart = document.querySelectorAll('.addCart')
    ,receipt = document.querySelector('.receipt')
    ,receiptWindow = document.querySelector('.receipt__window')
    ,receiptOut = document.querySelector('.receipt__window-out')
    ,receiptBtn = document.querySelector('.receipt__window-btn')
    ,headerlvl = document.querySelector('.header__timer-extra')
    ,i = 0
    ,repeat;
    
btnPlusOrMinus.forEach(item => {
    item.addEventListener('click', function () {
        plusOrMinus(this)
    })
})

function plusOrMinus(element) {
    // closest() - метод который подключаеться к ближайщему заданому родителю
    // getAttribute() - берет значение у указанного атрибута
    let parentId = element.closest('.main__product').getAttribute('id');
    let output = element.closest('.main__product').querySelector('.main__product-num');
    let sum = element.closest('.main__product').querySelector('.main__product-price span');
    let kcall = element.closest('.main__product').querySelector('.main__product-kcall span');
    
    if(element.dataset.symbol == '+') {
        product[parentId].amount++
    }else if(element.getAttribute('data-symbol') == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    
    output.innerHTML = product[parentId].amount;
    sum.innerHTML = product[parentId].SUMM;
    kcall.innerHTML = product[parentId].KCALL
}


function lvl() {
    if(i < 100){
        i++;
        headerlvl.innerHTML = i;
        setTimeout(() => lvl(), repeat);
        if(headerlvl.innerHTML < 49){
            repeat = 70;
            headerlvl.style.color = 'yellow';
        }else if(headerlvl.innerHTML > 48 && headerlvl.innerHTML < 73){
            repeat = 150;            
            headerlvl.style.color = 'blue';
        }else if(headerlvl.innerHTML > 73){
            repeat = 300;
            headerlvl.style.color = 'green';
        }
    }
}



lvl()