let city = document.getElementById("city")
let type = document.getElementById("type")
let temp = document.getElementById("temp")
let image = document.getElementById("img")
let high = document.getElementById("high")
let low = document.getElementById("low")
let humidity = document.getElementById("humidity")
let input = document.getElementById("inp") ;


let API_KEY = "23a1fab4bdd119cad5e7a25be4a9e9d9";

const data = async function(search){
    let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`);
    console.log(getdata);
    let jsondata = await getdata.json();
    console.log(jsondata);
    
    city.innerHTML=jsondata.name;
    temp.innerHTML=Math.floor(jsondata.main.temp)+"°";
    type.innerHTML=jsondata.weather[0].main;
    high.innerHTML=Math.floor(jsondata.main.feels_like)+"°";
    low.innerHTML=Math.floor(jsondata.main.temp_min)+"°";
    humidity.innerHTML=Math.floor(jsondata.main.humidity)+"°";

    // if(jsondata.cod==400){
    //     alert("Please Enter Correct City Name");
    // }



    if(type.innerHTML=="Haze"){
        image.src="./images/cloudy.png";
    }
    else if(type.innerHTML=="Showers"){
        image.src="./images/rain.png";
    }
    else if(type.innerHTML=="Clear"){
        image.src="./images/clear.png";
    }
    else if(type.innerHTML=="Fast Wind"){
        image.src="./images/clear.png";
    }
    else if(type.innerHTML=="Rain"){
        image.src="./images/rain.png";
    }
    else if(type.innerHTML=="Clouds"){
        image.src="./images/cloudy.png";
    }
    else if(type.innerHTML=="Mid Rain"){
        image.src="./images/rain.png";
    }
    else if(type.innerHTML=="Storm"){
        image.src="./images/thunderstorm.png";
    }else if(type.innerHTML=="overcast clouds"){
        image.src="./images/thunderstorm.png";
    }


    input.value="";



}
function myfun(){
    let search = input.value;
     data(search);
    
}
