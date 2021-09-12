import React, { useState, useEffect, useRef } from 'react';
import { useTransition, useSpring, animated } from 'react-spring';
import countries from '../AllCountriesNames.json';
import { useFilterContext } from '../filterContext';
import styled from 'styled-components';
import _ from 'lodash';
import RadioCheckbox from '../../components/buildingBlocks/RadioCheckbox';
import Alert from '../../components/buildingBlocks/Alert';
import ActionButton from '../../components/buildingBlocks/ActionButton';
import SelectElement from '../../components/buildingBlocks/SelectElement';

type ResultSection = {
  current: any;
};

const ShowBorderStatus = () => {
  const [results, setResults] = useState([]);

  const {
    filters: {
      countryEntered,
      countryFrom,
      passengerPapersStatus,
      // zoneColor,
      // borderName,
      hadCovid,
      vaccinationStatus,
      // vaccineName,
      covidPassport,
      pcrStatus,
      antiGenStatus,
    },
    alert,
    filtered_items,
    updateFilters,
    filterResults,
  }: any = useFilterContext();

  const results_section = useRef<any | undefined>(null);

  // Displaying results values
  const numberOfHits = _.size(results);
  const countryIn = filtered_items[0]?.countryEntered;
  const countryOut = filtered_items[0]?.countryFrom;

  useEffect(() => {
    setResults(filtered_items);
  }, [filtered_items]);

  useEffect(() => {
    if (results_section.current && numberOfHits > 0) {
      results_section.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [numberOfHits]);

  const transition = useTransition(vaccinationStatus, {
    loop: false,
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  });

  const transitionForAlert = useTransition(alert, {
    // loop: false,
    from: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  });

  return (
    <div className="w-screen flex flex-col items-center justify-center mt-10 px-3">
      <h1 className="text-center mb-8 text-lg font-bold">
        SET YOUR ROUTE AND STATUS
      </h1>
      <ShowStatusSections no_mt={true}>
        <LabelForQuestionsWithSelect htmlFor="countryEntered">
          TRAVELLING TO
        </LabelForQuestionsWithSelect>
        <SelectElement
          name={'countryEntered'}
          value={countryEntered}
          handler={updateFilters}
          itemsData={countries}
        />
        {/* <QuestionsWithSelect>
          
        </QuestionsWithSelect> */}
      </ShowStatusSections>
      <ShowStatusSections>
        <LabelForQuestionsWithSelect htmlFor="countryFrom">
          TRAVELLING FROM
        </LabelForQuestionsWithSelect>
        <SelectElement
          name={'countryFrom'}
          value={countryFrom}
          handler={updateFilters}
          itemsData={countries}
        />
        {/* <QuestionsWithSelect>
         
        </QuestionsWithSelect> */}
      </ShowStatusSections>
      {/* <ShowStatusSections>
        <div className="search_input">
          <label className="label" htmlFor="zoneColor">
            Choose zone:
            {['green', 'yellow', 'orange', 'red', 'grey'].map((item, i) => {
              return (
                <label htmlFor={item} key={i}>
                  {item}:
                  {zoneColor && zoneColor !== item ? (
                    <input
                      type="checkbox"
                      name="zoneColor"
                      value={item}
                      checked={checked}
                      disabled
                    />
                  ) : (
                    <input
                      type="checkbox"
                      name="zoneColor"
                      value={item}
                      checked={checked}
                      onChange={updateFilters}
                    />
                  )}
                </label>
              );
            })}
          </label>
        </div>
      </ShowStatusSections> */}
      <ShowStatusSections>
        <LabelForQuestionsWithSelect
          htmlFor="passengerPapersStatus"
          longText={true}
        >
          STATUS IN THE COUNTRY YOU ARE TRAVELLING TO
        </LabelForQuestionsWithSelect>
        <SelectElement
          name={'passengerPapersStatus'}
          value={passengerPapersStatus}
          handler={updateFilters}
          itemsData={[
            { name: 'tourist' },
            { name: 'citizen' },
            { name: 'permanent residency' },
            { name: 'temporary residency' },
          ]}
        />
        {/* <QuestionsWithSelect>
          <select
            name="passengerPapersStatus"
            value={passengerPapersStatus}
            onChange={updateFilters}
            required
          >
            <option value="">
              {passengerPapersStatus
                ? passengerPapersStatus
                : 'CHOOSE A STATUS'}
            </option>
            <option value="tourist">TOURIST</option>
            <option value="citizen">CITIZEN</option>
            <option value="permanent residency">PERMANENT RESIDENCY</option>
            <option value="temporary residency">TEMPORARY RESIDENCY</option>
          </select>
        </QuestionsWithSelect> */}
      </ShowStatusSections>
      {/* <ShowStatusSections>
        <div className="search_input">
          <label className="label" htmlFor="borderName">
            BORDER NAME:
            <input
              type="text"
              name="borderName"
              value={borderName}
              onChange={updateFilters}
            />
          </label>
        </div>
      </ShowStatusSections> */}
      <ShowStatusSections>
        <QuestionHeadline>Had covid</QuestionHeadline>
        <QuestionWrapper>
          {['yes', 'no'].map((item, i) => {
            return (
              <RadioCheckbox
                key={i}
                name={'hadCovid'}
                value={item}
                handler={updateFilters}
                valueInState={hadCovid}
                item={item}
              />
            );
          })}
        </QuestionWrapper>
      </ShowStatusSections>
      <ShowStatusSections>
        <QuestionHeadline>Vaccinated</QuestionHeadline>
        <QuestionWrapper>
          {['yes', 'no', 'got a first dose'].map((item, i) => {
            return (
              <RadioCheckbox
                key={i}
                name={'vaccinationStatus'}
                value={item}
                handler={updateFilters}
                valueInState={vaccinationStatus}
                item={item}
              />
            );
          })}
        </QuestionWrapper>
      </ShowStatusSections>
      {vaccinationStatus === 'yes' ? (
        <>
          {/* <ShowStatusSections>
            <div className="search_input">
              <label className="label" htmlFor="vaccineName">
                VACCINE NAME:
                <select
                  name="vaccineName"
                  value={vaccineName}
                  onChange={updateFilters}
                >
                  <option value="">
                    {vaccineName ? vaccineName : 'CHOOSE A VACCINE'}
                  </option>
                  <option key={1} value="pfiser">
                    PFISER
                  </option>
                  <option key={2} value="moderna">
                    MODERNA
                  </option>
                  <option key={3} value="sinofarm">
                    SINOFARM
                  </option>
                  <option key={4} value="astraZeneca">
                    ASTRA ZENECA
                  </option>
                  <option key={5} value="sputnik">
                    SPUTNIK
                  </option>
                </select>
              </label>
            </div>
          </ShowStatusSections> */}
          {transition((style, item) =>
            item ? (
              <>
                <animated.div style={style} className="item">
                  <ShowStatusSections>
                    <QuestionHeadline>Has covid passport</QuestionHeadline>
                    <QuestionWrapper>
                      <RadioCheckbox
                        key={7}
                        name={'covidPassport'}
                        value={'yes'}
                        handler={updateFilters}
                        valueInState={covidPassport}
                        item={'yes'}
                      />
                      <RadioCheckbox
                        key={8}
                        name={'covidPassport'}
                        value={'no'}
                        handler={updateFilters}
                        valueInState={covidPassport}
                        item={'no'}
                      />
                    </QuestionWrapper>
                  </ShowStatusSections>
                </animated.div>
              </>
            ) : null
          )}
        </>
      ) : null}

      <ShowStatusSections>
        <QuestionHeadline>Done antigen test</QuestionHeadline>
        <QuestionWrapper>
          {['yes', 'no'].map((item, i) => {
            return (
              <RadioCheckbox
                key={i}
                name={'antiGenStatus'}
                value={item}
                handler={updateFilters}
                valueInState={antiGenStatus}
                item={item}
              />
            );
          })}
        </QuestionWrapper>
      </ShowStatusSections>

      <ShowStatusSections>
        <QuestionHeadline>Done PCR test</QuestionHeadline>
        <QuestionWrapper>
          {['yes', 'no'].map((item, i) => {
            return (
              <RadioCheckbox
                key={i}
                name={'pcrStatus'}
                value={item}
                handler={updateFilters}
                valueInState={pcrStatus}
                item={item}
              />
            );
          })}
        </QuestionWrapper>
      </ShowStatusSections>
      {transitionForAlert((style, item) =>
        item ? (
          <>
            <animated.div style={style} className="item">
              {alert ? <Alert {...alert} /> : null}
            </animated.div>
          </>
        ) : null
      )}

      <ActionButton handler={filterResults} text={'SEARCH'} />
      <ResultSection ref={results_section}>
        {numberOfHits > 0 && numberOfHits < 2 ? (
          <>
            <QuestionHeadline>Results</QuestionHeadline>
            <p className="results_text">
              {`There is ${numberOfHits} passenger
              matching your search.`}
            </p>
          </>
        ) : numberOfHits > 1 ? (
          <>
            <QuestionHeadline>Results</QuestionHeadline>
            <p className="results_text">
              {`There is ${numberOfHits} passengers
              matching your search.`}
            </p>
          </>
        ) : filtered_items === false ? (
          <>
            <h2>No results for the searched criteria.</h2>
          </>
        ) : null}

        {numberOfHits > 0 && <h3>Additional info</h3>}
        {numberOfHits > 0 &&
          _.map(results, (item: any) => {
            // counting how much time has passed since a comment has been submited
            let endTimeStamp = _.now();
            // final time is in hours
            let countTime = (endTimeStamp - item.timeStamp) / (1000 * 60 * 60);

            // get if time passed is half an hour or a whole hour
            const roundToHalf = (value: any) => {
              const converted: any = parseFloat(value).toFixed(1);
              let decimal = converted - parseInt(converted, 10);
              decimal = Math.round(decimal * 10);
              if (decimal == 5) {
                return parseInt(converted, 10) + 0.5;
              }
              if (decimal < 3 || decimal > 7) {
                return Math.round(converted);
              } else {
                return parseInt(converted, 10) + 0.5;
              }
            };

            const finalTime = roundToHalf(countTime);

            const elapsedTimeInSeconds: any =
              (endTimeStamp - item.timeStamp) / 1000;
            console.log(finalTime);
            // checking if more than one day
            if (+finalTime > 23.5) {
              return (
                <div className="each_feedback">
                  <p className="time">{`Posted ${item.feedbackPostedTime}`}</p>
                  <p className="comment">{`${item.comment}`}</p>
                  <p>{`Border name: ${item.borderName.toUpperCase()}`}</p>
                  <p>{`Time it took to pass it: ${item.waitingTime}m`}</p>
                  <p>{`Status: ${item.passengerPapersStatus.toUpperCase()}`}</p>
                  <p>{`Quarantine required: ${item.quarantineStatus.toUpperCase()}`}</p>
                  <p>{`${
                    item.quarantineStatus === 'yes'
                      ? `Quarantine duration: ${item.quarantineDays} days`
                      : ''
                  }`}</p>
                </div>
              );
              // time in hours
            } else if (+finalTime <= 23.5 && +finalTime >= 1) {
              return (
                <div className="each_feedback">
                  <p className="time">{`Posted ${finalTime}h ago`}</p>
                  <p className="comment">{`${item.comment}`}</p>
                  <p>{`Border name: ${item.borderName.toUpperCase()}`}</p>
                  <p>{`Time it took to pass it: ${item.waitingTime}m`}</p>
                  <p>{`Status in the entered country: ${item.passengerPapersStatus.toUpperCase()}`}</p>
                  <p>{`Quarantine required: ${item.quarantineStatus.toUpperCase()}`}</p>
                  <p>{`${
                    item.quarantineStatus === 'yes'
                      ? `Quarantine duration: ${item.quarantineDays} days`
                      : ''
                  }`}</p>
                </div>
              );
              // time in minutes
            } else if (elapsedTimeInSeconds > 60) {
              let timeInMinutes: any =
                (endTimeStamp - item.timeStamp) / (1000 * 60);
              return (
                <div className="each_feedback">
                  <p className="time">{`Posted ${parseFloat(
                    timeInMinutes
                  ).toFixed(0)}m ago`}</p>
                  <p className="comment">{`${item.comment}`}</p>
                  <p>{`Border name: ${item.borderName.toUpperCase()}`}</p>
                  <p>{`Time it took to pass it: ${item.waitingTime}m`}</p>
                  <p>{`Status: ${item.passengerPapersStatus.toUpperCase()}`}</p>
                  <p>{`Quarantine required: ${item.quarantineStatus.toUpperCase()}`}</p>
                  <p>{`${
                    item.quarantineStatus === 'yes'
                      ? `Quarantine duration: ${item.quarantineDays} days`
                      : ''
                  }`}</p>
                </div>
              );
              // time in seconds
            } else if (elapsedTimeInSeconds < 60) {
              return (
                <div className="each_feedback">
                  <p>{`Posted ${parseFloat(elapsedTimeInSeconds).toFixed(
                    0
                  )}s ago`}</p>
                  <p className="comment">{`${item.comment}`}</p>
                  <p>{`Border name: ${item.borderName.toUpperCase()}`}</p>
                  <p>{`Time it took to pass it: ${item.waitingTime}m`}</p>
                  <p>{`Status: ${item.passengerPapersStatus.toUpperCase()}`}</p>
                  <p>{`Quarantine required: ${item.quarantineStatus.toUpperCase()}`}</p>
                  <p>{`${
                    item.quarantineStatus === 'yes'
                      ? `Quarantine duration: ${item.quarantineDays} days`
                      : ''
                  }`}</p>
                </div>
              );
            }
          })}
      </ResultSection>
    </div>
  );
};

const ShowStatusSections = styled.section<any>`
  display: flex;
  flex-direction: column;
  place-self: center;
  margin-top: ${(props) => (props.no_mt ? '0' : '3rem')};
`;

const ResultSection = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0.5rem;

  h2 {
    background: white;
    color: black;
    padding: 0.5rem;
    border-radius: 0.2rem;
    font-weight: bold;
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: rgba(52, 211, 153, 0.9);
    padding: 0.5rem;
    border: 1px solid rgba(52, 211, 153, 0.9);
    border-radius: 0.2rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  .each_feedback {
    margin-top: 0.5rem;
    border-top: 1px solid rgba(52, 211, 153, 0.9);
  }

  .each_feedback p {
    margin-bottom: 0.2rem;
    /* color: rgba(52, 211, 153, 0.9); */
  }

  .comment {
    margin-top: 1rem;
    margin-bottom: 1rem !important;
  }

  .time {
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .results_text {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const QuestionWrapper = styled.div`
  place-self: center;
  label:last-of-type {
    margin-right: 0;
  }
`;

const QuestionHeadline = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  margin-bottom: 0.7rem;
  text-decoration-line: underline;
  text-underline-offset: 0.35rem;
  text-decoration-color: rgba(52, 211, 153, 0.9);

  @media only screen and (min-width: 640px) {
    /* font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.15rem;
  line-height: 3rem; */
  }
`;

const LabelForQuestionsWithSelect = styled.label<any>`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  margin-bottom: 1rem;
  text-decoration-line: underline;
  text-decoration-color: rgba(52, 211, 153, 0.9);
  /* text-underline-position: under; */
  text-underline-offset: 0.35rem;
  letter-spacing: ${(props) => (props.longText ? '0' : '0.1rem')};
  font-size: ${(props) => (props.longText ? '0.85rem' : '1.1rem')};
`;

const QuestionsWithSelect = styled.div`
  display: flex;
  select {
    text-align-last: center;
    margin: 0 auto;
  }
`;

export default ShowBorderStatus;
