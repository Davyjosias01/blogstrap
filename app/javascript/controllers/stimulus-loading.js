// app/javascript/controllers/stimulus-loading.js

export function eagerLoadControllersFrom(containers, application) {
    containers.forEach((container) => {
      container.querySelectorAll("[data-controller]").forEach((element) => {
        application.load(element.getAttribute("data-controller"))
      })
    })
  }
  