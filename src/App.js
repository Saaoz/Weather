import { useState } from 'react';
import './App.css';
import BlackWeather from './components/black_weather';
import FooterWeather from './components/footerweather';
import Header from './components/header';
import Weather from './components/weathers';

const Api_Key = process.env.REACT_APP_API_KEY

function App() {

	const [Weather, setWeather] = useState(null);


	const dataWeather = async () => {
		const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_Key}"
		);
		const content = await response.json();
		setWeather(content);

}

	return (
		<div>
			<Header dataWeather={dataWeather} />
			<Weather/>
			<BlackWeather/>
			<FooterWeather/>
		</div>
	);
}

export default App;



