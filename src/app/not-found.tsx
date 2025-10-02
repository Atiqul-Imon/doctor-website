import Link from 'next/link';
import { HomeIcon, PhoneIcon, UserIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen hero-bg flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main content card */}
        <div className="hero-glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white drop-shadow-2xl">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Error message */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
              Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-cyan-100 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
              We&apos;re sorry, but the page you&apos;re looking for seems to have wandered off. 
              Don&apos;t worry - our medical team is here to help you find your way back to health and wellness.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
            <Link
              href="/"
              className="glass-hover gentle-pulse inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Return Home
            </Link>
            
            <Link
              href="/appointment"
              className="glass-hover gentle-pulse inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl sm:rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Book Appointment
            </Link>
          </div>

          {/* Quick navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <Link
              href="/about"
              className="hero-glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group hover:scale-105 transition-all duration-300"
            >
              <UserIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 mx-auto mb-3 group-hover:text-cyan-200 transition-colors" />
              <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">About Us</h3>
            </Link>

            <Link
              href="/services"
              className="hero-glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group hover:scale-105 transition-all duration-300"
            >
              <DocumentTextIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 mx-auto mb-3 group-hover:text-cyan-200 transition-colors" />
              <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">Services</h3>
            </Link>

            <Link
              href="/blog"
              className="hero-glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group hover:scale-105 transition-all duration-300"
            >
              <DocumentTextIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 mx-auto mb-3 group-hover:text-cyan-200 transition-colors" />
              <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">Health Blog</h3>
            </Link>

            <Link
              href="/contact"
              className="hero-glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group hover:scale-105 transition-all duration-300"
            >
              <PhoneIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-300 mx-auto mb-3 group-hover:text-cyan-200 transition-colors" />
              <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-lg">Contact</h3>
            </Link>
          </div>

          {/* Emergency contact info */}
          <div className="mt-12 p-6 bg-red-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-red-400/30">
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg mb-2">
              Need Immediate Help?
            </h3>
            <p className="text-red-100 drop-shadow-sm mb-4">
              For medical emergencies, please call our emergency line or visit the nearest hospital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 mr-2" />
                Emergency: (123) 456-7890
              </a>
              <a
                href="tel:+1234567891"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
              >
                <PhoneIcon className="w-4 h-4 mr-2" />
                General: (123) 456-7891
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
