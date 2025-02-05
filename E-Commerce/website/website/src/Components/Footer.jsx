import React from "react";
import Header from './Header';
function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* About Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-gray-400">
                            We are committed to providing the best online shopping experience. Discover a wide range of products and enjoy seamless shopping.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="hover:text-blue-400">Home</a>
                            </li>
                            <li>
                                <a href="/shop" className="hover:text-blue-400">Shop</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-blue-400">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-blue-400">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/faq" className="hover:text-blue-400">FAQ</a>
                            </li>
                            <li>
                                <a href="/returns" className="hover:text-blue-400">Returns</a>
                            </li>
                            <li>
                                <a href="/shipping" className="hover:text-blue-400">Shipping</a>
                            </li>
                            <li>
                                <a href="/support" className="hover:text-blue-400">Support</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Phone: +123 456 7890</li>
                            <li>Email: support@example.com</li>
                            <li>Address: 123 Market Street, City, Country</li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="mt-10 text-center">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="hover:text-blue-400">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
