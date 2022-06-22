/*9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения:
 id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
 Пример:
moveEmployees(2, 3)*/

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


function moveEmployees(outcoming_dep,incoming_dep){
  let availableId = [];

  for(el of enterprises){
    for(item of el.departments){
      availableId.push(item.id);
  }
}
let Ent1 = enterprises.find(item => item.id === outcoming_dep);
let Ent2 = enterprises.find(item => item.id === incoming_dep);
if(Ent1 || Ent2){
  console.log(`Вы пытаетесь использовать id предприятия. Доступные id отделов: ${availableId}`)
} else {
  let add = 0;
  for(el of enterprises){
    let out = el.departments.find(item => item.id === outcoming_dep);
    let inc = el.departments.find(item => item.id === incoming_dep);
    if(out){
      add = out.employees_count;
      out.employees_count = 0;
      console.log(out)
    }
    if(inc){
      inc.employees_count += add
      console.log(inc)
    }
  }
}
}
moveEmployees(3,6)


