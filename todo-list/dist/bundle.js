/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAbout: () => (/* binding */ renderAbout)\n/* harmony export */ });\n\n\n// About page content\n\nfunction renderAbout() {\n    let header = document.createElement('h1');\n    header.textContent = '📝 About this todo app';\n    header.classList.add('.projectHeader');\n    content.appendChild(header);\n\n    let p = document.createElement(\"p\");\n        p.innerHTML = `\n    <strong>This project</strong> is part of <em>The Odin Project</em> JavaScript curriculum.<br>\n    It is a simple to-do list application designed to practice <strong>DOM manipulation</strong>, \n    <strong>event handling</strong>, <strong>modular JavaScript code</strong>, and \n    <strong>composition over inheritance</strong>.<br>\n    The app allows users to <strong>create projects</strong>, <strong>add and manage tasks</strong>, \n        <strong>mark tasks as complete</strong>, and <strong>organize their to-dos visually</strong>.\n    `;\n    p.classList.add('aboutText');\n\n    content.appendChild(p);\n}\n\n//# sourceURL=webpack://todo-list/./src/about.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   createNewProject: () => (/* binding */ createNewProject),\n/* harmony export */   createNewTodo: () => (/* binding */ createNewTodo),\n/* harmony export */   defaultProject: () => (/* binding */ defaultProject)\n/* harmony export */ });\n\n\nclass Todo {\n    constructor(title, description, dueDate, priority, notes = ''){\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.complete = false;\n    }\n\n    toggleComplete () {\n        this.complete = !this.complete;\n    }\n}\n\nclass Project {\n    static instances = [];\n    constructor(name, color) {\n        this.name = name;\n        this.color = color;\n        this.todos = [];\n        Project.instances.push(this);\n    }\n\n    addTodo(todo) {\n        this.todos.push(todo);\n    }\n\n    removeTodo(index) {\n        this.todos.splice(index, 1)\n    }\n}\n\nconst defaultProject = new Project('Default');\n\nfunction createNewProject(name, color) {\n    return new Project(name, color);\n};\n\nfunction createNewTodo(title, description, dueDate, priority, notes = '') {\n    return new Todo(title, description, dueDate, priority, notes);\n};\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n// DOM stuff\n\nconsole.log(_app_js__WEBPACK_IMPORTED_MODULE_0__.defaultProject.todos);\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    renderProjects();\n    addProjectListeners();\n    addProjectButtonListener();\n});\n\nfunction addProjectButtonListener() {\n    let addProject = document.querySelector('.addProject');\n    addProject.addEventListener('click', addNewProject);\n}\n\nfunction addTodoButtonListener(index) {\n    const oldButton = document.querySelector('.addTodo');\n    const newButton = oldButton.cloneNode(true);\n    oldButton.replaceWith(newButton);\n\n    newButton.addEventListener('click', () => {\n        openTodoCreateModal();\n        createTodoButtonListener(index);\n    });\n}\n\nfunction renderProjects() {\n    // for each Project instance, create div,\n    // & insert the Project name into p inside div\n    // append all of it to #content\n\n    let content = document.querySelector('#content');\n\n    let header = document.createElement('h1');\n    header.textContent = 'Your projects';\n    header.classList.add('.projectHeader');\n\n    content.appendChild(header);\n\n    let addProject = document.createElement('button');\n    addProject.classList.add('addProject');\n    addProject.textContent = 'Add project';\n    content.appendChild(addProject);\n\n    _app_js__WEBPACK_IMPORTED_MODULE_0__.Project.instances.forEach((instance, index) => {\n        let div = document.createElement('div');\n        div.classList.add('projectDiv');\n        div.setAttribute('data-index', index);\n\n        let nameP = document.createElement('p');\n        let projectText = instance.name;\n        nameP.textContent = projectText;\n        nameP.classList.add(\"projectName\");\n\n        div.style.backgroundColor = instance.color;\n\n        content.appendChild(div);\n        div.appendChild(nameP);\n    });\n    addProjectButtonListener();\n}\n\nfunction addProjectListeners() {\n    document.querySelectorAll(\".projectDiv\").forEach((project) => {\n    project.addEventListener(\"click\", function(e) {\n        clearContent();\n        const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);\n        renderTodos(index);\n    });\n})};\n\nfunction clearContent() {\n    let content = document.querySelector('#content');\n    content.replaceChildren();\n}\n\nlet aboutBtn = document.querySelector('#aboutBtn');\naboutBtn.addEventListener('click', () => {\n    clearContent();\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_1__.renderAbout)();\n});\n\nlet projectsBtn = document.querySelector('#projectsBtn');\nprojectsBtn.addEventListener('click', () => {\n    clearContent();\n    renderProjects();\n    addProjectListeners();\n    let addProject = document.querySelector('.addProject');\n    addProject.addEventListener('click', addNewProject);\n});\n\nfunction addNewProject(){\n    let content = document.querySelector(\"#content\");\n    // create the div and the inputs and confirm button\n    let div = document.createElement(\"div\");\n    div.classList.add(\"addProjectDiv\");\n    let input = document.createElement('input');\n    let name = input.value;\n\n    let colorPicker = document.createElement('input');\n    colorPicker.type = 'color';\n    colorPicker.value = '#ff0000';\n\n    let button = document.createElement('button');\n    button.classList.add('createBtn');\n    button.textContent = 'Create';\n\n    button.addEventListener('click', createProject);\n    function createProject() {\n        const name = input.value.trim();\n        const colorValue = colorPicker.value;\n\n        if (!name) return;\n\n        (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(name, colorValue);\n        clearContent();\n        renderProjects();\n        addProjectListeners();\n        colorPicker.blur();\n    }\n    \n    div.appendChild(input);\n    div.append(colorPicker);\n    div.appendChild(button);\n    content.appendChild(div);\n};\n\nfunction renderTodos(index) {\n    clearContent();\n\n    const project = _app_js__WEBPACK_IMPORTED_MODULE_0__.Project.instances[index];\n\n    console.log(\"Project.instances:\", _app_js__WEBPACK_IMPORTED_MODULE_0__.Project.instances);\n    console.log(\"index:\", index);\n\n    let content = document.querySelector('#content');\n\n    let header = document.createElement('h1');\n    header.textContent = `${project.name} project's todos`;\n    header.classList.add('projectHeader');\n\n    content.appendChild(header);\n\n    let addTodo = document.createElement('button');\n    addTodo.classList.add('addTodo');\n    addTodo.textContent = 'Add todo';\n    content.appendChild(addTodo);\n\n    project.todos.forEach((todo, index) => {\n        let div = document.createElement(\"div\");\n        div.classList.add(\"todoDiv\");\n        div.setAttribute(\"data-index\", index);\n\n        switch (todo.priority) {\n            case 'high':\n                div.style.backgroundColor = '#ff3333';\n                break;\n            case 'medium':\n                div.style.backgroundColor = '#f5872e';\n                break;\n            case 'low':\n                div.style.backgroundColor = '#38dc28';\n                break;\n            default:\n                div.style.backgroundColor = '#828881';\n        }\n\n        let name = document.createElement(\"p\");\n        name.textContent = todo.title\n        name.classList.add(\"todoName\");\n\n        let duedate = document.createElement('p');\n        duedate.textContent = `Due: ${todo.dueDate}`;\n        duedate.classList.add('todoDue');\n\n        let checkbox = document.createElement('input');\n        checkbox.type = 'checkbox';\n        checkbox.classList.add('todoCheckbox');\n        checkbox.checked = todo.complete;\n\n        content.appendChild(div);\n        div.appendChild(name);\n        div.appendChild(duedate);\n        div.appendChild(checkbox);\n    });\n    addTodoButtonListener(index);\n    todoListeners(index);\n};\n\nfunction openTodoCreateModal() {\n    document.getElementById('todoName').value = '';\n    document.getElementById('description').value = '';\n    document.getElementById('duedate').value = '';\n    document.getElementById('priority').value = 'medium';\n    document.getElementById('notes').value = '';\n\n    modal.classList.remove(\"hidden\");\n    overlay.classList.remove(\"hidden\");\n};\n\nfunction addNewTodo(index) {\n    const project = _app_js__WEBPACK_IMPORTED_MODULE_0__.Project.instances[index];\n\n    if (!project) {\n        console.error(\"❌ Project is undefined at index:\", index);\n        return;\n    }\n\n    let todoName = document.getElementById('todoName');\n    let description = document.getElementById('description');\n    let duedate = document.getElementById('duedate');\n    let priority = document.getElementById('priority');\n    let notes = document.getElementById(\"notes\");\n    let checkbox = document.getElementById('modalCheckbox');\n    // checkbox here\n    let newTodo = (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.createNewTodo)(\n        todoName.value,\n        description.value,\n        duedate.value,\n        priority.value,\n        notes.value,\n        checkbox.checked\n    );\n    project.addTodo(newTodo);\n    \n    renderTodos(index);\n    // close modal\n    modal.classList.add('hidden');\n    overlay.classList.add('hidden');\n};\n\n// Modal stuff\n\nconst closeBtn = document.getElementById('closeModalBtn');\nconst modal = document.getElementById('modal');\nconst overlay = document.getElementById('overlay');\n\ncloseBtn.addEventListener('click', () => {\n    modal.classList.add('hidden');\n    overlay.classList.add('hidden');\n});\n\nfunction createTodoButtonListener(index) {\n    let oldCreate = document.querySelector(\"#createTodo\");\n    const newCreate = oldCreate.cloneNode(true);\n    oldCreate.replaceWith(newCreate);\n    newCreate.addEventListener(\"click\", () => addNewTodo(index));\n}\n\nfunction todoListeners(projectIndex) {\n    document.querySelectorAll(\".todoDiv\").forEach((project) => {\n    project.addEventListener(\"click\", function(e) {\n        const todoIndex = parseInt(e.currentTarget.getAttribute('data-index'), 10);\n        const project = _app_js__WEBPACK_IMPORTED_MODULE_0__.Project.instances[projectIndex];\n        const todo = project.todos[todoIndex];\n        if (e.target.tagName.toLowerCase() === 'input' && e.target.type === 'checkbox') {\n            if (e.target.checked) {\n                todo.complete = true;\n            } else {\n                todo.complete = false;\n            }\n            return;\n        }\n        expandTodo(projectIndex, todoIndex);\n    });\n})};\n\nfunction expandTodo(projectIndex, todoIndex) {\n    const project = _app_js__WEBPACK_IMPORTED_MODULE_0__.Project.instances[projectIndex];\n    const todo = project.todos[todoIndex];\n    \n    document.getElementById('todoName').value = todo.title;\n    document.getElementById('description').value = todo.description;\n    document.getElementById('duedate').value = todo.dueDate;\n    document.getElementById('priority').value = todo.priority;\n    document.getElementById('notes').value = todo.notes;\n    const modalCheckbox = document.getElementById('modalCheckbox');\n    modalCheckbox.checked = todo.complete;\n    \n    modalCheckbox.onchange = (e) => {\n        todo.complete = e.target.checked;\n        renderTodos(projectIndex);\n    }\n\n    modal.classList.remove(\"hidden\");\n    overlay.classList.remove(\"hidden\");\n\n    let oldButton = document.querySelector('#createTodo');\n    const newButton = oldButton.cloneNode(true);\n    oldButton.replaceWith(newButton);\n\n    newButton.addEventListener('click', function(e) {\n        todo.title = document.getElementById('todoName').value;\n        todo.description = document.getElementById('description').value;\n        todo.dueDate = document.getElementById('duedate').value;\n        todo.priority = document.getElementById('priority').value;\n        todo.notes = document.getElementById('notes').value;\n        todo.complete = modalCheckbox.checked;\n\n        // close modal\n        modal.classList.add(\"hidden\");\n        overlay.classList.add(\"hidden\");\n\n        renderTodos(projectIndex);\n    });\n    let modalActionBar = document.querySelector('#modalActionBar');\n\n    let existingDeleteBtn = modalActionBar.querySelector('.deleteBtn');\n    if (existingDeleteBtn) {\n        existingDeleteBtn.remove();\n    }\n\n    let deleteBtn = document.createElement('button');\n    deleteBtn.textContent = 'Delete';\n    deleteBtn.classList.add('deleteBtn');\n    modalActionBar.appendChild(deleteBtn);\n\n    deleteBtn.addEventListener('click', function(e) {\n        project.removeTodo(todoIndex);\n        renderTodos(projectIndex);\n        // close modal\n        modal.classList.add('hidden');\n        overlay.classList.add('hidden');\n    });\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;