const taskInput = document.getElementById("task__input");
const taskForm = document.getElementById("tasks__form");
const taskList = document.getElementById("tasks__list");
    
function addTask(name) {
    taskList.insertAdjacentHTML("beforeEnd", `
        <div class="task">
            <div class="task__title">
            ${name}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
        );
        
    const taskRemoves = taskList.querySelectorAll(".task__remove");
    taskRemoves[taskRemoves.length-1].addEventListener("click", (e) => {
        e.preventDefault();
        taskRemoves[taskRemoves.length-1].closest(".task").remove();
    });   
    // const tasks = taskList.querySelectorAll(".task");
    // const taskRemove = tasks[tasks.length-1].querySelector(".task__remove");
    // taskRemove.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     tasks[tasks.length-1].remove();
    // });  
};


taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
        
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = "";
    }
});