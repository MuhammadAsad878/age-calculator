document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  calculateAge();
});

function daysInMonth(y, m) {
  return new Date(y, m, 0).getDate();
}

function calculateAge() {
  let day = parseInt(document.querySelector("#day").value);
  let month = parseInt(document.querySelector("#month").value);
  let year = parseInt(document.querySelector("#year").value);
  let result = document.querySelector("#result");

  if (
    !day ||
    !month ||
    !year ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > daysInMonth(year, month)
  ) {
    result.textContent = "Invalid date!";
    return;
  }

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yy = today.getFullYear();

  if (
    year > yy ||
    (year === yy && (month > mm || (month === mm && day > dd)))
  ) {
    result.textContent = "Date is in the future!";
    return;
  }

  let years = yy - year;
  let months = mm - month;
  let days = dd - day;

  if (days < 0) {
    months--;
    let bm = mm - 1;
    let by = yy;
    if (bm === 0) {
      bm = 12;
      by--;
    }
    days += daysInMonth(by, bm);
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `You are ${years} years, ${months} months, ${days} days old.`;
}
