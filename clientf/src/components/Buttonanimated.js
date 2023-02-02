import { motion } from 'framer-motion';
import { useState } from 'react';
const variants = {
  open: { opacity: 1, x: 0, y: 0 },
  closed: { opacity: 1, x: -10, y: -10 },
};
const variants2 = {
  open: { opacity: 1, x: 0, y: 0 },
  closed: { opacity: 1, x: -20, y: -20 },
};
const variants3 = {
  open: { opacity: 1, x: 0, y: 0 },
  closed: { opacity: 1, x: -30, y: -30 },
};

function Buttonanimated(props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-[25vh] h-[7vh]" onMouseEnter={() => setIsOpen(false)} onMouseLeave={() => setIsOpen(true)}>
      <motion.div animate={isOpen ? "open" : "closed"} variants={variants} className={`bg-[${props.colors.first}] z-0 position-absolute border-2 border-black rounded-lg w-[25vh] h-[7vh]`}/>
      <motion.div animate={isOpen ? "open" : "closed"} variants={variants2} className={`bg-[${props.colors.second}] z-10 position-absolute w-[25vh] h-[7vh] border-black border-2 rounded-lg`}/>
      <motion.div animate={isOpen ? "open" : "closed"} variants={variants3} className="bg-black z-30 position-absolute w-[25vh] h-[7vh] rounded-lg flex justify-center items-center">
        <button className=''>
          <p className='text-white text-3xl' style={{fontFamily: "'Aldrich', sans-serif"}}>{props.text}</p>
        </button>
      </motion.div>
    </div>
  );
}

export default Buttonanimated;
