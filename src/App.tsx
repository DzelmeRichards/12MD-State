import React from 'react';
import './App.scss';
import PlusMinus from './components/PlusMinus/PlusMinus';
import MultiplyDivide from './components/MultiplyDivide/MultiplyDivide';
import AddPizza from './components/AddPizza/AddPizza';
import ChangeCubeColor from './components/ChangeCubeColor/ChangeCubeColor';
import ToggleTextPressed from './components/ToggleTextPressed/ToggleTextPressed';
import ShowText from './components/ShowText/ShowText';
import NumberArray from './components/NumberArray/NumberArray';
import CardManipulations from './components/CardManipulations/CardManipulations';
import Calculator1 from './components/Calculator/Calculator1';
import Calculator2 from './components/Calculator/Calculator2';

const App = () => (
  <div className="container container-fluid">
    <div className="row">

      <PlusMinus />

    </div>
    <div className="row">

      <MultiplyDivide />

    </div>
    <div className="row">

      <AddPizza />

    </div>
    <div className="row">

      <ChangeCubeColor />

      <ToggleTextPressed />

    </div>
    <div className="row">

      <ShowText />

    </div>
    <div className="row">

      <NumberArray />

    </div>
    <div className="row">

      <CardManipulations />
    </div>
    <div className="row">

      <Calculator1 />

    </div>
    <div className="row">

      <Calculator2 />

    </div>

  </div>
);

export default App;
