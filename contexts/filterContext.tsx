import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  ChangeEventHandler,
  ChangeEvent,
} from 'react';
import reducer from '../reducers/filterReducer';
import {
  GET_ALL_ITEMS,
  UPDATE_FILTERS,
  FILTER_RESULTS,
  SWAP_PLACES,
} from '../actions/actions';
import CovidPassport from '../components/CovidPassport';
import CountryEntered from '../components/Country';

type Props = {
  children: JSX.Element;
};

enum ActionType {
  GET_ALL_ITEMS = 'GET_ALL_ITEMS',
  UPDATE_FILTERS = 'UPDATE_FILTERS',
  FILTER_RESULTS = 'FILTER_RESULTS',
}

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

  const [resultsVisibility, setResultsVisibility] = useState(false);

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

  const countriesSwapPlaces = () => {
    if (state.filters.countryEntered && state.filters.countryFrom) {
      dispatch({ type: SWAP_PLACES });
    }
  };

  const updateFilters = (e: any, a: any) => {
    dispatch({ type: GET_ALL_ITEMS, payload: allItems });

    console.log(e, a);

    if (a && a.name === 'countryEntered') {
      let name = 'countryEntered';
      let value = e.value;
      let checked = true;
      let inputType = 'select';

      dispatch({
        type: UPDATE_FILTERS,
        payload: { name, value, checked, inputType },
      });
    }

    if (a && a.name === 'countryFrom') {
      let name = 'countryFrom';
      let value = e.value;
      let checked = true;
      let inputType = 'select';

      dispatch({
        type: UPDATE_FILTERS,
        payload: { name, value, checked, inputType },
      });
    }

    if (a && a.name === 'passengerPapersStatus') {
      let name = 'passengerPapersStatus';
      let value = e.value;
      let checked = true;
      let inputType = 'select';

      dispatch({
        type: UPDATE_FILTERS,
        payload: { name, value, checked, inputType },
      });
    }

    if (e.target) {
      let name = e.target.name;
      let value = e.target.value;
      let checked = e.target.checked;
      let inputType = e.target.localName;

      dispatch({
        type: UPDATE_FILTERS,
        payload: { name, value, checked, inputType },
      });
    }
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
      setResultsVisibility(!resultsVisibility);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        alert,
        resultsVisibility,
        showAlert,
        updateFilters,
        filterResults,
        countriesSwapPlaces,
        fetchAllItems,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
