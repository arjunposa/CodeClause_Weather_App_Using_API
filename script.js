let inputEle = document.getElementById("location_input")
let tempEle = document.getElementById("temp_value")
let locEle = document.getElementById("location")
let weatherdescEle = document.getElementById("weather_desc")
let btnEle = document.getElementById("button");

const apiKey = '09f79629a4754daa481067a5277a92c4';

btnEle.onclick = function(){
    if(inputEle.value =="")
         alert("Please Enter Any Location..")
    else{
        loc = inputEle.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
            const{name} = data
            const{feels_like} = data.main
            const{description} = data.weather[0]
            tempEle.innerText = Math.floor(feels_like-273);
            locEle.innerText = name;
            weatherdescEle.innerText = description
        })
        .catch(() => {
            alert("Enter Valid Location...")
        })
        inputEle.value = ""
    }
}
