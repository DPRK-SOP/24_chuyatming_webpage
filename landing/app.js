let isImageClicked = false;

document.body.addEventListener("click", (event) => {
  const clickedElement = event.target,
    imgs = document.querySelectorAll(".img"),
    imgButtons = document.querySelectorAll(".img-button");

  // Handle image clicks
  if (clickedElement.classList.contains("img")) {
    if (!isImageClicked) {
      // Enlarge the clicked image
      imgs.forEach((img) => img.classList.remove("open"));
      clickedElement.classList.add("open");
      isImageClicked = true;
    } else {
      // Redirect to Google
      window.location.href = "https://www.google.com/";
    }
  } else {
    // Reset the enlarged image
    imgs.forEach((img) => img.classList.remove("open"));
    isImageClicked = false;
  }
});