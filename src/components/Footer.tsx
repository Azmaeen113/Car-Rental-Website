import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                RICH RENTALS LA
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premier luxury car rental company located in the heart of Los Angeles.
              Experience the amazing joy, comfort, and thrill that these machines bring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Inventory', href: '/inventory' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">8549 Wilshire Blvd, Beverly Hills CA 90211</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="tel:+18184540977" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  (818) 454-0977
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@richrentalsla.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  info@richrentalsla.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500 font-medium">HOURS</p>
              <p className="text-sm text-gray-400">10AM - 7PM • 7 DAYS/WEEK</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/richrentalsla?igsh=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-black hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Follow us for the latest luxury car updates and exclusive offers.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Rich Rentals LA. All rights reserved. |
            <span className="text-yellow-400 ml-1">Luxury Redefined. Dreams Delivered.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
