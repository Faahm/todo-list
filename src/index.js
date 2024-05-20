import "./style.css";
import modal from "./modules/modal";
import state from "./modules/state";
import storage from "./modules/storage";
import ui from "./modules/ui";
import projectFunctions from "./modules/projectFunctions";
import todoFunctions from "./modules/todoFunctions";

modal.setupOverlayListener();
modal.setupEscapeListener();

ui.render();
