import { useEffect, useState } from "react";

const useCurrentLocation = (options = {}) => {
  const [error, setError] = useState();
  const [location, setLocation] = useState();

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    setLocation({ latitude, longitude });
  };

  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError("Geolocation not supported");
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};

export default useCurrentLocation;
