import React from 'react';
import { motion } from 'framer-motion';

export const Switch = ({ onChange, isChecked }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      onClick={onChange}
    >
      <motion.div
        style={{
          width: '36px',
          height: '21px',
          borderRadius: '13px',
          backgroundColor: isChecked ? '#4BD763' : '#EAEAEA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isChecked ? 'flex-end' : 'flex-start',
          padding: '2px',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <motion.div
          style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            backgroundColor: '#FFF',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
          }}
          layout
        />
      </motion.div>
    </div>
  );
};