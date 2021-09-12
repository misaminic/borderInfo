import { GET_ALL_ITEMS, UPDATE_FILTERS, FILTER_RESULTS } from './actions';
import _ from 'lodash';
import CovidPassport from '../components/CovidPassport';

type ActionType = {
  type: 'GET_ALL_ITEMS' | 'UPDATE_FILTERS' | 'FILTER_RESULTS';
  payload: any;
};

type Initial_State = {
  filtered_items: (string | number | boolean)[];
  all_items: (string | number | boolean)[] | any;
  filters: {
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
    comment: string;
    feedbackPostedTime: string;
    timeStamp: string;
  };
};

const filterReducer = (state: Initial_State, action: ActionType) => {
  if (action.type === GET_ALL_ITEMS) {
    return { ...state, all_items: action.payload };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value, checked, inputType } = action.payload;

    if (checked === false && inputType === 'input') {
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: '',
        },
      };
    }

    // Check if vaccinated was true and then covid passport set to true
    // but after that a user maybe went back and set vaccinated to 'no' or 'got a first dose'
    // in that case covid passport value will stay saved, but actually needs to be deleted

    if (name === 'vaccinationStatus' && value === 'no') {
      return {
        ...state,
        filters: {
          ...state.filters,
          vaccinationStatus: 'no',
          covidPassport: '',
        },
      };
    }

    if (name === 'vaccinationStatus' && value === 'got a first dose') {
      return {
        ...state,
        filters: {
          ...state.filters,
          vaccinationStatus: 'got a first dose',
          covidPassport: '',
        },
      };
    }
    //****************************************************//

    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  }

  if (action.type === FILTER_RESULTS) {
    if (state.all_items.borderInfo && state.filters) {
      // checks value types in an object received from a user
      const checkValueType = (
        propertyInTheObject: string | number | boolean
      ) => {
        if (propertyInTheObject === '') {
          return false;
        } else if (
          typeof propertyInTheObject === 'string' ||
          typeof propertyInTheObject === 'number' ||
          typeof propertyInTheObject === 'boolean'
        ) {
          return true;
        } else {
          return false;
        }
      };

      // takes object in which user's search data is stored and applies the function checkValueType to get just the keys/values that are of the specified type.
      const searchedTerms = _.pickBy(state.filters, checkValueType);

      // takes collection of objects and returns all the objects that have the same key/value pairs as the object provided as a second argument.
      const matches = _.filter(state.all_items.borderInfo, searchedTerms);
      if (!_.isEmpty(matches)) {
        return {
          ...state,
          filtered_items: { ...matches },
          filters: {
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
            feedbackPostedTime: '',
          },
        };
      } else {
        return { ...state, filtered_items: false };
      }
    }
  }

  throw new Error(`No Matching '${action.type}' - action type`);
};

export default filterReducer;
