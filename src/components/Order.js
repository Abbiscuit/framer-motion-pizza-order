import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      when: 'beforeChildren',
      mass: 0.3,
      damping: 8,
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  // const [showTitle, setShowTitle] = useState(true);

  // setTimeout(() => {
  //   setShowTitle(false);
  // }, 4000);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order {`:)`}</h2>

      {/* <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }}>
            Thank you for your order {`:)`}
          </motion.h2>
        )}
      </AnimatePresence> */}

      <motion.p
        variants={childVariants}
        // hiddenとvisibleが同じなので記載必要なし
      >
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div
        variants={childVariants}
        // hiddenとvisibleが同じなので記載必要なし
      >
        {pizza.toppings.map(topping => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
