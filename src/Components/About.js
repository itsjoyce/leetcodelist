import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
       var akuna = this.props.data['Akuna'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       })

       var audible = this.props.data['Audible'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       }) 
       var bloomberg = this.props.data['Bloomberg'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       })
       var C3 = this.props.data['C3AI'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       })
       var databricks = this.props.data['Databricks'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       })
       
       var microsoft = this.props.data['Microsoft'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       })
       
       var gs = this.props.data['Godman Sachs'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       })
       var salesforce = this.props.data['Salesforce'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       }) 
      
       var tiktok = this.props.data['Tiktok'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       }) 
      }

    return (
      <section id="about">
         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Godman Sachs</span></h2>
            </div>
            <div className="nine columns main-col">
               {gs}
            </div>
         </div>
         
         
         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Microsoft</span></h2>
            </div>
            <div className="nine columns main-col">
               {microsoft}
            </div>
         </div>

         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Salesforce</span></h2>
            </div>
            <div className="nine columns main-col">
               {salesforce}
            </div>
         </div> 
         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Tiktok</span></h2>
            </div>
            <div className="nine columns main-col">
               {tiktok}
            </div>
         </div>


         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Akuna</span></h2>
            </div>
            <div className="nine columns main-col">
               {akuna}
            </div>
         </div>
   
         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Audible</span></h2>
            </div>
            <div className="nine columns main-col">
               {audible}
            </div>
         </div> 
         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Bloomberg</span></h2>
            </div>
            <div className="nine columns main-col">
               {bloomberg}
            </div>
         </div>
         <div className="row type">
            <div className="three columns header-col">
               <h2><span>C3 AI</span></h2>
            </div>
            <div className="nine columns main-col">
               {C3}
            </div>
         </div>
         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Databricks</span></h2>
            </div>
            <div className="nine columns main-col">
               {databricks}
            </div>
         </div>
         

         </section>
    );
  }
}

export default About;
