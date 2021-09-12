import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../pages/context';
import countries from './../pages/AllCountriesNames.json';
import SelectElement from './buildingBlocks/SelectElement';
import BackButton from './buildingBlocks/BackButton';

const FromCountry = () => {
  const {
    getCountryFrom,
    countryEntered,
    getPreviousQuestion,
    currentQuestionDisplayed,
  }: any = useGlobalContext();

  // getting the list of countries without the one the user entered.
  const ListOfCountriesWithoutTheEnteringOne = countries.filter((country) => {
    return country.name !== countryEntered;
  });

  return (
    <>
      <article className={'feedback_question_wrapper'}>
        <label htmlFor={'countryFrom'}>Country you travelled from</label>

        <SelectElement
          name={'countryFrom'}
          value={countryEntered}
          handler={getCountryFrom}
          itemsData={ListOfCountriesWithoutTheEnteringOne}
        />
        <BackButton />
      </article>
    </>
  );
};

const SelectCountry = styled.article``;

export default FromCountry;
