import React from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './contactStyle.css'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../A'

function Contact() {
    // const refForm = useRef()

    const sendEmail=(e) => {
        e.preventDefault();

        emailjs.sendForm('service_fswvle8', 'template_89jwsxj', e.target, '0TyasYeuX6Co0Laym')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        //   window.location.reload(false)

    }
    return (
        <>
            <div className="container contact-page">
                
                <div className="text-zone">
                    <h1>

                        Contact Mee

                    </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ipsam voluptas earum delectus dicta, dignissimos reprehenderit dolore impedit cupiditate assumenda commodi alias iusto quasi tenetur, excepturi dolorem esse totam fuga accusantium nisi, ullam accusamus molestiae pariatur? Porro veritatis voluptatem aut.</p>
                </div>
                <div className='contact-form'>
                    <form  onSubmit={sendEmail}  action="">
                    <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                   <input type="submit" className="flat-button" value="Send Message"></input>
                </li>
              </ul>
                    </form>

                </div>
            </div>
            <div className='info-map'>
              srushti narvekkar,
              <br />
              India,
              <br />
              M.H.B colony street 4, 400051
              <br />
              uderguegieebr
              <br />
              <span>yash.narvekar01@gmail.com</span>
            </div>
            <div className="map-wrap">
            <MapContainer center={[19.0596, 72.8295]} zoom={13}>
            <TileLayer url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=HgL9FRQpJjX7wieungGT" />
            <Marker position={[19.0596, 72.8295]}>
            <Popup>Its our office location,Do visit to register ur new Tour :)</Popup>
            </Marker>
          </MapContainer>
                </div>
            {/* <Loader type"pacman" /> */}
        </>
    )
}

export default Contact