let noOfCharacter = 180;
let contents = document.querySelectorAll(".oneCardInfo .content");

contents.forEach((c) => {
  let displayText = c.textContent.slice(0, noOfCharacter);
  let moreText = c.textContent.slice(noOfCharacter);
  c.innerHTML = `${displayText}<span class="dots">...</span><span class="hideMore">${moreText}</span>`;
});

let loadMoreBtn = document.getElementById("loadMore");
let currentItems = 6;

loadMoreBtn.addEventListener("click", () => {
  let [...cards] = document.querySelectorAll(".sec6Cards .oneCard");
  for (let i = currentItems; i < currentItems + 3; i++) {
    cards[i].style.display = "inline-block";
  }
  currentItems += 3;

  if (currentItems >= cards.length) {
    loadMoreBtn.style.display = "none";
  }
});
