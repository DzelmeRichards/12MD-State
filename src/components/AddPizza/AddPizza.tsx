import { FC, useState } from 'react';
import './addPizza.scss';

const AddPizza = () => {
  const [pizzaCount, setPizzaCount] = useState('I love:');

  const pizza = ' pizza';

  return (

    <div className="col-xs-7">
      <div className="add-pizza__container">
        <div className="add-pizza-button__container">

          <button
            className="add-pizza__button"
            type="button"
            onClick={() => setPizzaCount('I love:')}
          >
            Reset
          </button>

          <button
            className="add-pizza__button"
            type="button"
            onClick={() => setPizzaCount(pizzaCount + pizza)}
          >
            Add Pizza
          </button>

        </div>

        <div className="add-pizza-display__container">

          <h1>{pizzaCount}</h1>

        </div>
      </div>
    </div>

  );
};

export default AddPizza;
