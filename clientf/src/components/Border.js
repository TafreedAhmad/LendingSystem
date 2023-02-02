import { motion } from 'framer-motion';
import { useState } from 'react';

const variants = {
  open: { width:"0rem"},
  closed: { width:"100%"},
};

function Border({children}) {
  const [isOpen, setIsOpen] = useState(true);
  return(
    <div className="p-0 m-0 flex-cols" onMouseEnter={() => setIsOpen(false)} onMouseLeave={() => setIsOpen(true)}>
    {children}
    <motion.div className="m-0 p-0 bg-black h-px" animate={isOpen ? "open" : "closed"} variants={variants}/>
    </div> 
  );
} 

export default Border;