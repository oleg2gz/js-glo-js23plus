const cars = document.getElementById('cars')
const out = document.getElementById('out')

const db = './db/db.json'

const fetchData = (url) => {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(res.status)
    }
    return res.json()
  })
}

const printOut = ({ brand, model, price }) => {
  out.textContent = `Тачка ${brand} ${model}  `
  out.insertAdjacentHTML('beforeend', `<p>Цена: ${price}$</p>`)
}

const getCarInfo = async (e) => {
  const model = e.target.options[e.target.selectedIndex].value

  if (!model) {
    out.textContent = 'выбери тачку'
    return
  }

  try {
    const response = await fetchData(db)
    const car = response.cars.find((car) => car.model === model)
    printOut(car)
  } catch (err) {
    out.textContent = `Что-то пошло не так: ${err.message}`
  }
}

const renderOptions = (data) => {
  data?.cars?.forEach(({ brand, model }) => {
    const option = document.createElement('option')
    option.textContent = brand
    option.value = model
    cars.append(option)
  })
}

cars.addEventListener('change', getCarInfo)

fetchData(db)
  .then(renderOptions)
  .catch((err) => {
    out.textContent = `Что-то пошло не так: ${err.message}`
  })
