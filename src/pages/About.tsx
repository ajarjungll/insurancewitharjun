
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Shield, Clock, Heart, HandHeart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen relative">
      {/* Vancouver Downtown Background */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1549890762-0a3f8933bc76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Insurance With Arjun</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted insurance partner since 2022, providing comprehensive coverage solutions 
              with personalized service and unmatched expertise.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Professional Photo with 3D Effect */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src="/lovable-uploads/arjun-professional.jpg" 
                  alt="Arjun Singh Gill - Founder" 
                  className="rounded-3xl shadow-2xl w-full max-w-sm object-cover card-3d hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
                />
              </div>
              
              {/* Our Story Text */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2022 by Arjun Singh Gill, our agency began with a simple mission: 
                  to provide honest, reliable insurance services to our community. What started 
                  as a small local office has grown into a trusted insurance agency serving 
                  hundreds of families and businesses.
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
              
              {/* Mission & Vision */}
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

        {/* Why Choose Insurance With Arjun Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Insurance With Arjun?</h2>
              <p className="text-xl text-gray-600">Experience the difference of personalized insurance service</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/arjun-profile.jpg" 
                  alt="Arjun Singh Gill - Insurance Professional" 
                  className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
              
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Shield className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
                      <p className="text-gray-600">
                        With years of experience and deep industry knowledge, we help you navigate 
                        the complex world of insurance with confidence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Heart className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Service</h3>
                      <p className="text-gray-600">
                        We take the time to understand your unique needs and create customized 
                        insurance solutions that truly protect what matters most to you.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Client-First Approach</h3>
                      <p className="text-gray-600">
                        Your satisfaction is our priority. We're always available to answer questions, 
                        provide support, and ensure you have the coverage you need.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Reputation</h3>
                      <p className="text-gray-600">
                        Our commitment to honesty and integrity has earned us the trust of 
                        hundreds of satisfied clients who recommend us to their friends and family.
                      </p>
                    </div>
                  </div>
                </div>
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
                <h3 className="text-4xl font-bold mb-2">3+</h3>
                <p className="text-blue-100">Years of Experience</p>
              </div>
              <div>
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">500+</h3>
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
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Grewal</h3>
                <p className="text-blue-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 11+ years in the insurance industry, Deep founded the company 
                  with a vision to provide honest, reliable insurance services.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                  <img 
                    src="/lovable-uploads/55ab474a-5f3a-4ae3-a14e-6de458f76ad6.png" 
                    alt="Arjun Singh Gill" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Arjun Singh Gill</h3>
                <p className="text-blue-600 mb-4">Founder & Senior Insurance Advisor</p>
                <p className="text-gray-600">
                  Arjun founded Insurance With Arjun in 2022 and specializes in personal lines insurance, 
                  helping families protect their assets for over 3+ years.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;
