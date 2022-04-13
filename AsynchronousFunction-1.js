async function map(location){
    let response = await fetch(`https://geocode.xyz/${location}?json=1`);
    let jsonObject = await response.json();

    let cityname = jsonObject;
    let latitude = jsonObject.long;
    let longitude = jsonObject.latitudeconsole.log(`Latitude is ${latitude} longitude is ${longitude}`) 
    let websiteResponse = await fetch(`https://geocode.xyz/${city}>json=1`);
    let location = await websiteResponse.json();
    document.body.append(location);
}   
map(newyork);