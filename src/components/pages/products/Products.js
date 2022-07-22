import React from 'react'
import { Link } from "react-router-dom"

const Products = () => {
  return (
    <section id="products" className='container pt-5 pb-5 mb-5'>

      <div className='d-flex flex-wrap justify-content-between align-items-center'>
        <h3 className='my-5'>Bütün Ürünler</h3>
        <select class="form-select w-25 h-25" aria-label="Default select example">
          <option selected>Varsayılan</option>
          <option value="1">Fiyata göre</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

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

      </div>

      <div className="d-flex gap-3 my-5">

        <button className="btn-outline-orange px-3">1</button>

        <button className="btn-outline-orange px-3">2</button>

        <button className="btn-outline-orange px-3">3</button>

      </div>

    </section>
  )
}

export default Products