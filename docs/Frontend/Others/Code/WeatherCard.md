# 高颜值天气信息卡片

这段代码是一个 HTML 页面，它包含了 CSS 样式，用于创建一个天气信息卡片。这个卡片显示了当前的天气状况、温度、时间和未来几天的天气预报。

![图片](https://fastly.jsdelivr.net/gh/LetengZzz/img@main/img/202502212233862.gif)

## **HTML 结构**

- card: 创建一个类名为“card”的 div 元素，用于包含整个天气信息卡片。
- info-section: 包含当前天气信息的 section。
- background-design: 用于创建背景装饰的 div。
- 多个 circle 元素，用于创建背景中的圆形装饰。
- left-side: 包含天气信息的左侧部分。
- weather: 显示天气状况（如“晴”）和天气图标。
- temperature: 显示当前温度。
- range: 显示温度范围。
- right-side: 包含时间和地点的右侧部分。
- hour: 显示当前小时。
- date: 显示当前日期。
- city: 显示城市和区域。
- days-section: 包含未来几天天气预报的 section。
- 多个 button 元素，每个按钮包含一天的天气预报。
- day: 显示星期几。
- icon-weather-day: 显示天气图标。

## **CSS 样式**

- .card: 设置卡片的尺寸、背景、边框半径、溢出隐藏和过渡效果。
- .info-section: 设置当前天气信息部分的样式，包括位置、显示方式和尺寸。
- .left-side 和 .right-side: 分别设置左侧和右侧部分的样式，包括显示方式、对齐和内边距。
- .weather, .temperature, .range, .hour, .date, .city: 分别设置天气状况、温度、温度范围、小时、日期和城市的具体样式。
- .background-design: 设置背景装饰的样式，包括位置和尺寸。
- .circle: 设置背景中的圆形装饰的样式，包括位置、尺寸、背景色和透明度。
- .days-section: 设置未来几天天气预报部分的样式，包括显示方式、背景色和内阴影。
- .days-section button: 设置每个天气预报按钮的样式，包括显示方式、背景色、内阴影和鼠标悬停效果。
- .days-section .day: 设置星期几的文本样式。
- .icon-weather-day: 设置天气图标的样式。

## 完整代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>高颜值天气信息卡片</title>
 <style>
   body{
     margin:0;
     padding:0;
     background:#e8e8e8;
     display: flex;
     align-items: center;
     justify-content: center;
     height:100vh;
    }

   .card{
     display: flex;
     flex-direction: column;
     align-items: center;
     height:180px;
     width:280px;
     border-radius:25px;
     background: lightgrey;
     overflow: hidden;
     transition:100msease;
     box-shadow:rgba(0,0,0,0.15)2px3px4px;
    }

   .info-section{
     position: relative;
     display: flex;
     align-items: center;
     justify-content: space-between;
     width:100%;
     height:75%;
     color: white;
    }

   .left-side{
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     height:100%;
     z-index:1;
     padding-left:18px;
    }

   button{
     display: block;
     border: none;
     background: transparent;
    }

   .weather{
     display: flex;
     align-items: center;
     justify-content: flex-start;
     gap:5px;
    }

   .weather div{
     display: flex;
     align-items: center;
    }

   .weatherdiv:nth-child(1){
     width:40%;
     height: auto;
    }

   .temperature{
     font-size:34pt;
     font-weight:500;
     line-height:8%;
    }

   .right-side{
     display: flex;
     flex-direction: column;
     align-items: flex-end;
     justify-content: space-around;
     height:100%;
     padding-right:18px;
     z-index:1;
    }

   .right-side>div{
     display: flex;
     flex-direction: column;
     align-items: flex-end;
    }

   .hour{
     font-size:19pt;
     line-height:1em;
     padding-bottom:4px;
    }

   .date{
     font-size:15px;
    }

   .background-design{
     position: absolute;
     height:100%;
     width:100%;
     background-color:#ec7263;
     overflow: hidden;
    }

   .circle{
     background-color:#efc745;
    }

   .circle:nth-child(1){
     position: absolute;
     top: -80%;
     right: -50%;
     width:300px;
     height:300px;
     opacity:0.4;
     border-radius:50%;
    }

   .circle:nth-child(2){
     position: absolute;
     top: -70%;
     right: -30%;
     width:210px;
     height:210px;
     opacity:0.4;
     border-radius:50%;
    }

   .circle:nth-child(3){
     position: absolute;
     top: -35%;
     right: -8%;
     width:100px;
     height:100px;
     opacity:1;
     border-radius:50%;
    }

   .days-section{
     display: flex;
     align-items: center;
     justify-content: space-between;
     width:100%;
     height:25%;
     background-color:#974859;
     gap:2px;
     box-shadow: inset0px2px5px#974859;
    }

   .days-section button{
     display: flex;
     align-items: center;
     justify-content: center;
     height:100%;
     width:100%;
     background-color:#a75265;
     box-shadow: inset0px2px5px#974859;
     cursor: pointer;
     transition:100msease;
     gap:5px;
    }

   .days-section button:hover{
     scale:0.9;
     border-radius:10px;
    }

   .days-section.day{
     font-size:10pt;
     font-weight:500;
     color: white;
     opacity:0.7;
    }

   .icon-weather-day{
     display: flex;
     align-items: center;
     width:20px;
     height:100%;
    }

   .city{
     font-size:14px;
    }
 </style>
</head>

<body>
 <div class="card">
   <section class="info-section">
     <div class="background-design">
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
     </div>
     <div class="left-side">
       <div class="weather">
         <div>
           <svg stroke="#ffffff" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
             <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
             <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
             <g id="SVGRepo_iconCarrier">
               <path
                 d="M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
                 fill="#ffffff"></path>
             </g>
           </svg>
         </div>
         <div>晴</div>
       </div>
       <div class="temperature">16°</div>
       <div class="range">-1°/20°</div>
     </div>
     <div class="right-side">
       <div>
         <div class="hour">12:00</div>
         <div class="date">三 01-15</div>
       </div>
       <div class="city">西安市 雁塔区</div>
     </div>
   </section>
   <section class="days-section">
     <button>
       <span class="day">四</span>
       <span class="icon-weather-day"><svg stroke="#ffffff" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 1024 1024">
           <g stroke-width="0"id="SVGRepo_bgCarrier"></g>
           <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
           <g id="SVGRepo_iconCarrier">
             <path
               d="M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
               fill="#ffffff"></path>
           </g>
         </svg></span>
     </button>
     <button>
       <span class="day">五</span>
       <span class="icon-weather-day">
         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
           <g id="SVGRepo_iconCarrier">
             <path
               d="M16 18.5L15 21M8 18.5L7 21M12 18.5L11 21M7 15C4.23858 15 2 12.7614 2 10C2 7.23858 4.23858 5 7 5C7.03315 5 7.06622 5.00032 7.09922 5.00097C8.0094 3.2196 9.86227 2 12 2C14.5192 2 16.6429 3.69375 17.2943 6.00462C17.3625 6.00155 17.4311 6 17.5 6C19.9853 6 22 8.01472 22 10.5C22 12.9853 19.9853 15 17.5 15C13.7434 15 11.2352 15 7 15Z"
               stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
           </g>
         </svg>
       </span>
     </button>
     <button>
       <span class="day">六</span>
       <span class="icon-weather-day">
         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
           <g id="SVGRepo_iconCarrier">
             <path
               d="M16 18.5L15 21M8 18.5L7 21M12 18.5L11 21M7 15C4.23858 15 2 12.7614 2 10C2 7.23858 4.23858 5 7 5C7.03315 5 7.06622 5.00032 7.09922 5.00097C8.0094 3.2196 9.86227 2 12 2C14.5192 2 16.6429 3.69375 17.2943 6.00462C17.3625 6.00155 17.4311 6 17.5 6C19.9853 6 22 8.01472 22 10.5C22 12.9853 19.9853 15 17.5 15C13.7434 15 11.2352 15 7 15Z"
               stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
           </g>
         </svg>
       </span>
     </button>
     <button>
       <span class="day">日</span>
       <span class="icon-weather-day">
         <svg stroke="#ffffff"fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
           <g stroke-width="0"id="SVGRepo_bgCarrier"></g>
           <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
           <g id="SVGRepo_iconCarrier">
             <path
               d="M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
               fill="#ffffff"></path>
           </g>
         </svg>
       </span>
     </button>
   </section>
 </div>

</body>

</html>
```

