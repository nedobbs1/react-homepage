// import React from "react";
// // import useCurrentLocation from "../get-location/get-location";
// // import { geolocationOptions } from "../get-location/geolocation-options";

// // const { location, error } = useCurrentLocation(geolocationOptions);

// class GeolocationWeather extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: "init",
//       isLoaded: false,
//       weatherData: null,
//     };
//   }

//   abortController = new AbortController();
//   controllerSignal = this.abortController.signal;

//   weatherInit = () => {};

//   getWeatherData = (lat, lon) => {
//     const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;

//     fetch(weatherApi, { signal: this.controllerSignal })
//       .then((response) => response.json())
//       .then(
//         (result) => {
//           console.log(result);
//           const { name } = result;
//           const { country } = result.sys;
//           const {
//             temp,
//             temp_min,
//             temp_max,
//             feels_like,
//             humidity,
//           } = result.main;
//           const { description, icon } = result.weather[0];
//           const { speed, deg } = result.wind;

//           this.setState({
//             isLoaded: true,
//             weatherData: {
//               name,
//               country,
//               description,
//               icon,
//               temp: temp.toFixed(1),
//               feels_like: feels_like.toFixed(1),
//               temp_min: temp_min.toFixed(1),
//               temp_max: temp_max.toFixed(1),
//               speed,
//               deg,
//               humidity,
//             },
//           });
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   };

//   componentDidMount() {
//     this.weatherInit();
//   }

//   componentWillUnmount() {
//     this.abortController.abort();
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="container"></div>
//       </div>
//     );
//   }
// }

// // const GetGeolocationForecast = () => {
// //   ;
// //   const [weatherData, setWeatherData] = useState();

// //   const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
// //   const units = "imperial";
// //   const userLat = location.latitude;
// //   const userLon = location.longitude;
// //   const url =
// //     "http://api.openweathermap.org/data/2.5/weather?" +
// //     "units=" +
// //     units +
// //     "&appid=" +
// //     apiKey +
// //     "&lat=" +
// //     userLat +
// //     "&lon=" +
// //     userLon;
// //   if (weatherData === undefined) {
// //     fetch(url)
// //       .then((response) => response.json())
// //       .then((response) => setWeatherData(response));
// //   } else {
// //     return;
// //   }

// //   useEffect(() => {}, []);

// //   console.log(url);
// //   console.log(error);
// // };

// // export default GetGeolocationForecast;

// // console.log(weatherData);
// // console.log(weatherData.main.temp);
// // console.log(weatherData.weather[0].description);
