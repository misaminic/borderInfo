import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../pages/context';
import Link from 'next/link';
import countries from './../pages/AllCountriesNames.json';
import SelectElement from './buildingBlocks/SelectElement';
import BackButton from './buildingBlocks/BackButton';

const CountryEntered = () => {
  const {
    getCountryEntered,
    getPreviousQuestion,
    currentQuestionDisplayed,
    countryEntered,
  }: any = useGlobalContext();

  return (
    <>
      <article className={'feedback_question_wrapper'}>
        <label htmlFor={'countryEntered'}>Country you travelled to</label>
        <SelectElement
          name={'countryEntered'}
          value={countryEntered}
          handler={getCountryEntered}
          itemsData={countries}
        />
        <BackButton />
      </article>
    </>
  );
};

export default CountryEntered;
