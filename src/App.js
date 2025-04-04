import logo from './logo.svg';
import React from "react";
import "./App.css";  // Importing the CSS file
import "./Navigation.css";
// import  AboutUs from "./AboutUs";
import "./AboutUs.css"; 
import { CloudLightning, HelpingHand, ShieldAlert,  Building,} from "lucide-react";





function App() {
  return (
    <div className="app-container">
         <header>
        <MyNavbar /> {/* Navbar placed at the top */}
      </header>
      <h1 className="app-title">(सहायोग) </h1>
      <p className="app-description">
        Providing real-time cyclone alerts, response coordination, and resource management.
      </p>
      <button className="button">Get Alerts</button>
      <h1 className="text-center mt-5">Welcome to Cyclone Alert System</h1>
      
       {/* About Us Section */}
       <AboutUs/>
     </div>
  );
  
}

const MyNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Cyclone Management Portal</div>
      <div className="navbar-links">
        <a href="#" className="nav-link">FAQ</a>
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-primary">Sign Up</button>
        <a href="#" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};






const AboutUs = () => {
  const sections = [
    {
       title: "Gencast use for weather prediction",
      description: "AI model developed by DeepMind for extreme weather prediction and uses machine learning and historical climate data for accurate forecasting.",
      icon: <CloudLightning size={40} color="#007bff" />,
    },
    {
      title: "Disaster Response",
      description: "Explore our rapid disaster response strategies to minimize the impact of cyclones in affected areas.",
      icon: <HelpingHand size={40} color="#ff4e4d" />,
    },
    {
      title: "Sustainability",
      description: "Learn more about our sustainable approaches, emergency plans, and eco-friendly disaster relief solutions.",
      icon: <ShieldAlert size={40} color="#ff5b" />,
      
    },
    {
      title: "Administrative Mapping & Hierarchy ",
      description:"Government Administrative Boundaries: Show district, state, and national-level responsibilities for disaster response.",
      icon: <Building size={40} color="#28a745" />,

    },
  ];

  return (
    <div className="about-us-section">
      <h2 className="about-us-title">Learn More About Us</h2>
      <div className="cards-container">
        
        {sections.map((section, index) => (
          <div key={index} className="about-card">
             <div className="icon-title">
            {section.icon} {/* Render different icons dynamically */}
            <h3>{section.title}</h3>
          </div>
            <p>{section.description}</p>
            <a href="#" className="learn-more-link">
              Learn more →
            </a>
           
            

          </div>
        ))}
      </div>
    </div>
  );
};




export default App;
