import React from 'react'

const LeftArrow = ({func,style}) => {
    var leftArrow=require('../views/Arrow_left.png')
  return (
    <div className='arrows left-arrow col-auto' >
                <button onClick={func} style={style}>
                    <img src={leftArrow} alt="" />
                </button>
              </div>
  )
}

export default LeftArrow
