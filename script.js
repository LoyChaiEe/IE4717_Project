const buttons = document.querySelectorAll("[data-carousel-button]")

//document.addEventListener(event(usually "click", but can be other), function(what does the onClick do"), Capture(optional))
//list of event: https://www.w3schools.com/jsref/dom_obj_event.asp
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // the following below show how to do DOM manipulation using the .dataset property
    /* In the html code the attribute is data-carousel-button, where data-carousel-button is given a value. 
       Thus to find the value button with the specific attribute is:
       element.dataset.nameOfAttribute (where name of attribute is the name you given after data-, also if you must name it in camelCase)
    */ 
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    console.log(button.dataset.carouselButton)
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    else if (newIndex >= slides.children.length) newIndex = 0
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})