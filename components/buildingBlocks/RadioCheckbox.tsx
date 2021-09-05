import React from 'react';

const RadioCheckbox = ({ name, value, handler, item, valueInState }) => {
  console.log('checkbox render');
  return (
    <>
      <input
        type="radio"
        className={`px-1.5 py-1.5 mr-2 rounded-full transition-all text-white hover:bg-grey-500 before:flex before:flex-shrink-0 before:bg-black before:w-4 before:h-4 before:transition-all before:rounded-full ${
          valueInState === item
            ? 'before:shadow-inner-3'
            : 'before:shadow-inner-2'
        }`}
        name={name}
        value={value}
        onChange={handler}
      />
      <label
        htmlFor={name}
        className="cursor-pointer mb-1.5 mr-4 font-medium uppercase"
      >
        {item}
      </label>
    </>
  );
};

export default RadioCheckbox;
