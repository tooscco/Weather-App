 let cityName;
 let API_key;

  checkCity = async () =>{
    if(city.value==0){
      errormsg.style.display= 'block'
    }else {
      errormsg.style.display= 'none'
    cityName = document.getElementById('city').value;
    API_key = '6f4a6efa830f5963874cbeade79e00e9'
  const  endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`
    // console.log(cityName);
    let response = await fetch(endpoint);
    let collect = await response.json()
    let finalTemp = collect.main.temp
    let mainAns = Math.floor(Number((finalTemp)- 273))
    let country = collect.sys.country
    let stateName = collect.name
    let iconImage = collect.weather[0].icon
    let description = collect.weather[0].description
    let main = collect.weather[0].main
    showMeMap.innerHTML= `
    <h2 class="div-div-h4">${stateName}</h2>
    <h6>${main}</h6>
    <h5>${description}</h5>
    <img class="div-img" src="https://openweathermap.org/img/w/${iconImage}.png">
    <h2 class="div-div-h2">${mainAns}°C</h2>
    <h3 class="div-div-h3">${country}</h3>
    `
    console.log(collect);
    }
  }