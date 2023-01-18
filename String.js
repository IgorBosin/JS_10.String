// Использование обратных ковычек
// let textOne = 'Hi!\nMy\n\tname\n\t\tIgor'
// let textTwo = `Hi!
//                My
//                  name
//                     Igor`

// let textHi = 'Hi!'
// let textAll = `${textHi}, i'm Igor`
// ------------------------------------ 
      

// Сравнение строк
// alert('abcd'>'abc') // true - строка длиннее всегда больше
// alert('A'>'a') // false - нижний регистр всегда больше верхнего
// alert('abc'> 'abd') // false - d после с в алфавите
// ------------------------------------ 

// Длина строки
// let a = 'Igor';
// let b = 'Bosin';
// alert(a.length+b.length)
// alert(typeof a.length)
// ------------------------------------ 


// Получение символа строки
// let text = 'Привет!'
// let firstSymbol = text[0]; // П
// let lastSymbol = text[text.length-1]; // !

// for (const char of text)
// alert (char) // П р и в е т !
// ------------------------------------ 

        
// Изменение регистра
// let text = 'Привет!'
// let textUp = text.toUpperCase() // ПРИВЕТ
// let textLow = text.toLowerCase() // привет
// alert (textLow)
// ------------------------------------ 


// Поиск символа(подстроки) в строке
// let text = 'Привет!'
// alert(text.indexOf('рив')) // 1, т.к. п=0,р=1,и=2 и тд
// alert(text.indexOf('рив,3')) -1 т.к. цифрой 3 мы задаем
// позицию с которой начинаем поиск, а после буквы В у нас
// нет буквы Р (начало "рив"), т.е. false=-1 */

// alert(text.includes('рив')) // true
// alert(text.includes('рив',3)) // false
// includes аналогичен indexOf, но возвращ.булевые знач
// ------------------------------------ 

        
// Получение части строки(подстроки)
// let text = 'Привет!'
// alert(text.slice(1,2)) // Р, т.к. от 1 символа "Р" до 2 символа "И",
// но не включая второй символ
// alert(text.slice(2)) // ивет!
// alert(text.slice(-2,-1)) // т, т.к.-2=Т, а -1=!, но второй символ
// не включаем
// alert(text.slice(-2)) // т!, т.к. -2=Т и до конца
// ------------------------------------ 
      
        
// Задача №1 Функц для измене.первого символа на заглавный
// function unFirst(str) {
//    return str[0].toUpperCase() + str.slice(1);
// }
// alert(unFirst('igor'))
// ------------------------------------ 


// Задача №2 Фукнц возвр бул знач, не чувств к регистру(пров на спам)
// function checkSpam(str) {
//  let lowCase = str.toLowerCase();
//  return lowCase.includes('viagra') || lowCase.includes('xxx')
// }
// alert(checkSpam('buy ViAXXX now'))
// ------------------------------------ 


// Задача №3
// Вариант 1.
// function truncate(str, maxlength) {
//     if (str.length<maxlength) {
//         return str
//     } else {
//         return str.slice(0,maxlength)+"..."
//     }
// }
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

// Вариант 2.
// function truncate(str, maxlength) {
//     return (str.length<maxlength) 
//     ? str
//     : str.slice(0,maxlength-1)+"…"
// }
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
// ------------------------------------ 

        
// Задача №4. Функция для конвертации числа в строку(1=>'1')
// Вариант 1.
// function convertString(num) {
//     return num.toString()
// }
// alert(convertString(232))

// Вариант 2.
// function convertString(num) {
// return String(num);
// }
// alert(convertString(232))

// Вариант 3.
// function convertString(num) {
// return ''+num;
// }
// alert(convertString(232))
// ------------------------------------ 
        
   
// Задача №5. Функция для копирования строки(S) n-раз 
// Вариант 1.
// function repeatStr (n, s) {
// return s.repeat(n)
// }
// alert(repeatStr(5,'Igor'))

// Вариант 2.
// function repeatStr (n, s) {
// let str="";
// for(let i=0; i < n; i++)
//   str+=s;
//   return str;
// }
// alert(repeatStr(5,'Igor'))
// ------------------------------------ 


// Задача №6. Удаление первого и последнего символа в слове
// function removeChar(str){
//     return str.slice(1,-1)
// } 
// alert(removeChar('Popular'))
// ------------------------------------ 


// Задача №7. Поиск всех символов(подстроки)в строке(без учет регистр)
// function searcStr (str,target) {
//     let lowerCaseStr = str.toLowerCase()   
//     let lowerCaseTarget = target.toLowerCase()
// let pos = 0;
// while (true) {
//   let foundPos = lowerCaseStr.indexOf(lowerCaseTarget, pos);
//   if (foundPos == -1) break;
//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }
// }
// searcStr('Ослик Иа-Иа посмотрел на виадук', 'Иа')
// ------------------------------------ 


// Задача №8. Выделить число
// function extractCurrencyValue(str) {
// return +str.slice(1);
// }
// alert( extractCurrencyValue('$120')) // 120(number)       
// ------------------------------------ 

      
// Задача №9. Вернуть инициалы человека с верхн.регистре через точку
// function abbrevName(name){
//   let firstSymbol = name[0] // 1-1word
//   let numberSpace = name.indexOf(' ')
//   let firstSymbolAfterSpace = name[numberSpace + 1] // 1-2word
//   return `${firstSymbol.toUpperCase()}.${firstSymbolAfterSpace.toUpperCase()}`
// }
// alert(abbrevName('Sam Harris'))


// function abbrevName(name){
// var nameArray = name.split(" ");
// return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }
// alert(abbrevName('Sam Harris'))


// function abbrevName(name){
// return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }
// alert(abbrevName('Sam Harris'))


// function abbrevName(name){
//   return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
// }
// alert(abbrevName('Sam Harris'))
// ------------------------------------ 


// Задача №10. Вернуть имя с доб.Hello, либо Hello Word, если пустая строка
// function hello(name) {
//     if (name != '' || name != undefined) 
//     return `Hello, ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`
//     else return "Hello, World!"
// }
// alert(hello())
// ------------------------------------ 


// Задача №11. Проверить имя, если нначинается на R, то вывести текст
// function areYouPlayingBanjo(name) {
//   if (name[0] == 'R' || name[0] == 'r') { 
//     return name + " plays banjo";
//   }
//   return name + " does not play banjo";
// }
// alert(areYouPlayingBanjo("george"))        

        
// function areYouPlayingBanjo(name) {
// if (name.slice(0,1) == 'r' || name.slice(0,1) == 'R')
// return `${name} plays banjo`
// else return `${name} does not play banjo`
// }
// alert(areYouPlayingBanjo("george"))


// function areYouPlayingBanjo(name) {
// if (name[0] == "r" || name[0] == "R") {
//     return name+ " plays banjo"; 
//     } else {
//     return name + " does not play banjo";
//     }
// }
// alert(areYouPlayingBanjo("george"))


// function areYouPlayingBanjo(name) {
//   if (name[0].toLowerCase() === 'r') {
//     return name + ' plays banjo';
//   } else {
//     return name + ' does not play banjo';
//   }
// }
// alert(areYouPlayingBanjo("george"))


// function areYouPlayingBanjo(name) {
//   return name + (name[0].toLowerCase() == 'r' 
//   ? ' plays' 
//   : ' does not play') + " banjo";
// }
// ------------------------------------  



// Задача №12. Удаление всех гласных (Vowel remover)

// function shortcut (string) {
//     return string.replace(/[aeiou]/g,'')
// }
// console.log(shortcut("codewars" ))



// function shortcut (string) {
//     return string.split('').filter(function(item){
//         return ['a','e','i','o','u'].includes(item) == false
//     }).join('')
// }
// console.log(shortcut("how are you today?" ))



// function shortcut (string) {
//     let arr = string.split('')
//     let b = ''
//     for(const index in arr) {
//         if (arr[index] == 'a' 
//         || arr[index] == 'e' 
//         || arr[index] == 'i' 
//         || arr[index] == 'o' 
//         || arr[index] == 'u') continue;
//         {b += arr[index]}
//     }
// return b 
// }
// console.log(shortcut("how are you today?" ))



// function shortcut (string) {
//     let b = ''
//     for(const char of string) {
//         if (char == 'a' 
//          || char == 'e' 
//          || char == 'i' 
//          || char == 'o' 
//          || char == 'u') continue;
//         {b += char}
//     }
// return b 
// }
// console.log(shortcut("how are you today?" ))



// function shortcut (string) {
//     return string
//       .split('')
//       .filter(str => !'aeiou'.includes(str))
//       .join('')
//   }
// console.log(shortcut("how are you today?" ))



// function shortcut (string) {
//     return string.split('')
//     .filter(item => !'a,e,u,i,o'.includes(item))
//     .join('')
// }

// console.log(shortcut("how are you today?" ))
// ------------------------------------  



// Задача №13. Удаление восклицательного знака(одного символа). Remove exclamation marks(

// function removeExclamationMarks(s) {
//     return s.split('').filter(item => item != '!').join('')
// }
// console.log(removeExclamationMarks("Hello World!"))



// function removeExclamationMarks(s) {
//     let excel = ''
//     for(const char of s) {
//         if (char == '!') continue
//         excel += char
//     }
//     return excel
// }
// console.log(removeExclamationMarks("Hello World!"))



// function removeExclamationMarks(s) {
//     return s.replace(/!/g, '')
// }
// console.log(removeExclamationMarks("Hello World!"))



// function removeExclamationMarks(s) {
//     return s.split('!').join('');
// }
// console.log(removeExclamationMarks("Hello World!"))
// ------------------------------------  



// Задача №14. Получение слова задом-наперед
        
function solution(str){
    return  str.split('').reverse().join('')
}

console.log(solution('world')) // dlrow
        

        
function solution(str){
    return  [...str].reverse().join('')
}

console.log(solution('world')) // dlrow  
        
        
        
function solution(str){
    let strReverse = ''
    for(let i=str.length-1; i>=0; i--){  //     str.length=5, но str[5]=undef, т.к. отсчет от нуля, поэтому -1
        strReverse += str[i]
    }
    return strReverse
}
console.log(solution('world'))        
// ------------------------------------  



// Задача №15. Создать метод, чтобы увидеть, является ли строка ВСЕМИ ЗАГЛАВНЫМИ.
  
String.prototype.isUpperCase = function() {
    return this.replace(/[^a-z]/g, '')==''
}

console.log('HELLO'.isUpperCase()) // true


String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
}
        
console.log('HELLOS'.isUpperCase()) // true
// ------------------------------------  



// Задача №16. Вернуть КОЛИЧЕСТВО букв(letter) в строке(str)
        
function strCount(str, letter) {
    let a = 0
    for (let char of str) {
        if (char == letter) a++
    }
    return a
}

console.log(strCount("Hello", "l")) // 2        
// ------------------------------------  



// Задача №17. Вернуть сумму Х. В функцию передают массив чисел n1:n2 (пример: ["3:1", "2:2", "0:1", ...]) Если n1>n2, то х +=3, если n1>n2, то х +=1
        
function points(games) {
    let a = 0
    for (let values of games) {
        if (values.split(':')[0] > values.split(':')[1]) a += 3
        else if (values.split(':')[0] == values.split(':')[1]) a += 1
    }
    return a
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) // 30
        
        
        
function points(games) {
    let a = 0
    let strGames = (games.join(','))
    console.log(strGames)
    for (let i = 0; i < strGames.length; i = i + 4) {
        if (+strGames[i] > +strGames[i + 2]) {
            a += 3
        }
    }
    for (let i = 0; i < strGames.length; i = i + 4) {
        if (+strGames[i] == +strGames[i + 2]) {
            a += 1
        }
    }
    return a
}        

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) // 30        
        
        

function points(games) {
    return games.reduce(function (acc, item) {
        return acc += (item[0] > item[2]) ? 3 : (item[0] == item[2]) ? 1 : 0
    }, 0)
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) // 30
// ------------------------------------  



// Задача №18. Удалить пробелыв тексте

function noSpace(x){
return x.replace(/\s/g,'')
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')) // 8j8mBliB8gimjB8B8jlB
// ------------------------------------  



// Задача №19. Вернуть приветсткие с именем (8 kyu Returning Strings)

function greet(name){
return `Hello, ${name} how are you doing today?`
}



