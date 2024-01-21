// objects
let submit = document.querySelector('.submit')
let text = document.querySelector('.text')
let nameV = document.querySelector('.name')
let desc = document.querySelector('.description')
let temp = document.querySelector('.temp')
let image = document.querySelector('.image')
let content = document.querySelector('.content')

// Enter Open Weather API key here
let apiKey = ''

// Fade in for content object
function fadeIn(element){
    var op = 0.1
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer)
            
        }
        element.style.opacity = op
        element.style.filter = 'alpha(opacity =' + op * 100 +")"
        op += op * 0.1
    }, 30)
}

//event listeners for button and enter keypress
submit.addEventListener('click', getInfo)
text.onkeydown = function(event){
    event = event || window.event
    var keyCode = event.keyCode || event.charCode
    if(keyCode == 13) {
        getInfo()
    }
}

//function with api call, background change, appending information to the objects, and styling the objects
function getInfo(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + text.value + '&appid=' + apiKey + '&units=imperial')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let descValue = data['weather'][0]['description'];
        let tempValue = data['main']['temp'] 
        let imgValue = data['weather'][0]['icon']
        
        

        if (imgValue === "01d") {
            document.body.style.backgroundImage = "url('./images/clear_day.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "01n") {
            document.body.style.backgroundImage = "url('./images/clear night.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "02d") {
            document.body.style.backgroundImage = "url('./images/few clouds.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "02n") {
            document.body.style.backgroundImage = "url('./images/few clouds night.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "03d" || imgValue === "04d") {
            document.body.style.backgroundImage = "url('./images/cloudy day.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "03n" || imgValue === "04n") {
            document.body.style.backgroundImage = "url('./images/cloudy night.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "09d" || imgValue === "10d") {
            document.body.style.backgroundImage = "url('./images/rein day.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "09n" || imgValue === "10n") {
            document.body.style.backgroundImage = "url('./images/rain night.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "11d") {
            document.body.style.backgroundImage = "url('./images/thunder day.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "11n") {
            document.body.style.backgroundImage = "url('./images/thunder night.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "13d") {
            document.body.style.backgroundImage = "url('./images/snow.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "13n") {
            document.body.style.backgroundImage = "url('./images/snow.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "50d") {
            document.body.style.backgroundImage = "url('./images/mist.jpg')"
            document.body.style.backgroundSize = "100%"
        } else if (imgValue === "50n") {
            document.body.style.backgroundImage = "url('./images/mist.jpg')"
            document.body.style.backgroundSize = "100%"
        }

        fadeIn(content)


        nameV.innerHTML = nameValue;
        desc.innerHTML = descValue;
        temp.innerHTML = Math.round(parseInt(tempValue)) + '°F';
        image.src = `https://openweathermap.org/img/wn/${imgValue}@2x.png`
        content.style.borderTop = '10px dotted'
        content.style.borderLeft = '10px dotted'
        content.style.borderRight = '10px dotted'
        content.style.borderBottom = '10px dotted'
        content.style.borderRadius = '100%'
        content.style.backgroundImage = 'linear-gradient(45deg, rgba(139, 0, 0, .5),rgba(192,192,192,.5), rgba(0, 0, 139, .5)'
        content.style.marginLeft = '175px'
        content.style.marginRight = '175px'
        content.style.margintop = '100px'
        //use for testing and seeing all data included from OpenWeatherAPI
        //console.log(data)
    })

    .catch(err => alert('Invalid city name.'))
}
