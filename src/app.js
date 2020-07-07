const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for express config
const publicdirectorypath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partialpath = path.join(__dirname,'../templates/partial')

// set up handler engine and views location
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialpath)

// set up static directory to server
app.use(express.static(publicdirectorypath))

//       NEVER GOING TO RUN
// app.get('' , (req, res) =>{

//     res.send('<h1>Hello express!!</h1>')

// })

/*
   We don't need help and abput as seperate html files are created.  

app.get('/help',(req,res) =>{
    res.send([{ Name:'Vishal',
        age: 23},
    { name:'ansh'}])
})

app.get('/about',(req,res) => {
   res.send("ABOUT")
})
*/

app.get('/about',(req,res) =>{
    res.render('about',{
        title : 'About',
        name: 'Vishal'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        helptext: 'This is some helpful text.',
        title: 'Help',
        name : 'Vishal'
    })
})


app.get( '',(req,res) =>{
    res.render('index',{
        title : 'Weather-app',
        name: 'Vishal'
    })
})


app.get('/products',(req,res) =>{
    
    if(!req.query.search){
        return res.send({
          error: 'You must provide search term'
        })
    }
    console.log(req.query.search)
    res.send({ 
        products :[] 
     })
})

app.get('/weather',(req,res) =>{
    if(!req.query.address)
    {   return res.send({
        error: 'Enter address please'
    })    }  
    
    geocode(req.query.address , (error, {latitude, longitude, location} ={}) =>{
        if(error){
            return res.send({error})
        }


    forecast( latitude, longitude, (error, forecastData) => {
        if(error){
            return res.send({error})
        }

        res.send({
            forecast: forecastData,location,
            address: req.query.address
        })
    })
  
}) 
})

app.get('/help/*',(req,res) =>{
    res.render('404',{
        title:'404',
        name : 'Vishal',
        errormessages:'Help article not found'
    })
})

app.get('*',(req,res) =>{
    res.render('404',{
        title:'404',
        name: 'Vishal',
        errormessages:'Page Not found'
    })
})
app.listen(3000 ,() =>{
    console.log("Server is up on port 3000")
})