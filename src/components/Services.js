import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
              icon:<FaCocktail/> ,
              title:"free cocktails",
              info:'This cocktails have been designed to assist in enhancement and empowering businesses'


            },
            {
                icon:<FaHiking/> ,
                title:"free Hiking services",
                info:'This cocktails have been designed to assist in enhancement and empowering businesses'
  
  
              },
              {
                icon:<FaShuttleVan/> ,
                title:"free shuttle van",
                info:'This cocktails have been designed to assist in enhancement and empowering businesses'
  
  
              },
              {
                icon:<FaBeer/> ,
                title:"free beer",
                info:'This cocktails have been designed to assist in enhancement and empowering businesses'
  
  
              }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item,index) => {
                       return<article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                   <p>{item.info}</p>
                       </article>
                   })}
               </div>
            </section>
        ); 
    }
}
