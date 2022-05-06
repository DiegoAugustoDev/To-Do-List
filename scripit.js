let task = document.getElementById("task")
let clear = document.getElementById("clear")
let list = document.getElementById("list")

onload = function(){
    list.innerHTML = localStorage.getItem("key")
    handleClick();
}

    $("#addTask").click(()=>{
        if(task.value == ""){
            $("#alert").show()
            $("#ok").click(()=>{
                $("#alert").hide()
            })
        }
        else{
            $("#list").append(`<li> ${task.value} 
            <button class="delete"><i class="fa-solid fa-trash-can"></i></i>
            </button> </li> `)
            handleClick()
        }
        task.value = ""
    })


function handleClick(){
    localStorage.setItem("key", list.innerHTML);

    let tasks = document.querySelectorAll(".delete")

    for(index in tasks){
        tasks[index].onclick = function(){
            this.parentNode.remove()
            localStorage.removeItem("key")
            localStorage.setItem("key", list.innerHTML)
        }
    }
}

clear.addEventListener("click", ()=>{
    $("#list").empty()
    localStorage.removeItem("key")
})

list.addEventListener("click", (evt)=>{
    if(evt.target.tagName == "LI"){
        evt.target.classList.toggle("checked")
    }
})


let date = new Date()
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let mouths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let hours = date.getHours();
let minutes = date.getMinutes();

let exibir = document.getElementById("date")

exibir.innerHTML = days[date.getDay()] + "," + " " + mouths[date.getMonth()] + " " + date.getDate() + "/ " + date.getHours() + ":" + date.getMinutes();

function mensage(){
    
}
