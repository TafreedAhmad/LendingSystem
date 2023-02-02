import { motion } from 'framer-motion';
import { useState } from 'react';

function Buttonanimated(props) {
  const variants = {
    open: { x: 0, y: 0, backgroundColor: '#000000' },
    closed: { x: -5, y: -5, backgroundColor: `${props.colors}` },
  };
  const variants2 = {
    open: { color: '#ffffff'},
    closed: { color: '#000000' },
  };
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className="w-full h-full relative flex"
      onMouseEnter={() => setIsOpen(false)}
      onMouseLeave={() => setIsOpen(true)}
    >
      <div className={`z-0 bg-black position-absolute rounded w-full h-full`} />
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className=" z-30 position-absolute w-full h-full rounded flex justify-center items-center border-[1px] border-black"
      >
        <motion.p
          animate={isOpen ? 'open' : 'closed'}
          variants={variants2}
          className="text-lg"
          style={{ fontFamily: "'Biryani', sans-serif" }}
        >
          {props.text}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Buttonanimated;
