import { FC, useState } from 'react';
import './calculator.scss';

const Calculator1 = () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(0);

  const buttons = [
    {
      title: '+',
      onClick: () => setCount(count + display),
    },
    {
      title: '-',
      onClick: () => setCount(count - display),
    },
    {
      title: 'X',
      onClick: () => setCount(count * display),
    },
    {
      title: '/',
      onClick: () => setCount(count / display),
    },
  ];

  return (
    <div className="col-xs-8">
      <div className="calculator-first-level__container around-xs">

        <h1 className="calculator__display">{count}</h1>

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
            setDisplay(parseInt(e.target.value, 10));
          }}
          type="number"
        />

        <button
          className="calculator__button"
          type="button"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

      </div>
    </div>
  );
};

export default Calculator1;
