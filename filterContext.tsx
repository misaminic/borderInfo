import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  ChangeEventHandler,
  ChangeEvent,
} from 'react';
import reducer from './filterReducer';
import { GET_ALL_ITEMS, UPDATE_FILTERS, FILTER_RESULTS } from './actions';
import CovidPassport from './components/CovidPassport';
import CountryEntered from './components/Country';

type Props = {
  children: JSX.Element;
};

enum ActionType {
  GET_ALL_ITEMS = 'GET_ALL_ITEMS',
  UPDATE_FILTERS = 'UPDATE_FILTERS',
  FILTER_RESULTS = 'FILTER_RESULTS',
}

// interface IReducer {
//   type: ActionType;
//   payload: string | number | boolean | any;
// }

type Filter_State = {
  filtered_items: any;
  all_items: any;
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

const initialState: Filter_State = {
  filtered_items: [],
  all_items: [],
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
    quarantineStatus: '',
    comment: '',
    feedbackPostedTime: '',
    timeStamp: '',
  },
};

const FilterContext = React.createContext({});

export const FilterProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(
    reducer,
    initialState
  );

  //   sets all items in reducer's state
  const [allItems, setAllItems] = useState([]);

  // displaying notifications/warnings for forms

  const [alert, setAlert] = useState({ show: false, msg: '' });

  const showAlert = useCallback((show: boolean = false, msg: string = '') => {
    setAlert({ show, msg });
  }, []);

  const fetchAllItems = useCallback(() => {
    fetch(`/api/feedback/`)
      .then((response) => response.json())
      .then((data) => {
        setAllItems(data);
      });
  }, []);

  useEffect(() => {
    fetchAllItems();
  }, [fetchAllItems]);

  const updateFilters = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    let checked = e.target.checked;
    let inputType = e.target.localName;

    dispatch({ type: GET_ALL_ITEMS, payload: allItems });

    dispatch({
      type: UPDATE_FILTERS,
      payload: { name, value, checked, inputType },
    });
  };

  const filterResults = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // validating if all data is entered
    if (state.filters.countryEntered === '') {
      showAlert(true, 'Choose a country you are travelling to');
    } else if (state.filters.countryFrom === '') {
      showAlert(true, 'Choose a country you are travelling from');
    } else if (state.filters.passengerPapersStatus === '') {
      showAlert(true, 'Choose status in the country you are travelling to');
    } else if (state.filters.hadCovid === '') {
      showAlert(true, 'Please answer if you have had Covid');
    } else if (state.filters.vaccinationStatus === '') {
      showAlert(true, 'Please answer if you have been vaccinated');
    } else if (
      state.filters.vaccinationStatus === 'yes' &&
      state.filters.covidPassport === ''
    ) {
      showAlert(true, 'Please answer if you have covid passport ');
    } else if (
      (state.filters.vaccinationStatus === 'no' &&
        state.filters.antiGenStatus === '') ||
      (state.filters.vaccinationStatus === 'got a first dose' &&
        state.filters.antiGenStatus === '')
    ) {
      showAlert(true, 'Please answer if you have taken antigen test');
    } else if (
      (state.filters.vaccinationStatus === 'no' &&
        state.filters.pcrStatus === '') ||
      (state.filters.vaccinationStatus === 'got a first dose' &&
        state.filters.pcrStatus === '')
    ) {
      showAlert(true, 'Please answer if you have taken PCR test');
    } else if (state.filters.antiGenStatus === '') {
      showAlert(true, 'Please answer if you have taken antigen test');
    } else if (state.filters.pcrStatus === '') {
      showAlert(true, 'Please answer if you have taken PCR test');
    }
    // if all data is entered - dispatch action
    else {
      dispatch({ type: FILTER_RESULTS });
    }
  };

  return (
    <FilterContext.Provider
      value={{ ...state, alert, showAlert, updateFilters, filterResults }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
