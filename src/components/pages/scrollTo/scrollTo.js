import React from "react";
import Axios from "axios";
export default function ScrollTo() {
  React.useEffect(() => {
    getLocation();
  });

  const getLocation = async () => {
    // navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    //   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.longitude},${coords.latitude}.json?access_token=pk.eyJ1IjoidnZ2YWx4IiwiYSI6ImNrZDBmZnRyNzA0aHQzMG50bjlobHNhOXIifQ.J09TlzZ6ixJR7dWbG52tLQ`;
    //   const { data } = await Axios(url);
    //   console.log(data);
    // });

    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=114ee7a60061eee0bf6dcbadd54d36a8";
    const { data } = await Axios(url);
    console.log(data);
  };

  return (
    <div>
      <section>Coming here</section>
    </div>
  );
}
