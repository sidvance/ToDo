let task1 = "Make the bed"
let task2 = "Go to the gym"
let task3 = "Do laundry"

if (task2 === "Make the bed"){
    console.log("Completed!!!! Yay!!!!!")
}else{
    console.log("Honey, you in danger girl")
}

let tasks = [task1, task2, task3]

//Write a for loop that will print each of the tasks
//in the task array.
//Implement the above if statement into that for loop,
//but only one console.log for each task.

for (let i = 0; i < tasks.length; i++){
    let string = tasks[i]

    if(tasks[i] === 'Make thhe bed'){
        string += ": Completed!!! Yay!!!!"
    }else{
        string += ": Honey, you in danger girl"
    }

    console.log(string)
}

function addTask(task){
    tasks.push(task)
}

addTask('clean bathroom')
console.log(tasks)

//write a function called deleteTask that takes a task name a parameter
//loop over and remove the task if it is in the array of tasks
//otherwise, log that task was not in the array

function deleteTask(task){
    for (let i = 0; i < tasks.length; i++){
        if(task === tasks[i]){
            tasks.splice([i], 1)
            console.log('Task deleted')
            return
        }
    }
    console.log('That task was not in the array')
}

deleteTask('clean bathroom')