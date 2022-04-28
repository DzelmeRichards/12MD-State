import { FC, useState } from 'react';
import './toggleTextPressed.scss';

const ToggleTextPressed = () => {
  const [text, setText] = useState('Not Pressed');

  const clicked = text === 'Pressed' ? 'Not Pressed' : 'Pressed';

  return (
    <div className="col-xs-4">
      <div className="toggle-text-pressed__container">

        <button
          className="toggle-text-pressed__button"
          type="button"
          onClick={() => setText(clicked)}
        >
          Change Text
        </button>

        <h1 className="toggle-text-pressed__display">{text}</h1>

      </div>
    </div>
  );
};

export default ToggleTextPressed;
