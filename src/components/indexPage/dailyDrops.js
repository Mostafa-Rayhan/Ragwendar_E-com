import React from 'react'

const DailyDrops = () => {
  return (
    <section>
    <div className="container-fluid mt-5 daily-drops">
      <h2 id="main-popular-h3">DAILY DROPS</h2>
      <div className="row">
        <div className="col-6 p-1" id="main-discount">
          <a href="">
            <img src="./assets/dresses/daily-props/daily.png" alt="" />
          </a>
        </div>
        <div className="col-6 p-1" id="main-discount">
          <a href="">
            <img src="./assets/dresses/daily-props/daily2.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DailyDrops