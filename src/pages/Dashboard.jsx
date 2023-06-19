import React, { useRef, useEffect, useState } from 'react'
import { Chart, registerables, BarController, CategoryScale } from 'chart.js' // Menggunakan Chart dan registerables

Chart.register(...registerables)
Chart.register(BarController, CategoryScale)

function Dashboard () {
  const salesData = [
    { month: 'Jan', amount: 1500 },
    { month: 'Feb', amount: 2000 },
    { month: 'Mar', amount: 3000 },
    { month: 'Apr', amount: 2500 },
    { month: 'May', amount: 1800 },
    { month: 'Jun', amount: 2800 },
    { month: 'Jul', amount: 3500 },
    { month: 'Aug', amount: 4000 },
    { month: 'Sep', amount: 3200 },
    { month: 'Oct', amount: 2800 },
    { month: 'Nov', amount: 2200 },
    { month: 'Dec', amount: 3000 }
  ]

  const topProducts = [
    { name: 'Produk A', quantity: 100 },
    { name: 'Produk B', quantity: 85 },
    { name: 'Produk C', quantity: 70 },
    { name: 'Produk D', quantity: 60 },
    { name: 'Produk E', quantity: 55 }
  ]

  const dailyVisitors = [
    { day: 'Hari 1', visitors: 500 },
    { day: 'Hari 2', visitors: 700 },
    { day: 'Hari 3', visitors: 600 },
    { day: 'Hari 4', visitors: 900 },
    { day: 'Hari 5', visitors: 800 }
  ]

  const chartRef = useRef(null)

  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    console.log(localStorage.getItem('token'))

    if (localStorage.getItem('role') !== 'admin') {
      window.location.href = '/login'
    } else {
      setAdmin(true)
      const labels = salesData.map(data => data.month)
      const amounts = salesData.map(data => data.amount)

      // jika localstorage role == admin kembali ke login

      if (chartRef.current) {
      // eslint-disable-next-line no-new
        new Chart(chartRef.current, {
          type: 'bar',
          data: {
            labels,
            datasets: [
              {
                label: 'Penjualan Bulanan',
                data: amounts,
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
              }
            ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        })
      }
    }
  }, [salesData])

  const handleLogout = () => {
    localStorage.removeItem('role')
    window.location.href = '/login'
  }

  return (
    admin
      ? (
        <><div className="container mt-5">
            <div className="d-flex justify-content-between">
                <h1>Dashboard</h1>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
              <div className="row mt-4">
                  <div className="col-lg-4">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="card-title">Total Penjualan</h5>
                              <h1 className="card-text">$15,000</h1>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-8">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="card-title">Grafik Penjualan Bulanan</h5>
                              <canvas ref={chartRef}></canvas>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row mt-4">
                  <div className="col-md-6">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="card-title">Produk Terlaris</h5>
                              <ul className="list-group">
                                  {topProducts.map((product, index) => (
                                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                          {product.name}
                                          <span className="badge bg-primary">{product.quantity}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="card-title">Pengunjung Harian</h5>
                              <ul className="list-group">
                                  {dailyVisitors.map((visitor, index) => (
                                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                          {visitor.day}
                                          <span className="badge bg-primary">{visitor.visitors}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div></>
        )
      : null
  )
}

export default Dashboard
