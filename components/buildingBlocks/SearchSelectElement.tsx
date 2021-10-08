import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    border: '1px solid rgba(255,255,255,0.5)',
    borderTop: '0',
    backgroundColor: '#000',
    color: state.isSelected ? 'rgba(52, 211, 153, 0.9)' : '#fff',
    padding: 15,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 250,
    display: 'flex',
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: '0.2rem',
    color: '#fff &#160; !important',
  }),
  singleValue: (provided: any) => {
    // const opacity = state.isDisabled ? 0.5 : 1;
    // const transition = 'opacity 300ms';
    const color = '#fff';
    const borderTop = '0';
    return { ...provided, color, borderTop };
  },
  input: (provdided: any) => {
    const color = '#fff';

    return { ...provdided, color };
  },

  menu: (provided: any) => {
    const borderTop = '0';
    const borderRadius = '1px';
    return { ...provided, borderRadius, borderTop };
  },

  menuList: (provided: any, state: any) => {
    const textAlign = 'center';
    const paddingTop = '0';
    const paddingBottom = '0';
    const borderTop = '1px solid rgba(0,0,0,0.5)';
    // const borderBottom = '1px solid rgba(0,0,0,0.5);';

    return { ...provided, paddingTop, paddingBottom, borderTop, textAlign };
  },
};

type SearchSelectElement = {
  handler: () => void;
  name: string;
  placeholder: string;
  value: string;
  options: { value: string; label: string }[];
};

const SearchSelectElement = ({
  handler,
  name,
  placeholder,
  value,
  options,
}: SearchSelectElement) => {
  return (
    <>
      <Select
        name={name}
        classNamePrefix="myCustomSelect"
        onChange={handler}
        value={options.filter(function (option) {
          return option.value === value;
        })}
        placeholder={placeholder}
        styles={customStyles}
        options={options}
      />
    </>
  );
};

export default SearchSelectElement;
