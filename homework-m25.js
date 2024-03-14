// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind


// const userInfo ={
//     name : "Marina",
//     course : "java script",
//     gpa : 4,
//     skipp : 12,
//     info: function(){
//            console.group (`${name} info:`);
//            console.log (`Name is: ${this.name}`);
//            console.log (`Course is: ${this.course}`);
//            console.log (`Gpa is: ${this.gpa}`);
//            console.log (`Skipp is: ${this.skipp}`);
//            console.groupEnd ();
//     }
// }
// console.log (userInfo)

// const anna = {
//     name : "Anna",
//     course : "phyton",
//     gpa : 3,
//     skipp : 43
// };
// userInfo.info.bind(anna)();

// const alex = {
//     name : "Alex",
//     course : "java",
//     gpa : 5,
//     skipp : 3
// };
// userInfo.info.call(alex);

// const ivan = {
//     name : "Ivan",
//     course : "SQL",
//     gpa : 4,
//     skipp : 18
// };
// userInfo.info.apply(ivan);




// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке
 
// const descript = {
//     showItems() {
//         document.write(this.items);
//     },
// };

// const html = {
//     items: ["стандартизована мова розмітки документів для перегляду вебсторінок у браузері."]
// };
// const css = {
//     items: ["це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду."]
// };

// document.querySelector('#html').addEventListener('click', descript.showItems.bind(html));
// document.querySelector('#css').addEventListener('click', descript.showItems.bind(css));








// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4


// const shop ={
//         name : "banana",
//         price : 30,
//         weight : 4.5,
//         info: function(){
//             console.log (`your ${this.name} cost ${this.price*this.weight} dollars`);  
//         }
//     }
//     console.log (shop.info());

// cherry = {
//         name : "cherry",
//         price : 58,
//         weight : 1.3,
// };
// orange = {
//     name : "orange",
//     price : 89,
//     weight : 3.4,
// };
// shop.info.bind(cherry)();
// shop.info.bind(orange)();

    