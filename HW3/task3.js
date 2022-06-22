/*1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
Для предприятия посчитать сумму всех сотрудников во всех отделах.*/
const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]


//1 way
for(el of enterprises){
  let countEmp = 0;
  for(item of el.departments){
    countEmp += item.employees_count;
  }

  if(countEmp === 0){
    console.log(`${el.name} (нет сотрудников)`)
  } else{
    console.log(`${el.name} (${countEmp} сотрудников)`)
  }
  
  for(item of el.departments){
    if(item.employees_count === 0){
        console.log(`- ${item.name} (нет сотрудников)`)
    }
    else{
        console.log(`- ${item.name} (${item.employees_count} сотрудников)`)
    }
  }
}

//2 way 
console.log('-----------------------')
for(el of enterprises){
  let amount = el.departments.reduce((total,item) => total + item.employees_count, 0);

  if(amount === 0){
    console.log(`${el.name} (нет сотрудников)`)
  }
    else{
    console.log(`${el.name} (${amount} сотрудников)`)
  }
  for(item of el.departments){
    if(item.employees_count === 0){
        console.log(`- ${item.name} (нет сотрудников)`)
    }
    else{
        console.log(`- ${item.name} (${item.employees_count} сотрудников)`)
    }
  }
}

/*2. Написать функцию, которая будет принимать 1 аргумент 
(id отдела или название отдела и возвращать название предприятия, к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2*/

function findEntById(id_ent){
  let findEl = enterprises.find(item => item.id === id_ent);
  if(findEl){
    console.log(findEl.name)
  }
  if(!findEl){
    for(el of enterprises){
      let findEl2 = el.departments.find(item => item.id === id_ent);
      if(findEl2){
        console.log(el.name)
      }
    }
  }
}

findEntById(6)

function findEntByName(name_ent){
  let findEl = enterprises.find(item => item.name === name_ent);
  if(findEl){
    console.log(findEl.name)
  }
  if(!findEl){
    for(el of enterprises){
      let findEl2 = el.departments.find(item => item.name === name_ent);
      if(findEl2){
        console.log(el.name)
      }
    }
  }
}

findEntByName('Отдел аналитики')

/*3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")*/

function addEnterprise(new_name){
  let counter = 0
  for(el of enterprises){
    counter++;
    for(item of el.departments){
      counter++;
    }
  }
  let protoObj = enterprises[0];
  let newObj = Object.create(protoObj);
  newObj = {
    id: counter + 1,
    name: new_name,
    departments: []
  }
  enterprises.push(newObj)
}

addEnterprise('Предприятие')
console.log(enterprises)

