import React, { useEffect, useState } from "react";
import { 
  Menu, 
  X, 
  ShoppingBag, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram
} from "lucide-react";

// --- Internal Components (Replacing missing files for preview) ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">NISHAD AGRO</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium">About</a>
            <a href="#product" className="text-gray-700 hover:text-orange-600 font-medium">Products</a>
            <a href="#review" className="text-gray-700 hover:text-orange-600 font-medium">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          <a href="#" className="block text-gray-700 font-medium">Home</a>
          <a href="#about" className="block text-gray-700 font-medium">About</a>
          <a href="#product" className="block text-gray-700 font-medium">Products</a>
          <a href="#contact" className="block text-gray-700 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center pt-20 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Sera Agro <span className="text-orange-600">Product</span> Ekhon Apnar Hat-e
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-lg">
          Amader khamarer toiri pure ebong organic agro products diye apnar jibonke korun aro sustho.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition shadow-lg">
            Ekhon-i Kinun
          </button>
          <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 hover:text-white transition">
            Aro Janun
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 relative">
        <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-orange-100 rounded-full absolute -top-10 -right-10 blur-3xl opacity-50"></div>
        <img 
          src="https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=2069&auto=format&fit=crop" 
          alt="Agro Product" 
          className="rounded-3xl shadow-2xl relative z-10 object-cover w-full h-[400px]"
        />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Amader Samporke</h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop" 
            alt="Farm" 
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-800">KenNishad Agro Sera?</h3>
          <p className="text-lg text-gray-600">
            Nishad Agro ekoy sathe projukti ebong prokritir somonnoy ghotiye utpadon korche sera agro ponno. Amader mullokkho holo kretader kache bishuddho ebong bish-mukto khaddo pouchaya dewa.
          </p>
          <ul className="space-y-4">
            {[ "100% Organic Products", "Khamar theke sorasori", "Fast Delivery Service", "Sera Bazar Mullo" ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500" />
                <span className="font-medium text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Product = () => {
  const items = [
    { name: "Deshi Ghee", price: "৳১২০০", img: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=400" },
    { name: "Pure Honey", price: "৳৮০০", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400" },
    { name: "Organic Rice", price: "৳৯৫", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400" },
    { name: "Fresh Vegetables", price: "৳৫০", img: "https://images.unsplash.com/photo-1566385278319-610d4445cf4b?auto=format&fit=crop&q=80&w=400" },
  ];
  return (
    <section id="product" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Amader Products</h2>
            <p className="text-gray-600 mt-2">Sera guni-man somponno ponno</p>
          </div>
          <button className="text-orange-600 font-bold flex items-center gap-1">
            See All <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-56 object-cover group-hover:scale-110 transition duration-500" />
                <button className="absolute bottom-4 right-4 bg-orange-600 text-white p-3 rounded-full shadow-lg">
                  <ShoppingBag size={20} />
                </button>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
                <p className="text-orange-600 font-bold mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Review = () => (
  <section id="review" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Kretader Ovimot</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="flex text-orange-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-gray-600 italic">"Amader organic honey-ta khub-i valo chhilo. Quality 100% bishuddo. Dhonnobad Nishad Agro-ke."</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-200 rounded-full"></div>
              <div>
                <p className="font-bold text-gray-800">Ariful Islam</p>
                <p className="text-sm text-gray-500">Dhaka</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-8">Amader Sathe Jogajog Korun</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gray-800 rounded-2xl"><Phone className="text-orange-500" /></div>
              <div>
                <p className="text-gray-400 text-sm">Call Us</p>
                <p className="text-lg font-bold">+880 1700 000000</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gray-800 rounded-2xl"><Mail className="text-orange-500" /></div>
              <div>
                <p className="text-gray-400 text-sm">Email Us</p>
                <p className="text-lg font-bold">info@nishadagro.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gray-800 rounded-2xl"><MapPin className="text-orange-500" /></div>
              <div>
                <p className="text-gray-400 text-sm">Address</p>
                <p className="text-lg font-bold">Farmgate, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <form className="bg-white p-10 rounded-3xl space-y-4">
          <input type="text" placeholder="Name" className="w-full p-4 rounded-xl border-gray-200 border text-gray-900 focus:ring-2 focus:ring-orange-600 outline-none" />
          <input type="email" placeholder="Email" className="w-full p-4 rounded-xl border-gray-200 border text-gray-900 focus:ring-2 focus:ring-orange-600 outline-none" />
          <textarea placeholder="Message" rows="4" className="w-full p-4 rounded-xl border-gray-200 border text-gray-900 focus:ring-2 focus:ring-orange-600 outline-none"></textarea>
          <button className="w-full bg-orange-600 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition">Message Pathan</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="text-2xl font-bold text-white">NISHAD AGRO</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">FAQ</a>
        </div>
        <div className="flex gap-4">
          <div className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer transition"><Facebook size={20} /></div>
          <div className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer transition"><Twitter size={20} /></div>
          <div className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer transition"><Instagram size={20} /></div>
        </div>
      </div>
      <p className="text-center mt-12 text-sm border-t border-gray-900 pt-8">
        &copy; {new Date().getFullYear()} Nishad Agro. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- Main App Component ---

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Note: Since AOS might not be available in this restricted environment,
    // we use a simple timeout to simulate loading and bypass AOS errors.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="mt-4 text-xl font-bold text-orange-600 animate-pulse">Nishad Agro Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-gray-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Product />
        <Review />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
