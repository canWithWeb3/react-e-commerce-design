import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <Link class="navbar-brand" to="/"><img style={{ width:"140px" }} src="/img/logo.png" alt="" className="img-fluid" /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-lg-0 my-2">
            <li class="nav-item dropdown">
              <Link class="text-secondary text-decoration-none dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admin 
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/admin/urunler">Ürünler</Link></li>
                <li><Link class="dropdown-item" to="/admin/kategoriler">Kategoriler</Link></li>
              </ul>
            </li>
          </ul>

          <ul class="d-flex align-items-center navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">Anasayfa</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">Ürünler</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">Blog</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/iletisim">İletişim</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/giris-yap"><i className="fas fa-user fs-5"></i></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/sepet"><i class="fas fa-shopping-bag fs-5"></i></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar