import { FC, useState } from 'react';
import './calculator.scss';

const Calculator2 = () => {
  const [left, setLeft] = useState(0);

  const [right, setRight] = useState(0);

  const [result, setResult] = useState(0);

  const buttons = [
    {
      title: '+',
      onClick: () => setResult(left + right),
    },
    {
      title: '-',
      onClick: () => setResult(left - right),
    },
    {
      title: 'X',
      onClick: () => setResult(left * right),
    },
    {
      title: '/',
      onClick: () => setResult(left / right),
    },
  ];

  return (
    <div className="col-xs-8">
      <div className="calculator-first-level__container around-xs">

        <input
          className="calculator__input"
          type="number"
          onChange={(e) => {
            setLeft(parseInt(e.target.value, 10));
          }}
        />

        {buttons.map((button) => (

          <button
            className="calculator__button"
            type="button"
            key={Math.random()}
            onClick={button.onClick}
          >
            {button.title}
          </button>

        ))}

        <input
          className="calculator__input"
          onChange={(e) => {
            setRight(parseInt(e.target.value, 10));
          }}
          type="number"
        />

        <button
          className="calculator__button"
          type="button"
          onClick={() => setResult(0)}
        >
          Reset
        </button>

        <h1 className="calculator__display">{result}</h1>

      </div>
    </div>
  );
};

export default Calculator2;
