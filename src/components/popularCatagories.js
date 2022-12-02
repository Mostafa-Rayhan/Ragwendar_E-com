import React, { useEffect, useState } from 'react'


const data =
  [
    {
      id: 1,
      name: "category 1",
      image: "./assets/dresses/popular/popular.png",
      price: 500,
      discount: 20,
      sold: 30,

    },
    {
      id: 2,
      name: "category 2",
      image: "./assets/dresses/popular/popular2.png",
      price: 600,
      discount: 20,
      sold: 50,

    },
    {
      id: 3,
      name: "category 3",
      image: "./assets/dresses/popular/popular3.png",
      price: 300,
      discount: 20,
      sold: 10,

    },
    {
      id: 4,
      name: "category 4",
      image: "./assets/dresses/popular/popular4.png",
      price: 200,
      discount: 40,
      sold: 20,

    },
    {
      id: 5,
      name: "category 5",
      image: "./assets/dresses/popular/popular5.png",
      price: 500,
      discount: 30,
      sold: 10,

    },
    {
      id: 6,
      name: "category 6",
      image: "./assets/dresses/popular/popular6.png",
      price: 500,
      discount: 20,
      sold: 30,

    },
    {
      id: 7,
      name: "category 7",
      image: "./assets/dresses/popular/popular7.png",
      price: 500,
      discount: 10,
      sold: 70,

    },
    {
      id: 8,
      name: "category 8",
      image: "./assets/dresses/popular/popular8.png",
      price: 500,
      discount: 20,
      sold: 30,

    },
    {
      id: 9,
      name: "category 9",
      image: "./assets/dresses/popular/popular9.png",
      price: 100,
      discount: 40,
      sold: 10,

    },
    {
      id: 10,
      name: "category 10",
      image: "./assets/dresses/popular/popular10.png",
      price: 100,
      discount: 40,
      sold: 10,

    },
  ]
const PopularCatagories = () => {

  const [category, setCategory] = useState([])

  useEffect(() => {
    setCategory(data)
  }, [])
  
  return (
    <section>
      <div className="container responsive-container pt-4">
        <h2 id="main-popular-h3">POPULAR CATEGORIES</h2>
        <div className="d-flex flex-wrap justify-content-center">

          {
            category?.map(c => {
              return (
                <div className="p-1 pb-4" id="p-category">
                  <a href="#populer">
                    <img src={c.image} alt="" /> 
                  </a>
                </div>

              )
            })
          }


          {/* <div className="p-1 pb-4" id="p-category">
            <a href="#populer">
              <img src="./assets/dresses/popular/popular2.png" alt="" />
            </a>
          </div>
          <div className="p-1 pb-4" id="p-category">
            <a href="#populer">
              <img src="./assets/dresses/popular/popular3.png" alt="" />
            </a>
          </div>
          <div className="p-1 pb-4" id="p-category">
            <a href="#populer">
              <img src="./assets/dresses/popular/popular4.png" alt="" />
            </a>
          </div>

          <div className="p-1 pb-4" id="p-category">
            <a href="#populer">
              <img src="./assets/dresses/popular/popular5.png" alt="" />
            </a>
          </div>
          <div className="p-1 pb-4" id="p-category">
            <a href="#populer">
              <img src="./assets/dresses/popular/popular6.png" alt="" />
            </a>
          </div>
          <div className="p-1 pb-4" id="p-category">
            <a href="#populer">
              <img src="./assets/dresses/popular/popular7.png" alt="" />
            </a>
          </div>

          <div className="p-1 pb-4" id="p-category">
            <a href="#populer">
              <img src="./assets/dresses/popular/popular8.png" alt="" />
            </a>
          </div>
          <div className="p-1 pb-4" id="p-category">
            <a href="#populer">
              <img src="./assets/dresses/popular/popular9.png" alt="" />
            </a>
          </div>
          <div className="p-1 pb-4" id="p-category">
            <a href="#populer">
              <img src="./assets/dresses/popular/popular10.png" alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default PopularCatagories;