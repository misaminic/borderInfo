import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../contexts/context';
import { listOfCountries } from '../utils/utils';
import BackButton from './buildingBlocks/BackButton';
import NextButton from './buildingBlocks/NextButton';
import SearchSelectElement from './buildingBlocks/SearchSelectElement';
import Alert from './buildingBlocks/Alert';
import { animated } from 'react-spring';
import { usePageAnimation } from '../styles/animations/pagesTranstions';

const FromCountry = () => {
  const {
    getCountryFrom,
    countryEntered,
    countryFrom,
    handleResize,
    isSidebarMenuIconVisible,
    alert,
  }: any = useGlobalContext();

  const { customAnimation }: any = usePageAnimation();

  global.window.addEventListener('resize', handleResize);

  const ListOfCountriesWithoutTheEnteringOne = listOfCountries.filter(
    (country) => {
      return country.value !== countryEntered;
    }
  );

  return (
    <>
      {customAnimation((style: any, isAnimated: boolean) =>
        isAnimated ? (
          <animated.article
            className={`feedback_question_wrapper`}
            style={style}
          >
            {isSidebarMenuIconVisible && (
              <label htmlFor={'countryFrom'}>Country you travelled from</label>
            )}
            <SearchSelectElement
              name={countryFrom}
              value={countryFrom}
              handler={getCountryFrom}
              placeholder={countryFrom ? countryFrom : 'Choose country'}
              options={ListOfCountriesWithoutTheEnteringOne}
            />
            {alert ? <Alert {...alert} /> : null}

            <div>
              <NextButton
                nextQuestion={{
                  propertyToCheck: 'countryFrom',
                  sectionNumber: 2,
                }}
              />
              <BackButton />
            </div>
          </animated.article>
        ) : null
      )}
    </>
  );
};

const SelectCountry = styled.article``;

export default FromCountry;
