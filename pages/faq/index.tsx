import React, { useState } from 'react';
import FaqQuestion from '../../components/FaqQuestion';

const data = [
  {
    id: 1,

    question: 'Why is there no results for my search?',
    answer:
      "Data provided by BorderInfo app is collected only from users's feedback. If there is a feedback, there will be data and vice-versa.",
  },
  {
    id: 2,
    question: 'How accurate is an information provided by the app',
    answer:
      'That is something that depends solely on users and a feedback that they provide. BorderInfo cannot check if provided data is correct or not.',
  },
  {
    id: 3,
    question: 'Is app collecting any personal data about the users?',

    answer:
      'The app is not collecting any personal data. No data is connected to any specific user/individual.',
  },
  {
    id: 4,
    question: 'Why is there no option to choose a border name?',
    answer:
      'Once the app collects enough information regarding border names, this option will be introduced.',
  },
  {
    id: 5,
    question:
      'Is it possible to get a notification when my search gets some match?',
    answer: 'The option is being developed, and it will be available soon.',
  },
];

const Faq = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(data);

  return (
    <>
      <head>
        <title>FAQ</title>
        <meta
          name="description"
          content="answers to the common questions about the app"
        />
      </head>
      <article className="min-h-screen flex flex-col items-center mt-6 mb-8 p-4 lg:mt-28">
        <h1 className="text-center text-2xl mt-10 mb-6 underline">F.A.Q</h1>
        <ul className="max-w-xl">
          {questionsAndAnswers &&
            questionsAndAnswers.map((item: any) => {
              return <FaqQuestion key={item.id} {...item} />;
            })}
        </ul>
      </article>
    </>
  );
};

export default Faq;
