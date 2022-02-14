const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoContainer = document.querySelector('.todo-container')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
const template = document.querySelector('template')
let todoData = []

const todoLoad = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const todoSave = () => {
  localStorage.setItem('todos', JSON.stringify(todoData))
}

const todoRender = ({ id, text, completed }) => {
  const todoClone = template.content.cloneNode(true)
  todoClone.querySelector('li').dataset.todoId = id
  todoClone.querySelector('.text-todo').textContent = text
  completed ? todoCompleted.append(todoClone) : todoList.append(todoClone)
}

const todoContainerCleaner = () => {
  const todos = todoContainer.querySelectorAll('.todo-item') || []
  todos.forEach((todo) => todo.remove())
}

const todoHandleComplete = (id) => {
  const todo = todoData.find((todo) => todo.id === id)
  todo.completed = !todo.completed
  todoSave()
  todoContainerCleaner()
  todoData.forEach(todoRender)
}

const todoHandleDelete = (elem, id) => {
  todoData = todoData.filter((todo) => todo.id !== id)
  todoSave()
  elem.remove()
}

todoControl.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!headerInput.value) return

  const newTodo = {
    text: headerInput.value,
    completed: false,
    id: new Date().valueOf().toString(),
  }

  todoData.push(newTodo)
  todoSave()
  todoRender(newTodo)
  headerInput.value = ''
})

todoContainer.addEventListener('click', (e) => {
  if (!e.target.closest('.todo-complete, .todo-remove')) return

  const todo = e.target.closest('.todo-item')
  const { todoId } = todo.dataset

  if (e.target.closest('.todo-complete')) todoHandleComplete(todoId)
  if (e.target.closest('.todo-remove')) todoHandleDelete(todo, todoId)
})

todoData = todoLoad()
todoData.forEach(todoRender)
