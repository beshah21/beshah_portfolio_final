import React from 'react';

const About = () => {
  const paragraphStyle = {
    marginTop: '20px',
    fontSize: '2rem', // Adjust as needed
    lineHeight: '1.5', // Improves readability
    maxWidth: '600px', // Limit width for better readability
    marginLeft: 'auto', // Center the paragraph
    marginRight: 'auto', // Center the paragraph
    fontWeight: '300', // Lighter weight for paragraph text
    color: 'white'
};
const Headera = {
  marginTop: '20px',
  fontSize: '2rem', // Adjust as needed
  lineHeight: '1.5', // Improves readability
  maxWidth: '600px', // Limit width for better readability
  marginLeft: 'auto', // Center the paragraph
  marginRight: 'auto', // Center the paragraph
  fontWeight: '300', // Lighter weight for paragraph text
  color: 'white'
};
const Core = {
   // Lighter weight for paragraph text
  color: 'white'
};
    return (
    <section id="about"style={{ backgroundImage: "url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=600')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
     <div className="about container">
       <div className="col-left">
        <div className="about-img">
        <img src="./assets/img/Photo.jpg" alt="Beshah Ashenafi" />
        </div>
       </div>
    <div className="col-right">
      <h1 style={Core}className="section-title">About <span>me</span></h1>
      <h2 style={Headera}>Front End Developer</h2>
      <p style={paragraphStyle}>I'm a web developer with a passion for creating interactive and user-friendly applications. With a strong foundation in HTML, CSS, JavaScript, and React, I enjoy building responsive websites that enhance user experiences. I constantly seek new challenges and opportunities to grow my skill set.</p>
      <a href="https://drive.google.com/file/d/1QCDcYjDhcTw7907noSbs8qJT0hjSAVsV/view?usp=drive_link" download className="cta">Download Resume</a>
    </div>
  </div>
 </section>
    );
};

export default About;
