const section = document.createElement("div");
section.classList.add(`container`);
section.setAttribute(`id`, `root`);
document.body.append(section);

import { createWrapper } from "./utils.js";
import { delete_all, searchElem, addbutton } from "./components/header.js";
import { TodoList, addNewList, updateNoteList } from "./components/list.js";
import todos from "./data.js";

const sectionheader = createWrapper(
  `div`,
  [delete_all, searchElem, addbutton],
  [`section-header`]
);

const sectionblock = createWrapper(`div`, [TodoList], [`section-block`]);

addbutton.addEventListener(`click`, () => {
  let val = searchElem.value;
  if (val.length === 0) {
    alert(`Нужно что-нибудь ввести`);
    return;
  }
  todos.push({
    id: 0,
    text: val,
    date: taskDate(),
    isCheck: false,
  });
  todos.map((element, index) => (element["id"] = index));

  localStorage.setItem("tasks", JSON.stringify(todos));

  TodoList.innerHTML = "";
  addNewList(TodoList, todos);
  searchElem.value = ``;
});

delete_all.addEventListener(`click`, () => {
  todos.length = 0;
  updateNoteList(TodoList, todos);
  localStorage.setItem("tasks", JSON.stringify(todos));
});

function deleteTask(evt) {
  const target = evt.target;
  const index = target.offsetParent.id;
  if (target.className === "X_button") {
    todos.splice(index, 1);
    updateNoteList(TodoList, todos);
  }
  localStorage.setItem("tasks", JSON.stringify(todos));
}

const taskDate = () => {
  let data = new Date().toLocaleString();
  return data;
};

function addCheked(evt) {
  const target = evt.target;
  const index = target.offsetParent.id;
  if (target.checked) {
    todos[index].isCheck = true;
    updateNoteList(TodoList, todos);
  } else {
    todos[index].isCheck = false;
    updateNoteList(TodoList, todos);
  }
  localStorage.setItem("tasks", JSON.stringify(todos));
}

TodoList.addEventListener(`click`, deleteTask, true);
TodoList.addEventListener(`click`, addCheked, true);
section.append(sectionheader, sectionblock);
