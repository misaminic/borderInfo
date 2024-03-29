import React, { useState, useContext, useReducer, useCallback } from 'react';
import reducer from '../reducers/reducer';
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
  CHANGE_TO_THE_NEXT_QUESTION,
} from '../actions/actions';

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
  const [state, dispatch]: [any, React.Dispatch<any>] = useReducer(
    reducer,
    initialState
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarMenuIconVisible, setIsSidebarMenuIconVisible] =
    useState(true);
  const [isAnimated, setIsAnimate] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebarMenuIconVisibility = (value: boolean) => {
    setIsSidebarMenuIconVisible(value);
  };

  // detecting window size in order to make posting feedback sections responsive
  // if a user needs to input some value, the keyobard shows up and then layout must be fixed
  // the function below is a part of the fix
  const handleResize = () => {
    if (window.innerHeight < 500) {
      toggleSidebarMenuIconVisibility(false);
    } else {
      toggleSidebarMenuIconVisibility(true);
    }
  };

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
  };

  const [alert, setAlert] = useState({ show: false, msg: '' });

  const showAlertFromFeedback = useCallback(
    (show: boolean = false, msg: string = '') => {
      setAlert({ show, msg });
    },
    []
  );

  const changeToTheNextQuestion = (nextQuestion: {
    propertyToCheck: string;
    sectionNumber: number;
  }) => {
    const { propertyToCheck, sectionNumber } = nextQuestion;
    if (!state[propertyToCheck]) {
      showAlertFromFeedback(true, 'Please choose a country');
    } else {
      setIsAnimate(true);
      dispatch({
        type: CHANGE_TO_THE_NEXT_QUESTION,
        payload: sectionNumber,
      });
    }
  };

  const getCountryEntered = (valueEntered: {
    value: string;
    label: string;
  }) => {
    console.log(valueEntered, 'context');
    dispatch({ type: GET_COUNTRY_ENTERED, payload: valueEntered });
  };

  const getCountryFrom = (valueEntered: { value: string; label: string }) => {
    dispatch({ type: GET_COUNTRY_FROM, payload: valueEntered.value });
  };

  const getPassengerPapersStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: GET_PASSENGER_PAPERS_STATUS,
      payload: e.target.innerText,
    });
  };

  const getZoneColor = (e: string) => {
    if (e) {
      const color = e.toLowerCase();
      dispatch({ type: GET_ZONE_COLOR, payload: color });
    }
  };

  const getBorderName = (borderName: string) => {
    dispatch({ type: GET_BORDER_NAME, payload: borderName });
  };

  const getHadCovid = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: GET_HAD_COVID, payload: e.target.innerText });
  };

  const getVaccinationStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: GET_VACCINATION_STATUS, payload: e.target.innerText });
  };

  const getVaccineName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: GET_VACCINE_NAME, payload: e.target.innerText });
  };

  const getCovidPassportStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: GET_COVID_PASSPORT_STATUS, payload: e.target.innerText });
  };

  const getPcrStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: GET_PCR_STATUS, payload: e.target.innerText });
  };

  const getAntiGenStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: GET_ANTIGEN_STATUS, payload: e.target.innerText });
  };

  const getQuarantineStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: GET_QUARANTINE_STATUS, payload: e.target.innerText });
  };

  const getQuarantineDays = (numberOfDays: string) => {
    dispatch({ type: GET_QUARANTINE_DAYS, payload: numberOfDays });
  };

  const getWaitingTime = (minutes: string) => {
    if (+minutes > 360) {
      dispatch({ type: GET_WAITING_TIME, payload: 'longer than 6 hours' });
    } else {
      dispatch({ type: GET_WAITING_TIME, payload: minutes });
    }
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
        isSidebarOpen,
        isSidebarMenuIconVisible,
        isAnimated,
        toggleSidebarMenuIconVisibility,
        toggleSidebar,
        handleResize,
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
        changeToTheNextQuestion,
        showAlertFromFeedback,
        alert,
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
