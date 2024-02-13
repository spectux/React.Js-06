import React from 'react'
import './App.css'
import BannerCardItem from './components/BannerCardItem'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => {
  return (
    <div className="app">
      <h1>Main Heading 1</h1>
      <p>Paragraph 1</p>
      <button>Show More</button>

      <h1>Main Heading 2</h1>
      <p>Paragraph 2</p>
      <button>Show More</button>

      <h1>Main Heading 3</h1>
      <p>Paragraph 3</p>
      <button>Show More</button>

      <ul className="banner-list">
        {bannerCardsList.map(bannerCard => (
          <BannerCardItem
            key={bannerCard.id}
            id={bannerCard.id}
            headerText={bannerCard.headerText}
            description={bannerCard.description}
            className={bannerCard.className}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
