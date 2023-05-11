let currentTodos = [];
let doneTodos = [];

const todoList = () => {
   
    currentTodos = ["Get Dry cleaning", "Review functions", "Review arrays"];
    doneTodos = ["Finish all coded tasks", "Sent important email"];
    console.log(`Current todos: ${currentTodos}`) 
    console.log(`Done todos: ${doneTodos}`)
}
todoList();

const completedTodos = (todo) => { 
   
    const checkTodo = currentTodos.find(item =>{
        if (item === todo) {
            const remoTodoIndex = currentTodos.indexOf(item);
            currentTodos.splice(remoTodoIndex, 1);
            doneTodos.push(item);
            return item
        }; 
    })
    return checkTodo;
   

}
completedTodos("Review functions")
console.log("Current", currentTodos);
console.log(doneTodos);

const validateTodo = (todo) => {
    if (todo.length > 2) {
        return true;
    } else {
        return false;
    }
}

console.log(validateTodo("test"));


const addNewTodo = (todo) => {
    if (validateTodo(todo) === true) {
        currentTodos.push(todo);
        return currentTodos;
    } 
};

console.log(addNewTodo("test")); //

const uncheckTodo = (undo) => {
    const undoTodo = doneTodos.find(todo => {
    return doneTodos[undo] == todo;
    })
    return undoTodo;
}

console.log("Index:", uncheckTodo(0));

const editTodo = (index, todoList, updatedTodo) => {
   
    // Old long solution
    // const updateTodoList = todoList.map(item => {
    //     if (todoList[index] == item) {
    //        return updatedTodo;
    //     } else {
    //         return item;
    //     }
    // })
    // return updateTodoList;
    
     todoList[index] = updatedTodo;
     return todoList;

}

console.log("Updated Todo: ", editTodo(2, ["test1", "test2", "test3"], "test5"));