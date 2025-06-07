'use client'

import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import { useState} from 'react';
import DatePicker from 'react-datepicker';
import { toast, ToastContainer } from 'react-toastify';


const sampleOrders = Array.from({ length: 42 }, (_, i) => ({
  id: `ORD${100 + i}`,
  name: `Customer ${i + 1}`,
  phone: `0700000${i}`,
  email: `customer${i}@example.com`,
  address: `Area ${i + 1}`,
  service: ['Standard', 'Premium', 'Specialized'][i % 3],
  quantity: (i % 5) + 1,
  dropOff: new Date(2025, 5, i + 1),
  request: 'None',
  status: i % 2 === 0 ? 'Pending' : 'Completed',
}));

export default function DashboardPage() {
  const [orders, setOrders] = useState(sampleOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const filtered = orders
    .filter((o) =>
      statusFilter === 'All' ? true : o.status === statusFilter
    )
    .filter(
      (o) =>
        o.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const markCompleted = (id: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: 'Completed' } : o))
    );
    toast.success(`${id} marked as Completed`);
  };

  return (
    <div className="flex ">
          
      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <ToastContainer />
        <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
          <h1 className="text-2xl font-bold">Orders</h1>
          <input
            type="text"
            placeholder="Search by name or ID..."
            className="p-2 border rounded-md w-full md:w-80"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </header>

        {/* Status Filter */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {['All', 'Pending', 'Completed'].map((status) => (
            <button
              key={status}
              onClick={() => {
                setStatusFilter(status);
                setCurrentPage(1);
              }}
              className={`px-4 py-1 rounded-full font-medium border ${
                statusFilter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <div className="overflow-auto rounded-md shadow bg-white">
          <table className="min-w-full table-auto text-sm">
            <thead className="sticky top-0 bg-gray-200">
              <tr>
                <th className="px-3 py-2 text-left">Order ID</th>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Phone</th>
                <th className="px-3 py-2 text-left">Email</th>
                <th className="px-3 py-2 text-left">Address</th>
                <th className="px-3 py-2 text-left">Service</th>
                <th className="px-3 py-2 text-left">Pairs</th>
                <th className="px-3 py-2 text-left">Drop-off</th>
                <th className="px-3 py-2 text-left">Requests</th>
                <th className="px-3 py-2 text-left">Status</th>
                <th className="px-3 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((o) => (
                <tr key={o.id} className="border-t">
                  <td className="px-3 py-2">{o.id}</td>
                  <td className="px-3 py-2">{o.name}</td>
                  <td className="px-3 py-2">{o.phone}</td>
                  <td className="px-3 py-2">{o.email}</td>
                  <td className="px-3 py-2">{o.address}</td>
                  <td className="px-3 py-2">{o.service}</td>
                  <td className="px-3 py-2">{o.quantity}</td>
                  <td className="px-3 py-2">
                    <DatePicker
                      selected={o.dropOff}
                      onChange={() => {}}
                      dateFormat="yyyy-MM-dd"
                      className="border px-1 py-1 rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">{o.request}</td>
                  <td className="px-3 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        o.status === 'Pending'
                          ? 'bg-yellow-200 text-yellow-700'
                          : 'bg-green-200 text-green-700'
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    {o.status === 'Pending' && (
                      <button
                        onClick={() => markCompleted(o.id)}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Mark Completed
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm">
            Showing {Math.min((currentPage - 1) * pageSize + 1, filtered.length)}–
            {Math.min(currentPage * pageSize, filtered.length)} of {filtered.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((p) =>
                  p * pageSize < filtered.length ? p + 1 : p
                )
              }
              disabled={currentPage * pageSize >= filtered.length}
              className="px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
