import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../pages/context';
import Link from 'next/link';
import countries from './../pages/AllCountriesNames.json';

const CountryEntered = (data) => {
  const {
    getCountryEntered,
    getPreviousQuestion,
    currentQuestionDisplayed,
    countryEntered,
  } = useGlobalContext();
  console.log(currentQuestionDisplayed);
  console.log(countryEntered);
  return (
    <>
      <article>
        <select
          key={1}
          name="country"
          id="country"
          onChange={(e) => getCountryEntered(e)}
        >
          <option value="">
            {countryEntered ? countryEntered : 'CHOOSE A COUNTRY YOU ENTERED'}
          </option>
          {countries.map((item, index) => {
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

export default CountryEntered;
