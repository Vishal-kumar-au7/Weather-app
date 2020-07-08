const request = require('postman-request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=66b28e544bb5ad20d20708558965a7d0&query='+latitude+','+longitude+'&units=f'
    request({url , json:true }, (error,{body}) => {

     //const data = JSON.parse(response.body)
    // console.log(data.current)
        // console.log(response.body.current)

    if(error){
            callback("Unable to connect to web server",undefined)
        }

    else if(body.error) {
        callback("Unable to find the Location!!",undefined)
    }

    else{
            callback(undefined,body.current.weather_descriptions[0]+", current temperature is: "+body.current.temperature
                 +" and it feels like "+ body.current.feelslike + " humidity is "+body.current.humidity)
        }
 })

}

 module.exports = forecast

 // const url = 'http://api.weatherstack.com/current?access_key=66b28e544bb5ad20d20708558965a7d0&query=37.8267,-122.4233&units=f'

//  request({url : url, json:true }, (error,response) => {

//      //const data = JSON.parse(response.body)
//     // console.log(data.current)
//         // console.log(response.body.current)

//         if(error){
//             console.log("Unable to connect to web server")
//         }

//     else if(response.body.error) {
//         console.log("Unable to find the Location!!")
//     }
//        else{
//              console.log(response.body.current.weather_descriptions[0]+" current temperature is: "+response.body.current.temperature
//          +" it feels like "+response.body.current.feelslike) }
//  })
