'use client'
import React, { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { SiCodeblocks } from "react-icons/si";
import TaskList from "./TaskList";
import TaskTab from "./TaskTab";

export default function TodoBoard() {
//Check selected style of the tasks
const [listStyle, setListStyle] = useState(true)
const [tabStyle, setTabStyle] = useState(false)

const handleListStyle = () => {
  setListStyle(!listStyle)
  setTabStyle(!tabStyle)
}
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="bg-white text-black w-xl rounded-2xl pb-3">
        <div className="flex justify-between items-center ">
          <div
          onClick={handleListStyle}
          className={`${listStyle ? 'bg-blue-200' : 'bg-white'} w-full flex justify-center cursor-pointer py-7 rounded-tl-2xl`}>
            <CiBoxList size={35} />
          </div>
          <div 
          onClick={handleListStyle}
          className={`${tabStyle ? 'bg-blue-200' : 'bg-white'} w-full flex justify-center cursor-pointer py-7 rounded-tr-2xl`}>
            <SiCodeblocks size={35} />
          </div>
        </div>
        <h1 className="text-center text-2xl uppercase font-extrabold py-2">
          My daily tasks
        </h1>

        {/* Daily tasks items diplaying */}
        {/* //if listStyle true then show the tasklist  */}
        {listStyle && (
          <div className="px-4">
            <TaskList></TaskList>
            <TaskList></TaskList>
            <TaskList></TaskList>
            <TaskList></TaskList>
            <TaskList></TaskList>
        </div>
        )}
        {/* If table style is true then show the TaskTab */}
        {tabStyle && (
          <div className='grid grid-cols-2 gap-1 px-4 rounded'>
            <TaskTab></TaskTab>
            <TaskTab></TaskTab> 
            <TaskTab></TaskTab> 
            <TaskTab></TaskTab> 

          </div>
        )}
      </div>
    </div>
  );
}
