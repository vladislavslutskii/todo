import { createWrapper, createElement } from "../utils.js";
import todos from "../data.js";

export const liElement = ({ id, text, date, isCheck, cssClass }) => {
  const checkbox = createElement(
    `input`,
    {
      type: `checkbox`,
    },

    [`checkbox`]
  );

  const description = createElement(
    `input`,
    { type: `text`, placeholder: `Description` },
    [`input_text`],
    text
  );
  description.value = text;
  const xbutton = createElement(`button`, {}, [`X_button`], `X`);
  const dateEl = createElement(`input`, { type: `text`, placeholder: `Date` }, [
    `date_button`,
  ]);
  dateEl.value = date;
  const text_section = createWrapper(
    "div",
    [xbutton, dateEl],
    [`text-section`]
  );

  const first_task = createWrapper(
    "li",
    [checkbox, description, text_section],
    [`first-task`]
  );
  first_task.id = id;
  addDecoration(checkbox, first_task, description, dateEl, isCheck);
  return first_task;
};

export function addDecoration(element, element1, element2, element3, isCheck) {
  if (isCheck === true) {
    element.setAttribute(`checked`, isCheck);
    element1.style.backgroundColor = "red";
    element2.style.textDecoration = "line-through";
    element3.style.textDecoration = "line-through";
  } else if (isCheck === false) {
    element.setAttribute(`defaultChecked`, isCheck);
    element1.style.backgroundColor = "aeaeae";
    element2.style.textDecoration = "none";
    element3.style.textDecoration = "none";
  }
  localStorage.setItem("tasks", JSON.stringify(todos));
}
