let todo = [];

let req = prompt("Please Enter your request ");

while(true){
    if(req=="quit"){
        console.log("quitting todo!!");
        break;
    }
    else if(req=="list"){
         console.log("----------");
            for(let i =0;i<todo.length;i++){
                console.log(i,todo[i]);
        }
        console.log("----------");
    }
    else if(req=="add"){
        let task =prompt("Please enter the task you need to add");
        todo.push(task);
        console.log("Task added");
    }
    else if(req=="delete"){
        let index=prompt("Please the index you need to delete");
        todo.splice(index,1);
        console.log("Task completed deleted successfully");
    }
    else{
        console.log("your request is invalid ")
    }

    req=prompt("Please Enter your request ");
}
