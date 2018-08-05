import * as React from 'react';

import Titles from './Component/Title';

import Form from './Component/Form';

import Weather from './Component/Weather';


class App extends React.Component {
  public render() {
    return (
      <div> 
        <Titles/>
        <Form/>
        <Weather/>
        </div>
    )
  }
};

export default App;
