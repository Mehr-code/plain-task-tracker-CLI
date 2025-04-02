const fs = require("fs");
const path = "./tasks.json";

// خواندن تسک‌ها از فایل JSON
function readTasks() {
  if (!fs.existsSync(path)) {
    return [];
  }
  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data);
}

// نوشتن تسک‌ها در فایل JSON
function writeTasks(tasks) {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}

// اضافه کردن تسک جدید
function addTask(title, description) {
  const tasks = readTasks();
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log("✅ Task added successfully!");
}

// لیست کردن تسک‌ها
function listTasks() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log("No tasks found.");
    return;
  }
  console.log("📌 List of Tasks:");
  tasks.forEach((task) => {
    console.log(
      `${task.id}. ${task.title} [${task.completed ? "✔️ Done" : "⏳ Pending"}]`
    );
  });
}

// تکمیل کردن تسک
function completeTask(id) {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    console.log("Task not found!");
    return;
  }
  task.completed = true;
  writeTasks(tasks);
  console.log("✅ Task completed!");
}

// حذف کردن تسک
function deleteTask(id) {
  let tasks = readTasks();
  tasks = tasks.filter((t) => t.id !== id);
  writeTasks(tasks);
  console.log("✅ Task deleted!");
}

// پردازش دستورات ورودی
const command = process.argv[2];
switch (command) {
  case "add":
    const title = process.argv[3];
    const description = process.argv[4];
    if (!title || !description) {
      console.log("Please provide both title and description!");
    } else {
      addTask(title, description);
    }
    break;
  case "list":
    listTasks();
    break;
  case "done":
    const idToComplete = parseInt(process.argv[3]);
    if (!idToComplete) {
      console.log("Please provide a valid task ID!");
    } else {
      completeTask(idToComplete);
    }
    break;
  case "delete":
    const idToDelete = parseInt(process.argv[3]);
    if (!idToDelete) {
      console.log("Please provide a valid task ID!");
    } else {
      deleteTask(idToDelete);
    }
    break;
  default:
    console.log("Unknown command. Please use add, list, done, or delete.");
}
