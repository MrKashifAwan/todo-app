// app.js

let todoList = [];

// Function to add a new todo item
function addTodo(item) {
    if (item) {
        todoList.push(item);
        console.log(`Added: ${item}`);
    } else {
        console.log('Error: Item cannot be empty');
    }
}

// Function to display all todo items
function displayTodos() {
    if (todoList.length === 0) {
        console.log('No todos found.');
    } else {  
        console.log('Your Todo List:');
        todoList.forEach((todo, index) => {
            console.log(`${index + 1}: ${todo}`);
        });
    }
}

// Function to remove a todo item by index
function removeTodo(index) {
    if (index > 0 && index <= todoList.length) {
        const removed = todoList.splice(index - 1, 1);
        console.log(`Removed: ${removed}`);
    } else {
        console.log('Error: Index out of bounds');
    }
}

// Example usage
addTodo('Finish homework');
addTodo('Go grocery shopping');
displayTodos();
removeTodo(1);
displayTodos();