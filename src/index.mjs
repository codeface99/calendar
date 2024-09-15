import "./styles.css";

// Calendar component
function createCalendar() {
  const calendarContainer = document.getElementById("calendar-container");

  // Current date
  let currentDate = new Date();

  // Create the calendar
  function renderCalendar(date) {
    // Clear previous calendar
    calendarContainer.innerHTML = "";

    // Get month and year
    const month = date.getMonth();
    const year = date.getFullYear();

    // Create calendar header
    const header = document.createElement("div");
    header.className = "calendar-header";

    const prevButton = document.createElement("button");
    prevButton.className = "nav-button";
    prevButton.innerText = "<";
    prevButton.onclick = () => changeMonth(-1);

    const nextButton = document.createElement("button");
    nextButton.className = "nav-button";
    nextButton.innerText = ">";
    nextButton.onclick = () => changeMonth(1);

    const monthYear = document.createElement("div");
    monthYear.innerText = `${date.toLocaleString("default", {
      month: "long",
    })} ${year}`;

    header.appendChild(prevButton);
    header.appendChild(monthYear);
    header.appendChild(nextButton);

    // Add header to calendar container
    calendarContainer.appendChild(header);

    // Create calendar grid
    const grid = document.createElement("div");
    grid.className = "calendar-grid";

    // Weekday names
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekdays.forEach((day) => {
      const dayElement = document.createElement("div");
      dayElement.className = "calendar-day";
      dayElement.innerText = day;
      grid.appendChild(dayElement);
    });

    // Get the first and last days of the month
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Get the first day of the week for the first day of the month
    const startDayOfWeek = firstDayOfMonth.getDay();

    // Add blank days before the first day of the month
    for (let i = 0; i < startDayOfWeek; i++) {
      const blankDay = document.createElement("div");
      grid.appendChild(blankDay);
    }

    // Add days of the month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const dateElement = document.createElement("div");
      dateElement.className = "calendar-date";
      dateElement.innerText = i;

      // Highlight current date
      if (
        i === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
      ) {
        dateElement.classList.add("current-date");
      }

      grid.appendChild(dateElement);
    }

    // Add grid to calendar container
    calendarContainer.appendChild(grid);
  }

  // Change month
  function changeMonth(step) {
    currentDate.setMonth(currentDate.getMonth() + step);
    renderCalendar(currentDate);
  }

  // Initial render
  renderCalendar(currentDate);
}

// Initialize calendar
createCalendar();
