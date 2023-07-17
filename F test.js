// Task 1
// Напишите функцию стрелочную функцию t7, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t7(arg) {
//     let arr = arg.map(function (item) {
//         return item * 2;
//     })
//     return arr;
// }

// const t7 =

document.querySelector(".b-7").addEventListener("click", function () {
  document.querySelector(".out-7").textContent = t7([4, 5, 6]);
});

// Task 2
// Напишите функцию стрелочную функцию t8, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t8(arr) {
//     const arr2 = arr.filter(function (item) {
//         return item > 5;
//     });
//     return arr2;
// }

// const t8

document.querySelector(".b-8").addEventListener("click", function () {
  document.querySelector(".out-8").textContent = t8([3, 4, 5, 6, 7, 8]);
});

// Task 3
// Напишите функцию стрелочную функцию t9, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t9(arr) {
//     return arr.reduce(function (accum, item) {
//         return accum += item;
//     });
// }

// const t9 =

document.querySelector(".b-9").addEventListener("click", function () {
  document.querySelector(".out-9").textContent = t9([20, 30, 40]);
});
// Task 4
// Запустите функцию f10. Изучите, что она выводит в качестве this. Запустите t10. Изучите что выводит она в качестве this, напишите в комментариях.

function f10() {
  console.log(this);
}

const t10 = () => {
  console.log(this);
};

document.querySelector(".b-10").addEventListener("click", f10);
document.querySelector(".b-10").addEventListener("click", t10);

// Task 5
// Запустите функцию f11. Изучите как выглядит arguments. Запустите функцию t11. Изучите что будет выведено, напишите в комментариях.

function f11() {
  console.log(arguments);
}

const t11 = () => {
  try {
    console.log(arguments);
  } catch (err) {
    console.log("argument not defined");
  }
};

document.querySelector(".b-11").addEventListener("click", function () {
  f11(77, 88, 99);
  t11(55, 44, 66);
});

// Task 6
// напишите стрелочную функцию t12, которая возвращает большее из переданных ей двух чисел. Числа передаются в качестве аргумента.

// const t12 =

document.querySelector(".b-12").addEventListener("click", function () {
  document.querySelector(".out-12").textContent = t12(9, 22);
});

// Task 7
// Напишите стрелочную функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.

// const t13 =

document.querySelector(".b-13").addEventListener("click", function () {
  document.querySelector(".out-13").textContent = t13(100, 120);
});

// Task 8
// Напишите стрелочную функцию t14, которая получает строку как аргумент и возвращает строку очищенную от пробелов ( с начала и конца) или false если строка содержит только пробелы.

// const t14 =

document.querySelector(".b-14").addEventListener("click", function () {
  console.log(t14("           hi              "));
});

// Task 9
// Напишите стрелочную функцию, которая проверяет что пользователь ввел в input. Если число - возвращает true, если строку - false.

// const t15 =

document.querySelector(".b-15").addEventListener("click", function () {
  let num = document.querySelector(".i-15").value;
  document.querySelector(".out-15").textContent = t15(num);
});

// Task 10
// Напишите стрелочную функцию t16, которая проверяет что в массиве находится четное количество элементов. Возвращает true, false.

// const t16 =

document.querySelector(".b-16").addEventListener("click", function () {
  document.querySelector(".out-16").textContent = t16([4, 5, 6]);
});

// Task 11
// Напишите стрелочную функцию t17, которая проверяет что в массиве находятся только числа. Если да - то возвращает true, если нет, false.

// const t17 =

document.querySelector(".b-17").addEventListener("click", function () {
  document.querySelector(".out-17").textContent = t17([4, 5, 6]);
});

// Task 12
// Напишите стрелочную функцию t18, которая получает два аргумента - массив и число. Возвращает true если число есть в массиве и false если нет.

// const t18 =

document.querySelector(".b-18").addEventListener("click", function () {
  document.querySelector(".out-18").textContent = t18([4, 5, 6], 6);
});

// Task 13
// Напишите стрелочную функцию t19, которая принимает строку и аргумент true или false. Если второй аргумент false - то возвращает строку. Если true - возвращает перевернутую строку.

// const t19 =

document.querySelector(".b-19").addEventListener("click", function () {
  document.querySelector(".out-19").textContent = t19("hello", true);
});

// Task 14
// Напишите стрелочную функцию t20, которая принимает объект и число. Если число есть в объекте то возвращает первый встреченный ключ с таким числом. Если нет - false.

const j20 = {
  h: 4,
  j: 7,
  k: 22,
  m: 7,
};

// const t20 =

document.querySelector(".b-20").addEventListener("click", function () {
  document.querySelector(".out-20").textContent = t20(j20, 7);
});
