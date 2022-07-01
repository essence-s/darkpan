import React from 'react';
import './benefits.css';

import svgSoporte from 'assets/soporte.svg'
import svgWinners from 'assets/winners.svg'
import svgOrganizado from 'assets/organizado.svg'
import { ContainerMaxWidth, CardB } from 'components/common';
import svgbenefits from './files/benefits.svg'

const Benefits =()=>{

  const dataBenefit= [
    {
      title:'Soporte',
      description:'Todo el dia',
      img:svgSoporte,
      background:'linear-gradient(#e7a766, #e7666b)'
    },
    {
      title:'Organizado',
      description:'Todo el dia',
      img:svgOrganizado,
      background:'linear-gradient(-30deg,#37a2fb, #7123b3)'
    },
    {
      title:'Win',
      description:'Todo el dia',
      img:svgWinners,
      background:'linear-gradient(#e7a469, #e7c769)'
    },
    {
      title:'Win2',
      description:'Todo el dia',
      img:svgWinners,
      background:'linear-gradient(#f85258, #cb49bb)'
    }

  ]
    return(
        <>
            <div id="benefits" className="benefits">

                
                
                <ContainerMaxWidth className="container-benefits">
                          
                    <div className="benefits-content">

                      <div className="benefits-illus">
                        {dataBenefit.map((d,i)=>{
                          return <CardB key={i} className={`benefits-illus-card${i+1}`} data={d}></CardB>
                        })}
                      </div>
                      <div className="benefits-info">
                        <div className="benefits-titulo">
                          <p>OUR <span>BENEFITS</span></p>
                        </div>

                        <div className="benefits-description">
                          Hacemos esto asesorando y capacitando a los líderes para que 
                          impulsen prácticas comerciales éticas, asociándonos con la 
                          empresa para garantizar una gestión eficaz 
                        </div>
                      </div>
                    </div>
           

                </ContainerMaxWidth>
            </div>
        </>
    )
}

export default Benefits;
