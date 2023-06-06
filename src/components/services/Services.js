import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>My Academic Career So far</h5>
      <h2>Education</h2>

      <div className="container services__container">
        <article className="container__institute">
          <FaGraduationCap className="container__institute-icon" />
          <div>
            <small><em>April 2018 - December 2022</em></small>

            <h3>University of Asia Pacific</h3>
            <small><em>B.sc in CSE</em></small>

            <p>
              It was my dream to Become an Engineer and it went true here. Now I'm a Computer Science Graduate Alhamdulillah. I want to thank my family and my Teachers for there efforts and their blessings.I will be forever grateful to them.And Alhamdulillah So far I am quite happy with my studies.
            </p>
          </div>
        </article>
        <article className="container__institute">
          <FaGraduationCap className="container__institute-icon" />
          <div>
            <small><em>July 2015 - April 2017</em></small>
           
              <h3>Dhaka College</h3>
              <small><em>H.S.C</em></small>
            
            <p>
            I feel so lucky when I think that I was a student of this great Institution.I want to thank my family and my Teachers for there efforts and their blessings.I have found some new ways of thinking throughout HSC. I loved programming. My aim is changed again. So, I set my goal to be a programmer.
            </p>
          </div>
        </article>
        <article className="container__institute">
          <FaGraduationCap className="container__institute-icon" />
          <div>
            <small><em>Jan 2011 - May 2015</em></small>
            
              <h3>Darunnazat Siddikia Kamil Madrasah</h3>
              <small><em>Dakhil</em></small>
            
            <p>
            In Darunnazat Siddikia Kamil Madrasah, I completed my Secondary School Certificate/Dakhil. Here I spend the best time of my student life. That was the turning point of my life, future, and dream. I was pretty happy. I had found some friends and teachers who are some of the best people I have seen.
            </p>
          </div>
        </article>
        <article className="container__institute">
          <FaGraduationCap className="container__institute-icon" />
          <div>
            <small><em>Jan 2003 - Dec 2008</em></small>
        
              <h3>Khejurbag Govt. Primary School</h3>
              <small><em>Primary Education</em></small>
            
            <p>
            Khejurbag Govt Primary School holds a special place in my heart as it was the foundation of my educational journey. With its welcoming atmosphere, supportive teachers, and engaging curriculum, I developed essential skills, made lifelong friends, and cherished memories that continue to shape me today.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
