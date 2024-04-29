import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

function ContactUs() {
  const form = useRef();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [formName, setFormName] = useState("");

  const [formMail, setFormMail] = useState("");

  const [formMsg, setFormMsg] = useState("");

  const displayConfirmation = () => {
    if (formName !== "" || formMail !== "" || formMsg !== "") {
      setShowConfirmation(true);
      setFormName("");
      setFormMail("");
      setFormMsg("");
    } else {
      setShowConfirmation(false);
    }
  };
  const handleChangeName = (e) => {
    setFormName(e.target.value);
  };

  const handleChangeMail = (e) => {
    setFormMail(e.target.value);
  };

  const handleChangeMsg = (e) => {
    setFormMsg(e.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2b3kg3s", "template_idjiy8i", form.current, {
        publicKey: "7aPbsdkTmDMMrOxsJ",
      })
      
    displayConfirmation();
  };

  return (
    <div className="contactSection">
      <h3 className="titleRubrique">Contact</h3>
      <form className="frm" ref={form} onSubmit={sendEmail}>
        <div className="contact-container">
          <div className="infoContactSection">
            <div className="numberContact  champ">
              <img
                className="icon"
                src="public/assets/images/icons/phone.svg"
                alt="phone logo"
              />
              <a href="tel:+33922124578">+33 922 124 578</a>
            </div>
            <div className="mailContact  champ ">
              <img
                className="icon"
                src="public/assets/images/icons/mail.svg"
                alt="mail logo"
              />
              <a href="mailto:feet&fun@gmail.com">feetandfunlille@gmail.com</a>
            </div>
            <div className="locationContact  champ ">
              <img
                className="icon"
                src="public/assets/images/icons/location.svg"
                alt="location place logo"
              />
              <a href="https://www.google.com/maps/place/Wild+Code+School/@50.6339332,3.0197752,16z/data=!4m14!1m7!3m6!1s0x47c2d55c63d0d77d:0x6986c08acba25607!2sWild+Code+School!8m2!3d50.6339298!4d3.0223501!16s%2Fg%2F11f0w_dmt3!3m5!1s0x47c2d55c63d0d77d:0x6986c08acba25607!8m2!3d50.6339298!4d3.0223501!16s%2Fg%2F11f0w_dmt3?authuser=0&entry=ttu">
                Lille , FRANCE
              </a>
            </div>
            <div className="btnSendB" />
          </div>
        </div>
        <div className="separationBar" />
        <div className="frmContact">
          <div className="frmName">
            <label>
              Votre nom
              <input
                value={formName}
                onChange={handleChangeName}
                required
                type="text"
                name="from_name"
                className="input-contact"
              />
            </label>
          </div>
          <div className="frmName">
            <label>
              Email
              <input
                value={formMail}
                onChange={handleChangeMail}
                required
                type="email"
                name="from_email"
                className="input-contact"
              />
            </label>
          </div>
          <div className="frmName">
            <label>
              Message
              <textarea
                name="message"
                value={formMsg}
                onChange={handleChangeMsg}
              />
            </label>
          </div>
          <input className="primary-button" type="submit" value="Envoyer" />
          <div className="centreMsg">
            {showConfirmation && (
              <div className="msgConfirmation">
                Merci ! Votre message a bien été envoyé !
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
export default ContactUs;
