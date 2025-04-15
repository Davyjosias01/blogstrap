import "bootstrap"
import "../stylesheets/application.scss"


// Ativando tooltips do Bootstrap
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})

console.log("Blogstrap carregado com sucesso!")
console.log("Application JS carregado!");
