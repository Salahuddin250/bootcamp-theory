// const elements = document.querySelectorAll('.container')

// const byId = document.getElementById('text')

// const byClassName = document.getElementsByClassName('container')

// console.log(byClassName);

// const constainer = document.querySelector('.container')

// const newElement = document.createElement('div')
// newElement.className = 'test'
// newElement.textContent = 'Hello, World!'

// constainer.appendChild(newElement)

// const newLink = document.createElement('a')
// newLink.className = 'link'
// newLink.textContent = 'youtube'

// constainer.appendChild(newLink)

// document.body.innerHTML = '<div></div>'

// console.log(newElement);

// const container = document.querySelector('.container')
// const newItem = document.querySelector('.newItem')

// const newLink = document.createElement('a')
// newLink.className = 'link'
// newLink.textContent = 'youtube'

// container.insertBefore(newLink, newItem)

// События click, dblclick

// const newItem = document.querySelector(".newItem");

// newItem.addEventListener('click', () => {
//     console.log(1);
// })

// newItem.addEventListener('click', function() {
//     console.log(1);
// })

// const onSubmit = () => {
//     console.log(1);
// }

// newItem.addEventListener('click', onSubmit)

// newItem.addEventListener("click", function () {
//   newItem.textContent = "Hello, World!";
//   newItem.style.backgroundColor = "#000";
//   newItem.style.color = "#fff";

//   const container = document.querySelector(".container");

//   const newElement = document.createElement("div");
//   newElement.className = "test";
//   newElement.textContent = "NEwElement";

//   container.appendChild(newElement);
// });

// mouseover - наведение ,
// mouseout - отведение, 
// mousemove - фокус на элемента

// newItem.addEventListener('mouseover', (e) => {
//     console.log(e);
// })


// const a = document.querySelectorAll('.newItem')
// const a = document.getElementById('newId')


// // a.onclick = () => {}

// a.addEventListener('click', (e) => {

// })

// console.log(a);

// const show = document.querySelector('.show')
// const text = document.querySelector('.text')

// console.log(show, text);

// show.addEventListener('click', () => {
//     // text.style.display = 'block'
//     // text.classList.remove('textShow')
// })


// ---------------------- Счетчик ----------------------

// const inc = document.querySelector('.inc')
// const dec = document.querySelector('.dec')
// const reset = document.querySelector('.reset')
// const result = document.querySelector('.count')

// let counter = 0

// inc.addEventListener('click', () => {
//     counter++
//     result.textContent = counter
// })

// dec.addEventListener('click', () => {
//     if(counter === 0) return
//     counter--
//     result.textContent = counter
// })

// reset.addEventListener('click', () => {
//     counter = 0
//     result.textContent = counter
// })


// setInterval(() => {
//     console.log(1);
// }, 5000)

// setTimeout(() => {
//     console.log(1);
// }, 5000)


// const field = document.querySelector('.field')
// const add = document.querySelector('.add')
// const list = document.querySelector('.list')

// add.addEventListener('click', () => {
//     list.innerHTML += `<div>
//         ${field.value}
//         <button class="delete">Delete</button>
//         <button class="edit">Edit</button>
//      </div>`
//     field.value = ''
// })  