import state from "./state";
import storage from "./storage";
import projectFunctions from "./projectFunctions";

const projectsContainer = document.querySelector("[data-projects]");
const todosContainer = document.querySelector("[data-tasks]");
const todoTemplate = document.getElementById("todo-template");
const projectDisplayContainer = document.querySelector(
  "[data-project-display-container]"
);
const projectTitleElement = document.querySelector("[data-project-title]");
const projectTitleEditBtn = document.querySelector(
  "[data-project-title-edit-btn]"
);

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderProjects() {
  const projects = state.getProjects();
  projects.forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.dataset.projectId = project.id;
    projectItem.classList.add("project-item");
    projectItem.innerText = project.title;
    projectsContainer.appendChild(projectItem);
  });
}

function renderTodos(selectedProject) {
  selectedProject.todos.forEach((todo) => {
    const todoElement = document.importNode(todoTemplate.content, true);
    const checkbox = todoElement.querySelector("input");
    checkbox.id = todo.id;
    checkbox.checked = todo.complete;
    const label = todoElement.querySelector("label");
    label.htmlFor = todo.id;
    label.append(todo.title);
    const dueDate = todoElement.getElementById("due");
    dueDate.innerText = `Due date: ${todo.dueDate}`;
    const priority = todoElement.getElementById("priority");
    priority.style.backgroundColor = todo.priority;

    todosContainer.appendChild(todoElement);
  });
}

function render() {
  clearElement(projectsContainer);
  renderProjects();
  const projects = state.getProjects();
  const selectedProjectId = state.getSelectedProjectId();

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  if (selectedProjectId == null || selectedProject == null) {
    projectDisplayContainer.style.display = "none";
  } else {
    projectDisplayContainer.style.display = "";
    projectTitleElement.innerText = selectedProject.title;
    clearElement(todosContainer);
    renderTodos(selectedProject);
  }
}

function handleEditProjectTitle() {
  const isEditing = projectTitleEditBtn.innerText === "Save";
  if (isEditing) {
    const projectTitleInput = document.querySelector(".project-title-input");
    const newTitle = projectTitleInput.value.trim();
    if (newTitle && newTitle !== projectTitleElement.innerText) {
      projectFunctions.updateProjectTitle(
        state.getSelectedProjectId(),
        newTitle
      );
    }
    projectTitleElement.style.display = "block";
    projectTitleEditBtn.innerText = "Edit";
    projectTitleInput.remove();
    render();
  } else {
    const projectTitle = projectTitleElement.innerText;
    projectTitleElement.style.display = "none";

    const projectTitleInput = document.createElement("input");
    projectTitleInput.type = "text";
    projectTitleInput.value = projectTitle;
    projectTitleInput.classList.add("project-title-input");

    projectTitleElement.parentElement.insertBefore(
      projectTitleInput,
      projectTitleEditBtn
    );
    projectTitleInput.focus();
    projectTitleEditBtn.innerText = "Save";
    projectTitleInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        projectTitleEditBtn.click();
      }
    });
  }
}

projectTitleEditBtn.addEventListener("click", handleEditProjectTitle);

projectsContainer.addEventListener("click", (e) => {
  let selectedProjectId = state.getSelectedProjectId();
  if (e.target.tagName.toLowerCase() === "li") {
    selectedProjectId = e.target.dataset.projectId;
    state.setSelectedProjectId(selectedProjectId);
    storage.save();
    render();
  }
});

export default {
  todosContainer,
  clearElement,
  renderProjects,
  renderTodos,
  render,
};
