import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section id="register" className='py-5' style={{ minHeight: "93.5vh" }}>
      <div className="container">
        <div className="row d-flex align-items-center pt-5 justify-content-center">

          <div className="col-lg-7 col-12 order-lg-1 order-2">
            <img src="/img/image1.png" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-5 col-12 order-lg-2 order-1">
            <div className="card bg-white py-3">
              <h3 className='mb-3 text-center text-decoration-underline'>Kayıt Ol</h3>
              <div className="card-body px-5">

                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Kullanıcı Adı:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Email:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Parola (Tekrar):</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Parola:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <button className="btn-orange d-block w-100 mb-3">Kayıt Ol</button>
                  <div className='text-secondary d-flex flex-wrap gap-3 justify-content-center'>
                    <span className='d-inline-block'>Hesabın var mı?</span>
                    <Link to="/giris-yap" className="d-inline-block text-center text-decoration-none">Giriş Yap</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Register