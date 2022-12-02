/*
    ToDo List

    TAKE input
    HANDLE submission of input
    DISPLAY task as list of items
    STRIKE THROUGH completed tasks on the click
    HIDE DONE BTN to remove completed tasks
*/

let myName = document.querySelector('.myName');
myName.innerText = 'Get It Done';
myName.style.color = 'red';


class ToDo {
    constructor() {
        this.todoArr = [];

        this.form = document.getElementById('form');
        this.todoItemInput = document.getElementById('todo');
        this.todoList = document.getElementById('todoList');
        this.button = document.getElementById('button');
        this.todoListItems = document.getElementsByTagName('li');//return a nodeList
    }

    init() {
        this.formSubmit();
    }

    formSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log('click');
            this.addToDo();
            this.completedTask();
            this.hideDone();
        })
    }
    
    addToDo() {
        let found = false;
        console.log('test')
        console.log(this.todoItemInput.value);

        this.todoArr.forEach(item => {
            if(item.toLowerCase() === this.todoItemInput.value.toLowerCase()) {
                found = true;
            }
        });
        
        if(!found) {
            this.todoList.innerHTML += `
            <li class="list-group-item">${this.todoItemInput.value}</li>
            `;
            this.todoArr.push(this.todoItemInput.value);
            // this.todoItemInput.value = '';
        }
    }

    completedTask() {
        for(let i = 0; i < this.todoListItems.length; i++) {
            this.todoListItems[i].addEventListener('click', (e) =>{
                e.target.style.textDecoration = 'line-through';
                e.target.classList.add('done');
            })
        }
    }

    hideDone() {
        this.button.addEventListener('click', () => {
            for(let i = 0; i < this.todoListItems.length; i++) {
                if(this.todoListItems[i].classList.contains('done')) {
                    this.todoListItems[i].style.display = 'none';
                }
            }
        })
    }
}

let action = new ToDo();
action.init();