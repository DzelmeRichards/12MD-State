import { FC, useState } from 'react';
import './plusMinus.scss';

const PlusMinus = () => {
  const [count, setCount] = useState(0);

  const actions = [
    {
      title: 'Add + 1',
      onClick: () => setCount(count + 1),
    },
    {
      title: 'Subtract - 1',
      onClick: () => setCount(count - 1),
    },

  ];

  return (
    <div className="col-xs-7">
      <div className="plus-minus__container">

        <button
          className="plus-minus__button"
          type="button"
          key={Math.random()}
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        {actions.map((action) => (
          <div>

            <button
              className="plus-minus__button"
              key={Math.random() * 10}
              onClick={action.onClick}
            >
              {action.title}
            </button>

          </div>
        ))}

        <h1>{count}</h1>

      </div>
    </div>
  );
};

export default PlusMinus;
