// For1
// let  k = +prompt('Введите число');
//      n = +prompt('Склько раз вы хотите повтооить введеное число');  
// for (a = 1; a <= n; a++){
//     alert(k);
//     console.log(k)
// }


// For2
// let a = +prompt('Введите меньшее число:');
//     b = +prompt('Введите большее число:');
// alert(`Мы выведем на экран ${(b-a)+1} чисел`)
// for (a; a <= b; a++){
//     alert(a);
// }
// console.log(a)
// console.log(b)


// For3
// let a = +prompt('Введите меньшее число:');
//     b = +prompt('Введите большее число:');
// alert(`Мы выведем на экран ${(b-a)-1} чисел`)
// for (b -= 1; b > a; b--){
//     alert(b)
// }
// console.log(a)
// console.log(b)


// For4
// let a = +prompt('Введите цену за 1 кг конфет');
// for( i = 1; i < 11; i++){
//     s = a*i
//     s.toFixed(1);
//     alert(`За ${i} кг конфет вы заплатите ${s}$`)
// }
// console.log(a)
// console.log(s)
// console.log(i)


// For5
// let a = +prompt('Введите цену за 1 кг конфет');
// for ( i = 0.1; i <= 1 ; i += 0.1 ){
//     alert(`Стоимость за ${i.toFixed(1)} кг, я должен заплатить ${(a*i).toFixed(1)}`)
// }
// console.log(a)
// console.log(i)


// For6
// let a = +prompt('Введите цену за 1 кг конфет');
// for ( i = 1.2; i <= 2 ; i += 0.2 ){
//     alert(`Стоимость за ${i.toFixed(1)} кг, я должен заплатить ${(a*i).toFixed(1)}`)
// }
// console.log(a)
// console.log(i)


// For7
// let a = +prompt('Введите меньшее число:');
//     b = +prompt('Введите большее число:');
//     c = 0;
// for (i = a ; i <= b; i++){
//     c += i;
// }
// alert(c)
// console.log(a)
// console.log(b)


// For8
// let a = +prompt('Введите меньшее число:');
//     b = +prompt('Введите большее число:');
//     c = 1;
// for (i = a ; i <= b; i++){
//     c *= i;
// }
// alert(`Произведение всех чисел равно ${c}`)
// console.log(a)
// console.log(b)


// For9
// let a = +prompt('Введите меньшее число:');
//     b = +prompt('Введите большее число:');
//     c = 0;
// for (i = a ; i <= b; i++){
//     c += i**2
// }
// alert(`Сумма квадратов равна ${c}`)
// console.log(a)
// console.log(b)


// For10
// let a = +prompt('Введите число:');
//     c = 0;
// for (i = 1; i <= a; i++){
//     c += (1/i);
// }
// alert(`Сумма ряда равна ${c}`);
// console.log(c)
// console.log(a)


// For11
// let a = +prompt('Введите число:');
//     c = 0;
// for (i = 0 ; i <= a; i++){
//     c += (a+i)**2;
// }
// alert(`Сумма ряда равна ${c}`);
// console.log(c)
// console.log(a)


// For12
// let a = +prompt('Введите число:');
//     c = 1;
// for (i = 1.1; i <= a; i += 0.1){
//     c *= i;
// }
// alert(`Сумма ряда равна ${c}`);
// console.log(c)
// console.log(a)


// For13
// let a = +prompt('Введите число:');
//     c = 0;
// for (i = 1.1; i <= a; i += 0.2){
//     c += i - (i + 0.1);
// }
// alert(`Сумма ряда равна ${c}`);
// console.log(c)
// console.log(a)


// For14
// let a = +prompt('Введите число:');
//     s = 1;
// for (i = 1; i <= (2 * n - 1); i += 2){
//     s +=i;
// }
// alert(`Результат формулы ${c}`);
// console.log(s)
// console.log(a)


// For15
// let a = +prompt('Введите вещественное число А:');
//     n = +prompt('Введите целое число N:');
//     s = 1;
// for(i = 1; i <= n; i++){
//     s = a**i
// }
// alert(`${a}**${n} равно ${s}`)
// console.log(s)
// console.log(a)
// console.log(n)


// For16
// let a = +prompt('Введите вещественное число А:');
//     n = +prompt('Введите целое число N:');
// for(i = 1; i <= n; i++){
//     alert(`${a}**${i} равно ${a**i}`)
//     console.log(`${a}**${i} равно ${a**i}`)
// }