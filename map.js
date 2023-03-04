const data = [
  {
    id: 1,
    name: "Bakı",
    trees: 2600,
  },
  {
    id: 2,
    name: "Sumqayıt",
    trees: 1200,
  },
  {
    id: 3,
    name: "Xızı",
    trees: 800,
  },
  {
    id: 4,
    name: "Abşeron",
    trees: 700,
  },
  {
    id: 5,
    name: "Siyəzən",
    trees: 400,
  },
  {
    id: 6,
    name: "Şabran",
    trees: 2300,
  },
  {
    id: 7,
    name: "Xaçmaz",
    trees: 4650,
  },
  {
    id: 8,
    name: "Xudat",
    trees: 340,
  },
  {
    id: 9,
    name: "Qusar",
    trees: 879,
  },
  {
    id: 10,
    name: "Quba",
    trees: 460,
  },
  {
    id: 11,
    name: "Qobustan",
    trees: 1200,
  },
  {
    id: 12,
    name: "Ağsu",
    trees: 400,
  },
  {
    id: 13,
    name: "Hacıqabul",
    trees: 780,
  },
  {
    id: 14,
    name: "Salyan",
    trees: 780,
  },
];
let regionSpan = document.getElementById("regionSpan");
let treeSpan = document.getElementById("treeSpan");
let modal = document.querySelector(".sec4Map .modal");
let closeModal = document.querySelector(".sec4Map .modal .closeModal");
let path = document.querySelectorAll("path").forEach((e) => {
  e.addEventListener("click", () => {
    [...document.querySelectorAll("path")].map((p) =>
      p.classList.remove("fillPath")
    );
    modal.classList.add("modalClosed");
    modal.classList.remove("modalShow");
    data.map((data) => {
      if (data.name.toLowerCase() == e.id.toLowerCase()) {
        regionSpan.textContent = data.name;
        treeSpan.textContent = data.trees;
        modal.classList.remove("modalClosed");
        modal.classList.add("modalShow");
        e.classList.add("fillPath");
      }
    });
    console.log(e.id);
  });

  closeModal.addEventListener("click", () => {
    e.classList.remove("fillPath");
    modal.classList.add("modalClosed");
    modal.classList.remove("modalShow");
  });
});


