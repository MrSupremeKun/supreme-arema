// const display = document.querySelector('.burger__subtitle');
// const AllBtns = document.querySelector('#allBtns');
// const minus = document.querySelector('.decrement');
const clothes = {
    first:{
     name:'snicers hoodie',
     price:39.99,
     Image:'./styles/pinterests/pre 1.jpg',
     amount:0,
     get totalSumm(){
        return this.price * this.amount
     }
    },
    second:{
     name:'gurrow wannabe',
     price:39.99,
     Image:'./styles/pinterests/pre 2.jpg',
     amount:0,
     get totalSumm(){
        return this.price * this.amount
     }
    },
    third:{
     name:'talkbox',
     price:29.99,
     Image:'./styles/pinterests/pre 3.jpg',
     amount:0,
     get totalSumm(){
        return this.price * this.amount
     }
    },
    fourth:{
     name:'oversize',
     price:35.99,
     Image:'./styles/pinterests/pre 4.jpg',
     amount:0,
     get totalSumm(){
        return this.price * this.amount
     }
    },
    fifth:{
     name:'safinovey',
     price:29.99,
     Image:'./styles/pinterests/pre 5.jpg',
     amount:0,
     get totalSumm(){
        return this.price * this.amount
     }
    },
    sixth:{
     name:'blackbag',
     price:19.99,
     Image:'./styles/pinterests/pre 6.jpg',
     amount:0,
     get totalSumm(){
        return this.price * this.amount
     }
    },
    seventh:{
     name:'oversized grey',
     price:34.99,
     Image:'./styles/pinterests/pre 7.jpg',
     amount:0,
     get totalSumm(){
        return this.price * this.amount
     }
    },
    eighth:{
     name:'mikey hoodie',
     price:38.99,
     Image:'./styles/pinterests/pre 8.jpg',
     amount:0,
     get totalSumm(){
        return this.price * this.amount
     }
    },

} 
const clothesBtn = document.querySelectorAll('.productss__img');
clothesBtn.forEach((btn)=>{
   btn.addEventListener('click',function () {
    addProduct(btn)
   })
})


function addProduct(btn) {
   let parent = btn.closest('.card__new'),
       parentId = parent.getAttribute('id')
        clothes[parentId].amount++
        console.log(clothes[parentId]);
}

























// AllBtns.addEventListener('click', counter);

// let value = 0
// function counter(e) {
//     const btn = e.target.id;
//     if (btn === 'increment') {
//         value += 1;
//     }else if (btn === 'decrement'){
//         value -= 1;
// }else {
//     value = 0
// }
// display.textContent = value
// }
