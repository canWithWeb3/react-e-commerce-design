import React from 'react'

const AddProduct = () => {
  return (
    <section id="add-product" className='container'>
      
      <div className="card my-5">
        <div className="card-header">Ürün Ekle</div>
        <div className="card-body">
          <form>
            <div className="row">
              
              <div className="col-md-7">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Ürün Adı:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Ürün Resmi:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Ürün Açıklama:</label>
                  <textarea type="text" className="form-control" rows="3"></textarea>
                </div>
                <div className="mb-3 w-50">
                  <label htmlFor="name" className="form-label">Ürün Fiyat:</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-md-3 ms-auto mb-5">
                
                <div className="card">
                  <div className="card-header">Kategoriler</div>
                  <div className="card-body">

                  </div>
                </div>

              </div>

            </div>

            <div className="d-flex justify-content-md-start justify-content-end">
              <button className="btn-orange">Ürün Ekle</button>
            </div>
          </form>
        </div>
      </div>

    </section>
  )
}

export default AddProduct