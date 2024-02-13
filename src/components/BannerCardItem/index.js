import React from 'react'
import './index.css'

const BannerCardItem = ({id, headerText, description, className}) => {
  return (
    <li className={`banner-card ${className}`} key={id}>
      <h1 className="header-text">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="show-more-btn">Show More</button>
    </li>
  )
}

export default BannerCardItem
