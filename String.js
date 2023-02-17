// Использование обратных ковычек
let textOne = 'Hi!\nMy\n\tname\n\t\tIgor'
let textTwo = `Hi!
               My
                 name
                    Igor`

let textHi = 'Hi!'
let textAll = `${textHi}, i'm Igor`
-------------------------------------------------------------------------------------------------------------------


// Сравнение строк
console.log('abcd'>'abc') // true        т.к. строка длиннее всегда больше
console.log('A'>'a') // false            т.к. нижний регистр всегда больше верхнего
console.log('abc'> 'abd') // false       т.к. d после с в алфавите
-------------------------------------------------------------------------------------------------------------------


// Длина строки
let a = 'Igor';
let b = 'Bosin';
console.log(a.length+b.length) //          9
console.log(typeof a.length) //            number
-------------------------------------------------------------------------------------------------------------------


// Получение символа строки
let text = 'Привет!'
let firstSymbol = text[0]; //               П
let lastSymbol = text[text.length-1]; //    !
-------------------------------------------------------------------------------------------------------------------


// Цикл для строки
for (const char of text)
console.log (char) //  П р и в е т !
-------------------------------------------------------------------------------------------------------------------


// Изменение регистра
let text = 'Привет!'
let textUp = text.toUpperCase() //  ПРИВЕТ!
let textLow = text.toLowerCase() // привет!
-------------------------------------------------------------------------------------------------------------------


// Поиск символа(подстроки) в строке
let text = 'Привет!'
console.log(text.indexOf('рив')) // 1,          т.к. п=0,р=1,и=2 и тд
console.log(text.indexOf('рив,3')) // -1        т.к. цифрой 3 мы задаем позиц. с котор начинаем поиск, а после буквы В у нас нет буквы Р (первая буква в "рив"), т.е. false=-1
console.log(text.includes('рив')) // true       includes аналогичен indexOf, но возвращ.булевые знач
console.log(text.includes('рив',3)) // false    includes аналогичен indexOf, но возвращ.булевые знач
-------------------------------------------------------------------------------------------------------------------


// Получение части строки(подстроки)
let text = 'Привет!'
console.log(text.slice(1,2)) // Р,     т.к. от 1 символа "Р" до 2 символа "И", но не включая второй символ
console.log(text.slice(2)) // ивет!    т.к. после 2 символа (включительно) находятся символы "ивет!"
console.log(text.slice(-2,-1)) // т,   т.к. -2=Т, а -1=!, но второй символ не включаем
console.log(text.slice(-2)) // т!,     т.к. -2=Т и до конца
-------------------------------------------------------------------------------------------------------------------


// Задача №1. (8 kyu Reversed Words) Заменить порядок слов в строке на обратный
function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}
console.log(reverseWords("hello world" )) // world hello
-------------------------------------------------------------------------------------------------------------------


// Задача №2. (8 kyu String repeat) Копирование строки(s) n-раз
// Вариант 1
function repeatStr (n, s) {
    return s.repeat(n)
}
console.log(repeatStr(5,'Igor')) // IgorIgorIgorIgorIgor

// Вариант 2
function repeatStr (n, s) {
    let str="";
    for(let i=0; i < n; i++)
        str+=s;
    return str;
}
console.log(repeatStr(5,'Igor')) // IgorIgorIgorIgorIgor
-------------------------------------------------------------------------------------------------------------------


// Задача №3. (8 kyu Vowel remover) Удаление всех гласных
// Вариант 1
    function shortcut (string) {
    return string.replace(/[aeiou]/g,'')
}
console.log(shortcut("how are you today?")) // hw r y tdy?

// Вариант 2
function shortcut(string) {
    return string.split('').filter(function (item) {
        return ['a', 'e', 'i', 'o', 'u'].includes(item) == false
    }).join('')
}
console.log(shortcut("how are you today?")) // hw r y tdy?

// Вариант 3
function shortcut (string) {
    return string
        .split('')
        .filter(str => !'aeiou'.includes(str))
        .join('')
}
console.log(shortcut("how are you today?")) // hw r y tdy?

// Вариант 4
function shortcut (string) {
    let arr = string.split('')
    let b = ''
    for(const index in arr) {
        if (arr[index] == 'a'
            || arr[index] == 'e'
            || arr[index] == 'i'
            || arr[index] == 'o'
            || arr[index] == 'u') continue;
        {b += arr[index]}
    }
    return b
}
console.log(shortcut("how are you today?")) // hw r y tdy?

// Вариант 5
function shortcut (string) {
    let b = ''
    for(const char of string) {
        if (char == 'a'
            || char == 'e'
            || char == 'i'
            || char == 'o'
            || char == 'u') continue;
        {b += char}
    }
    return b
}
console.log(shortcut("how are you today?")) // hw r y tdy?
-------------------------------------------------------------------------------------------------------------------


// Задача №4. (8 kyu Remove exclamation marks) Удаление восклицательного знака(одного символа)
// Вариант 1
function removeExclamationMarks(s) {
    return s.replace(/!/g, '')
}
console.log(removeExclamationMarks('aA!!!!!')) // aA

// Вариант 2
function removeExclamationMarks(s) {
    let str = ''
    for (let char of s) {
        if (char === '!') continue;
        str += char
    }
    return str
}
console.log(removeExclamationMarks('aA!!!!!')) // aA

// Вариант 3
function removeExclamationMarks(s) {
    return s.split('').filter(item => item != '!').join('')
}
console.log(removeExclamationMarks('aA!!!!!')) // aA

// Вариант 4
function removeExclamationMarks(s) {
    return s.split('!').join('');
}
console.log(removeExclamationMarks('aA!!!!!')) // aA
-------------------------------------------------------------------------------------------------------------------


// Задача №5. (8 kyu Reversed Strings) Получение слова задом-наперед
// Вариант 1
function solution(str){
    return  str.split('').reverse().join('')
}
console.log(solution('world')) // dlrow

// Вариант 2
function solution(str){
    return  [...str].reverse().join('')
}
console.log(solution('world')) // dlrow

// Вариант 3
function solution(str){
    let strReverse = ''
    for(let i=str.length-1; i>=0; i--){  //     str.length=5, но str[5]=undef, т.к. отсчет от нуля, поэтому -1
        strReverse += str[i]
    }
    return strReverse
}
console.log(solution('world')) // dlrow
// -------------------------------------------------------------------------------------------------------------------


// Задача №6. (8 kyu Remove First and Last Character) Удаление первого и последнего символа строки
// Вариант 1
function removeChar(str) {
    return str.slice(1, -1)
};
console.log(removeChar('World')) // orl

// Вариант 2
function removeChar(str) {
    let arr = []
    for(let index in [...str]){
        if(index==0 || index==[...str].length-1)continue;
        arr.push([...str][index])
    }
    return arr.join('')
};
console.log(removeChar('World')) // orl
// -------------------------------------------------------------------------------------------------------------------


// Задача №7. (8 kyu Are You Playing Banjo?) Если имя начинается на R или r, то вывести текст
// Вариант 1
function areYouPlayingBanjo(name) {
    if (name[0] == 'R' || name[0] == 'r') {
        return name + " plays banjo";
    }
    return name + " does not play banjo";
}
console.log(areYouPlayingBanjo("george")) // george does not play banjo

// Вариант 2
function areYouPlayingBanjo(name) {
    if (name.slice(0,1) == 'r' || name.slice(0,1) == 'R')
        return `${name} plays banjo`
    else return `${name} does not play banjo`
}
console.log(areYouPlayingBanjo("george")) // george does not play banjo

// Вариант 3
function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
        return name + ' plays banjo';
    } else {
        return name + ' does not play banjo';
    }
}
console.log(areYouPlayingBanjo("george")) // george does not play banjo

// Вариант 4
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r'
        ? ' plays'
        : ' does not play') + " banjo";
}
console.log(areYouPlayingBanjo("george")) // george does not play banjo
-------------------------------------------------------------------------------------------------------------------


// Задача №8. (8 kyu Abbreviate a Two Word Name) Вернуть инициалы человека с верхн.регистре через точку
// Вариант 1
function abbrevName(name){
    let firstSymbol = name[0] // 1-1word
    let numberSpace = name.indexOf(' ')
    let firstSymbolAfterSpace = name[numberSpace + 1] // 1-2word
    return `${firstSymbol.toUpperCase()}.${firstSymbolAfterSpace.toUpperCase()}`
}
console.log(abbrevName('Sam Harris')) // S.H

// Вариант 2
function abbrevName(name) {
    let arr = name.toUpperCase().split(' ')
    return arr[0].split('')[0]+'.'+arr[1].split('')[0]
}
console.log(abbrevName('sam harris')) // S.H

// Вариант 3
function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}
console.log(abbrevName('sam harris')) // S.H
-------------------------------------------------------------------------------------------------------------------


// Задача №9. (8 kyu Is the string uppercase?) Создать метод, чтобы увидеть, является ли строка ВСЕМИ ЗАГЛАВНЫМИ
// Вариант 1
String.prototype.isUpperCase = function () {
    return this.replace(/[^a-z]/g, '') == ''
}
console.log('HELLO'.isUpperCase()) // true

// Вариант 2
String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
}
console.log('HELLOS'.isUpperCase()) // true
-------------------------------------------------------------------------------------------------------------------


// Задача №10. (8 kyu You only need one - Beginner) Найти переменную 'x' в массиве 'a'
// Вариант 1
function check(a, x) {
    let arr
    for (let values of a){
        if(values==x) arr=values
    }
    return arr==x
};
console.log(check(['t', 'e', 's', 't'], 'e')) // true

// Вариант 2
function check(a,x){
    return a.includes(x);
};
console.log(check(['t', 'e', 's', 't'], 'e')) // true
-------------------------------------------------------------------------------------------------------------------


// Задача №11. (8 kyu All Star Code Challenge #18) Вернуть КОЛИЧЕСТВО букв(letter) в строке(str)
function strCount(str, letter) {
    let a = 0
    for (let char of str) {
        if (char == letter) a++
    }
    return a
}
console.log(strCount("Hello", "l")) // 2
-------------------------------------------------------------------------------------------------------------------


// Задача №12. (8 kyu Total amount of points) Из массива чисел n1:n2 (["3:1", "2:2", "0:1", ...]) вернуть сумму Х. Если n1>n2, то х +=3, если n1=n2, то х +=1, если n1<n2, то х +=0
// Вариант 1
function points(games) {
    let a = 0
    for (let values of games) {
        if (values.split(':')[0] > values.split(':')[1]) a += 3
        else if (values.split(':')[0] == values.split(':')[1]) a += 1
    }
    return a
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) // 30

// Вариант 2
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

// Вариант 3
function points(games) {
    return games.reduce(function (acc, item) {
        return acc += (item[0] > item[2]) ? 3 : (item[0] == item[2]) ? 1 : 0
    }, 0)
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) // 30
-------------------------------------------------------------------------------------------------------------------


// Задача №13. (8 kyu Remove String Spaces) Удалить пробелы в тексте
function noSpace(x) {
    return x.replace(/\s/g, '')
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')) // 8j8mBliB8gimjB8B8jlB
-------------------------------------------------------------------------------------------------------------------


// Задача №14. (8 kyu Returning Strings) Вернуть строку с передаваемым именем
function greet(name) {
    return `Hello, ${name} how are you doing today?`
}
console.log(greet("Ryan"))
-------------------------------------------------------------------------------------------------------------------


// Задача №15. (8 kyu Convert a String to a Number!) Строку конвертировать в число функцией
const stringToNumber = function(str){
    return Number(str);
}
console.log(stringToNumber("1234")) // 1234
-------------------------------------------------------------------------------------------------------------------


// Задача №16 (8 kyu Convert a string to an array) Конвертировать строку в массив
function stringToArray(string){
    return string.split(' ')
}
console.log(stringToArray("Robin Singh")) // [ 'Robin', 'Singh' ]
-------------------------------------------------------------------------------------------------------------------


// Задача №17 (8 kyu Sentence Smash) Преобразовать массив в строку
function smash (words) {
    return words.join(' ')
};
console.log(smash(["hello", "world"])) // hello world
-------------------------------------------------------------------------------------------------------------------


// Задача №18 (8 kyu A Strange Trip to the Market) Найти фразу в строке
function isLockNessMonster(s) {
    return s.includes("tree fiddy") || s.includes( "3.50") || s.includes( "three fifty" )
}
console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")) // true
-------------------------------------------------------------------------------------------------------------------


// Задача №19 (8 kyu Reversing Words in a String) Поменять в фразе слова задом наперед
function reverse(string) {
    return string.split(' ').reverse().join(' ')
}
console.log(reverse('I am an expert at this')) // this at expert an am I
-------------------------------------------------------------------------------------------------------------------


// Задача №20 Замена первого символа со строчного на заглавный
function unFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(unFirst('igor')) // Igor
-------------------------------------------------------------------------------------------------------------------


// Задача №21 Вернуть true/false если str = ('viagra' или 'xxx'). Регистр не важен
function checkSpam(str) {
    let lowCase = str.toLowerCase();
    return lowCase.includes('viagra') || lowCase.includes('xxx')
}
console.log(checkSpam('buy ViAXXX now')) // true
-------------------------------------------------------------------------------------------------------------------


// Задача №22 Вернуть первые 'maxlength' символы. Если строка длиннее второго аргумента, то вывести "maxlength' символов и добавить "..."
// Вариант 1.
function truncate(str, maxlength) {
    if (str.length<maxlength) {
        return str
    } else {
        return str.slice(0,maxlength)+"..."
    }
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) // Вот, что мне хотелос...

// Вариант 2.
function truncate(str, maxlength) {
    return (str.length<maxlength)
    ? str
    : str.slice(0,maxlength-1)+"…"
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) // Вот, что мне хотелос...
-------------------------------------------------------------------------------------------------------------------


// Задача №23. Функция для конвертации числа в строку(1=>'1')
// Вариант 1.
function convertString(num) {
    return num.toString()
}
console.log(convertString(232)) // '232'

// Вариант 2.
function convertString(num) {
return String(num);
}
console.log(convertString(232)) // '232'

// Вариант 3.
function convertString(num) {
return ''+num;
}
console.log(convertString(232)) // '232'
-------------------------------------------------------------------------------------------------------------------


// Задача №24. Поиск всех символов(подстроки)в строке(без учет регистр)
function searcStr(str, target) {
    let lowerCaseStr = str.toLowerCase()
    let lowerCaseTarget = target.toLowerCase()
    let pos = 0;
    while (true) {
        let foundPos = lowerCaseStr.indexOf(lowerCaseTarget, pos);
        if (foundPos == -1) break;
        console.log(`Найдено тут: ${foundPos}`);
        pos = foundPos + 1; // продолжаем со следующей позиции
    }
}
searcStr('Ослик Иа-Иа посмотрел на виадук', 'Иа')
-------------------------------------------------------------------------------------------------------------------


// Задача №25. Строку (валюта+число) превратить в число
function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log( extractCurrencyValue('$120')) // 120(number)
-------------------------------------------------------------------------------------------------------------------


// Задача №26. Вернуть имя с доб.Hello, либо Hello Word, если пустая строка
function hello(name) {
    if (name != '' || name != undefined)
        return `Hello, ${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}!`
    else return "Hello, World!"
}
console.log(hello())
-------------------------------------------------------------------------------------------------------------------


// Задача №27. Первый аргумент(строка) должен заканчиваться вторым аргументом(строка) (7 kyu String ends with?)
// Вариант 1.
function solution(str, ending) {
    return (
        ending
            ? (ending === str.slice(-ending.length))
            : true
    )
}
console.log(solution('abcde', 'cde')) // true
console.log(solution('abc', ''))  // true
console.log(solution('abc', 'b')) // false

// Вариант 2.
function solution(str, ending) {
    return str.endsWith(ending);
}
console.log(solution('abcde', 'cde')) // true
console.log(solution('abc', ''))  // true
console.log(solution('abc', 'b')) // false
-------------------------------------------------------------------------------------------------------------------


// Задача №28. Вернуть true, если первый аргумент четное число, а второй нечетное (8 kyu Opposites Attract)
// Вариант 1.
function lovefunc(flower1, flower2) {
    return (flower2 + flower1) % 2 !== 0
}
console.log(lovefunc(1, 4)) //true
console.log(lovefunc(2, 2)) // false

// Вариант 2.
function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}
console.log(lovefunc(1, 4)) //true
console.log(lovefunc(2, 2)) // false