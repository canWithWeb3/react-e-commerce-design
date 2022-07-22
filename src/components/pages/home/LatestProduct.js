import React from 'react'
import { Link } from 'react-router-dom'

const LatestProduct = () => {
  return (
    <div id="home-products" className='container'>
      
      <h3 className='text-center mb-5 title-after'>Latest Product</h3>

      <div className="row g-5">

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card border-0">
            <Link to="/urun-detay" className="card-img">
              <img src="/img/product-5.jpg" alt="" className="img-fluid" />
            </Link>
            <div className="card-body">
              <h5>Gray Sports Shoes</h5>
              <div className="home-products-stars text-orange">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className='d-block text-secondary'>$95.00</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card border-0">
            <Link to="/urun-detay" className="card-img">
              <img src="/img/product-1.jpg" alt="" className="img-fluid" />
            </Link>
            <div className="card-body">
              <h5>Gray Sports Shoes</h5>
              <div className="home-products-stars text-orange">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className='d-block text-secondary'>$95.00</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card border-0">
            <Link to="/urun-detay" className="card-img">
              <img src="/img/product-3.jpg" alt="" className="img-fluid" />
            </Link>
            <div className="card-body">
              <h5>Gray Sports Shoes</h5>
              <div className="home-products-stars text-orange">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className='d-block text-secondary'>$95.00</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card border-0">
            <Link to="/urun-detay" className="card-img">
              <img src="/img/product-2.jpg" alt="" className="img-fluid" />
            </Link>
            <div className="card-body">
              <h5>Gray Sports Shoes</h5>
              <div className="home-products-stars text-orange">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className='d-block text-secondary'>$95.00</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card border-0">
            <Link to="/urun-detay" className="card-img">
              <img src="/img/product-7.jpg" alt="" className="img-fluid" />
            </Link>
            <div className="card-body">
              <h5>Gray Sports Shoes</h5>
              <div className="home-products-stars text-orange">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className='d-block text-secondary'>$95.00</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card border-0">
            <Link to="/urun-detay" className="card-img">
              <img src="/img/product-8.jpg" alt="" className="img-fluid" />
            </Link>
            <div className="card-body">
              <h5>Gray Sports Shoes</h5>
              <div className="home-products-stars text-orange">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className='d-block text-secondary'>$95.00</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card border-0">
            <Link to="/urun-detay" className="card-img">
              <img src="/img/product-9.jpg" alt="" className="img-fluid" />
            </Link>
            <div className="card-body">
              <h5>Gray Sports Shoes</h5>
              <div className="home-products-stars text-orange">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className='d-block text-secondary'>$95.00</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-6">
          <div className="card border-0">
            <Link to="/urun-detay" className="card-img">
              <img src="/img/product-6.jpg" alt="" className="img-fluid" />
            </Link>
            <div className="card-body">
              <h5>Gray Sports Shoes</h5>
              <div className="home-products-stars text-orange">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className='d-block text-secondary'>$95.00</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default LatestProduct