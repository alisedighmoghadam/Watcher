import React from 'react'

const CircleProgressBar = () => {
  return (
     <svg class="circle-container" viewBox="2 -2 28 36" xmlns="http://www.w3.org/2000/svg">
    <circle class="circle-container__background" r="16" cx="16" cy="16"></circle>
    <circle
      class="circle-container__progress"
      r="16"
      cx="16"
      cy="16"
      style="stroke-dashoffset: 20"
    ></circle>
  </svg>
  )
}

export default CircleProgressBar
