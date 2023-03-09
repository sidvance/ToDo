let task1 = {name: 'Make the bed', priority: 'Low', status: false}
let task2 = {name: 'Go to the gym',priority: 'High', status: false}
let task3 = {name: 'Do laundry', priority: 'Medium', status: false}


let tasks = [task1, task2, task3]



// function addTask(task){
//     tasks.push(task)
// }

const addTask = task => {tasks.push(task)}

addTask({name: 'Clean bathroom', priority: 'Low', status: false})
console.log(tasks)

//write a function called deleteTask that takes a task name a parameter
//loop over and remove the task if it is in the array of tasks
//otherwise, log that task was not in the array

const deleteTask = (task) => {
    for (let i = 0; i < tasks.length; i++){
        if(task === tasks[i].name){
            tasks.splice([i], 1)
            console.log('Task deleted')
            return
        }
    }
    console.log('That task was not in the array')
}

deleteTask('Clean bathroom')

console.log(tasks)


//Write a for loop that will print each of the tasks
//in the task array.
//Implement the above if statement into that for loop,
//but only one console.log for each task.

// for (let i = 0; i < tasks.length; i++){
//     let string = tasks[i]

//     if(tasks[i] === 'Make thhe bed'){
//         string += ": Completed!!! Yay!!!!"
//     }else{
//         string += ": Honey, you in danger girl"
//     }

//     console.log(string)
// }