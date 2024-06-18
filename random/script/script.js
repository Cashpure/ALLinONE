let c1 = document.getElementById('circle-1')
let c2 = document.getElementById('circle-2')
let c3 = document.getElementById('circle-3')
let c4 = document.getElementById('circle-4')
let c5 = document.getElementById('circle-5')
let c6 = document.getElementById('circle-6')
let c7 = document.getElementById('circle-7')
let c8 = document.getElementById('circle-8')
let c9 = document.getElementById('circle-9')
let c10 = document.getElementById('circle-10')
let c11 = document.getElementById('circle-11')
let c12 = document.getElementById('circle-12')
let c13 = document.getElementById('circle-13')
let c14 = document.getElementById('circle-14')
let c15 = document.getElementById('circle-15')
let c16 = document.getElementById('circle-16')
let c17 = document.getElementById('circle-17')
let c18 = document.getElementById('circle-18')
let c19 = document.getElementById('circle-19')
let c20 = document.getElementById('circle-20')
let c21 = document.getElementById('circle-21')
let c22 = document.getElementById('circle-22')
let c23 = document.getElementById('circle-23')
let allCircles = document.querySelectorAll('circle')
let body = document.getElementsByTagName('body')
let menu = document.getElementById('menu')
let crsr = document.getElementById('cursor')

const circles = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23]

let button = document.getElementsByClassName('btn')
let txt = document.getElementById('text')


let btn = document.getElementById('btn')

const abbreviateNumber = (value) => {
   const SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];
   const tier = Math.floor(Math.log10(Math.abs(value)) / 3);
   if (tier === 0) return value.toString();
   const suffix = SI_SYMBOL[tier];
   const scale = Math.pow(10, tier * 3);
   const scaled = value / scale;
   return scaled.toFixed(1) + suffix;
}

let k = 0;
function func() {
   return function count() {
      return k++
   }
}
let res = func()
btn.onclick = () => {
   res.value += 1
   txt.innerText = res.value
}

function plus() {

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
      if (($('#cursor').hasClass('cursor--switched')) == false) {
         $('#cursor').toggleClass('cursor--menu')
      }
      if ($('#cursor').hasClass('cursor--switched')) {
         $('#cursor').toggleClass('cursor--menu__switched')
      }
      $('.menu-list').toggleClass('menu-list--active')
      if ($('#up-3').hasClass('up-3__updated')) {
         $('#up-3').removeClass('up-3__updated')
         $('.menu-circle').removeClass('menu-circle__updated')
      }
   })

   $('#back').hover(function () {
      if (($('#cursor').hasClass('cursor--switched')) == false) {
         $('#cursor').toggleClass('cursor--back')
      }
      if ($('#cursor').hasClass('cursor--switched')) {
         $('#cursor').toggleClass('cursor--back__switched')
      }
   })
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
let value1 = document.getElementById('value-1')
let value2 = document.getElementById('value-2')
let value3 = document.getElementById('value-3')
let value = document.getElementsByClassName('value')
let menuCircle = document.getElementById('menu-circle')

// value1.innerText = abbreviateNumber(value1.innerText)
// value2.innerText = abbreviateNumber(value2.innerText)
// value3.innerText = abbreviateNumber(value3.innerText)

const pages = [
   {
      name: "mainPage",
      "button text": ["Upgrade", "", "Switch",],
      "button functions": [goUp, color, switchTheme],
   },
   {
      name: "secondPage",
      "button text": ["Cursor", "Circle", "Auto"],
      "button functions": [gradeCursor, gradeCirle, gradeAuto, goBack],
   }
]

// upBtn1.onclick = goUp
// upBtn2.onclick = goUp
// upBtn3.onclick = goUp


function update(page) {
   upBtn1.innerText = page["button text"][0];
   upBtn2.innerText = page["button text"][1];
   // upBtn3.innerText = page["button text"][2];
   upBtn1.onclick = page["button functions"][0];
   upBtn2.onclick = page["button functions"][1];
   upBtn3.onclick = page["button functions"][2];
   backBtn.onclick = page["button functions"][3];
}



function goUp() {
   update(pages[1])
   backBtn.style.display = 'block'
   value1.style.display = 'inline'
   value2.style.display = 'inline'
   value3.style.display = 'inline'
   menuCircle.classList.add('menu-circle__updated')
   upBtn3.classList.add('up-3__updated')
}

function goBack() {
   update(pages[0])
   backBtn.style.display = 'none'
   value1.style.display = 'none'
   value2.style.display = 'none'
   value3.style.display = 'none'
   menuCircle.classList.remove('menu-circle__updated')
   upBtn3.classList.remove('up-3__updated')
}

function color() {

}

function switchTheme() {
   btn.classList.toggle('btn--switched')
   circles.forEach((el) => {
      el.classList.toggle("circle--switched")
   })
   body[0].classList.toggle('body--switched')
   menu.classList.toggle('menu--switched')
   backBtn.classList.toggle('back--switched')
   crsr.classList.toggle('cursor--switched')
   crsr.classList.toggle('cursor--menu')
   crsr.classList.toggle('cursor--menu__switched')
   upBtn3.classList.toggle('up-3__switched')
   menuCircle.classList.toggle('menu-circle__switched')
}




function upd() {

   if (!menu.classList.contains('menu--active')) {
      update(pages[0])
      backBtn.style.display = 'none'
      value1.style.display = 'none'
      value2.style.display = 'none'
      value3.style.display = 'none'
   }
}
setInterval(upd, 0);


let c = 30
let m = 1
res.value = res()
function gradeCursor() {
   if (txt.innerText >= c) {
      txt.innerText -= c
      res.value -= c
      c *= 3
      m += 1
      value1.innerText *= 3
      btn.onclick = () => {
         res.value += m
         k += m
         txt.innerText = res.value
      }
   }
}


let b = 400
let aa = 1
function gradeCirle() {
   if (txt.innerText >= b) {
      txt.innerText -= b
      res.value -= b
      aa *= 2
      b *= aa
      m *= 2
      value2.innerText *= aa
   }
}

// let f = 7000
// let aa = 1
// function gradeAuto() {
//    if (txt.innerText >= f) {
//       txt.innerText-=f
//       res.value-=f
//       aa*=2
//       f*=aa
//       m*=2
//       value3.innerText*=aa
//    }
// }


let f = 7000
let ab = 8
function gradeAuto() {
   if (txt.innerText >= f) {
      txt.innerText -= f
      res.value -= f
      f *= 4
      value3.innerText *= 4
      setInterval(() => {
         res.value += ab
         txt.innerText = res.value
      }, 1000);
      ab += 4
   }
}