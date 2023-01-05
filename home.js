// coupon
function loadCoupon(){
    document.getElementsByClassName('coupon')[0].style.display = 'block';
    document.getElementsByClassName('coupon')[0].style.opacity='1';
    document.body.style.opacity='0.7'
}

const closeCoupon = () => {
    document.getElementsByClassName('coupon')[0].style.display = 'none';
    document.body.style.opacity='1'
}


// mode change
function changeMode() {
    let mybody = document.body;
    mybody.classList.toggle('mydark');
}


// geolocation
function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerText = "Geo Not Supoorted"
    }
}

function showPosition(data) {
    let x = document.getElementById('out');
    let y = document.getElementById('weather');
    console.log(data)
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    //x.innerText = `Latitude is ${lat} and longitude is ${lon}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    //api calling
    fetch(url, { method: "GET" })
        //return promise
        .then((res) => res.json())
        //resolve promise and get data
        .then((data) => {
            console.log(data);
            let cityName = data.city.name;
            let temp = data.list[0].temp.day;
            x.innerText = `${cityName}`
            y.innerText = `${temp} °C`
        })
}
