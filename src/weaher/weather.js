import React from 'react'
import image from '../image.png'
import './weather.css'
import humidity from '../humidity.png'
const weather = () => {
  let api_key="51b796f48876edc6b0f573b5ba97a046";
  const Search=async()=>{
    const element=document.getElementsByClassName('input');
    if(element[0].value=='') {
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response=await fetch(url);
    let data=await response.json();
    const humidity=document.getElementsByClassName('humidity_val');
    const wind=document.getElementsByClassName('wind_val');
    const temperature=document.getElementsByClassName('temperature');
    const location=document.getElementsByClassName('location');
    humidity[0].innerHTML=data.main.humidity+" %";
    wind[0].innerHTML=data.wind.speed+" km/hr";
    temperature[0].innerHTML=data.main.temp+" c";
    location[0].innerHTML=data.name;

    console.log(data);
  }
  return (
    <div>
        <div className='container'>
          <div className='div1'>
           <input type='text' placeholder='Search' className='input'></input>
           </div>
           <div className='div_icon'>
          <svg className='icons' onClick={Search} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
          </div>
          <img src={image} className='weather_img'></img>
          <div className='mid'>
          <p className='temperature'>24</p>
          <p className='location'>London</p>
          </div>
        <div className='last'>
         <div className='last1'>
      <img src={humidity} className='humidity_img'></img>
      <span className='humidity_val'>64%</span>

      <p className='humidity'>humidity</p>  
      </div>
      <div className='last2'>
        <svg className='wind_img'
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}
>
  <path d="M13 5.5C13 3.57 11.43 2 9.5 2 7.466 2 6.25 3.525 6.25 5h2c0-.415.388-1 1.25-1 .827 0 1.5.673 1.5 1.5S10.327 7 9.5 7H2v2h7.5C11.43 9 13 7.43 13 5.5zm2.5 9.5H8v2h7.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5c-.862 0-1.25-.585-1.25-1h-2c0 1.475 1.216 3 3.25 3 1.93 0 3.5-1.57 3.5-3.5S17.43 15 15.5 15z"></path>
  <path d="M18 5c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2H2v2h16c2.206 0 4-1.794 4-4s-1.794-4-4-4zM2 15h4v2H2z"></path>
</svg>

<span className='wind_val'>18km/hr</span>
<p className='wind'>wind speed</p>
</div>
        </div>
        </div>
        
    </div>
  )
}

export default weather