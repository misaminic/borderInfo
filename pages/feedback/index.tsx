import React from 'react';
import styled from 'styled-components';
import CountryEntered from '../../components/Country';
import FromCountry from '../../components/FromCountry';
import axios from 'axios';
import { useGlobalContext } from '../context';
import ZoneColor from '../../components/ZoneColor';
import NameOfTheBorder from '../../components/NameOfTheBorder';
import PassengerPapersStatus from '../../components/PassengerPapersStatus';
import Vaccine from '../../components/Vaccine';
import HadCovid from '../../components/HadCovid';
import CovidPassport from '../../components/CovidPassport';
import Pcr from '../../components/Pcr';
import AntiGen from '../../components/AntiGen';
import Quarantine from '../../components/Quarantine';
import WaitingTime from '../../components/WaitingTIme';
import Submit from '../../components/Submit';
import SendData from '../../components/SendData';
import countries from '../AllCountriesNames.json';

interface Country {
  name: string;
}

const Feedback = () => {
  const {
    countryEntered,
    countryFrom,
    zoneColor,
    covidPassport,
    currentQuestionDisplayed,
  } = useGlobalContext();

  return (
    <>
      <PrimarySection>
        {currentQuestionDisplayed === 0 && <CountryEntered />}
        {currentQuestionDisplayed === 1 && <FromCountry />}
        {currentQuestionDisplayed === 2 && <ZoneColor />}
        {currentQuestionDisplayed === 3 && <NameOfTheBorder />}
        {currentQuestionDisplayed === 4 && <PassengerPapersStatus />}
        {currentQuestionDisplayed === 5 && <HadCovid />}
        {currentQuestionDisplayed === 6 && <Vaccine />}
        {currentQuestionDisplayed === 7 && <CovidPassport />}
        {currentQuestionDisplayed === 8 && <AntiGen />}
        {currentQuestionDisplayed === 9 && <Pcr />}
        {currentQuestionDisplayed === 10 && <Quarantine />}
        {currentQuestionDisplayed === 11 && <WaitingTime />}
        {currentQuestionDisplayed === 12 && <Submit />}
        {currentQuestionDisplayed === 13 && <SendData />}
      </PrimarySection>
    </>
  );
};

// export const getStaticProps = async () => {
//   //   Getting countries
//   const res = await fetch('https://restcountries.eu/rest/v2/all?fields=name');
//   const prob = await res.json();

//   return {
//     props: {
//       data: prob,
//     },
//   };
// };

const PrimarySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default Feedback;
