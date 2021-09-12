import React from 'react';

const PrimaryCheckbox = ({ name, value, checked, handler }: any) => {
  return (
    <div className="w-5 h-5 fixed">
      <input
        type="checkbox"
        className="bg-green-100 bg-opacity-50 appearance-none w-10 h-5 cursor-pointer rounded-full shadow-lg checked:bg-green-500

         after:text-2xl  after:absolute after:top-0 after:left-10 after:bg-gray-100 after:bg-clip-text after:w-10 after:h-2

         checked:after:text-2xl checked:after: absolute checked:after:top-0 checked:after:left-0 checked:after:bg-gray checked:after:text-transparent, checked:after:bg-clip-text

         before:absolute before:border before:border-solid before:border-black before:border-opacity-25 before:rounded-full before:bg-yellow-400 before:z-10 before:block before:w-5 before:h-5 
        
        checked:before:mx-6"
        name={name}
        value={value}
        checked={checked}
        onChange={handler}
      />
    </div>
  );
};

export default PrimaryCheckbox;
