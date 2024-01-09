//1)
//დაწერეთ პატარა ბიოგრაფია თქვენს შესახებ და მაქსიმალურად ჩაშალეთ ცვლადებად და console-ში უნდა მივიღო სრული ტექსტი
//მაგალითად უნდა შეიცავდეს ინფორმაციას(firstName, lastName, age, job, skills,address) გამოიყენეთ template literal მიდგომა

//answer:
let firstname = ` Zezva `;
let lastname = `Zavradashvili  `;
let job = ` Junior front-end developer `;
let age = ` 15 `;
let skills = ` Markup Designing `;
let adress = ` Gldani VII m/r `;
let info = `Hello i'm` + firstname + lastname + `i'm` + age + `and i work as a` + job + `my skill is` + skills + `I live in` + adress;
console.log(info);


//2)
//დაწერეთ პროგრამა, რომელიც იყენებს ლოგიკურ ოპერატორებს (&&, ||, ! ===)
//იმის დასადგენად, არის თუ არა მოცემული წელი 2023 ან უკვე 2024; რამენაირად გამოთვალეთ და დაწერეთ ლოგიკა
// ყველა ინფივიდულაურად დაწერეს წესით!!

//answer:

let Year = `2024`;
let Year2 = `2023`;
console.log(!Year === Year2);

let or = Year > Year2 || Year2 > Year;
console.log(or);

let and = Year > Year2 && Year2 > Year;
console.log(and);
and = Year > Year2 && Year2 < Year;
console.log(and);

let reverse = Year2 > Year;
console.log(!reverse)



//3)ააწყვეთ პატარა counter ლოგიკა სადაც გამოიყენებთ მაგალითად let x = 10; x++, x-- რომლის მიხედვითაც increment ერთ
// console-ში მეორე console-ში კი decrement!!

//answer:

let x = 11;
x--
console.log(x)
let y = 99
y++
console.log(y)


// 4)

// let a = 10;
// let b = 12;

// let andOperator = a < 9 && b >= 11; //result --> : false
// let orOperator = a > 11 > 0 || b < 10; //result --> :false
// let notOperator = !(a > 10); //result --> :true
