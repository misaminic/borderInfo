import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../pages/context';
import countries from './../pages/AllCountriesNames.json';

const FromCountry = () => {
  const {
    getCountryFrom,
    countryEntered,
    getPreviousQuestion,
    currentQuestionDisplayed,
  } = useGlobalContext();

  // getting the list of countries without the one the user entered.
  const ListOfCountriesWithoutTheEnteringOne = countries.filter((country) => {
    return country.name !== countryEntered;
  });

  return (
    <>
      <article>
        <select
          key={1}
          name="country"
          id="country"
          onChange={(e) => getCountryFrom(e)}
        >
          <option value="">CHOOSE A COUNTRY FROM WHICH YOU ENTERED</option>
          {ListOfCountriesWithoutTheEnteringOne &&
            ListOfCountriesWithoutTheEnteringOne.map((item, index) => {
              const { name } = item;
              return (
                <option key={index + 1} value={name}>
                  {name}
                </option>
              );
            })}
        </select>
        <button
          type="button"
          onClick={() => getPreviousQuestion(currentQuestionDisplayed)}
        >
          BACK
        </button>
      </article>
    </>
  );
};

const SelectCountry = styled.article``;

export default FromCountry;
