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

/*1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
Для предприятия посчитать сумму всех сотрудников во всех отделах.
**Пример:**
Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/

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
let newObj = {
  id: counter + 1,
  name: new_name,
  departments: []
}
enterprises.push(newObj)
}

addEnterprise('Предприятие 4')
addEnterprise('Предприятие 5')
console.log(enterprises)

/*4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
Пример:
addDepartment(1, "Название нового отдела")*/



function addDept(id_ent, dept_name){
let counter = 0
let availableId = [];

for(el of enterprises){
  counter++;
  availableId.push(el.id)
  for(item of el.departments){
    counter++;
  }
}
let newDept = {
  id: counter + 1,
  name: dept_name,
  employees_count: 0,
}

let findEl = enterprises.find(item => item.id === id_ent);
if(findEl){
  findEl.departments.push(newDept);
} else{
  console.log(`Вы пытаетесь добавить отдел в отдел. Доступные id предприятий: ${availableId}`)
}
}

addDept(1,'Отдел поедания печенек')
console.log(enterprises)

/*5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия")*/

function editEnterprise(id_ent,new_name){
  let availableId = [];
  for(el of enterprises){
    availableId.push(el.id)
  }
  let enterprise = enterprises.find(item => item.id === id_ent);
  if(enterprise){
    enterprise.name = new_name;
    console.log(enterprise)
  } else{
    console.log(`Вы пытаетесь редактировать название не предприятия. Доступные id предприятий: ${availableId}`)
  }
}
editEnterprise(1,'Предприятие им.Геральта')

/*6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела")*/

function editDepartment(id_dep,new_name){
  let availableId = [];

  for(el of enterprises){
    for(item of el.departments){
      availableId.push(item.id);
  }
}
let findEl = enterprises.find(item => item.id === id_dep);
if(findEl){
  console.log(`Вы пытаетесь редактировать название не отдела. Доступные id отделов: ${availableId}`)
}
if(!findEl){
  for(el of enterprises){
    let findEl2 = el.departments.find(item => item.id === id_dep);
    if(findEl2){
      findEl2.name = new_name;
      console.log(findEl2)
    }
  }
}
}
editDepartment(2,'Отдел юнлингов')

/*7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1)*/

function delEnterprise(id_ent){
  let availableId = [];
  for(el of enterprises){
    availableId.push(el.id)
  }
  let elIndex = enterprises.findIndex(item => item.id === id_ent);
  if(!elIndex){
    enterprises.splice(elIndex,1)
    console.log(enterprises)
  } else{
    console.log(`Вы пытаетесь удалить не предприятие. Доступные id предприятий: ${availableId}`)
  }
}
delEnterprise(1)