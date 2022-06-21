import { ContainerMaxWidth } from "components/common";
import React, {useRef} from "react";
import './contact.css'

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
                        <button><i className="fa fa-paper-plane"></i></button>

                      </motion.form>

                    </motion.div>
                    

                    <div className="contact-info">
                      <div className="">home</div>
                      <div className="">benefits</div>
                      <div className="">about</div>
                      
                    </div>

                    <div className="contact-redes">
                      <div className="contact-redes-icon">
                        <i className="fa fa-telegram" aria-hidden="true"></i>
                      </div>
                      <div className="contact-redes-icon">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </div>
                      <div className="contact-redes-icon">
                         <i className="fa fa-facebook" aria-hidden="true"></i>
                      </div>
                      <div className="contact-redes-icon">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </div>
                    </div>

                </ContainerMaxWidth>

            </div>
        </>
    )
}

export default Contact;
