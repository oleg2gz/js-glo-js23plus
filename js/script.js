const formOne = document.getElementById('form-one')
const formTwo = document.getElementById('form-two')
const inputStatusOne = document.getElementById('status-one')
const inputStatusTwo = document.getElementById('status-two')
const inputResponseOne = document.getElementById('response-one')
const inputResponseTwo = document.getElementById('response-two')

const db = './db/db.json'
const url = 'https://jsonplaceholder.typicode.com/posts'

const setStatus = (elem, message, status) => {
  elem.className = status
  elem.value = message
}

const fetchData = (url, method, data) => {
  let options

  if (data) {
    options = {
      method: method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    }
  }

  return fetch(url, options).then((res) => {
    if (!res.ok) {
      throw new Error(res.status)
    }
    return res.json()
  })
}

const handleFetch = (e) => {
  e.preventDefault()

  fetchData(db)
    .then((data) => {
      if (data) {
        return fetchData(url, 'POST', data)
      }
    })
    .then((_) => {
      setStatus(inputStatusOne, '201', 'success')
      setStatus(inputResponseOne, 'Post added', 'success')
    })
    .catch((err) => {
      setStatus(inputStatusOne, err.message, 'error')
      setStatus(inputResponseOne, 'Network or fetch error', 'error')
    })
}

const requestHttpData = (url, method, data = null) => {
  if (data) {
    data = JSON.stringify(data)
  }
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = 'json' // 'text'
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject({ status: xhr.status, reason: 'Not Found' })
      } else {
        resolve({
          content: xhr.response,
          status: xhr.status,
          reason: 'Post added',
        })
      }
    }
    xhr.onerror = () => {
      reject({ status: xhr.status, reason: 'Network error' })
    }
    xhr.send(data)
  })
}

const handleXMLHttpRequest = (e) => {
  e.preventDefault()

  requestHttpData(db, 'GET')
    .then((res) => {
      return requestHttpData(url, 'POST', res.content)
    })
    .then((res) => {
      setStatus(inputStatusTwo, res.status, 'success')
      setStatus(inputResponseTwo, res.reason, 'success')
    })
    .catch((err) => {
      setStatus(inputStatusTwo, err.status, 'error')
      setStatus(inputResponseTwo, err.reason, 'error')
    })
}

formOne.addEventListener('submit', handleFetch)
formTwo.addEventListener('submit', handleXMLHttpRequest)
