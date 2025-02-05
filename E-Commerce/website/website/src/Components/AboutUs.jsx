import React from 'react';
import Header from './Header';
const AboutUs = () => {
    return (
        <>
        <Header/>
        <div className="bg-gray-100 text-gray-800">
            <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6">
                <div className="container mx-auto px-6 md:px-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-center">About Us</h1>
                </div>
            </header>

            <main className="container mx-auto px-6 md:px-12 py-12">
                {/* Introduction Section */}
                <section className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-gray-600 text-lg md:text-xl">We are a passionate team dedicated to delivering exceptional services and creating meaningful experiences for our clients.</p>
                </section>

                {/* Team Section */}
                <section className="mb-12">
                    <h3 className="text-xl md:text-3xl font-semibold mb-6 text-center">Meet Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member */}
                        {[
                            { name: "John Doe", role: "CEO & Founder", img: "https://via.placeholder.com/150" },
                            { name: "Jane Smith", role: "Marketing Head", img: "https://via.placeholder.com/150" },
                            { name: "Alice Johnson", role: "Lead Designer", img: "https://via.placeholder.com/150" },
                            { name: "Mike Brown", role: "Developer", img: "https://via.placeholder.com/150" }
                        ].map((member, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                                <h4 className="text-lg font-semibold">{member.name}</h4>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values Section */}
                <section className="text-center bg-gradient-to-r from-green-500 to-teal-500 text-white py-12 rounded-lg">
                    <h3 className="text-2xl md:text-4xl font-semibold mb-4">Our Values</h3>
                    <p className="text-lg md:text-xl mb-6">Integrity, Innovation, and Customer Success.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Integrity", description: "We uphold the highest standards of integrity in all our actions." },
                            { title: "Innovation", description: "We innovate to provide the best solutions for our clients." },
                            { title: "Customer Success", description: "We strive to exceed our customers' expectations every time." }
                        ].map((value, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-md text-gray-800">
                                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="text-center mt-12">
                    <h3 className="text-xl md:text-3xl font-semibold mb-4">Join Us on Our Journey</h3>
                    <p className="text-gray-600 text-lg mb-6">Be a part of our story as we continue to grow and make an impact.</p>
                    <a href="#" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">Contact Us</a>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
        </>
    );
};

export default AboutUs;
