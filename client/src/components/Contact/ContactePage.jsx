import { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
    <h3 className="titleContact">Contact</h3>
    < div className="contact-container">
      
      <div className="infoContactSection">
        <div className="numberContact champ">
          <img
            className="icon"
            src="../../../public/assets/images/icons/phone.svg"
            alt="phone logo"
          />
          <a href="tel:+33922124578">+33 922 124 578</a>
        </div>
        <div className="mailContact champ">
          <img
            className="icon"
            src="../../../public/assets/images/icons/mail.svg"
            alt="mail logo"
          />
          <a href="mailto:feet&fun@gmail.com">feet&fun@gmail.com</a>
        </div>
        <div className="locationContact champ">
          <img
            className="icon"
            src="../../../public/assets/images/icons/location.svg"
            alt="location place logo"
          />
          <a href="https://www.google.com/maps/place/Wild+Code+School/@50.6339332,3.0197752,16z/data=!4m14!1m7!3m6!1s0x47c2d55c63d0d77d:0x6986c08acba25607!2sWild+Code+School!8m2!3d50.6339298!4d3.0223501!16s%2Fg%2F11f0w_dmt3!3m5!1s0x47c2d55c63d0d77d:0x6986c08acba25607!8m2!3d50.6339298!4d3.0223501!16s%2Fg%2F11f0w_dmt3?authuser=0&entry=ttu">Lille , FRANCE</a>
          
        </div>
      </div>
      <div className="barreSeperation"/>
      <div className="fomulaireSection">
        <form className="formFormulaire" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default ContactPage;
