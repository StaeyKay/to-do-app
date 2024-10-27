import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { addTask } from "./utils";

const App = () => {
  const [list, setList] = useState(false);
  const [task, setTask] = useState("");
  const [title, setTitle] = useState("");

  const saveTask = async (e) => {
    e.preventDefault();

    try {
      const data = {
        title
      }
      const tasks = await addTask(data)
    } catch (error) {
      console.log(error);
    }
  };

  const toggleList = () => {
    setList(!list);
  };
  return (
    <div>
      <div className="flex justify-center items-center bg-[#F1ECE6] text-[40px]">
        <span className="text-[#706F6F]">TO</span>
        <span className="text-[#D98326]">D</span>
        <span className="text-[#D98326] text-[30px]">
          <FaRegCheckCircle />
        </span>
      </div>

      <div className="flex justify-between font-bold bg-[#F3F3F3] px-10 text-[18px]">
        <h5 className="py-2">Personal</h5>
        <h5 className="py-2">Professional</h5>
      </div>
      <article className="p-10 space-y-4">
        <form action="" onSubmit={saveTask}>
          <div className="flex">
            <input
              className="w-[92%] bg-[#F1ECE6] rounded-l-full py-2 px-4 border-none"
              type="text"
              onChange={(e) => {
                console.log(e.target.value)
                setTitle(e.target.value);
              }}
              value={title}
              placeholder="What do you need to do?"
            />
            <button
              className="bg-[#76B7CD] text-white rounded-r-full py-2 px-4 md:w-[8%]"
            >
              ADD
            </button>
          </div>
        </form>
        <section className="bg-[#F1ECE6] px-4 rounded-2xl">
          <div className="flex justify-between p-3 border-b-[0.1px] border-b-[#76B7CD]">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="bg-[#F1ECE6] text-[#D98326]"
                onChange={() => toggleList()}
              />
              <span
                style={{
                  textDecoration: list ? "line-through" : "none",
                }}
              >
                Personal work No. 1
              </span>
            </div>
            <div className="flex">
              <MdDeleteOutline size={23} />
              <FiEdit2 size={21} />
            </div>
          </div>
          
          <hr />
        </section>
      </article>
    </div>
  );
};

export default App;
