import React from 'react'

const RightArrow = ({func,style}) => {
    var rightArrow=require('../views/Arrow_right.png');
  return (
    <div className='arrows right-arrow col-auto' >
                    <button onClick={func} style={style}>
                        <img src={rightArrow} alt="" />
                    </button>
              </div>
  )
}

export default RightArrow
