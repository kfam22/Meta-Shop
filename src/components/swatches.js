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

            <Link to='/shop'>
            <div className='knitSwatch'>
                <p>knit</p>
            </div>
            </Link>

            <Link to='/shop'>
            <div className='sweatSwatch'>
                <p>sweats</p>
            </div>
            </Link>

            <Link to='/shop'>
            <div className='tapestrySwatch'>
                <p>tapestry</p>
            </div>
            </Link>

            <Link to='/shop'>
            <div className='terrySwatch'>
                <p>terry</p>
            </div>
            </Link>

            <Link to='/shop'>
            <div className='crochetSwatch'>
                <p>crochet</p>
            </div>
            </Link>
        </div>

    </div>
  )
}
