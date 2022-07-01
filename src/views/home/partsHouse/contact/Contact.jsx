import { ContainerMaxWidth } from "components/common";
import React, {useRef} from "react";
import './contact.css'
import {telegram,github,twitter,facebook} from 'assets/iconSR'
import plane from './files/plane.svg'
import { motion, Variants } from "framer-motion";

const cardVariants = {
  offscreen: {
    opacity:0,
  },
  onscreen: {
    opacity:1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.4
    }
  }
};

const Contact = () =>{
  
  let refInputP=useRef()

  const formOnSubmit=(e)=>{
    e.preventDefault()
    console.log(refInputP.current.value)

  }
    return(
        <>
            <div id="contact" className="contact">

                <ContainerMaxWidth className="contact-container">

                    <div className="contact-content">
                        <p>Envienos su Correo para recibir mas informacion </p>
                    </div>
                    
                    
                    <motion.div
                      className="contact-formEmail"                           
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.1 }}>

                      <motion.form className="contact-formEmail-input" 
                        onSubmit={(e)=>{formOnSubmit(e)}}
                        variants={cardVariants}>

                        <input ref={refInputP} type="email"  placeholder="Email" />
                        <button><img src={plane} alt=""/></button>

                      </motion.form>

                    </motion.div>
                    

                    <div className="contact-info">
                      <div className="">Home</div>
                      <div className="">Benefits</div>
                      <div className="">About us</div>
                      <div className="">Opinions</div>
                      
                    </div>

                    <div className="contact-redes">
                      <div className="contact-redesContent">
                        <img src={telegram} alt=""/> 
                      </div>
                      <div className="contact-redesContent">
                        <img src={github} alt=""/> 
                      </div>
                      <div className="contact-redesContent">
                        <img src={twitter} alt=""/> 
                      </div>
                      <div className="contact-redesContent">
                        <img src={facebook} alt=""/>
                      </div>
                    </div>

                </ContainerMaxWidth>

            </div>
        </>
    )
}

export default Contact;
