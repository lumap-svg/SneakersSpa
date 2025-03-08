import React from 'react'

function Footer() {
    return (
      <div className="bg-[#333030] text-white py-8">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>📞 Phone: +2547000 000 001</li>
              <li>📧 Email: contact@sneakerspa.com</li>
              <li>🌐 Follow us on social media</li>
            </ul>
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>🏠 Home</li>
              <li>🛠️ Services</li>
              <li>📅 Book Now</li>
            </ul>
          </div>
  
          {/* Optional: Add another section (if needed) */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">We offer the best sneaker care services for you. Let us keep your shoes fresh and clean!</p>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm">© 2025 SneakersPA. All rights reserved.</p>
        </div>
      </div>
    );
  }
  

export default Footer