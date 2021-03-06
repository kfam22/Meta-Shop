import React from 'react';
import AboutImg from '../assets/circular-01.png'

export default function About() {
  return (
    <div className='about-container'>
      <div className='aboutText'>
        <p>Circularity, for us is the ability to recycle, and to “regenerate” materials that already exist, defining our Modus Operandi in reducing waste by reintegrating the end-of-life products into a cyclical process that ensure transparency and adaptability of our resources.

        Upcycled and recycled materials are at the center of our design process. Today, around 50% of our collections are composed of upcycled products. The other half sees us working with innovative and sustainable fibers, such as biodegradable yarns and recycled fibers.
        </p>
        <img src={AboutImg}/>
      </div>
    </div>
  )
}
