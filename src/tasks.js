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

// Task calculation

const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// the API key comes from an environment variable,
// e.g. process.env.API_KEY — never hard-coded