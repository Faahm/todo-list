import "./style.css";
import modal from "./modules/modal";
import state from "./modules/state";
import storage from "./modules/storage";
import ui from "./modules/ui";

// task. is added to avoid any collisions/conflicts with the system files and websites
const LOCAL_STORAGE_PROJECTS_KEY = state.getLocalStorageProjectsKey();
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY =
  state.getLocalStorageSelectedProjectIdKey();
let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

const projectsContainer = document.querySelector("[data-projects]");
const newProjectForm = document.querySelector("[data-new-project-form]");
const newProjectInput = document.querySelector("[data-new-project-input]");
const deleteProjectButton = document.querySelector(
  "[data-delete-project-button]"
);
const projectDisplayContainer = document.querySelector(
  "[data-project-display-container]"
);
const projectTitleElement = document.querySelector("[data-project-title]");
const todosContainer = document.querySelector("[data-tasks]");
const newTodoForm = document.querySelector("[data-new-todo-form]");
const newTodoTitle = document.querySelector("[data-new-todo-title]");
const newTodoDescription = document.querySelector(
  "[data-new-todo-description]"
);
const newTodoDueDate = document.querySelector("[data-new-todo-due]");
const newTodoPriority = document.querySelector("[data-new-todo-priority]");
const clearCompleteTodosButton = document.querySelector(
  "[data-clear-complete-tasks-button]"
);

modal.setupOverlayListener();
modal.setupEscapeListener();

function handleTodoItemCheck(e) {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    const selectedTask = selectedProject.todos.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    storage.save();
  }
}

function handleDeleteProject() {
  const projectIndex = projects.findIndex(
    (project) => project.id === selectedProjectId
  );

  projects = projects.filter((project) => project.id !== selectedProjectId);
  state.setProjects(projects);

  let newSelectedProjectId = null;
  if (projects.length > 0) {
    if (projectIndex > 0) {
      newSelectedProjectId = projects[projectIndex - 1].id;
    } else {
      newSelectedProjectId = projects[0].id;
    }
  }
  selectedProjectId = newSelectedProjectId;
  saveAndRender();
}

function handleClearCompleteTodos() {
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  selectedProject.todos = selectedProject.todos.filter(
    (task) => !task.complete
  );
  saveAndRender();
}

function handleNewProjectSubmit(e) {
  e.preventDefault();
  const projectName = newProjectInput.value;
  if (projectName == null || projectName === "") return;
  const project = createProject(projectName);
  newProjectInput.value = null;
  projects.push(project);
  state.setProjects(projects);
  selectedProjectId = project.id;
  state.setSelectedProjectId(selectedProjectId);
  saveAndRender();
}

function handleNewTodoSubmit(e) {
  e.preventDefault();
  const todoTitle = newTodoTitle.value;
  const todoDescription = newTodoDescription.value;
  const todoDueDate = newTodoDueDate.value;
  const todoPriority = newTodoPriority.value;

  if (todoTitle == null || todoTitle === "") return;

  const task = createTodo(
    todoTitle,
    todoDescription,
    todoDueDate,
    todoPriority
  );
  newTodoTitle.value = null;
  newTodoDescription.value = null;
  newTodoDueDate.value = null;
  newTodoPriority.value = null;
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  selectedProject.todos.push(task);
  saveAndRender();
  modal.closeModal("new-todo");
  console.log(projects);
}

function createProject(title) {
  return {
    id: Date.now().toString(),
    title: title,
    todos: [],
  };
}

function createTodo(title, description, dueDate, priority) {
  return {
    id: Date.now().toString(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    complete: false,
  };
}

function saveAndRender() {
  storage.save();
  render();
}

function render() {
  ui.clearElement(projectsContainer);
  ui.renderProjects();

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  if (selectedProjectId == null || selectedProject == null) {
    projectDisplayContainer.style.display = "none";
  } else {
    projectDisplayContainer.style.display = "";
    projectTitleElement.innerText = selectedProject.title;
    ui.clearElement(todosContainer);
    ui.renderTodos(selectedProject);
  }
}

projectsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedProjectId = e.target.dataset.projectId;
    saveAndRender();
  }
});

todosContainer.addEventListener("click", handleTodoItemCheck);
newProjectForm.addEventListener("submit", handleNewProjectSubmit);
deleteProjectButton.addEventListener("click", handleDeleteProject);
newTodoForm.addEventListener("submit", handleNewTodoSubmit);
clearCompleteTodosButton.addEventListener("click", handleClearCompleteTodos);

render();
