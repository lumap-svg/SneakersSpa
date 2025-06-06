'use client'

import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';


// interface Order {
//   id: string;
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
//   serviceType: string;
//   quantity: number;
//   dropOffDate?: string;
//   specialRequests?: string;
//   status: string;
// }

// Sample Data (30 orders)
// const sampleOrders: Order[] = Array.from({ length: 30 }, (_, i) => ({
//   id: `ORD${i + 1}`,
//   name: `Customer ${i + 1}`,
//   phone: `07123456${String(i + 10).padStart(2, "0")}`,
//   email: `customer${i + 1}@example.com`,
//   address: `Address ${i + 1}`,
//   serviceType: i % 3 === 0 ? "Premium" : i % 3 === 1 ? "Standard" : "Specialized",
//   quantity: (i % 5) + 1,
//   dropOffDate: `2025-06-${String((i % 28) + 1).padStart(2, "0")}`,
//   specialRequests: i % 4 === 0 ? "Remove mud stains" : "",
//   status: i % 4 === 0 ? "Pending" : "Completed",
// }));

// export default function Dashboard() {
//   const [orders, setOrders] = useState<Order[]>(sampleOrders);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [notification, setNotification] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 10;

//   // Filter orders by searchTerm on id or name
//   const filteredOrders = orders
//     .filter(order =>
//       order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       order.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => b.id.localeCompare(a.id)); // Most recent first by ID desc

//   // Pagination slicing
//   const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
//   const paginatedOrders = filteredOrders.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Mark order completed handler
//   const markCompleted = (orderId: string) => {
//     setOrders(prevOrders =>
//       prevOrders.map(order =>
//         order.id === orderId ? { ...order, status: "Completed" } : order
//       )
//     );
//     setNotification(`Order ${orderId} marked as completed!`);
//     setTimeout(() => setNotification(null), 3000);
//   };

//   // Reset page when search term changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm]);

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search by Order ID or Name"
//         className="border border-gray-300 p-2 rounded-md w-full max-w-sm mb-4"
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />

//       {/* Notification */}
//       {notification && (
//         <div className="mb-4 p-3 bg-green-200 text-green-800 rounded-md">
//           {notification}
//         </div>
//       )}

//       {/* Orders Table */}
//       <div className="overflow-auto max-h-[600px] border rounded-md shadow-md">
//         <table className="w-full border-collapse table-auto text-left">
//           <thead className="sticky top-0 bg-gray-100 border-b border-gray-300">
//             <tr>
//               <th className="p-2 border-r">Order ID</th>
//               <th className="p-2 border-r">Name</th>
//               <th className="p-2 border-r">Phone</th>
//               <th className="p-2 border-r">Email</th>
//               <th className="p-2 border-r">Address</th>
//               <th className="p-2 border-r">Service Type</th>
//               <th className="p-2 border-r">Quantity</th>
//               <th className="p-2 border-r">Drop-off Date</th>
//               <th className="p-2 border-r">Special Requests</th>
//               <th className="p-2 border-r">Status</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedOrders.length === 0 && (
//               <tr>
//                 <td colSpan={11} className="p-4 text-center text-gray-500">
//                   No orders found.
//                 </td>
//               </tr>
//             )}

//             {paginatedOrders.map(order => (
//               <tr key={order.id} className="border-b text-yellow-300 hover:bg-gray-50">
//                 <td className="p-2 border-r">{order.id}</td>
//                 <td className="p-2 border-r">{order.name}</td>
//                 <td className="p-2 border-r">{order.phone}</td>
//                 <td className="p-2 border-r">{order.email}</td>
//                 <td className="p-2 border-r">{order.address}</td>
//                 <td className="p-2 border-r">{order.serviceType}</td>
//                 <td className="p-2 border-r">{order.quantity}</td>
//                 <td className="p-2 border-r">{order.dropOffDate || "-"}</td>
//                 <td className="p-2 border-r">{order.specialRequests || "-"}</td>
//                 <td className={`p-2 border-r font-semibold ${order.status === "Completed" ? "text-green-600" : "text-blue-600"}`}>
//                   {order.status}
//                 </td>
//                 <td className="p-2">
//                   {order.status !== "Completed" && (
//                     <button
//                       className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
//                       onClick={() => markCompleted(order.id)}
//                     >
//                       Mark Completed
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4 max-w-sm">
//         <button
//           className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage(prev => prev - 1)}
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage(prev => prev + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
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
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 text-white p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Sneakers Spa</h2>
        <ul className="space-y-4">
          <li className="text-blue-400">Dashboard</li>
          <li>Orders</li>
          <li>Customers</li>
          <li>Reports</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <ToastContainer />
        <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
          <h1 className="text-2xl font-bold">Order Dashboard</h1>
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
// Note: This code uses react-datepicker and react-toastify for date selection and notifications.