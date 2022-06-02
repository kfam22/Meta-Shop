import React from 'react'
import { Link } from 'react-router-dom';

export default function Swatches() {
  return (
    <div className='swatches'>
        <p className='tab'>library</p>
        <div className='swatchContainer'>
            <Link to='/shop'>
            <div className='denimSwatch'>
                <p>denim</p>
            </div>
            </Link>

            <div className='knitSwatch'>
                <p>knit</p>
            </div>

            <div className='sweatSwatch'>
                <p>sweats</p>
            </div>

            <div className='tapestrySwatch'>
                <p>tapestry</p>
            </div>

            <div className='terrySwatch'>
                <p>terry</p>
            </div>

            <div className='crochetSwatch'>
                <p>crochet</p>
            </div>
        </div>

    </div>
  )
}
