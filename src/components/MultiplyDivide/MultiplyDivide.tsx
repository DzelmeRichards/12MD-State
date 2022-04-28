import { FC, useState } from 'react';
import './multiplyDivide.scss';

const MultiplyDivide = () => {
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
    {
      title: 'Multiply * 2',
      onClick: () => setCount(count * 2),
    },
    {
      title: 'Divide / 2',
      onClick: () => setCount(count / 2),
    },
  ];

  return (

    <div className="col-xs-7">
      <div className="multiple-divide__container">

        <button
          className="multiple-divide__button"
          type="button"
          key={Math.random()}
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        {actions.map((action) => (

          <div>

            <button
              className="multiple-divide__button"
              key={Math.random()}
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

export default MultiplyDivide;
