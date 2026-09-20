// CampusEats task list

const tasks = [
  {
    title: "Design the menu screen",
    dueDate: "2026-09-25",
  },
  {
    title: "Build the orders API",
    dueDate: "2026-09-28",
  },
  {
    title: "Add user login",
    dueDate: "2026-09-30",
  },
];

console.log(`CampusEats has ${tasks.length} open tasks`);

tasks.forEach((task) => {
  console.log(`${task.title} - Due: ${task.dueDate}`);
});