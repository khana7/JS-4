// task1  Вам дан массив: [4, 54, 49]. Сделайте из него массив,
//     состоящий из квадратов этих чисел.

// task2 Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.

// task3 Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.

// task4  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат','Саша'].
//     Оставьте в нем только те строки, длина которых больше 5-ти символов.

// task5  Вам дан массив [-13, 96, -41, -28, 40].
//     Посчитайте количество отрицательных чисел в этом массиве.

// task6  Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
//     Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.

// task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.

// task8 Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.


//1-task
// let arr = [4, 54, 49]
// let newArr = arr.map((el) => {
//     return el * el
// })
// console.log(newArr)

//2-task
// let arr = [3134, 4, -143, -245, -214]
// let newArr = arr.filter((el) => {
//     return el < 0 
// })
// console.log(newArr)

//3-task
// let arr = [3, 51, 30, 54, 60]
// let newArr = arr.filter((el) =>{
//     return el % 2 === 0
// })
// console.log(newArr)

//4-task
// let str = ["Бегимай", "Баяман", "Калмамат", "Саша"]
// let newStr = str.filter((el) =>{
//     return el.length < 5  
// })
// console.log(newStr)

//5-task
// let arr = [-13, 96, -41, -28, 40]
// let newArr = arr.filter((el) => {
//     return el < 0
// }).length

// console.log(newArr)

//6-task
// let arr = [3, 51, -30, -54, 60]
// let newArr = arr.filter((el) => {
//     return el > 0
// })
// let num = newArr.map((el) => {
//     if (el > 30){
//         return Math.sqrt (el)
//     }else{
//         return el
//     }  
// })
// console.log(num)

//7-task
// let arr = [55, 44, 55, 44, 15, 49]
// let newArr = arr.filter((el, idx) => {
//     return idx === arr.indexOf(el)
// })
// console.log(newArr)
  
// 8-task
// let arr = ["Бегимай", "Баяман", "Калмамат"]
// let newArr = arr.map((el) => {
//     return el.length
// })

// console.log(newArr)
 

