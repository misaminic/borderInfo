import React, { useState, useEffect, useRef, useCallback } from 'react';

const HowItWorks = () => {
  const text1 = useRef<HTMLHeadingElement | null>(null);
  const text2 = useRef<HTMLHeadingElement | null>(null);
  const text3 = useRef<HTMLHeadingElement | null>(null);
  const text4 = useRef<HTMLHeadingElement | null>(null);

  const scrollToRef = (
    ref: React.MutableRefObject<HTMLHeadingElement | null>
  ) =>
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

  return (
    <article className="mt-24 mb-8 p-2 max-w-3xl flex flex-col items-center">
      <h1 className="text-center mb-6 text-2xl underline lg:mb-10">
        HOW IT WORKS
      </h1>
      <article className="lg:mt-10 lg:mb-8 text-justify">
        <ul>
          <li className="p-4 tracking-wide">
            BorderInfo is an app built to help travelers find out what they can
            expect at borders regarding traveling regulations during Covid-19,
            for example, which passengers are allowed to pass a border and which
            might experience some difficulties.
          </li>
          <li className="p-4 mb-4 tracking-wide">
            Keep in mind that all the information provided through the app is
            based ONLY on user/traveller&#39;s feedback, therefore BorderInfo
            can neither guaranty data accuracy nor can take responsibility if
            they are not correct.
          </li>
        </ul>
      </article>
      <article>
        <ul className="list-none">
          <li
            className="ml-4 mr-4 mb-4 ref1 text-center uppercase border text-sm tracking-wider bg-white text-black font-bold p-4 rounded lg:hover:bg-transparent lg:hover:border lg-hover:border-white lg:hover:text-white"
            onClick={() => scrollToRef(text1)}
          >
            Getting information regarding a border
          </li>

          <li
            className="ml-4 mr-4 mb-4 ref1 text-center uppercase border text-sm tracking-wider bg-white text-black font-bold p-4 rounded lg:hover:bg-transparent lg:hover:border lg-hover:border-white lg:hover:text-white"
            onClick={() => scrollToRef(text2)}
          >
            How to get information about a border
          </li>
          <li
            className=" ml-4 mr-4 mb-4 ref1 text-center uppercase border text-sm tracking-wider bg-white text-black font-bold p-4 rounded lg:hover:bg-transparent lg:hover:border lg-hover:border-white lg:hover:text-white"
            onClick={() => scrollToRef(text3)}
          >
            Posting information regarding crossing a border
          </li>
          <li
            className="ml-4 mr-4 mb-4 ref1 text-center uppercase border text-sm tracking-wider bg-white text-black font-bold p-4 rounded lg:hover:bg-transparent lg:hover:border lg-hover:border-white lg:hover:text-white"
            onClick={() => scrollToRef(text4)}
          >
            How to post information about crossing a border
          </li>
        </ul>
      </article>
      <article className="text-justify">
        <article className="lg:mt-10 lg:mb-10">
          <h3
            className="text-center mt-6 mb-4 underline px-4 uppercase text-xl tracking-wider"
            ref={text1}
          >
            Getting information regarding a border
          </h3>
          <ul>
            <li className="p-4 tracking-wide ">
              To get information regarding a border it&#39;s necessary to answer
              several questions regarding a trip that you are planning to take.
              For example: where are you travelling to and where from.
            </li>
            <li className="p-4 tracking-wide ">
              Once that is done, you can go and press search to check if some
              traveler has already crossed that border and posted details about
              his trip. For example: if he has done PCR test or how long it took
              him to cross a border.
            </li>
          </ul>
        </article>
        <article className="lg:mt-10 lg:mb-10">
          <h3
            className="text-center mt-6 mb-4 underline px-4 uppercase text-xl tracking-wider "
            ref={text2}
          >
            How to get information about a border
          </h3>
          <ul>
            <li className="p-4 tracking-wide">
              On the Home page click on &quot;Check border&quot;, answer the
              questions and click &quot;Search&quot;, which is found below all
              the questions.
            </li>
            <li className="p-4 tracking-wide">
              After you have done that, if there is some passenger who traveled
              the respected route and posted feedback about his trip, the
              feedback will be shown in the &quot;Results&quot; section,
              otherwise, the app will notify you that there is no results for
              the searched criteria.
            </li>
          </ul>
        </article>
        <article className="lg:mt-10 lg:mb-10">
          <h3
            className="text-center mt-6 mb-4 underline px-4 uppercase text-xl tracking-wider "
            ref={text3}
          >
            Posting information regarding crossing a border
          </h3>
          <ul>
            <li className="p-4 tracking-wide">
              In order to post feedback you would need to answer several
              questions regarding your trip and your status. By status is meant
              if you are citizen of the country you are travelling to or maybe a
              tourist, and as well, for example, if you had to stay in
              quarantine after crossing a border.
            </li>
          </ul>
        </article>
        <article className="lg:mt-10 lg:mb-10">
          <h3
            className="text-center mt-6 mb-4 underline px-4 uppercase text-xl tracking-wider"
            ref={text4}
          >
            How to post information about crossing a border
          </h3>
          <ul>
            <li className="p-4 tracking-wide">
              On the Home page click on &quot;Post border info&quot; and answer
              all the questions regarding your trip and status, after answering
              the questions you can add a comment, and lastly press submit to
              send your feedback.
            </li>
          </ul>
        </article>
      </article>
    </article>
  );
};

export default HowItWorks;
