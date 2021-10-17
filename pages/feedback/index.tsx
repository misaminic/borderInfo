import React from 'react';
import styled from 'styled-components';
import CountryEntered from '../../components/Country';
import FromCountry from '../../components/FromCountry';
import { useGlobalContext } from '../../contexts/context';
// import ZoneColor from '../../components/ZoneColor';
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
import { useRouter } from 'next/router';

interface Country {
  name: string;
}

const Feedback = () => {
  let router = useRouter();

  function handleClick() {
    router.push('/');
  }

  const {
    countryEntered,
    countryFrom,
    zoneColor,
    covidPassport,
    currentQuestionDisplayed,
    isAnimated,
  }: any = useGlobalContext();

  return (
    <>
      <head>
        <title>Border feedback</title>
        <meta
          name="description"
          content="providing feedback regarding border status and covid-19 regulations"
        />
      </head>
      <PrimarySection>
        {currentQuestionDisplayed === -1 && handleClick()}
        {currentQuestionDisplayed === 0 && <CountryEntered />}
        {currentQuestionDisplayed === 1 && <FromCountry />}
        {/* {currentQuestionDisplayed === 2 && <ZoneColor />} */}
        {currentQuestionDisplayed === 2 && <NameOfTheBorder />}
        {currentQuestionDisplayed === 3 && <PassengerPapersStatus />}
        {currentQuestionDisplayed === 4 && <HadCovid />}
        {currentQuestionDisplayed === 5 && <Vaccine />}
        {currentQuestionDisplayed === 6 && <CovidPassport />}
        {currentQuestionDisplayed === 7 && <AntiGen />}
        {currentQuestionDisplayed === 8 && <Pcr />}
        {currentQuestionDisplayed === 9 && <Quarantine />}
        {currentQuestionDisplayed === 10 && <WaitingTime />}
        {currentQuestionDisplayed === 11 && <Submit />}
        {currentQuestionDisplayed === 12 && <SendData />}
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 4rem;
  background: #000;
`;

export default Feedback;
