const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", () => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  const newSpanEl = document.createElement("span");
  newSpanEl.style.left = xPos + "px";
  newSpanEl.style.top = yPos + "px";

  bodyEl.appendChild(newSpanEl);
  const sizeOfHeart = Math.random() * 100;
  newSpanEl.style.width = sizeOfHeart + "px";
  newSpanEl.style.height = sizeOfHeart + "px";

  setTimeout(() => {
    newSpanEl.remove();
  }, 4000);
});

bodyEl.addEventListener("touchmove", () => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  const newSpanEl = document.createElement("span");
  newSpanEl.style.left = xPos + "px";
  newSpanEl.style.top = yPos + "px";

  bodyEl.appendChild(newSpanEl);
  const sizeOfHeart = Math.random() * 100;
  newSpanEl.style.width = sizeOfHeart + "px";
  newSpanEl.style.height = sizeOfHeart + "px";

  setTimeout(() => {
    newSpanEl.remove();
  }, 4000);
});
