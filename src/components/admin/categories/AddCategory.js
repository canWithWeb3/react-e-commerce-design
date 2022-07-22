import React from 'react'

const AddCategory = () => {
  return (
    <section id="add-category" className='container'>
      
      <div className="col-lg-5 col-md-8 col-12 mx-auto card my-5">
        <div className="card-header">Kategori Ekle</div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Adı:</label>
              <input type="text" className="form-control" />
            </div>

            <button className="btn-orange">Kategori Ekle</button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default AddCategory