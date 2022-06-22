
/*Task 2*
Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. 
для дальнейшего использования в функции, описанной в задании*/
const users = require('./task2_json.json');

//first way
function usersUnique(arr){
    const userUnique = [...new Map(arr.map(item =>
        [item['name'],item])).values()];
      
    console.log(userUnique)
}
usersUnique(users);

//second way
console.log('----------------------------------')

function usersFiltered(arr){
    const names = arr.map(item => item.name)
    const usersFiltered = arr.filter(({name}, index) => !names.includes(name, index + 1))
    console.log(usersFiltered)
}
usersFiltered(users);


console.log(usersUnique(users) === usersFiltered(users))
