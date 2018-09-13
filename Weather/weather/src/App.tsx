// import CircularProgress from '@material-ui/core/CircularProgress';

import * as React from 'react';

import Header from './Component/Header';

import Weather from './Component/Weather';

import backgroundImage from './img/cloud.jpg';

import Button from '@material-ui/core/Button';

import './App.css';


const apiKey = "5171068db009ea90ef470f2bf369a577";

interface IApp {

  temperature: number,
  city: string,
  country: string,
  humidity: number,
  description: string,
  inputValid: boolean,
  icon: string,
  width: number,
  height: number,
}

class App extends React.Component<{}, IApp>{

  constructor(props: any) {
    super(props);
    this.state = {
      temperature: 0,
      city: "",
      country: "",
      humidity: 0,
      description: "",
      inputValid: false,
      icon: "",
      width: window.innerWidth,
      height: window.innerHeight,
    }
    this.Getweather = this.Getweather.bind(this);
    this.getScreenResolution = this.getScreenResolution.bind(this);
  }

  public Getweather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value

    console.log(city);

    const callApi = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=" + apiKey);
    const data = await callApi.json();

    console.log(data);
    if (city && country && data.cod !== "404") {
      this.setState({


        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        inputValid: true,
        icon: data.weather[0].icon,
      });
    } else {
      this.setState({
        temperature: 0,
        city: "",
        country: "",
        humidity: 0,
        description: "Country/City not match",
        inputValid: false,
      });
    }
  }

  public getScreenResolution() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  public componentDidMount() {
    window.addEventListener('resize', this.getScreenResolution);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.getScreenResolution);
  }

  public render() {
    return (
      <div
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: this.state.width+"px "+this.state.height+"px",
          height: this.state.height,
        }}
      >
        <Header />
        <form onSubmit={this.Getweather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <Button variant="outlined" type="submit"> Get Weather </Button>
        </form>

        <Weather
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          inputValid={this.state.inputValid}
          icon={this.state.icon}
        />


      </div>
    )
  }


};

export default App;
