import * as React from 'react';

import Titles from './Component/Title';

import Form from './Component/Form';

import Weather from './Component/Weather';

const apiKey = "5171068db009ea90ef470f2bf369a577";

interface IApp {
  result: any[]
}

class App extends React.Component<{}, IApp> {
  constructor(props: any) {
    super(props);
    this.state = {
      result: []
    }
    
    this.callAPI = this.callAPI.bind(this);
  }
  public render() {
    return (
      <div> 
        <Titles/>
        <Form/>
        <Weather/>
        <input onChange={this.callAPI}/>
        <button value="London" onClick={this.callAPI}>London</button>
        {JSON.stringify(this.state.result)}
        </div>
    )
  }

  public async callAPI(e:any) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+e.target.value+"&appid="+apiKey;
    const api = await fetch(url);
    const response = await api.json();
    if (response !== undefined) {
      this.setState({result: response});
    }
  }

};

export default App;
