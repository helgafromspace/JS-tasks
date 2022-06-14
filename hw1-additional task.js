let age_1 = 17;
let age_2 = 18;
let age_3 = 61;


const checkAge = function(age) {
    if (age == Number(age)){
        if (age < age_1){
            console.log(`You don’t have access cause your age is ${age}. It’s less then`);
        } else if(age >= age_2 && age < age_3){
            console.log('“Welcome  !”');
        } else if(age > age_3){
            console.log('Keep calm and look Culture channel.');
        } else{
            console.log('Technical work');
        }
    }
    else{
        console.log('Enter number value')
    }
}

checkAge('66');
