var taskcounter: number = 0;

window.addEventListener("load", function(): void {
    document.querySelector(".addButton").addEventListener("click", AddTaskText);
    document.querySelector(".number").addEventListener("click", AddTaskText);
});

function AddTaskText (): void {
    var newtask: string = (<HTMLInputElement>document.querySelector(".newtask")).value;
    console.log(newtask);
    addTaskToList(newtask);
    // Counter:
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    taskcounter = numberofChildren;
    console.log("Die Anzahl der To-Dos lautet:" + numberofChildren);
    document.querySelector(".number").innerHTML = numberofChildren + " in total";
}

function addTaskToList (newTaskValue: string): void {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + taskcounter);
    var myHtmlTemplate: string =  "";
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".Rahmen").appendChild (addElement);
    console.log ("addTasktoList:" + newTaskValue);

}

function DeleteTaskText (ClickedTrash): void {
    console.log("This is deleating the task");
    ClickedTrash.parentElement.remove();
    taskcounter --;
    // Counter
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    document.querySelector(".number").innerHTML = numberofChildren + " in total";
}

 /*function EnterDeleteButton (ShowButton): void {
    console.log("This is showing the Show Button");
    ShowButton.classList.add("fa-trash-alt");
}

function LeaveDeleteButton (HideButton): void {
    console.log("This is showing the Hide Button");
    HideButton.classList.remove("fa-trash-alt");
} */

function CheckedButton (ClickedButton): void {
   if ( ClickedButton.classList.contains("fa-circle") ) {
        ClickedButton.classList.remove("fa-circle");
        ClickedButton.classList.add("fa-check-circle");
    } else {
        ClickedButton.classList.remove("fa-check-circle");
        ClickedButton.classList.add("fa-circle");
}}
