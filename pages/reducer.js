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

const reducer = (state, action) => {
  if (action.type === GET_COUNTRY_ENTERED) {
    return {
      ...state,
      countryEntered: action.payload,
      currentQuestionDisplayed: 1,
    };
  }
  if (action.type === GET_COUNTRY_FROM) {
    return {
      ...state,
      countryFrom: action.payload,
      currentQuestionDisplayed: 2,
    };
  }

  if (action.type === GET_ZONE_COLOR) {
    return { ...state, zoneColor: action.payload, currentQuestionDisplayed: 3 };
  }

  if (action.type === GET_BORDER_NAME) {
    return {
      ...state,
      borderName: action.payload,
      currentQuestionDisplayed: 4,
    };
  }

  if (action.type === GET_PASSENGER_PAPERS_STATUS) {
    return {
      ...state,
      passengerPapersStatus: action.payload,
      currentQuestionDisplayed: 5,
    };
  }
  if (action.type === GET_HAD_COVID) {
    let covidStatus = action.payload;
    if (covidStatus === 'YES') {
      covidStatus = 'YES';
    } else {
      covidStatus = 'FALSE';
    }
    return { ...state, hadCovid: covidStatus, currentQuestionDisplayed: 6 };
  }

  if (action.type === GET_VACCINATION_STATUS) {
    if (action.payload === 'NO') {
      return {
        ...state,
        vaccinationStatus: action.payload,
        currentQuestionDisplayed: 7,
      };
    } else {
      return {
        ...state,
        vaccinationStatus: action.payload,
        showAdditionalQuestion: true,
      };
    }
  }

  if (action.type === GET_VACCINE_NAME) {
    return {
      ...state,
      vaccineName: action.payload,
      currentQuestionDisplayed: 7,
      showAdditionalQuestion: false,
    };
  }

  if (action.type === GET_COVID_PASSPORT_STATUS) {
    let covidPassportStatus = action.payload;
    if (covidPassportStatus === 'YES') {
      covidPassportStatus = 'YES';
    } else {
      covidPassportStatus = 'NO';
    }

    return {
      ...state,
      covidPassport: covidPassportStatus,
      currentQuestionDisplayed: 8,
    };
  }

  if (action.type === GET_ANTIGEN_STATUS) {
    const currentStatus = action.payload === 'YES' ? true : false;
    return {
      ...state,
      antiGenStatus: currentStatus,
      currentQuestionDisplayed: 9,
    };
  }

  if (action.type === GET_PCR_STATUS) {
    return {
      ...state,
      pcrStatus: action.payload,
      currentQuestionDisplayed: 10,
    };
  }

  if (action.type === GET_QUARANTINE_STATUS) {
    if (action.payload === 'YES') {
      return {
        ...state,
        quarantineStatus: action.payload,
        showAdditionalQuestion: true,
      };
    } else {
      return {
        ...state,
        quarantineStatus: action.payload,
        currentQuestionDisplayed: 11,
        showAdditionalQuestion: false,
      };
    }
  }

  if (action.type === GET_QUARANTINE_DAYS) {
    return {
      ...state,
      quarantineDays: action.payload,
      currentQuestionDisplayed: 11,
    };
  }

  if (action.type === GET_WAITING_TIME) {
    return {
      ...state,
      waitingTime: action.payload,
      currentQuestionDisplayed: 12,
    };
  }

  if (action.type === GET_COMMENT) {
    return {
      ...state,
      comment: action.payload,
    };
  }

  if (action.type === SUBMIT_USER_FEED_BACK_TO_DB) {
    console.log(action.payload);
    return {
      ...state,
      feedbackPostedTime: action.payload.postedTime,
      timeStamp: action.payload.timeStamp,
      currentQuestionDisplayed: 13,
    };
  }

  if (action.type === GET_PREVIOUS_QUESTION) {
    let currentQuestionNumber = action.payload - 1;
    return { ...state, currentQuestionDisplayed: currentQuestionNumber };
  }

  if (action.type === SHOW_RIGHT_QUESTION) {
    return { ...state, showAdditionalQuestion: false };
  }

  return state;
};

export default reducer;
