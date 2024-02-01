// All Selactors
const todoinput = document.querySelector('.todo-input')
const todobutton = document.querySelector('.todo-button')
const todolist = document.querySelector('.todo-list')
const filteroption = document.querySelector('.filter-todo')

// Event Listeners
todobutton.addEventListener('click', addTodo)
todolist.addEventListener('click', deletCheck)
filteroption.addEventListener('click', filtertodo)


// document.addEventListener('DOMContentLoaded',getTodo)
// Function
function addTodo(event) {
    //prevent from form submeting
    event.preventDefault();
    // todo div
    const todoDIv = document.createElement('div');
    todoDIv.classList.add('todo');
    //create li
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todo-item');
    todoDIv.appendChild(newtodo);
    /**
     * @BhJaipal
     * Done logo
     */
    let done = document.createElement('i');
    done.classList.add("material-icons");
    done.innerText = "done";
    // Change till here

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.appendChild(done);
    completedButton.classList.add('complete-btn');
    /**
     * @BhJaipal
     * Event listener for done and undone
    */
    completedButton.addEventListener('click', () => todoDIv.classList.toggle('completed'));
    todoDIv.appendChild(completedButton)
    /**
     * @BhJaipal
     * Trash Icon
     */
    let trash = document.createElement('i');
    trash.classList.add("material-icons");
    trash.innerText = "delete";
    //check Trash button
    const TrashButton = document.createElement('button');
    TrashButton.append(trash);
    TrashButton.classList.add('tras-btn');
    todoDIv.appendChild(TrashButton)
    //append to list
    todolist.appendChild(todoDIv)
    //clear todo input value
    todoinput.value = '';
}

function deletCheck(e) {
    const item = e.target;
    //delite todo
    if (item.classList[0] === 'tras-btn') {
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo, addEventListener('transitionend', function () {
            todo.remove();
        })
    }
}


function filtertodo(e) {
    const todos = todolist.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}

