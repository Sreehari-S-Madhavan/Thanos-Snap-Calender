const daysContainer = document.getElementById('daysContainer');
const monthYear = document.getElementById('monthYear');
const eventInput = document.getElementById('eventInput');
const eventDate = document.getElementById('eventDate');
const addEventButton = document.getElementById('addEventButton');
const eventList = document.getElementById('eventList');
const snapButton = document.getElementById('snapButton');

let currentDate = new Date();

function renderCalendar() {
    daysContainer.innerHTML = '';
    monthYear.innerText = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        daysContainer.appendChild(emptyDay);
    }

    for (let day = 1; day <= lastDateOfMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.innerText = day;
        dayElement.onclick = () => addEvent(day);
        daysContainer.appendChild(dayElement);
    }
}

function addEvent(day) {
    const eventName = eventInput.value;
    const eventDateValue = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;

    if (eventName && eventDateValue === eventDate.value) {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerText = `${eventName} on ${eventDateValue}`;
        eventList.appendChild(eventElement);
        eventInput.value = '';
        eventDate.value = '';
    } else {
        alert("Please enter a valid event name and date.");
    }
}

snapButton.addEventListener('click', () => {
    snapButton.classList.add('snap-animation');
    setTimeout(() => {
        snapButton.classList.remove('snap-animation');
    }, 500);
});

renderCalendar();
