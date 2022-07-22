import React from 'react'
import { Link } from 'react-router-dom'

const AdminCategories = () => {
  return (
    <section id="admin-categories" className='container'>

      <div className="card my-5">
        <div className="card-body ms-auto">
          <Link to="/admin/kategoriler/kategori-ekle" className='btn btn-primary'><i className="fas fa-plus me-2"></i> Kategori Ekle</Link>
        </div>
      </div>

      <table className="table table-striped table-bordered table hover table-sm mb-0">
        <thead>
          <tr>
            <th>Adı</th>
            <th></th>
          </tr>
        </thead>
      </table>

    </section>
  )
}

export default AdminCategories