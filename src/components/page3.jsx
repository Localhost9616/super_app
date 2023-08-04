import React, { useEffect, useState } from 'react'
import Image15 from "../assets/images/image15.png"
import Pressure from "../assets/images/pressure.png"
import Wind from "../assets/images/wind.png"
import Humidity from "../assets/images/humidity.png"
import Alarm from "../assets/ringtone/Alarm.mp3"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const [text, setText] = useState(localStorage.getItem('notes') || ''); 
  const [hourCount, setHourCount] = useState(0);
  const [minuteCount, setMinuteCount] = useState(1);
  const [secondCount, setSecondCount] = useState(40);
  const [state, setState] = useState(false);
  const [totalTime, setTotalTime] = useState(100);

  const navigate = useNavigate();

  const updatenotes = (e)=>{
    setText(e.target.value);
    localStorage.setItem('notes', text);
  }

  const browse = ()=> navigate('/movies');
  
  const fetchWeatherData = async () => {
    let url = 'http://api.weatherapi.com/v1/current.json?key=c61c9179038c4f5d801130714230107&q=Lucknow&aqi=no';
    try {
      const response = await fetch(url);
      const data = await response.json();
      const val = data.location.localtime.split(' ');
      const val2 = val[0].split("-");
      console.log(data)
      document.getElementById('date').innerHTML = `${val2[1]}-${val2[2]}-${val2[0]}`;
      document.getElementById('Date').innerHTML = `${val2[1]}-${val2[2]}-${val2[0]} |`;
      if(val[1].split(':')[0] < 12){
        if(val[1].split(':')[0] < 10){
          document.getElementById('time').innerHTML = '0' + val[1] + ' AM';
          document.getElementById('Time').innerHTML = '0' + val[1] + ' AM';
        }else{
          document.getElementById('time').innerHTML = val[1] + ' AM';
          document.getElementById('Time').innerHTML = val[1] + ' AM';
        }
      }else{
        document.getElementById('time').innerHTML = val[1] + ' PM';
        document.getElementById('Time').innerHTML = val[1] + ' PM';
      }
      document.getElementById('iconImg').src = data.current.condition.icon
      document.getElementById('iconText').innerHTML = data.current.condition.text
      document.getElementById('degree').innerHTML = data.current.temp_c + '&nbsp;&deg;' + "C";
      document.getElementById('airPressure').innerHTML = data.current.pressure_mb + " " +'mbar Pressure';
       return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  fetchWeatherData();

  const fetchNewsData = async () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8ef853f942f348899c9dfc6f12762333';
    try {
      const response = await fetch(url);
      const data = await response.json();
      // const val = data.location.localtime.split(' ');
      // const val2 = val[0].split("-");
      console.log(data)
      // document.getElementById('date').innerHTML = `${val2[1]}-${val2[2]}-${val2[0]}`;
      // if(val[1].split(':')[0] < 12){
      //   if(val[1].split(':')[0] < 10){
      //     document.getElementById('time').innerHTML = '0' + val[1] + ' AM';
      //   }else{
      //     document.getElementById('time').innerHTML = val[1] + ' AM';
      //   }
      // }else{
      //   document.getElementById('time').innerHTML = val[1] + ' PM';
      // }
      document.getElementById('newsImg').src = data.articles[0].urlToImage
      document.getElementById('newsContent').innerHTML = data.articles[0].description
      document.getElementById('title').innerHTML = data.articles[0].title
      // document.getElementById('degree').innerHTML = data.current.temp_c + '&nbsp;&deg;' + "C";
      // document.getElementById('airPressure').innerHTML = data.current.pressure_mb + " " +'mbar Pressure';
       return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  fetchNewsData();

  const playSound = ()=>{
    document.getElementById('alarm').play();
    // music.play();
  }  

  const Timer = () => (
    <CountdownCircleTimer
      isPlaying = {state}
      duration={totalTime}
      colors={['#FF6A6A', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[7, 5, 2, 0]}
      size={140}
      strokeWidth={4}
      trailColor='00000000'
      onComplete={playSound}
    >
      {({ remainingTime, elapsedTime }) => {

        let hours = Math.floor(remainingTime/60/60);
        let minutes = Math.floor(remainingTime/60) % 60;
        let seconds = remainingTime%60;

        hours = (hours < 10)? ('0' + hours) : hours;
        minutes = (minutes < 10)? '0' + minutes : minutes;
        seconds = (seconds < 10)? '0' + seconds : seconds;

        return (`${hours} : ${minutes} : ${seconds}`)}
      }
    </CountdownCircleTimer>
  )

  const IncreaseHour = ()=> setHourCount((hourCount + 1) % 24);
  const IncreaseMinute = ()=> setMinuteCount((minuteCount + 1) % 60);
  const IncreaseSecond = ()=> setSecondCount((secondCount + 1) % 60);
  const DecreaseHour = ()=> setHourCount(hourCount - 1);
  const DecreaseMinute = ()=> setMinuteCount(minuteCount - 1);
  const DecreaseSecond = ()=> setSecondCount(secondCount - 1);

  if (hourCount < 0) setHourCount(hourCount + 24)
  if (minuteCount < 0) setMinuteCount(minuteCount + 60)
  if (secondCount < 0) setSecondCount(secondCount + 60)

  const formattedHour = hourCount.toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const formattedMinute = minuteCount.toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const formattedSecond = secondCount.toLocaleString('en-US', { minimumIntegerDigits: 2 });

  const calculateTime = ()=>{
    const total = hourCount*3600 + minuteCount*60 + secondCount;
    setState(true);
    const remainingTime = total - totalTime;
    setTotalTime(total );
    console.log(totalTime)
  }

    
  // fetch(url).then((res) => res.json()).then((data) => console.log(data.location.localtime.split(" ")[0]));
  return (
    <div className='page3'>
        <div className="leftDiv">
            <div className="topDiv">
                <div className="dashWhether">
                    <div className="dashboard">
                      <div className="imgdiv-4">
                        <img className='image15' src={Image15} alt="Error" />
                      </div>
                      <div className="userData">
                        <div className="user">
                          <p className='name-4'>{localStorage.getItem('Name')}</p>
                          <p className='email-4'>{localStorage.getItem('email')}</p>
                          <p className='username-4'>{localStorage.getItem('username')}</p>
                        </div>
                        <div className="labels-4">
                          <button className='btn-4'>{JSON.parse(localStorage.getItem('selectedTags'))[0]}</button>
                          <button className='btn-4'>{JSON.parse(localStorage.getItem('selectedTags'))[1]}</button>
                          <button className='btn-4'>{JSON.parse(localStorage.getItem('selectedTags'))[2]}</button>
                          <button className='btn-4'>Trending</button>
                        </div>
                      </div>
                    </div>
                    <div className="whether">
                      <div className="dateTime"><span id='date'>01-01-2023</span> <span id='time'>12:00 PM</span></div>
                      <div className="whetherForecast">
                        <div className="icon">
                          <img id='iconImg' src="" alt="Error" />
                          <p id='iconText'>Cloudy</p>
                        </div>
                        <div className="temperature">
                          <div className="temp">
                            <p id='degree'>24&deg; C</p>
                          </div>
                          <div className="pressure">
                            <img src={Pressure} alt="Error" />
                            <p id='airPressure'>	1000 mbar Pressure</p>
                          </div>
                        </div>
                        <div className="windSpeed">
                          <div className="wind">
                            <img src={Wind} alt="Error"/>
                            <div>
                              <p>3.7 Km/h</p> 
                              <p>Wind</p> 
                            </div>
                          </div>
                          <div className="humidity">
                          <img src={Humidity} alt="Error"/>
                            <div>
                              <p>3.7 Km/h</p> 
                              <p>Humidity</p> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="notes">
                  <div className="notesdiv">
                    <h2>All Notes</h2>
                    <textarea onChange={updatenotes} name="textNote" id="note" cols="30" rows="10">{text}</textarea>
                  </div>
                </div>
            </div>
            <div className="bottomDiv">
              <div className="timer">
                <div className="clock">{Timer()}</div>
                <audio autoPlay id='alarm' src={Alarm}></audio>
                <div className="setClock">
                  <div className="headingsOfTime">
                    <p>Hours</p>
                    <p>Minutes</p>
                    <p>Seconds</p>
                  </div>
                  <div className="moveUpBtn">
                    <p onClick={IncreaseHour}>&#x25B2;</p>
                    <p onClick={IncreaseMinute}>&#x25B2;</p>
                    <p onClick={IncreaseSecond}>&#x25B2;</p>
                  </div>
                  <div className="timings">
                    <p>{formattedHour}</p>
                    <p>:</p>
                    <p>{formattedMinute}</p>
                    <p>:</p>
                    <p>{formattedSecond}</p>
                  </div>
                  <div className="moveDownBtn">
                    <p onClick={DecreaseHour}>&#x25BC;</p>
                    <p onClick={DecreaseMinute}>&#x25BC;</p>
                    <p onClick={DecreaseSecond}>&#x25BC;</p>
                  </div>
                  <button onClick={calculateTime} className='timerBtn' id='btn'>Start</button>
                </div>
              </div>
            </div>
        </div>
        <div className="rightDiv">
          <div className="newsdiv">
            <div className="imageDiv">
              <img id='newsImg' src="" alt="Error" />
            </div>
            <div className="overlay">
              <div id="title">title</div>
              <div className="date_Time">
                <p id='Date'>23:07:2023</p>
                <p id='Time'>12:00 PM</p>
              </div>
            </div>
            <div className="textDiv">
              <p id='newsContent'></p>
            </div>
          </div>
          <div className="btndiv">
            <button onClick={browse} className='browseBtn'>Browse</button>
          </div>
        </div>
    </div>
  )
}

export default Page3;