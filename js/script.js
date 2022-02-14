const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoContainer = document.querySelector('.todo-container')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
let todoData = []

// const todoBtns = document.querySelectorAll('.todo-buttons')

const todoLoad = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const todoSave = () => {
  localStorage.setItem('todos', JSON.stringify(todoData))
}

const todoRender = () => {
  todoList.innerHTML = ''
  todoCompleted.innerHTML = ''

  todoData.forEach(({ id, text, completed }) => {
    const li = document.createElement('li')
    li.classList.add('todo-item')
    li.innerHTML = `<span class="text-todo">${text}</span>
          <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
          </div>`
    li.dataset.todoId = id
    completed ? todoCompleted.append(li) : todoList.append(li)
  })
}

todoData = todoLoad()

todoControl.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!headerInput.value) return

  const newTodo = {
    text: headerInput.value,
    completed: false,
    id: new Date().valueOf(),
  }

  todoData.push(newTodo)
  todoSave()
  todoRender()
  headerInput.value = ''
})

todoContainer.addEventListener('click', (e) => {
  const target = e.target

  if (target.closest('.todo-complete')) {
    target.completed = !target.completed
  }
  if (target.closest('.todo-remove')) {
    target.closest('.todo-item').remove()
  }
  console.log(target)
  todoSave()
  todoRender()
})

// '.todo-remove'
// '.todo-complete

/* 1. Отмечать выполненные дела и перемещать в блок с выполненными делами (по видео)
4. Удаление дел на кнопку КОРЗИНА */

todoRender()
