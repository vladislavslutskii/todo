import { createWrapper,createElement} from "../utils.js";
import todos from "../data.js";
import { liElement, addDecoration } from "./liElement.js";

function createNoteList(createLiElements, cssCLass = []) {
  const ul = document.createElement("ul");
  ul.classList.add(...cssCLass);
  ul.append(...createLiElements);

  return ul;
}

function updateNoteList(listElement, data) {
  listElement.innerHTML = "";
  const todoElements = data.map((element, index) => {
    return liElement(element, (element.id = index));
  });
  listElement.append(...todoElements);
}

function addNewList(listElement, data) {
  const todoElements = data.map((element, index) => {
    return liElement(element);
  });
  listElement.append(...todoElements);
}

const todo = todos.map(liElement);
const TodoList = createNoteList(todo, [`first-block-item`])

export {TodoList, addNewList, updateNoteList}