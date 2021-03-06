import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.concept.map(function(testimonials){
         var url = testimonials.link;
        return  <li key={testimonials.user}>
            <blockquote>
               <a href={url} target="_blank" rel="noreferrer noopener">{testimonials.text}</a>
            </blockquote>
         </li>
      })
//   <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{

    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
