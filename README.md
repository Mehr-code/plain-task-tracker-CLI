### **📌 Task Tracker CLI**  
A simple, lightweight CLI tool for managing tasks using **pure Node.js**, without any frameworks or libraries.  

---

## **📖 Features**  
✅ Add, list, update, and delete tasks  
✅ Stores tasks in a JSON file  
✅ Simple and easy-to-use command-line interface  
✅ No dependencies or frameworks  

---

## **🚀 Installation**  

1️⃣ **Clone the repository:**  
```sh
git clone https://github.com/your-username/task-tracker-cli.git
cd task-tracker-cli
```
  
2️⃣ **Initialize the project (optional, if using npm scripts):**  
```sh
npm init -y
```

3️⃣ **(Optional) Set up npm scripts for easier execution:**  

Edit your `package.json` and add the following inside `"scripts"`:

```json
"scripts": {
  "start": "node index.js",
  "add": "node index.js add",
  "list": "node index.js list",
  "update": "node index.js update",
  "remove": "node index.js remove"
}
```

Now, instead of typing `node index.js`, you can simply use:

```sh
npm start
```

Or for adding a task:

```sh
npm run add -- "Task Title" "Task Description"
```

---

## **🛠 Usage**  

Run the following commands in your terminal:

### **📌 Add a task:**  
```sh
npm run add -- "Task Title" "Task Description"
```

### **📌 List all tasks:**  
```sh
npm run list
```

### **📌 Update a task:**  
```sh
npm run update -- <task_id> "Updated Title" "Updated Description"
```

### **📌 Delete a task:**  
```sh
npm run remove -- <task_id>
```

---

## **📝 Example Usage**  
```sh
npm run add -- "Buy groceries" "Milk, bread, eggs"
npm run list
npm run update -- 1 "Go shopping" "Buy clothes and shoes"
npm run remove -- 1
```

---

## **📜 License**  
This project is licensed under the **MIT License**.  

---

