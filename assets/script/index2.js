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


mapboxgl.accessToken = 'pk.eyJ1IjoiaW5kZXJjaGVlbWEiLCJhIjoiY2xiZ3J3NnRsMGowajN2bXBtZjN6MGNheiJ9.r-6K7yKorR2l386nFb8-Qw';
const map = new mapboxgl.Map({
container: 'map2', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [-24, 42], // starting center in [lng, lat]
zoom: 1 // starting zoom
});
 
// Add geolocate control to the map.
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})
);

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Listening to the resize event
window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});