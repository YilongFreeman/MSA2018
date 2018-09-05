import * as React from 'react';

import Titles from './Component/Title';

// import Form from './Component/Form';

// import Weather from './Component/Weather';

const apiKey = "5171068db009ea90ef470f2bf369a577";

interface IApp {
  
  temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
}

class App extends React.Component<{}, IApp>{

  constructor(props: any) {
    super(props);
    this.state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    
    }
    this.Getweather = this.Getweather.bind(this);
  }
    
  public Getweather= async(e:any)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value

    console.log(city);

    const callApi= await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+","+ country +"&appid="+apiKey);
    const data =await callApi.json();

    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
      
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
       
      });
    }
  }


  
  
  public render() {
    return (
      <div> 
        <Titles/>
        <form onSubmit={this.Getweather}>
          <input type="text" name="city" placeholder="City..."/>
          <input type="text" name="country" placeholder="Country..."/>
          <button>Get Weather</button>
        </form>
        {/* <Weather temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}/> */}

                    <p className="weather__key"> Location: { this.state.country }
	 	</p> 
        </div>
    )
  }


};

export default App;
