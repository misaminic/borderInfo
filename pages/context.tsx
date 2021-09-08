import React, { useState, useEffect, useContext, useReducer } from 'react';
import reducer from './reducer';
import { useRouter } from 'next/router';
import {
  SUBMIT_USER_FEED_BACK_TO_DB,
  GET_COUNTRY_ENTERED,
  GET_COUNTRY_FROM,
  GET_PASSENGER_PAPERS_STATUS,
  GET_BORDER_NAME,
  GET_ZONE_COLOR,
  GET_HAD_COVID,
  GET_VACCINATION_STATUS,
  GET_VACCINE_NAME,
  GET_COVID_PASSPORT_STATUS,
  GET_PCR_STATUS,
  GET_ANTIGEN_STATUS,
  GET_QUARANTINE_STATUS,
  GET_QUARANTINE_DAYS,
  GET_WAITING_TIME,
  GET_COMMENT,
  GET_PREVIOUS_QUESTION,
  SHOW_RIGHT_QUESTION,
  FEEDBACK_SUBMITING_FINISHED,
} from './actions';

import _ from 'lodash';
// Check context here if some error
const AppContext = React.createContext({});

type Initial_State = {
  loading: boolean;
  currentQuestionDisplayed: number;
  countryEntered: string;
  countryFrom: string;
  passengerPapersStatus: string;
  zoneColor: string;
  borderName: string;
  hadCovid: string;
  vaccinationStatus: string;
  vaccineName: string;
  covidPassport: string;
  pcrStatus: string;
  antiGenStatus: string;
  quarantineStatus: string;
  quarantineDays: string;
  waitingTime: string;
  comment: string;
  feedbackPostedTime: string;
  timeStamp: string;
  showAdditionalQuestion: boolean;
};

type Props = {
  children: JSX.Element;
};

const initialState: Initial_State = {
  loading: false,
  currentQuestionDisplayed: 0,
  countryEntered: '',
  countryFrom: '',
  passengerPapersStatus: '',
  zoneColor: '',
  borderName: '',
  hadCovid: '',
  vaccinationStatus: '',
  vaccineName: '',
  covidPassport: '',
  pcrStatus: '',
  antiGenStatus: '',
  quarantineStatus: '',
  quarantineDays: '',
  waitingTime: '',
  comment: '',
  feedbackPostedTime: '',
  timeStamp: '',
  showAdditionalQuestion: false,
};

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sendData = () => {
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ state: state }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setTimeout(() => {
      dispatch({ type: FEEDBACK_SUBMITING_FINISHED });
    }, 3000);
  };

  const submitUserFeedbackToDB = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const date = new Date();
    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = `${date.getFullYear()}`;

    const hour = `${date.getHours()}`.padStart(2, '0');
    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    const postedTime = `${day}/${month}/${year}, ${hour}:${minutes}h`;

    const timeStamp = _.now();
    setTimeout(() => {
      dispatch({
        type: SUBMIT_USER_FEED_BACK_TO_DB,
        payload: { postedTime, timeStamp },
      });
    }, 2000);

    console.log(state);
  };

  const getCountryEntered = (e: { preventDefault: () => void }) => {
    dispatch({ type: GET_COUNTRY_ENTERED, payload: e.target.value });
  };

  const getCountryFrom = (e: { preventDefault: () => void }) => {
    dispatch({ type: GET_COUNTRY_FROM, payload: e.target.value });
  };

  const getPassengerPapersStatus = (e: { preventDefault: () => void }) => {
    dispatch({
      type: GET_PASSENGER_PAPERS_STATUS,
      payload: e.target.innerText,
    });
  };

  const getZoneColor = (e: { preventDefault: () => void }) => {
    if (e) {
      const color = e.toLowerCase();
      dispatch({ type: GET_ZONE_COLOR, payload: color });
    }
  };

  const getBorderName = (borderName: string) => {
    dispatch({ type: GET_BORDER_NAME, payload: borderName });
  };

  const getHadCovid = (e: { preventDefault: () => void }) => {
    dispatch({ type: GET_HAD_COVID, payload: e.target.innerText });
  };

  const getVaccinationStatus = (e: { preventDefault: () => void }) => {
    dispatch({ type: GET_VACCINATION_STATUS, payload: e.target.innerText });
  };

  const getVaccineName = (e) => {
    dispatch({ type: GET_VACCINE_NAME, payload: e.target.innerText });
  };

  const getCovidPassportStatus = (e: { preventDefault: () => void }) => {
    dispatch({ type: GET_COVID_PASSPORT_STATUS, payload: e.target.innerText });
  };

  const getPcrStatus = (e: { preventDefault: () => void }) => {
    dispatch({ type: GET_PCR_STATUS, payload: e.target.innerText });
  };

  const getAntiGenStatus = (e: { preventDefault: () => void }) => {
    dispatch({ type: GET_ANTIGEN_STATUS, payload: e.target.innerText });
  };

  const getQuarantineStatus = (e: { preventDefault: () => void }) => {
    dispatch({ type: GET_QUARANTINE_STATUS, payload: e.target.innerText });
  };

  const getQuarantineDays = (numberOfDays: string) => {
    dispatch({ type: GET_QUARANTINE_DAYS, payload: numberOfDays });
  };

  const getWaitingTime = (minutes: string) => {
    dispatch({ type: GET_WAITING_TIME, payload: minutes });
  };

  const getComment = (text: string) => {
    dispatch({ type: GET_COMMENT, payload: text });
  };

  const getPreviousQuestion = (currentQuestionNumber: number) => {
    dispatch({ type: GET_PREVIOUS_QUESTION, payload: currentQuestionNumber });
  };

  // when there is a sub question, calling this function gets one step back
  const showRightQuestion = () => {
    dispatch({ type: SHOW_RIGHT_QUESTION });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getCountryEntered,
        getCountryFrom,
        getZoneColor,
        getBorderName,
        getPassengerPapersStatus,
        getHadCovid,
        getVaccinationStatus,
        getCovidPassportStatus,
        getVaccineName,
        getPcrStatus,
        getAntiGenStatus,
        getQuarantineStatus,
        getQuarantineDays,
        getWaitingTime,
        getComment,
        submitUserFeedbackToDB,
        sendData,
        getPreviousQuestion,
        showRightQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
