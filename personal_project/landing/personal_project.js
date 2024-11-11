document.body.addEventListener("click", (event) => {
  const clickedElement = event.target,
      imgs = document.querySelectorAll(".img");

  // Check if the clicked element is a button and allow it to work
  if (clickedElement.tagName === "BUTTON") {
      return; // Allow button click to proceed
  }

  // If clicked element is not an image, remove the "open" class
  if (!clickedElement.classList.contains("img")) {
      imgs.forEach((img) => img.classList.remove("open"));
      return;
  }

  // Toggle the "open" class for the clicked image
  if (clickedElement.classList.contains("open")) {
      clickedElement.classList.remove("open");
  } else {
      imgs.forEach((img) => img.classList.remove("open"));
      clickedElement.classList.add("open");
  }
  function A1() {
    console.log("Button 1 clicked");
    window.location.href = 'https://www.yahoo.com.hk';
}
});