import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  console.log(inputText);
  createIncompList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomp-list").removeChild(target);
};

// console.log(addButton);
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => onClickAdd());

const createIncompList = (text) => {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "todo-topic";
  p.innerText = text;

  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    deleteFromIncompleteList(compButton.parentNode.parentNode);
    // console.log("comp");
    const addTarget = compButton.parentNode;
    const pText = addTarget.firstElementChild.innerText;
    p.innerText = pText;

    addTarget.textContent = null;
    console.log(addTarget);

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      const text = returnButton.parentNode.firstChild.innerText;
      const deleteTarget = returnButton.parentNode.parentNode;
      document.getElementById("comp-list").removeChild(deleteTarget);
      createIncompList(text);
    });

    div.appendChild(p);
    div.appendChild(returnButton);
    li.appendChild(div);
    console.log(compButton);
    console.log(compButton.parentNode);
    document.getElementById("comp-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    // console.log(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(compButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  if (text !== "") {
    document.getElementById("incomp-list").appendChild(li);
  }
};
