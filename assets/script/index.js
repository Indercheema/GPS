'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const myMap = select('.my-map');
const mesg = select('.mesg');
const round = select('.round');

mapboxgl.accessToken = 'pk.eyJ1IjoiaW5kZXJjaGVlbWEiLCJhIjoiY2xiZ3J3NnRsMGowajN2bXBtZjN6MGNheiJ9.r-6K7yKorR2l386nFb8-Qw';

const map = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v12',
    // center: [0, 0],
    pitch: 40,
    zoom: 16
});

map.dragPan.disable();
map.keyboard.disable();
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();

const marker = new mapboxgl.Marker({
    color: '#3898ff',
});

function getLocation(position) {
    const { longitude, latitude } = position.coords;

    if (longitude && latitude) {
        map.setCenter([longitude, latitude]);
        marker.setLngLat([longitude, latitude]).addTo(map);
        setTimeout(() => { round.style.display = 'none' }, 750);
    }
}



function errorHandler(error) {
    mesg.style.display = 'inline-block';
    round.style.display = 'none';
    console.log(error.message);
}


const options = {
    enableHighAccuracy: true,
    maximumAge: 0
};


if (navigator.geolocation) {
    const geo = navigator.geolocation;
    geo.watchPosition(getLocation, errorHandler, options);
} else {
    console.log('Geolocation is not supported by your old browser');
}