import { useState, useEffect, useCallback } from 'react';
import { useFilterContext } from '../../contexts/filterContext';

const CustomSelect = ({ name, value, placeholder, handler, options }: any) => {
  //originally data that we get in options looks like this {value: 'some country name', label: 'some country name'}, so here, we are getting just the value.
  const countryNames = options.map((item: { value: string; label: string }) => {
    return item.value;
  });

  const [isDropdown, setIsDropdown] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(countryNames);

  // take a list of the countries and filter them to find a searched term which value variable holds
  // handler functions updates value onChange
  // note that the same handler functions that updates the value will be invoked on two different events
  // when typing in the input field and as well when clicking on an option in the select element
  const runFiltering = useCallback(() => {
    const tempCountries = countryNames.filter((item: string) => {
      let itemLowCase = item.toLowerCase();
      return itemLowCase.indexOf(value.toLowerCase()) > -1;
    });

    setFilteredCountries(tempCountries);
  }, [value]);

  useEffect(() => {
    runFiltering();
  }, [value]);

  // built in onFocus and onBlur that can detect when an input is on focus and when it's not.

  const onFocusHandler = () => {
    // delay state change for the dropdown in order to get input value updated first
    setTimeout(() => {
      setIsDropdown(true);
    }, 1);
    // every time it's in focus again, show full list of countries
    setFilteredCountries(countryNames);
  };

  const onBlurHandler = () => {
    // delay state change for the dropdown in order to get input value updated first
    setTimeout(() => {
      setIsDropdown(false);
    }, 1);
  };

  return (
    <>
      <div className="relative">
        <div className="select_element_wrapper">
          <input
            type="text"
            onFocus={() => onFocusHandler()}
            onBlur={() => onBlurHandler()}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handler}
            autoComplete="random" // disables autocomplete popup, any random word given as a value will prevent it.
            className="custom_select border border-gray-50 border-opacity-30 rounded bg-transparent text-white focus:outline-none"
          />
        </div>
        {isDropdown && (
          <div
            className="absolute top-10 bg-black z-10 overflow-scroll w-full min-h-min max-h-selectElement
         text-center"
          >
            <ul>
              {filteredCountries.map((item: string, index: number) => {
                return (
                  <li
                    key={index}
                    onClick={handler}
                    className="select_element_items border-collapse bg-opacity-100 pt-3 pb-3"
                    data-countryEntered="countryEntered" // custom dataset which allows detecting a value in the select element
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomSelect;
