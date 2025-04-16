require("@popperjs/core")

import "bootstrap"
import Turbolinks from 'turbolinks'
import "../stylesheets/application.scss"

import { Tooltip, Popover} from bootstrap

document.addEventListener("turbolinks:load", () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})


console.log("Blogstrap carregado com sucesso!")