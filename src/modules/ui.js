import state from "./state";

const projectsContainer = document.querySelector("[data-projects]");
const todosContainer = document.querySelector("[data-tasks]");
const todoTemplate = document.getElementById("todo-template");

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

export default {
  todosContainer,
  clearElement,
  renderProjects,
  renderTodos,
};
