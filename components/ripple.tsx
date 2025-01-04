import React from 'react';
import { motion } from 'framer-motion';

interface RippleTextProps {
  text?: string | undefined;
}

export const RippleText: React.FC<RippleTextProps> = ({ text }) => {
  const letters = (text || '').split('');

  return (
    <span className="">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: 0 }}
          animate={{
            y: [0, -10, 0], // Moves the letter up and down
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 0.1,
            duration: 0.6,
            delay: index * 0.1, // Adds delay for the ripple effect
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};



export const RippleText2: React.FC<RippleTextProps> = ({ text }) => {
    const letters = (text || '').split('');
  
    return (
      <motion.span
        className="inline-block"
        whileHover={{ scale: 1.1 }} // Optional: You can scale the text on hover as well
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ y: 0 }} // Start with no movement
            animate={{ y: 0 }} // Start with no movement
            whileHover={{
              y: [-10, 0], // Moves the letter up and down only on hover
            }}
            // transition={{
            //   type: 'spring', // Use spring animation for smooth movement
            //   stiffness: 100, // Controls the spring stiffness (higher = stiffer)
            //   damping: 25, // Controls how quickly the movement settles
            //   repeat: Infinity, // Repeat animation indefinitely
            //   repeatDelay: 0.1, // Delay between each repeat
            //   delay: index * 0.1, // Delay each letter for a wave effect
            // }}
            transition={{
                repeatDelay: 0.1,
                duration: 0.6,
                delay: index * 0.1, // Adds delay for the ripple effect
              }}
            // whileHover={{ y: [0, -15, 0] }} // Optional: stronger move on hover
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    );
  };

export default RippleText;

