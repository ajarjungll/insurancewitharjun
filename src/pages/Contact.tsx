import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, MessageCircle, Users } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen relative">
      {/* Ottawa Downtown Background */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
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
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our experienced insurance professionals. We're here to help 
              you find the right coverage and answer all your questions.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-gray-50 rounded-xl card-3d">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                <a href="tel:+14313382078" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors click-to-call">
                  (431) 338-2078
                </a>
              </div>
              
              <div className="text-center p-8 bg-gray-50 rounded-xl card-3d">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-2">Send us your questions</p>
                <a href="mailto:insurancewitharjun@gmail.com" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  insurancewitharjun@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
              </div>
              
              <div className="text-center p-8 bg-gray-50 rounded-xl card-3d">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600 mb-2">Visit us in person</p>
                <p className="text-gray-800">
                  Unit-5, 360 Keewatin Street.<br />
                  Winnipeg, MB R2X2Y3.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Office Hours */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl p-8 card-3d">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option value="">How can we help you?</option>
                    <option value="quote">Get an Insurance Quote</option>
                    <option value="investment">Investment Consultation</option>
                    <option value="policy">Policy Questions</option>
                    <option value="payment">Payment Questions</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  
                  <textarea
                    placeholder="Tell us more about how we can help you..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors btn-3d"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Office Hours and Additional Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 card-3d">
                  <div className="flex items-center mb-6">
                    <Clock className="w-8 h-8 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold">10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold">10:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 card-3d">
                  <div className="flex items-center mb-6">
                    <Users className="w-8 h-8 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">Meet Our Team</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our experienced insurance professionals are licensed and ready to help you 
                    find the perfect coverage for your needs.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Licensed Insurance Agents</li>
                    <li>• Multi-lingual Support Available</li>
                    <li>• Average 15+ Years Experience</li>
                    <li>• Continuing Education Certified</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-8 card-3d">
                  <div className="flex items-center mb-6">
                    <MessageCircle className="w-8 h-8 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">Other Ways to Connect</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Text Us</h4>
                      <p className="text-gray-600">
                        Quick questions? Text us at 
                        <a href="tel:+14313382078" className="click-to-call ml-1">(431) 338-2078</a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Social Media</h4>
                      <p className="text-gray-600">Follow us for insurance tips and updates</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Video Consultations</h4>
                      <p className="text-gray-600">Schedule a virtual meeting for convenience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section with Google Map */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Find Our Office</h2>
            <div className="h-96 rounded-xl overflow-hidden card-3d">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.8765432109876!2d-97.22872668437499!3d49.91234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73c123456789%3A0x1234567890abcdef!2s360%20Keewatin%20St%2C%20Winnipeg%2C%20MB%20R2X%202Y3%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Insurance with Arjun Office Location"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>Unit-5, 360 Keewatin Street, Winnipeg, MB R2X2Y3</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Click on the map for directions</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl card-3d">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What are your response times?</h3>
                <p className="text-gray-600">We respond to all inquiries within 24 hours during business days.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl card-3d">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer free consultations?</h3>
                <p className="text-gray-600">Yes! We provide free insurance consultations to help you understand your coverage options and needs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl card-3d">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Can I get quotes online?</h3>
                <p className="text-gray-600">While we prefer personalized service, we can provide preliminary quotes via phone, email, or our online form.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl card-3d">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do you work with multiple insurance companies?</h3>
                <p className="text-gray-600">Absolutely! We work with over 20 insurance carriers to find you the best coverage at competitive rates.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
