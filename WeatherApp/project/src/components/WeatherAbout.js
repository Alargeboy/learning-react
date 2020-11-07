import React, { Component } from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import WeatherAboutTable from './WeatherAboutTable'
 class WeatherAbout extends Component {

// SEARCHWEATHER COMPONENT'INDEN Weather props'unu  alır ve istenilen gün için bilgileri döndürür.
    findByDay = (day,date,desc,degree)=>{
        return (
            this.props.weather.map(w=>{
                if(day === w.day){
                    if(date === true){
                        return w.date
                    }
                    if(desc === true){
                     return w.description
                    }
                    if(degree === true){
                        return w.degree
                    }
                }
                 return null
            })
        )
    }
    render() {
        return (
            <>
            <WeatherAboutTable findDay={this.findByDay}/>

        </>
        )
    }
}

export default WeatherAbout
