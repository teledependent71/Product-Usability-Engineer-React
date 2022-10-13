import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Usability Engineer</title>
        <meta property="og:title" content="Product Usability Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
