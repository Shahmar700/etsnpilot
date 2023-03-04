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

// Hover Effect For News

$(".oneCard").mouseenter(function () {
  $(".oneCard").addClass("addBlur");
});
$(".oneCard").mouseleave(function () {
  $(".oneCard").removeClass("addBlur");
});

// Counter Animation

let sectionCounter = document.querySelector("#sectionCounter");
let counters = document.querySelectorAll(".statistics .counter");

// Scroll Animation For Counter

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 100;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = "";
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
  },
  {
    root: null,
    threshold: 0.4,
  }
);

CounterObserver.observe(sectionCounter);
