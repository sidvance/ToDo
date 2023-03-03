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