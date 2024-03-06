/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfTheWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfTheWeek) => {
  return day === DayOfTheWeek.Saturday || day === DayOfTheWeek.Sunday;
};

console.log(isWeekend(DayOfTheWeek.Saturday));
