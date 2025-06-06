import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa6';

function Footer() {
    return (
      <div className="bg-[#333030] text-white py-8">
         <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
            <li>📞 Phone:  0726955107 / 0799 564636</li>
             <li className="text-lg">📧 Email: <a href="mailto:contact@sneakerspa.com" className="text-blue-500 hover:underline">contact@sneakerspa.com</a></li>
            <li>🌐 Follow us on social media</li>
            <ul className='flex justify-around'>
            <li>
               <a href="https://www.facebook.com/YourPage" target="_blank" className="text-blue-600 hover:underline flex items-center space-x-2"> <FaFacebookF className="text-xl" /></a>
            </li>
             <li>
               <a href="https://www.instagram.com/sneakerspa254/" target="_blank" className="text-pink-600 hover:underline flex items-center space-x-2">
                 <FaInstagram className="text-xl" />
                                </a>
             </li>
             <li>
               <a href="https://www.tiktok.com/@sneakerspa254" target="_blank" className=" hover:underline flex items-center space-x-2">
                 <FaTiktok className="text-xl" />
              
               </a>
             </li>
             <li>
               <a href="https://x.com/YourUsername" target="_blank" className="text-blue-400 hover:underline flex items-center space-x-2">
                <FaTwitter className="text-xl" />
                             </a>
            </li>
            </ul>
            </ul>
            {/* {<ContactInfo />} */}
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3> 
            <ul className="space-y-2 flex flex-col">
              <Link href={'/'}>🏠 Home</Link>
              <Link href={'/services'}>🛠️ Services</Link>
              <Link href={'/booking'}> 📅 Book Now</Link>
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