import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({data}) {
  return (
    <div
      id="tasklist"
      className="h-[60%] overflow-x-auto  py-4 px-2 flex justify-start gap-3 shrink-0 items-center w-full mt-5 flex-nowrap"
    >
      {data.tasks.map((elem, idx)=>{
        if(elem.newTask){
          return <NewTask key={idx} elem={elem}/>
        }
        else if(elem.active){
          return <AcceptTask key={idx} elem={elem}/>
        }
        else if(elem.newTask){
          return <NewTask key={idx} elem={elem}/>
        }
        else if(elem.completed){
          return <CompleteTask key={idx} elem={elem}/>
        }
        else if(elem.failed){
          return <FailedTask key={idx} elem={elem}/>
        }
        else {
          null
        }
      })}


      {/* <AcceptTask data={data}/>
      <NewTask data={data}/>
      <CompleteTask data={data}/>
      <FailedTask data={data}/> */}

    </div>
  );
}

export default TaskList;
