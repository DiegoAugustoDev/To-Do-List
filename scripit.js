let  inputTask = document.getElementById("inputTask")
let addBtn = document.getElementById("btn")
let listItem = document.getElementById("taskItem")
let clearTasks = document.getElementById("refresh")
let taskList = []



function deleteItem(e){
    let task = e.target.parentElement.previousElementSibling.innerHTML
    let index = taskList.indexOf(task)
    if(index !== -1){
        taskList.splice(index,1)
    }
    populateList()
}

clearTasks.addEventListener("click", function(){
    if(taskList.length >0){
        taskList = []
        localStorage.clear("taskList")
    }
    populateList()
})

function populateList(){
    listItem.innerHTML = " "
    taskList.forEach(function(item){
        let line = document.createElement("li")
        line.classList.add("lineStyle")
        //add texto
        let texto = document.createElement("p")
        texto.innerHTML = item
        line.appendChild(texto)

        //add delete btn
        let trash = document.createElement("a")
        trash.classList.add("trash")
        trash.innerHTML = `<i class = "fa fa-trash"></i>`
        line.appendChild(trash)
        
        trash.addEventListener("click", (e)=> deleteItem(e))


        //add li to ul
        listItem.appendChild(line)
    })

    inputTask.value = ""
}
populateList()

function addTask(){
    if (inputTask.value){
        taskList.push(inputTask.value)
        populateList()
    }

}

addBtn.addEventListener("click", function(e){
    e.preventDefault()
    addTask()
})






let date = new Date()
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let mouths = ["January","February","March","April","May","June","July","August","September","October","November","December"]


let exibir = document.getElementById("date")

exibir.innerHTML = days[date.getDay()] + "," + " " + mouths[date.getMonth()] + " " + date.getDate()

function mensage(){
    
}