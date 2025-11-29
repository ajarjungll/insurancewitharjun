
import React from 'react';
import Header from '../components/Header';
import LogoBanner from '../components/LogoBanner';
import Footer from '../components/Footer';
import { Truck, Phone, ArrowLeft, CheckCircle, MapPin, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const TravelInsuranceTruckersDetails = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        <LogoBanner />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/insurance-types" className="inline-flex items-center text-orange-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Insurance Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-orange-50 mr-6">
                <Truck className="w-16 h-16 text-orange-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4">Travel Insurance for Truckers</h1>
                <p className="text-xl text-orange-100">Specialized Coverage for Professional Drivers</p>
              </div>
            </div>
            <p className="text-xl text-orange-100 max-w-4xl">
              Comprehensive travel insurance designed specifically for truck drivers and transportation professionals. 
              Stay protected on the road with coverage tailored to your unique needs.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Truckers Need Specialized Travel Insurance</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Professional truck drivers face unique risks and challenges on the road. Standard travel insurance 
                    often doesn't cover the specific needs of commercial drivers who spend extended periods away from home, 
                    cross international borders, and operate heavy commercial vehicles.
                  </p>
                  <p className="text-lg text-gray-600">
                    Our specialized trucker travel insurance provides comprehensive coverage for medical emergencies, 
                    vehicle breakdowns, cargo protection, and other risks specific to the transportation industry.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Coverage Areas</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-orange-600 mr-3" />
                        <h4 className="text-xl font-semibold">Medical Emergency</h4>
                      </div>
                      <p className="text-gray-600">Coverage for medical emergencies while on the road, including hospitalization and emergency medical evacuation.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Truck className="w-8 h-8 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">Vehicle Breakdown</h4>
                      </div>
                      <p className="text-gray-600">Emergency roadside assistance, towing services, and temporary accommodation while repairs are made.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <MapPin className="w-8 h-8 text-green-600 mr-3" />
                        <h4 className="text-xl font-semibold">Cross-Border Coverage</h4>
                      </div>
                      <p className="text-gray-600">Protection when traveling between Canada, USA, and Mexico, including customs and immigration assistance.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Clock className="w-8 h-8 text-purple-600 mr-3" />
                        <h4 className="text-xl font-semibold">Trip Delay Protection</h4>
                      </div>
                      <p className="text-gray-600">Compensation for delays caused by weather, mechanical breakdowns, or other covered events.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Covered</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Emergency medical expenses",
                      "Prescription medications",
                      "Dental emergencies",
                      "Emergency medical evacuation",
                      "Repatriation of remains",
                      "Trip interruption",
                      "Lost or stolen personal effects",
                      "Emergency accommodation",
                      "Roadside assistance",
                      "Towing and recovery",
                      "Cargo delay protection",
                      "Legal assistance"
                    ].map((coverage, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircle size={16} className="text-green-500 mr-3" />
                        <span className="text-gray-700">{coverage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-orange-50 p-8 rounded-xl card-3d-super sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Protected Today</h3>
                  <p className="text-gray-600 mb-6">
                    Don't let unexpected events derail your route. Get comprehensive travel insurance designed for truckers.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+14313382078" className="block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold btn-3d text-center">
                      <Phone size={18} className="inline mr-2" />
                      Call (431) 338-2078
                    </a>
                    <Link to="/quote" className="block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold btn-3d text-center">
                      Get Free Quote
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-orange-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Coverage Highlights</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Medical Coverage:</span>
                        <span className="font-semibold">Up to $5M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Trip Duration:</span>
                        <span className="font-semibold">Up to 365 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coverage Area:</span>
                        <span className="font-semibold">North America</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default TravelInsuranceTruckersDetails;
