import React from 'react'

const Cart = () => {
  return (
    <section id="cart" className='container pt-5 pb-5 mb-5'>
      
      <div className="row">
        <div className="col-md-12 mx-auto">
          <table className="table">
            <thead className='bg-orange text-white'>
              <tr>
                <th className='cart-th-image'>Resim</th>
                <th>Ürün</th>
                <th className='cart-th-quantity'>Miktar</th>
                <th className='cart-th-total'>Toplam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-0'>
                  <img src="/img/product-1.jpg" alt="" className="img-fluid" />
                </td>
                <td className='px-0'>
                  <div className="d-flex">
                    <div className='ps-3'>
                      <h5>Printed T-Shirt</h5>
                      <p className='text-secondary'>Fiyat: $50.00</p>
                      <a href="" className="text-orange">Sil</a>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="text" className='form-control' />
                </td>
                <td>
                  <p className='text-secondary'>$50.00</p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="col-md-3 ms-auto border-3">
          <div>
            <div className='d-flex justify-content-between mb-5'>
              <h5>Toplam:</h5>
              <span className='d-inline-block'>$50.00</span>
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn-orange">Alışverişi Tamamla</button>
            </div>
          </div>
        </div>
        </div>
      </div>

    </section>
  )
}

export default Cart