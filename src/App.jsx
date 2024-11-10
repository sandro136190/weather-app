import axios from "axios";
import { useState } from "react";
import Weather from "./components/Weather";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = "cfe69470bbd062ef58deba5839802447";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(data.wind.speed);
      });
      setLocation("");
    }
  };
  return (
    <div className="w-full h-screen relative bg-gray-200  ">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-700 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Enter location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
