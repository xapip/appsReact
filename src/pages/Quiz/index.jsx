import React from 'react'

import style from './quiz.module.scss';

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({ answers, again }) {
  return (
    <div className={style.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='result' />
      <h2>
        Вы отгадали {answers} ответа из {questions.length}
      </h2>
      <button onClick={again}>Попробовать снова</button>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const percent = step / questions.length * 100;
  return (
    <>
      <div className={style.progress}>
        <div
          style={{ width: `${percent}%` }}
          className={style.progress__inner}
        ></div>
      </div>
      <h1 className="text-3xl pb-3">{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li key={variant} onClick={() => onClickVariant(index)}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}

function Quiz () {
  const [step ,setStep] = React.useState(0);
  const [answers ,setAnswers] = React.useState(0);
  
  const question = questions[step]

  function onClickVariant(index) {
    if (index === question.correct) {
      setAnswers(answers + 1);
    }
    setStep(step + 1);
  }

  function again() {
    setAnswers(0);
    setStep(0);
  }
  
  return (
    <div className="h-screen my-0 mx-auto">
      <div className={style.Quiz}>
        {step !== questions.length ? (
          <Game
            question={question}
            onClickVariant={onClickVariant}
            step={step}
          />
        ) : (
          <Result answers={answers} again={again} />
        )}
      </div>
    </div>
  );
}

export default Quiz;