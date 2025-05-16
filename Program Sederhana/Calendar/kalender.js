const monthYear = document.getElementById('month-year')
const dates = document.getElementById('dates')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let currentDate = new Date()
let currentMonth = currentDate.getMonth()
let currentYear = currentDate.getFullYear()

function renderCalendar() {
  dates.innerHTML = ''
  monthYear.textContent = `${new Date(currentYear, currentMonth).toLocaleString('default', {month: 'long'})} ${currentYear}`

  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate()

   for (let i = 0; i < firstDay; i++) {
    const li = document.createElement('li');
        li.className = 'empty';
        dates.appendChild(li);
   }

   for (let i = 1; i <= lastDate; i++) {
    const li = document.createElement('li')
    li.textContent = i 

    if (
      i ===currentDate.getDate() && 
      currentMonth === currentDate.getMonth() &&
      currentYear === currentDate.getFullYear()
    ) {
        li.className = 'today'      
    }
      dates.appendChild(li)
   }
}

prev.addEventListener('click', () => {
  currentMonth--
  if (currentMonth < 0) {
    currentMonth = 11 
    currentYear--
  }
  renderCalendar()
})

next.addEventListener('click', () => {
  currentMonth++
  if (currentMonth > 11) {
    currentMonth = 0 
    currentYear++
  }
  renderCalendar()
})
renderCalendar()