import { FC, useState } from 'react';
import './numberArray.scss';

const NumberArray = () => {
  const backupArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [numberArray, setNumberArray] = useState([...backupArray]);

  const buttons = [
    {
      text: 'Remove from end',
      onClick: () => { setNumberArray(numberArray.splice(0, numberArray.length - 1)); },
    },
    {
      text: 'Remove From Start',
      onClick: () => { setNumberArray(numberArray.slice(1)); },
    },
    {
      text: 'Reset',
      onClick: () => { setNumberArray(backupArray); },
    },
    {
      text: 'Remove All',
      onClick: () => { setNumberArray([]); },
    },
    {
      text: 'Show > 5',
      onClick: () => { setNumberArray(numberArray.filter((num) => num > 5)); },
    },
    {
      text: 'All Numbers * 2',
      onClick: () => { setNumberArray(numberArray.map((num) => num * 2)); },
    },
    {
      text: 'All Numbers / 10',
      onClick: () => { setNumberArray(numberArray.map((num) => num / 10)); },
    },
  ];

  return (
    <div className="col-xs-7">
      <div className="number-array-button__container">

        {buttons.map((button) => (

          <button
            className="number-array__button"
            type="button"
            onClick={button.onClick}
          >
            {button.text}

          </button>

        ))}
      </div>

      <div className="number-container">

        {numberArray.map((number, index) => (

          <div
            className="number-item"
            onClick={() => setNumberArray(numberArray.filter((_, i) => i !== index))}
          >
            {number}

          </div>

        ))}

      </div>
    </div>

  );
};

export default NumberArray;
