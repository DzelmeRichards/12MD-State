import { FC, useState } from 'react';
import './changeCubeColor.scss';

const ChangeCubeColor = () => {
  const [cubeColor, setCubeColor] = useState('red');

  const CubeColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink'];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return setCubeColor(randomColor);
  };

  return (

    <div className="col-xs-4">
      <div className="change-cube-color__container">

        <button
          className="change-cube-color__button"
          type="button"
          onClick={() => CubeColor()}
        >
          Change Color
        </button>

        <div
          style={{ backgroundColor: cubeColor }}
          className="change-cube-color__cube"
        />

      </div>
    </div>
  );
};

export default ChangeCubeColor;
