"use client";

import "./index.css";
import {motion} from "framer-motion";
export const Bento = ({children}) => (
    <>
        <h1 className="text-[30px] font-bold text-center my-10">About mee!🖐️</h1>
        <div className="min-h-screen flex items-center justify-center bg-yellow-100 rounded-lg ">

      <main className="w-full md:w-3/4 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <motion.div
          className="bg-white rounded-lg shadow p-6"
          whileHover={{ backgroundColor: '#FFD0D0' }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4 ">Section 1</h2>
          <p className="text-gray-700">Content for section 1 goes here.</p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow p-6 row-span-2"
          whileHover={{ backgroundColor: '#ACD793' }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">Section 2</h2>
          <p className="text-gray-700">Content for section 2 goes here.</p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow p-6"
          whileHover={{ backgroundColor: '#ACD793' }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">Section 3</h2>
          <p className="text-gray-700">Content for section 3 goes here.</p>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow p-6 col-span-1 md:col-span-2"
          whileHover={{ backgroundColor: '#FFD0D0' }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">Section 4</h2>
          <p className="text-gray-700">Content for section 4 goes here.</p>
        </motion.div>
      </main>
    </div>
    </>
)
