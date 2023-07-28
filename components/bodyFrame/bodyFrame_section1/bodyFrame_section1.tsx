/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./bodyFrame_section1.module.css";
export interface BodyFrameSection1 {}

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    humidity: number;
  };
}
export default function BodyFrameSection1({ children }: any) {
  const [latitude, setLatitude] = useState<null | number>(null);
  const [longitude, setLongitude] = useState<null | number>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    // Chỉ chạy lấy vị trí trên phía máy khách
    if (typeof window !== "undefined") {
      getLocation();
    }
  }, []);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        if (latitude && longitude) {
          const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
          const API_URL = process.env.NEXT_PUBLIC_WEATHER_API;

          const currentWeatherFetch = fetch(
            `${API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );

          Promise.all([currentWeatherFetch]).then(async (response) => {
            const weatherResponse = await response[0].json();
            setWeatherData(weatherResponse);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getWeatherData();
  }, [latitude, longitude]);
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.item_left}`}>
          <div className={`${styles.item_left_text}`}>
            <div className={`${styles.item_left_text1}`}>Xin Chào!</div>
            <div className={`${styles.item_left_text2}`}>
              Chúc bạn một ngày làm việc hiệu quả!
            </div>
          </div>
          <div className={`${styles.item_left_img}`}>
            <img src={`/xinchao.png`} alt="xinchao" />
          </div>
        </div>

        {weatherData && latitude && longitude && (
          <div className={`${styles.item_right_weather}`}>
            <div className={`${styles.right_top}`}>
              <div className={`${styles.city_home}`}>
                {weatherData.name}, {weatherData.sys.country}
              </div>
              <div className={`${styles.weather}`}>
                <div>
                  <img
                    className={`${styles.weather_image}`}
                    src={`icon_weather/${weatherData.weather[0].icon}.png`}
                    alt=""
                  />
                </div>
                <div className={`${styles.weather_flex}`}>
                  <div className={`${styles.temperature}`}>
                  {Math.round(weatherData.main.temp)}
                  </div>
                  <div className={`${styles.weather_sign}`}>
                    <img src={`	/doC.svg`} alt="thoitiet" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
