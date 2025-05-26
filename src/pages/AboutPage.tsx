
import React from 'react';
import { Shield, Users, Award, Clock, MapPin, Star, Instagram } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Customers' },
    { icon: Award, number: '5', label: 'Years Experience' },
    { icon: Star, number: '4.9', label: 'Average Rating' },
    { icon: Shield, number: '100%', label: 'Insured Fleet' },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Cars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Rich Rentals LA
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a premier exotic car rental company located in the heart of Los Angeles, 
            providing our clientele with access to the world's latest high-end and exotic vehicles.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We invite you all to experience the amazing joy, comfort, and thrill that these 
                magnificent machines bring us. Our commitment goes beyond just providing luxury 
                vehicles – we deliver unforgettable experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                From the moment you contact us to the time you return your vehicle, our team 
                ensures every detail exceeds your expectations. We believe that luxury is not 
                just about the destination, but the journey itself.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/40 rounded-lg p-4 border border-yellow-400/20">
                  <Clock className="w-8 h-8 text-yellow-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-400 text-sm">Round-the-clock assistance for your peace of mind</p>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-yellow-400/20">
                  <MapPin className="w-8 h-8 text-yellow-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Prime Location</h3>
                  <p className="text-gray-400 text-sm">Conveniently located in Studio City, CA</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Vehicle"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            <p className="text-xl text-gray-300">Numbers that speak for our excellence</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Follow Us on{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Instagram
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">Stay updated with our latest luxury vehicles and client experiences</p>
            <a 
              href="https://www.instagram.com/richrentalsla?igsh=NTc4MTIwNjQ2YQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow @richrentalsla</span>
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-400/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Experience Luxury Through Our Lens</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Visit our Instagram page to see our extensive collection of luxury vehicles in action, 
                client testimonials, and behind-the-scenes content from Rich Rentals LA.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-black/40 rounded-lg p-4 border border-yellow-400/10">
                  <div className="text-yellow-400 font-bold text-xl mb-2">Daily Posts</div>
                  <div className="text-gray-400 text-sm">Latest vehicle arrivals and features</div>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-yellow-400/10">
                  <div className="text-yellow-400 font-bold text-xl mb-2">Client Stories</div>
                  <div className="text-gray-400 text-sm">Real experiences from satisfied customers</div>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-yellow-400/10">
                  <div className="text-yellow-400 font-bold text-xl mb-2">Exclusive Content</div>
                  <div className="text-gray-400 text-sm">Behind-the-scenes and special events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white">Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                We maintain the highest standards in vehicle quality, customer service, 
                and overall experience delivery.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white">Trust</h3>
              <p className="text-gray-400 leading-relaxed">
                Your safety and satisfaction are our top priorities. Every vehicle 
                is thoroughly inspected and fully insured.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white">Passion</h3>
              <p className="text-gray-400 leading-relaxed">
                We share your love for exceptional automobiles and strive to make 
                every rental an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
