
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { Heart, Shield, HeartPulse, Plane, Phone, Star, CheckCircle, PiggyBank, TrendingUp, Home, GraduationCap, Truck, DollarSign, Users, Smile } from 'lucide-react';

const Index = () => {
  const insuranceTypes = [{
    icon: <Heart className="w-12 h-12 text-blue-600" />,
    title: "Life Insurance",
    description: "Secure your family's financial future with comprehensive life insurance coverage.",
    features: ["Term Life Insurance", "Whole Life Coverage", "Accidental Death Benefits", "Family Protection"]
  }, {
    icon: <HeartPulse className="w-12 h-12 text-blue-600" />,
    title: "Critical Illness Insurance", 
    description: "Financial protection when you're diagnosed with a serious illness, providing peace of mind during challenging times.",
    features: ["Cancer Coverage", "Heart Attack Protection", "Stroke Benefits", "Kidney Failure Coverage"]
  }, {
    icon: <Plane className="w-12 h-12 text-blue-600" />,
    title: "Super Visa Insurance",
    description: "Specialized insurance coverage for super visa applicants and their extended stays in Canada.",
    features: ["Medical Coverage", "Emergency Care", "Hospitalization", "Prescription Drugs"]
  }, {
    icon: <Truck className="w-12 h-12 text-blue-600" />,
    title: "Travel Insurance for Truckers",
    description: "Specialized travel insurance designed for professional truck drivers and long-haul transportation.",
    features: ["Cross-Border Coverage", "Commercial Vehicle Protection", "Emergency Medical", "Trip Interruption"]
  }, {
    icon: <DollarSign className="w-12 h-12 text-blue-600" />,
    title: "Loss of Income Insurance",
    description: "Protect your earning capacity with coverage that replaces lost income during unexpected events.",
    features: ["Income Replacement", "Business Interruption", "Partial Disability", "Return to Work Benefits"]
  }, {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Disability Insurance",
    description: "Financial protection when illness or injury prevents you from working and earning income.",
    features: ["Short-Term Disability", "Long-Term Disability", "Partial Benefits", "Rehabilitation Support"]
  }, {
    icon: <Smile className="w-12 h-12 text-blue-600" />,
    title: "Dental Insurance",
    description: "Comprehensive dental coverage for routine care, major procedures, and emergency treatments.",
    features: ["Routine Cleanings", "Major Procedures", "Emergency Care", "Orthodontic Coverage"]
  }, {
    icon: <HeartPulse className="w-12 h-12 text-blue-600" />,
    title: "Health Insurance",
    description: "Complete health coverage for medical expenses, prescription drugs, and wellness programs.",
    features: ["Medical Coverage", "Prescription Drugs", "Hospital Benefits", "Wellness Programs"]
  }];

  const investmentTypes = [{
    icon: <PiggyBank className="w-12 h-12 text-green-600" />,
    title: "RRSP",
    description: "Registered Retirement Savings Plan to help you save for retirement with tax advantages.",
    features: ["Tax Deductible Contributions", "Tax-Deferred Growth", "Retirement Income", "Spousal RRSP Options"]
  }, {
    icon: <Home className="w-12 h-12 text-green-600" />,
    title: "FHSA",
    description: "First Home Savings Account combines the best features of RRSP and TFSA for first-time homebuyers.",
    features: ["Tax Deductible Contributions", "Tax-Free Withdrawals", "Up to $40,000 Lifetime", "Qualifying Home Purchase"]
  }, {
    icon: <GraduationCap className="w-12 h-12 text-green-600" />,
    title: "RESP",
    description: "Registered Education Savings Plan to help save for your child's post-secondary education.",
    features: ["Government Grants", "Tax-Deferred Growth", "Education Assistance Payments", "Up to $50,000 Lifetime"]
  }, {
    icon: <TrendingUp className="w-12 h-12 text-green-600" />,
    title: "TFSA",
    description: "Tax-Free Savings Account for flexible savings with tax-free growth and withdrawals.",
    features: ["Tax-Free Growth", "Flexible Withdrawals", "Annual Contribution Room", "Multiple Investment Options"]
  }];

  const testimonials = [{
    name: "Simranpreet Kaur",
    rating: 5,
    text: "Arjun Singh Gill helped me get the perfect life insurance policy for my family. His knowledge and dedication gave me complete peace of mind knowing my loved ones are protected."
  }, {
    name: "Harpreet Singh",
    rating: 5,
    text: "Getting super visa insurance for my parents was so easy with Arjun Singh Gill. He explained everything clearly and got them excellent coverage at a great price."
  }, {
    name: "Jasbir Kaur",
    rating: 5,
    text: "When I needed life insurance, Arjun Singh Gill made the whole process simple and stress-free. Professional service and competitive rates - highly recommend!"
  }, {
    name: "Gurdeep Singh",
    rating: 5,
    text: "Arjun helped my parents get super visa insurance quickly and at an affordable rate. The entire process was smooth and he was always available to answer our questions."
  }, {
    name: "Manpreet Kaur",
    rating: 5,
    text: "I saved so much on taxes with the FHSA account Arjun set up for me! As a first-time homebuyer, this was exactly what I needed. Excellent service and great advice."
  }, {
    name: "Rajdeep Singh",
    rating: 5,
    text: "Arjun Singh Gill helped me understand all the tax benefits of FHSA for buying my first home. The tax savings were incredible and the process was so easy. Highly recommended!"
  }];

  return <div className="min-h-screen relative">
      {/* Toronto Downtown Background */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        
        {/* Insurance Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Insurance Solutions</h2>
              <p className="text-xl text-gray-600">Comprehensive coverage options tailored to your needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {insuranceTypes.map((type, index) => <div key={index} className="bg-white rounded-xl p-6 card-3d hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  <div className="text-center mb-4">
                    <div className="card-3d inline-block p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 mb-3">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>)}
                  </ul>
                  <Link to="/insurance-types" className="block mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 btn-3d shadow-lg">
                    Learn More
                  </Link>
                </div>)}
            </div>
          </div>
        </section>

        {/* Investment Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Investment Solutions</h2>
              <p className="text-xl text-gray-600">Build your wealth with tax-advantaged investment accounts</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investmentTypes.map((type, index) => <div key={index} className="bg-white rounded-xl p-6 card-3d hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                  <div className="text-center mb-4">
                    <div className="card-3d inline-block p-3 rounded-xl bg-gradient-to-br from-green-50 to-green-100 mb-3">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>)}
                  </ul>
                  <Link to="/investment-types" className="block mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 btn-3d shadow-lg">
                    Learn More
                  </Link>
                </div>)}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Insurance With Arjun?</h2>
              <p className="text-xl text-gray-600">Experience the difference of personalized insurance service</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Professional Photo */}
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/arjun-profile.jpg" 
                  alt="Arjun Singh Gill - Insurance Professional" 
                  className="rounded-3xl shadow-2xl w-full max-w-sm object-cover card-3d hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
                />
              </div>
              
              {/* Benefits */}
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Trusted Experience</h3>
                      <p className="text-gray-600">Over 3+ years of experience in the insurance industry with a proven track record.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
                      <p className="text-gray-600">Direct access to your agent with personalized service and quick response times.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Star className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
                      <p className="text-gray-600">We work with multiple carriers to find you the best coverage at the most competitive rates.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quote Form */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl card-3d hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote Today</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm" />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm">
                    <option value="">Select Insurance Type</option>
                    <option value="life">Life Insurance</option>
                    <option value="super-visa">Super Visa Insurance</option>
                    <option value="critical-illness">Critical Illness Insurance</option>
                    <option value="student">Student Insurance</option>
                    <option value="trucker-travel">Travel Insurance for Truckers</option>
                    <option value="loss-income">Loss of Income Insurance</option>
                    <option value="disability">Disability Insurance</option>
                    <option value="dental">Dental Insurance</option>
                    <option value="health">Health Insurance</option>
                  </select>
                  <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 btn-3d shadow-lg">
                    Get Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Don't just take our word for it</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 card-3d hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Affiliated Companies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Affiliated Companies</h2>
              <p className="text-xl text-gray-600">We are proud to work with Canada's leading insurance providers</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {[
                { src: "/partner-logos/sun-life.png", alt: "Sun Life Financial" },
                { src: "/partner-logos/desjardins.png", alt: "Desjardins Insurance" },
                { src: "/partner-logos/rbc-insurance.png", alt: "RBC Insurance" },
                { src: "/partner-logos/ia-financial.png", alt: "iA Financial Group" },
                { src: "/partner-logos/manulife.png", alt: "Manulife" },
                { src: "/partner-logos/destination-canada.png", alt: "Destination Canada" },
                { src: "/partner-logos/trustone-health.png", alt: "TruStone Health" },
                { src: "/partner-logos/gms.jpg", alt: "GMS Insurance" },
                { src: "/partner-logos/rimi.png", alt: "RIMI" },
                { src: "/partner-logos/insure-canada.png", alt: "Insure Canada" },
              ].map((partner, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 flex items-center justify-center h-32 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <img 
                    src={partner.src} 
                    alt={partner.alt}
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Proudly Partnered With</h2>
              <p className="text-xl text-blue-100">Backed by Manitoba's trusted insurance leader</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 card-3d-super">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Logo */}
                  <div className="flex justify-center">
                    <div className="bg-white rounded-2xl p-8 card-3d-super">
                      <img 
                        src="/lovable-uploads/sahara-logo.jpg" 
                        alt="Sahara Insurance Group" 
                        className="w-full max-w-xs mx-auto object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-4">Sahara Insurance Group</h3>
                    <p className="text-blue-100 mb-6">
                      Founded by <span className="font-semibold text-white">Kamaldeep Grewal</span> in 2008, 
                      Sahara Insurance Group serves as our Managing General Agent (MGA), providing comprehensive 
                      insurance services throughout Manitoba.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                        <div className="font-bold text-2xl">2008</div>
                        <div className="text-sm text-blue-200">Established</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                        <div className="font-bold text-2xl">MGA</div>
                        <div className="text-sm text-blue-200">Partner Status</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                        <div className="font-bold text-2xl">MB</div>
                        <div className="text-sm text-blue-200">Manitoba Wide</div>
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
    </div>;
};
export default Index;
