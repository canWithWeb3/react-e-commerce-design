import React from 'react'
import { Link } from 'react-router-dom'

const AdminProducts = () => {
  return (
    <section id="admin-products" className='container'>
      
      <div className="card my-5">
        <div className="card-body ms-auto">
          <Link to="/admin/urunler/urun-ekle" className="btn btn-primary"><i className="fas fa-plus me-2"></i> Ürün Ekle</Link>
        </div>
      </div>

      <table className="table table-striped table-bordered table-sm table-hover mb-0">
        <thead>
          <tr>
            <th>Resim</th>
            <th>Adı</th>
            <th>Açıklama</th>
            <th>Fiyat</th>
            <th>Kategoriler</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

    </section>
  )
}

export default AdminProducts