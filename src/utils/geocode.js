
const request = require('postman-request')
const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidmlzaGFsMjAxMiIsImEiOiJja2E4Nm4weWUwYTE5MnNtdWc5OGRhMXZyIn0.ai9elrAeRrOcoRH2FL2V3Q'

    request({ url, json:true  }, (error,{body}) =>{
        if(error){
           callback('Unable to connect to a server',undefined)
        }
        
        else if(body.features.length === 0){
            callback("Unable to find location",undefined)
        }
        
        else{    
        callback(undefined,{ 
            latitude : body.features[0].center[1],
            longitude : body.features[0].center[0],
            location : body.features[0].place_name
    })
}
        } )
}


module.exports = geocode

 //    GEO CODING LATITUDE AND LONGITUDE  ---> WEATHER 

// const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmlzaGFsMjAxMiIsImEiOiJja2E4Nm4weWUwYTE5MnNtdWc5OGRhMXZyIn0.ai9elrAeRrOcoRH2FL2V3Q'
// request({ url: geocodeurl, json:true  }, (error,response) =>{
// if(error){
//     console.log("Unable to connect to a server")
// }

// else if(response.body.features.length === 0){
//     console.log("Unable to find location")
// }

// else{    
// console.log("latitude is "+response.body.features[0].center[1]+" and longitude is "+response.body.features[0].center[0])
// }
// } )

// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
// GEO CODE



// geocode('naujheel',(error,data) =>{
//     console.log('Error',error),
//     console.log('data',data)

//     forecast(data.latitude, data.longitude ,(error,data) => {
//         console.log('Error',error)
//         console.log('data',data)
//     }) 
// })
