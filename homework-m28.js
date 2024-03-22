// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

    // let div = document.querySelector("#text");
    // let btn = document.querySelector("#btn");
    
    // btn.onclick = () => div.style.display = 'none';
    // document.body.append(div, btn);


// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.


    // let button = document.querySelector("#button");
    
    // button.onclick = () => button.style.display = 'none';
    // document.body.appendChild(button);



//-----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// for (let li of fruits.querySelectorAll('li')) {
//     let span = document.createElement('span');
//     li.prepend(span);
//     span.append(span.nextSibling);
//   }

//   fruits.onclick = function(event) {

//     if (event.target.tagName != 'SPAN') {
//       return;
//     }

//     let childrenContainer = event.target.parentNode.querySelector('ul');
//     if (!childrenContainer) return; 

//     childrenContainer.hidden = !childrenContainer.hidden;
//   }