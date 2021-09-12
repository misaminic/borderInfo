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

  // if (action.type === GET_ZONE_COLOR) {
  //   const payloadInLowerCase = action.payload.toLowerCase();

  //   return { ...state, zoneColor: action.payload, currentQuestionDisplayed: 3 };
  // }

  if (action.type === GET_BORDER_NAME) {
    const payloadInLowerCaseAndTrimmed = action.payload.trim().toLowerCase();
    return {
      ...state,
      borderName: payloadInLowerCaseAndTrimmed,
      currentQuestionDisplayed: 3,
    };
  }

  if (action.type === GET_PASSENGER_PAPERS_STATUS) {
    const payloadInLowerCase = action.payload.toLowerCase();
    return {
      ...state,
      passengerPapersStatus: payloadInLowerCase,
      currentQuestionDisplayed: 4,
    };
  }
  if (action.type === GET_HAD_COVID) {
    let covidStatus = action.payload;
    if (covidStatus === 'YES') {
      covidStatus = 'yes';
    } else {
      covidStatus = 'no';
    }
    return { ...state, hadCovid: covidStatus, currentQuestionDisplayed: 5 };
  }

  if (action.type === GET_VACCINATION_STATUS) {
    const payloadInLowerCase = action.payload.toLowerCase();
    if (action.payload === 'NO') {
      return {
        ...state,
        vaccinationStatus: payloadInLowerCase,
        currentQuestionDisplayed: 6,
      };
    } else {
      return {
        ...state,
        vaccinationStatus: payloadInLowerCase,
        showAdditionalQuestion: true,
      };
    }
  }

  if (action.type === GET_VACCINE_NAME) {
    const payloadInLowerCase = action.payload.toLowerCase();
    return {
      ...state,
      vaccineName: payloadInLowerCase,
      currentQuestionDisplayed: 6,
      showAdditionalQuestion: false,
    };
  }

  if (action.type === GET_COVID_PASSPORT_STATUS) {
    let covidPassportStatus = action.payload;
    if (covidPassportStatus === 'YES') {
      covidPassportStatus = 'yes';
    } else {
      covidPassportStatus = 'no';
    }

    return {
      ...state,
      covidPassport: covidPassportStatus,
      currentQuestionDisplayed: 7,
    };
  }

  if (action.type === GET_ANTIGEN_STATUS) {
    const currentStatus = action.payload === 'YES' ? 'yes' : 'no';
    return {
      ...state,
      antiGenStatus: currentStatus,
      currentQuestionDisplayed: 8,
    };
  }

  if (action.type === GET_PCR_STATUS) {
    const payloadInLowerCase = action.payload.toLowerCase();
    return {
      ...state,
      pcrStatus: payloadInLowerCase,
      currentQuestionDisplayed: 9,
    };
  }

  if (action.type === GET_QUARANTINE_STATUS) {
    const payloadInLowerCase = action.payload.toLowerCase();

    if (action.payload === 'YES') {
      return {
        ...state,
        quarantineStatus: payloadInLowerCase,
        showAdditionalQuestion: true,
      };
    } else {
      return {
        ...state,
        quarantineStatus: payloadInLowerCase,
        currentQuestionDisplayed: 10,
        showAdditionalQuestion: false,
      };
    }
  }

  if (action.type === GET_QUARANTINE_DAYS) {
    return {
      ...state,
      quarantineDays: action.payload,
      currentQuestionDisplayed: 10,
    };
  }

  if (action.type === GET_WAITING_TIME) {
    return {
      ...state,
      waitingTime: action.payload,
      currentQuestionDisplayed: 11,
    };
  }

  if (action.type === GET_COMMENT) {
    return {
      ...state,
      comment: action.payload,
    };
  }

  if (action.type === SUBMIT_USER_FEED_BACK_TO_DB) {
    return {
      ...state,
      feedbackPostedTime: action.payload.postedTime,
      timeStamp: action.payload.timeStamp,
      currentQuestionDisplayed: 12,
    };
  }

  if (action.type === FEEDBACK_SUBMITING_FINISHED) {
    return {
      ...state,
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