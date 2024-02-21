let c1 = document.getElementsByClassName('circle-1')
let c2 = document.getElementsByClassName('circle-2')
let c3 = document.getElementsByClassName('circle-3')
let c4 = document.getElementsByClassName('circle-4')
let c5 = document.getElementsByClassName('circle-5')
let c6 = document.getElementsByClassName('circle-6')
let c7 = document.getElementsByClassName('circle-7')
let c8 = document.getElementsByClassName('circle-8')
let c9 = document.getElementsByClassName('circle-9')
let c10 = document.getElementsByClassName('circle-10')
let c11 = document.getElementsByClassName('circle-11')
let c12 = document.getElementsByClassName('circle-12')
let c13 = document.getElementsByClassName('circle-13')
let c14 = document.getElementsByClassName('circle-14')
let c15 = document.getElementsByClassName('circle-15')
let c16 = document.getElementsByClassName('circle-16')
let c17 = document.getElementsByClassName('circle-17')
let c18 = document.getElementsByClassName('circle-18')
let c19 = document.getElementsByClassName('circle-19')
let c20 = document.getElementsByClassName('circle-20')
let c21 = document.getElementsByClassName('circle-21')
let c22 = document.getElementsByClassName('circle-22')
let c23 = document.getElementsByClassName('circle-23')

const circles = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23]

let button = document.getElementsByClassName('btn')
let txt = document.getElementById('text')

// txt.innerText = '11'

let btn = document.getElementById('btn')

function func() {
   let k = 1;
   return function count() {
      return k++
   }
}
let res = func()
btn.onclick = () => {
   txt.innerText = res()
}





$(function () {
   $('.btn').on('click', function (e) {
      e.preventDefault()
      let randomItem = circles[Math.floor(Math.random() * circles.length)]
      $(randomItem).fadeIn()
      $(randomItem).addClass('circle--active')
      setTimeout(() => {
         $(randomItem).removeClass('circle--active')
         $(randomItem).fadeOut('slow')
      }, 600)
   })

   $('.btn').hover(function () {
      $(this).toggleClass('btn--active')
      $('#text').fadeToggle('fast')
   })

   $('.menu').hover(function () {
      $(this).toggleClass('menu--active')
      $('#cursor').toggleClass('cursor--menu')
      $('.menu-list').toggleClass('menu-list--active')
   })

   $('#back').hover(function () {
      $('#cursor').toggleClass('cursor--back')
   })

   // $('.menu-item').on('click', function (e) {
   //    e.preventDefault()
   // })
})









const lerp = (a, b, n) => (1 - n) * a + n * b;

class Cursor {
   constructor() {
      // config
      this.target = { x: 0.5, y: 0.5 }; // mouse position
      this.cursor = { x: 0.5, y: 0.5 }; // cursor position
      this.speed = 0.2;
      this.init();
   }
   bindAll() {
      ["onMouseMove", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
   }
   onMouseMove(e) {
      //get normalized mouse coordinates [0, 1]
      this.target.x = e.clientX / window.innerWidth;
      this.target.y = e.clientY / window.innerHeight;
      // trigger loop if no loop is active
      if (!this.raf) this.raf = requestAnimationFrame(this.render);
   }
   render() {
      //calculate lerped values
      this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
      this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
      document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
      document.documentElement.style.setProperty("--cursor-y", this.cursor.y);
      //cancel loop if mouse stops moving
      const delta = Math.sqrt(
         Math.pow(this.target.x - this.cursor.x, 2) +
         Math.pow(this.target.y - this.cursor.y, 2)
      );
      if (delta < 0.001) {
         cancelAnimationFrame(this.raf);
         this.raf = null;
         return;
      }
      //or continue looping if mouse is moving
      this.raf = requestAnimationFrame(this.render);
   }
   init() {
      this.bindAll();
      window.addEventListener("mousemove", this.onMouseMove);
      this.raf = requestAnimationFrame(this.render);
   }
}

new Cursor();








let upBtn1 = document.getElementById('up-1')
let upBtn2 = document.getElementById('up-2')
let upBtn3 = document.getElementById('up-3')
let backBtn = document.getElementById('back')

const pages = [
   {
      name: "mainPage",
      "button text": ["Upgrade", "Upgrade", "Upgrade",],
      "button functions": [goUp, ],
   },
   {
      name: "secondPage",
      "button text": ["Cursor", "Circle", "Auto"],
      "button functions": [, goBack],
   }
]

upBtn1.onclick = goUp
upBtn2.onclick = goUp
upBtn3.onclick = goUp
// backBtn.onclick = goBack

function update(page) {
   upBtn1.innerText = page["button text"][0];
   upBtn2.innerText = page["button text"][1];
   upBtn3.innerText = page["button text"][2];
   upBtn1.onclick = page["button functions"][0];
   upBtn2.onclick = page["button functions"][0];
   upBtn3.onclick = page["button functions"][0];
   backBtn.onclick = page["button functions"][1];
}



function goUp() {
   update(pages[1])
   backBtn.style.display = 'block'
}

function goBack() {
   update(pages[0])
   backBtn.style.display = 'none'
}

let menu = document.getElementById('menu')

// menu.addEventListener('mouseout', function () {
//    update(pages[0])
//    backBtn.style.display = 'none'
// })

setInterval(() => {
   
   if (!menu.classList.contains('menu--active')) {
      update(pages[0])
      backBtn.style.display = 'none'
      console.log(backBtn.value)
   }
}, 0);
   
   
   
   // do {
   //    update(pages[0])
   //    console.log(backBtn.value) 
   // } while (menu.classList.contains('menu--active'));
