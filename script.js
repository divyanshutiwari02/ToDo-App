const todos = JSON.parse(localStorage.getItem('todos')) || [];
const input = document.querySelector('input');
const addBtn = document.getElementById('add-btn');
const noTodoError = document.getElementById('gg');

function noToDos(){
    if(todos.length === 0){
    noTodoError.style.display = 'block';
}
}
noToDos();

todos.forEach(todo => {
    createTodo(todo);
});

addBtn.addEventListener('click', function(){
    clickHandle();
})
input.addEventListener('keypress', function(p){
    if(p.key=='Enter'){
        clickHandle();
    }
})
function clickHandle(){
    const task = document.querySelector('input').value.trim()
    if(task===''){
        return alert('please type something');
    }
    noTodoError.style.display = 'none';
    createTodo(task);
    todos.push(input.value);
    input.value = '';
   
    localStorage.setItem('todos', JSON.stringify(todos))
}

function createTodo(t){
    const todocontainer = document.querySelector('.todo-container');
    const todo = document.createElement('div');
    todo.className = 'todo';
    const paragraph = document.createElement('p');
    paragraph.textContent = t;
    const deletBtn = document.createElement('button');
    deletBtn.innerText = 'Delete';
    deletBtn.className = 'delete-btn';
    todo.appendChild(paragraph);
    todo.appendChild(deletBtn);
    todocontainer.appendChild(todo);
    deletBtn.addEventListener('click', function(){
        todo.remove();
        const index = todos.indexOf(t);
        todos.splice(index, 1);
        localStorage.setItem('todos',JSON.stringify(todos));

        noToDos();
    })
}



























// concept slice and splice

// const age  = [11, 12, 18, 25];
// const newAge = age.slice(0,3);
// console.log(age);
// console.log(newAge);

// const age = [11,15, 19];
// age.splice(1,2,20, 23);
// console.log(age);

// const names = ['Aish', 'vivek', 'salman'];
// names.splice(0 (index), 2 (how many element you want to remove), 'Div' (add ele in array), 'rachit' (add ele in array));
// console.log(names);

// slice
// array.slice(starting index of a array, end index of a array + 1 you want to remove);
// |
// |
// it never chages in actual array


// splice
// array.splice(index, no. of elements you want to remove, values u want to add)
// |
// |
// it changes the actual(original) array