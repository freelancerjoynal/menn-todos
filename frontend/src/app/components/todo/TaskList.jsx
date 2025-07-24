import React from 'react'
import { FaCode } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function TaskList() {
  return (
    <div className='group flex items-center justify-between hover:bg-blue-100 transition-colors px-2 py-2 rounded-xl'>
      <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
      <p className="ml-4 w-5/6 text-xl">
        Complete the React project
      </p>
      <span className='flex items-center gap-1 opacity-0 group-hover:opacity-90 transition-opacity'>
        <MdDelete size={25} className='text-red-500 cursor-pointer' />
        <FaCode size={22} className='text-slate-500 cursor-pointer' />
      </span>
    </div>
  )
}