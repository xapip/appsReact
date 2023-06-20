import React from 'react'

function Button ({ children, onClick, bgColor }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`p-2.5 border border-amber-400 rounded-md bg-gray-300 hover:bg-gray-100 active:translate-y-0.5 transition-all shadow-lg`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;