import "../scss/app.scss";
import pluck from "ramda/src/pluck";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];

  const pluckArr = pluck("class", arrayToPluck);
  console.log(pluckArr);

  const articles = document.querySelectorAll("article");
  let count = 0;

  articles.forEach((e) => {
    e.classList.add(pluckArr[count]);
    count++;
  });
});
