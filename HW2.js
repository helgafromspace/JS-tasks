//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

i = 1;
while(i <= 10){
    console.log(2**i);
    i += 1;
}
//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function powNum(n){
    i = 1;
    while(i <= n){
        console.log(2**i);
        i += 1;
    }
}
powNum(5);

//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
s = ''
for(i = 0; i < 5; i++){
    s += ':)'
    console.log(s);
}


/*Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows) */

function printString(string, numberOfRows){
    newString = ''
    for(i = 0; i < numberOfRows; i++){
        newString += string;
        console.log(newString);
    } 
}

printString('hey',3);

/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'*/

function getWordStructure(word){
    let countVowels = 0;
    let countConsonants = 0;
    let vowels = ['a', 'e', 'i', 'o','u'];
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    for (let letter of word.toLowerCase()) {
          if (vowels.includes(letter)) {
                countVowels++;
          }
      }
    for (let letter of word.toLowerCase()) {
          if (consonants.includes(letter)) {
              countConsonants++;
          }
      }
  console.log(`Слово ${word} состоит из ${countVowels} гласных и ${countConsonants} согласных букв`)
  }
  
  getWordStructure('Check-list')
  getWordStructure('Case')
  getWordStructure('case')
/*another 3** */
  function countLetters(word) { 

    // find the count of vowels
    const countVow = word.match(/[aeiou]/gi).length;
    // find the count of consonants
    const countCons = word.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    console.log(`Слово ${word} состоит из ${countVow} гласных и ${countCons} согласных букв`);
}

countLetters('Check-list');
countLetters('Case');
countLetters('case');
  /*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'*/
function isPalindrome(word){
    wordReverse = word.toLowerCase().split('').reverse().join('')
  if (word.toLowerCase() == wordReverse){
    console.log(`Word ${word} is a palindrome`)
  } else{
    console.log(`Word ${word} is not a palindrome`)
  }
  }
  isPalindrome('abba')
  isPalindrome('Abba')
  isPalindrome('AbBa')
  isPalindrome('Roba')
