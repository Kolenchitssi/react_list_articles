import { Button } from 'antd';
import React, { FC } from 'react';
import './App.scss';
import { store } from './store/store';

const App: FC = () => {
  console.log(store);

  return (
    <div className="App">
      <Button> Пустой проект</Button>
    </div>
  );
};

export default App;
