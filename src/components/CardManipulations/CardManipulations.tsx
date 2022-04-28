import { FC, useState } from 'react';
import './cardManipulations.scss';

const CardManipulations = () => {
  const backUpArray = [
    {
      id: 1,
      title: ' First card',
    },
    {
      id: 2,
      title: ' Second card',
    },
    {
      id: 3,
      title: ' Third card',
    },
    {
      id: 4,
      title: ' Fourth card',
    },
    {
      id: 5,
      title: ' Fifth card',
    },
    {
      id: 6,
      title: ' Sixth card',
    },
  ];
  const [cardArray, setCardArray] = useState([...backUpArray]);

  const buttons = [
    {
      text: 'Reset',
      onClick: () => setCardArray(backUpArray),
    },
    {
      text: 'Remove All',
      onClick: () => { setCardArray([]); },
    },
    {
      text: 'All Titles Uppercase',
      onClick: () => setCardArray(cardArray.map((card) => ({
        ...card, title: card.title.toUpperCase(),
      }))),
    },
  ];

  return (
    <div className="col-xs-10">
      <div className="card-manipulations-button__container">

        {buttons.map((button) => (

          <button
            className="card-manipulations__button"
            type="button"
            onClick={button.onClick}
          >
            {button.text}
          </button>

        ))}

      </div>
      <div className="card-manipulations-card__container">

        {cardArray.map((card, index) => (

          <div className="card-manipulations__card">

            <button
              className="card-manipulations__close-button"
              type="button"
              onClick={() => setCardArray(cardArray.filter(({ id }) => id !== card.id))}
            >
              X
            </button>

            <span className="card-manipulations-card__text">
              ID:
              {card.id}
            </span>

            <br />

            <span className="card-manipulations-card__text">
              TITLE:
              {card.title}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
};

export default CardManipulations;
