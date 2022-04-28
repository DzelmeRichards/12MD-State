import { FC, useState } from 'react';
import './showText.scss';

const ShowText = () => {
  const [text, setText] = useState('');

  const [showText, setShowText] = useState('');

  return (
    <div className="col-xs-12">
      <div className="show-text__container">
        <div className="show-text__input-container">

          <button
            className="show-text__button"
            type="button"
            onClick={() => setShowText(text)}
          >
            Show Text
          </button>

          <br />

          <input
            className="show-text__input"
            placeholder="Text Here"
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

        </div>
        <div className="show-text__display-container">

          <h1 className="show-text__display">{showText}</h1>

        </div>
      </div>
    </div>
  );
};

export default ShowText;
