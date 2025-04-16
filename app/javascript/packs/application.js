require("@popperjs/core")

// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//import "@hotwired/turbo-rails"
import * as bootstrap from "bootstrap"
import "../stylesheets/application.scss";


document.addEventListener("turbolinks:load", () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
})

console.log("Blogstrap carregado com sucesso!")