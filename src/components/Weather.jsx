import React from "react";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div>
      {weatherData.weather ? (
        <div className="w-[500px] h-[350px] bg-gray-400 shadow-lg rounded-lg m-auto relative px-6  top-[10%]">
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text.xl">
                    city- {weatherData.name}, country-{weatherData.sys.country}
                  </p>
                  <p className="text-sm ">
                    {weatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className="text-6xl font-semibold">
                    {weatherData.main.temp.toFixed()} °C
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                  className="w-[120px]"
                />
              </div>
              {weatherData.name !== undefined ? (
                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                  <div className="flex-justify-between gap-x-8">
                    <p>feels like</p>
                    <p className="font-bold w-20">
                      {weatherData.main.feels_like.toFixed()}°c
                    </p>
                  </div>
                  <div className="flex-justify-between gap-x-8">
                    <p>humidity</p>
                    <p className="font-bold w-20">
                      {weatherData.main.humidity}%
                    </p>
                  </div>
                  <div className="flex-justify-between gap-x-8">
                    <p>wind speed</p>
                    <p className="font-bold w-20">
                      {weatherData.wind.speed}KPM
                    </p>
                  </div>
                  <div className="flex-justify-between gap-x-8">
                    <p>wind speed</p>
                    <p className="font-bold w-20">
                      {weatherData.wind.speed}hPa
                    </p>
                  </div>
                  <div className="flex-justify-between gap-x-8">
                    <p>preasure</p>
                    <p className="font-bold w-20">{weatherData.preasure}hPa</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
