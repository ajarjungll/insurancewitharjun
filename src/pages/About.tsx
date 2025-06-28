
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Shield, Clock, Heart, HandHeart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Sharnjit Insurance Hut</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted insurance partner since 1995, providing comprehensive coverage solutions 
            with personalized service and unmatched expertise.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1995 by Sharnjit Singh, our agency began with a simple mission: 
                to provide honest, reliable insurance services to our community. What started 
                as a small local office has grown into a trusted insurance agency serving 
                thousands of families and businesses.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've built our reputation on trust, integrity, and exceptional 
                customer service. We believe that insurance isn't just about policies and premiums 
                – it's about protecting what matters most to you and your family.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to uphold the same values that founded our company: 
                treating every client like family and providing personalized service that 
                puts your needs first.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide comprehensive, affordable insurance solutions while delivering 
                exceptional customer service and building lasting relationships with our clients.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted insurance agency in our community, known for our 
                integrity, expertise, and commitment to protecting what matters most to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest ethical standards, 
                always being honest and transparent with our clients.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Heart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Care</h3>
              <p className="text-gray-600">
                We genuinely care about our clients' well-being and work 
                tirelessly to protect what matters most to them.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <HandHeart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service</h3>
              <p className="text-gray-600">
                We provide exceptional, personalized service that goes 
                above and beyond our clients' expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-blue-100">Years of Experience</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">5,000+</h3>
              <p className="text-blue-100">Satisfied Clients</p>
            </div>
            <div>
              <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">A+</h3>
              <p className="text-blue-100">BBB Rating</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p className="text-blue-100">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to serving you</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sharnjit Singh</h3>
              <p className="text-blue-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                With over 25 years in the insurance industry, Sharnjit founded the company 
                with a vision to provide honest, reliable insurance services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 mb-4">Senior Insurance Agent</p>
              <p className="text-gray-600">
                Sarah specializes in personal lines insurance and has been helping 
                families protect their assets for over 15 years.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-blue-600 mb-4">Commercial Insurance Specialist</p>
              <p className="text-gray-600">
                Michael focuses on business insurance solutions and risk management 
                for small to medium-sized businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
