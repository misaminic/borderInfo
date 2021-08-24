import React, { useState, useEffect } from 'react';
import countries from '../AllCountriesNames.json';
import { useFilterContext } from '../filterContext';
import styled from 'styled-components';
import _ from 'lodash';
import RadioCheckbox from '../../components/buildingBlocks/RadioCheckbox';
import Alert from '../../components/buildingBlocks/Alert';
import ActionButton from '../../components/buildingBlocks/ActionButton';

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
  } = useFilterContext();

  useEffect(() => {
    setResults(filtered_items);
  }, [filtered_items]);

  // Displaying results values
  const numberOfHits = _.size(results);
  const countryIn = filtered_items[0]?.countryEntered;
  const countryOut = filtered_items[0]?.countryFrom;

  return (
    <div className="w-screen flex flex-col items-center justify-center mt-10">
      <h1 className="text-center mb-8">
        CHECK IF SOMEONE TRAVELED TO THE SAME PLACE WITH THE SAME STATUS AS YOU
      </h1>
      <ShowStatusSections no_mt={true}>
        <LabelForQuestionsWithSelect htmlFor="countryEntered">
          TRAVELLING TO
        </LabelForQuestionsWithSelect>
        <QuestionsWithSelect>
          <select
            name="countryEntered"
            value={countryEntered}
            onChange={updateFilters}
          >
            <option value="">
              {countryEntered ? countryEntered : 'CHOOSE A COUNTRY'}
            </option>
            {countries.map((item, index) => {
              const { name } = item;
              return (
                <option key={index + 1} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </QuestionsWithSelect>
      </ShowStatusSections>
      <ShowStatusSections>
        <LabelForQuestionsWithSelect htmlFor="countryFrom">
          TRAVELLING FROM
        </LabelForQuestionsWithSelect>
        <QuestionsWithSelect>
          <select
            name="countryFrom"
            value={countryFrom}
            onChange={updateFilters}
            required
          >
            <option value="">
              {countryFrom ? countryFrom : 'CHOOSE A COUNTRY'}
            </option>
            {countries.map((item, index) => {
              const { name } = item;
              return (
                <option key={index + 1} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </QuestionsWithSelect>
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
        <LabelForQuestionsWithSelect htmlFor="passengerPapersStatus">
          PASSENGER STATUS IN THE ENTERED COUNTRY:
        </LabelForQuestionsWithSelect>
        <QuestionsWithSelect>
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
        </QuestionsWithSelect>
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

          <ShowStatusSections>
            <QuestionHeadline>Has covid passport</QuestionHeadline>
            <QuestionWrapper>
              {['yes', 'no'].map((item, i) => {
                return (
                  <RadioCheckbox
                    key={i}
                    name={'covidPassport'}
                    value={item}
                    handler={updateFilters}
                    valueInState={covidPassport}
                    item={item}
                  />
                );
              })}
            </QuestionWrapper>
          </ShowStatusSections>
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

      <ActionButton handler={filterResults} />
      {alert ? <Alert {...alert} /> : null}
      <ResultSection>
        {numberOfHits > 0 ? (
          <>
            <h1>
              {`Number of passengers traveling from ${countryIn} to ${countryOut}
              matching your search criteria is ${numberOfHits}`}
            </h1>
          </>
        ) : filtered_items === false ? (
          <>
            <h2>No results for the searched criteria.</h2>
          </>
        ) : null}

        {numberOfHits > 0 && <h2>Comments:</h2>}
        {numberOfHits > 0 &&
          _.map(results, (item) => {
            // counting how much time has passed since a comment has been submited
            let endTimeStamp = _.now();
            // final time is in hours
            let countTime = (endTimeStamp - item.timeStamp) / (1000 * 60 * 60);

            // get if time passed is half an hour or a whole hour
            const roundToHalf = (value) => {
              const converted = parseFloat(value).toFixed(1);
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

            const elapsedTimeInSeconds = (endTimeStamp - item.timeStamp) / 1000;

            // checking if more than one day
            if (+finalTime > 23.5) {
              return <p>{`${item.comment} ${item.feedbackPostedTime}`}</p>;
              // time in hours
            } else if (+finalTime <= 23.5 && +finalTime > 1) {
              return <p>{`${item.comment} ${finalTime}h ago`}</p>;
              // time in minutes
            } else if (elapsedTimeInSeconds > 60) {
              let timeInMinutes = (endTimeStamp - item.timeStamp) / (1000 * 60);
              return (
                <p>{`${item.comment} ${parseFloat(timeInMinutes).toFixed(
                  0
                )}m ago`}</p>
              );
              // time in seconds
            } else if (elapsedTimeInSeconds < 60) {
              return (
                <p>{`${item.comment} ${parseFloat(elapsedTimeInSeconds).toFixed(
                  0
                )}s ago`}</p>
              );
            }
          })}
      </ResultSection>
    </div>
  );
};

const ShowStatusSections = styled.section`
  display: flex;
  flex-direction: column;
  place-self: center;
  margin-top: 5rem;
  margin-top: ${(props) => (props.no_mt ? '0' : '5rem')};
`;

const ResultSection = styled.section`
  margin-top: 2rem;
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
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  @media only screen and (min-width: 640px) {
    /* font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.15rem;
  line-height: 3rem; */
  }
`;

const LabelForQuestionsWithSelect = styled.label`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  margin-bottom: 1rem;
`;

const QuestionsWithSelect = styled.div`
  display: flex;
  select {
    text-align-last: center;
    margin: 0 auto;
  }
`;

export default ShowBorderStatus;
