var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var icon = document.querySelector('#icon')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


apik = "3045dd712ffe6e702e3245525ac7fa38"


function convertion(val){
    return (val - 273).toFixed(2)
}

    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var icons = data['weather']['0']['icon']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var link = src=`http://openweathermap.org/img/wn/${ convertion(icons)}@2x.png`
            console.log(icons)
            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`

            
            icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icons}@2x.png">`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

        })
        .catch(err => alert('You entered Wrong city name'))
    })