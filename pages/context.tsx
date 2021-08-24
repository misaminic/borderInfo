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
} from './actions';

import _ from 'lodash';

const AppContext = React.createContext();

const initialState = {
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
  quarantineDays: 0,
  waitingTime: 0,
  comment: '',
  feedbackPostedTime: '',
  timeStamp: '',
  showAdditionalQuestion: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sendData = () => {
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ state: state }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const submitUserFeedbackToDB = async (e) => {
    e.preventDefault();

    const date = new Date();
    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = `${date.getFullYear()}`;

    const hour = `${date.getHours()}`.padStart(2, '0');
    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    const postedTime = `${day}/${month}/${year}, ${hour}:${minutes}h`;

    const timeStamp = _.now();
    console.log(postedTime);

    dispatch({
      type: SUBMIT_USER_FEED_BACK_TO_DB,
      payload: { postedTime, timeStamp },
    });

    // .then((response) => response.json())
    // .then((data) => console.log(data));

    console.log(state);
  };

  const getCountryEntered = (e) => {
    dispatch({ type: GET_COUNTRY_ENTERED, payload: e.target.value });
  };

  const getCountryFrom = (e) => {
    dispatch({ type: GET_COUNTRY_FROM, payload: e.target.value });
  };

  const getPassengerPapersStatus = (e) => {
    dispatch({
      type: GET_PASSENGER_PAPERS_STATUS,
      payload: e.target.innerText,
    });
  };

  const getZoneColor = (e) => {
    if (e) {
      const color = e.toLowerCase();
      dispatch({ type: GET_ZONE_COLOR, payload: color });
    }
  };

  const getBorderName = (borderName) => {
    dispatch({ type: GET_BORDER_NAME, payload: borderName });
  };

  const getHadCovid = (e) => {
    dispatch({ type: GET_HAD_COVID, payload: e.target.innerText });
  };

  const getVaccinationStatus = (e) => {
    dispatch({ type: GET_VACCINATION_STATUS, payload: e.target.innerText });
  };

  const getVaccineName = (e) => {
    dispatch({ type: GET_VACCINE_NAME, payload: e.target.innerText });
  };

  const getCovidPassportStatus = (e) => {
    dispatch({ type: GET_COVID_PASSPORT_STATUS, payload: e.target.innerText });
  };

  const getPcrStatus = (e) => {
    dispatch({ type: GET_PCR_STATUS, payload: e.target.innerText });
  };

  const getAntiGenStatus = (e) => {
    dispatch({ type: GET_ANTIGEN_STATUS, payload: e.target.innerText });
  };

  const getQuarantineStatus = (e) => {
    dispatch({ type: GET_QUARANTINE_STATUS, payload: e.target.innerText });
  };

  const getQuarantineDays = (numberOfDays) => {
    dispatch({ type: GET_QUARANTINE_DAYS, payload: numberOfDays });
  };

  const getWaitingTime = (minutes) => {
    dispatch({ type: GET_WAITING_TIME, payload: minutes });
  };

  const getComment = (text) => {
    dispatch({ type: GET_COMMENT, payload: text });
  };

  const getPreviousQuestion = (currentQuestionNumber) => {
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
