import React, { useState, useEffect } from 'react';
import { useFilterContext } from '../../pages/filterContext';

const SelectElement = ({ name, value, handler, itemsData }) => {
  const {
    filters: { countryEntered, countryFrom },
  } = useFilterContext();

  // stores all the filtered countries
  const [items, setItems] = useState([]);

  // getting entered country off the list of countries
  useEffect(() => {
    const checkedData = () =>
      itemsData.filter((item) => {
        if (name === 'countryEntered' && countryFrom)
          return item.name !== countryFrom;
        else if (name === 'countryFrom' && countryEntered) {
          return item.name !== countryEntered;
        } else {
          return itemsData;
        }
      });
    checkedData();
    setItems(checkedData());
  }, [countryEntered, countryFrom, itemsData]);

  return (
    <>
      <label htmlFor={name}></label>
      <div className="select">
        <select name={name} value={value} onChange={handler}>
          <option value="">
            {itemsData.length > 100 ? 'CHOOSE A COUNTRY' : 'CHOOSE STATUS'}
          </option>
          {items
            ? items.map((item, index) => {
                const { name } = item;
                return (
                  <option key={index} value={name}>
                    {itemsData.length > 100 ? name : name.toUpperCase()}
                  </option>
                );
              })
            : null}
        </select>
        <style jsx>{`
          select {
            width: 100%;
            min-width: 15rem;
            max-width: 27ch;
            display: grid;
            grid-template-areas: 'select';
            grid-area: select;
            align-items: center;
            border: 1px solid var(--select-border);
            border-radius: 0.25em;
            padding: 0.25em 0.5em;
            font-size: 1.1rem;
            cursor: pointer;
            line-height: 1.1;
            /* background-color: #fff;
            background-image: linear-gradient(to top, #f9f9f9, #fff 33%); */
            text-align-last: center;
            margin: 0 auto;
          }
          :after {
            content: '';
            width: 0.8em;
            height: 0.5em;
            background-color: var(--select-arrow);
            clip-path: polygon(100% 0%, 0 0%, 50% 100%);
            grid-area: select;
            justify-self: end;
          }

          select > option {
            color: #000;
          }
        `}</style>
      </div>
    </>
  );
};

export default SelectElement;
