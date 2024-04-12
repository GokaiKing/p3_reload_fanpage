document.querySelectorAll(".carrousel").forEach((carrousel) => {
    const items = carrousel.querySelectorAll(".SEES-container");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carrousel-button"></span>`;
    });
  
    carrousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carrousel-nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carrousel.querySelectorAll(".carrousel-button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("SEES-container-select")
        );
        buttons.forEach((button) =>
          button.classList.remove("carrousel-button-select")
        );
  
        items[i].classList.add("SEES-container-select");
        button.classList.add("carrousel-button-select");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("SEES-container-select");
    button[0].classList.add("carrousel-button-select");
  });

