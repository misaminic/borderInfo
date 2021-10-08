import { useGlobalContext } from '../contexts/context';
import { listOfCountries } from '../utils/utils';
import BackButton from './buildingBlocks/BackButton';
import SearchSelectElement from './buildingBlocks/SearchSelectElement';
import NextButton from './buildingBlocks/NextButton';
import Alert from './buildingBlocks/Alert';
import Select from 'react-select';
import { animated } from 'react-spring';
import { usePageAnimation } from '../styles/animations/pagesTranstions';

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    border: '1px solid rgba(255,255,255,0.5)',
    borderTop: '0',
    backgroundColor: '#000',
    color: state.isSelected ? 'rgba(52, 211, 153, 0.9)' : '#fff',
    padding: 15,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 250,
    display: 'flex',
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: '0.2rem',
    color: '#fff &#160; !important',
  }),
  singleValue: (provided: any) => {
    // const opacity = state.isDisabled ? 0.5 : 1;
    // const transition = 'opacity 300ms';
    const color = '#fff';
    return { ...provided, color };
  },
  input: (provdided: any) => {
    const color = '#fff';

    return { ...provdided, color };
  },

  menu: (provided: any) => {
    // const borderTop = '1px solid rgba(255,255,255,0.1)';
    const borderRadius = '1px';
    return { ...provided, borderRadius };
  },

  menuList: (provided: any, state: any) => {
    const paddingTop = '0';
    const paddingBottom = '0';
    const borderTop = '1px solid rgba(0,0,0,0.5)';
    // const borderBottom = '1px solid rgba(0,0,0,0.5);';

    return { ...provided, paddingTop, paddingBottom, borderTop };
  },
};

const CountryEntered = () => {
  const {
    getCountryEntered,
    countryEntered,
    alert,
    handleResize,
    isSidebarMenuIconVisible,
  }: any = useGlobalContext();

  if (typeof window !== 'undefined') {
    // browser code
    window.addEventListener('resize', handleResize);
  }

  const { customAnimation }: any = usePageAnimation();

  return (
    <>
      {customAnimation((style: any, isAnimated: boolean) =>
        isAnimated ? (
          <animated.div className={`feedback_question_wrapper`} style={style}>
            {isSidebarMenuIconVisible && (
              <label htmlFor={countryEntered}>Country you travelled to</label>
            )}
            <SearchSelectElement
              name={countryEntered}
              value={countryEntered}
              handler={getCountryEntered}
              placeholder={countryEntered ? countryEntered : 'Choose a country'}
              options={listOfCountries}
            />

            {alert ? <Alert {...alert} /> : null}

            <div>
              <NextButton
                nextQuestion={{
                  propertyToCheck: 'countryEntered',
                  sectionNumber: 1,
                }}
              />
              <BackButton />
            </div>
          </animated.div>
        ) : null
      )}
    </>
  );
};

export default CountryEntered;
