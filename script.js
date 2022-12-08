"use strict";

const containerQuestion = document.querySelector(".question");
const containerThanks = document.querySelector(".thanks");
const radioBtns = [...document.querySelectorAll("input")];
const btnSubmit = document.querySelector(".btn-submit");
const labelRating = document.querySelector(".rating");
const errorMessage = document.querySelector(".error");

let rating = 0;

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  radioBtns.forEach((radio) => {
    if (radio.checked) {
      rating = radio.value;
    }
  });
  if (rating) {
    containerQuestion.classList.toggle("hidden");
    containerThanks.classList.toggle("hidden");
    labelRating.textContent = rating;
  } else {
    errorMessage.classList.remove("hidden");
  }
});
