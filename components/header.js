import { createWrapper,createElement} from "../utils.js";

export const delete_all = createElement(`button`, {}, [`delete_all`], `Delete All`);
export const searchElem = createElement(`input`, {
type: `text`,
placeholder: `Enter todo...`
}, [`entertodo`]);
export const addbutton = createElement(`button`, {}, [`add`], `Add`);