// import React from "react";

//   const currentTemp = 1;
//   // weatherData.main.temp
//   const weatherDescription = 2;
//   // weatherData.weather[0].description

//   return (
//     <div className="weather-container">
//       <div className="row">
//         <div className="inline">
//           {weatherDescription} - {currentTemp}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Weather;

import React from "react";

const Weather = () => {
  return (
    <div>
      <p>Check console.</p>
      {/* {location ? (
        <code>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </code>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p className="errorMessage">Location Error: {error}</p>} */}
    </div>
  );
};

export default Weather;
