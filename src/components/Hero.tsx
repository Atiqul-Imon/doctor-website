import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative hero-bg hero-section pb-0 overflow-hidden min-h-screen lg:min-h-[90vh] flex items-end">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 mt-4 sm:mt-0">
                <div className="hero-glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                    Your Health is Our
                    <span className="text-cyan-300 block drop-shadow-lg">Priority</span>
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-2xl drop-shadow-md">
                    Dr. Sarah Johnson provides compassionate, comprehensive family medicine 
                    services to help you and your family achieve optimal health and wellness.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                  <Link
                    href="/appointment"
                    className="glass-hover inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all duration-300 group gentle-pulse text-xs sm:text-sm md:text-base"
                  >
                    Book Appointment
                    <ArrowRightIcon className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="glass-hover inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white/20 text-white font-semibold rounded-lg sm:rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 group text-xs sm:text-sm md:text-base">
                    <PlayIcon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                    Watch Video
                  </button>
                </div>

                {/* Doctor Information */}
                <div className="hero-glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                  <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold">Dr. SJ</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white drop-shadow-md truncate">Dr. Sarah Johnson</h3>
                      <p className="text-xs sm:text-sm md:text-base text-white font-medium drop-shadow-sm">Family Medicine Specialist</p>
                      <div className="mt-1 sm:mt-2 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-white drop-shadow-sm">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span>Available Now</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 pt-4 sm:pt-6 md:pt-8">
                  <div className="hero-glass-card rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 text-center">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">15+</div>
                    <div className="text-xs sm:text-sm text-white drop-shadow-md">Years Experience</div>
                  </div>
                  <div className="hero-glass-card rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 text-center">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">5000+</div>
                    <div className="text-xs sm:text-sm text-white drop-shadow-md">Happy Patients</div>
                  </div>
                  <div className="hero-glass-card rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 text-center">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">24/7</div>
                    <div className="text-xs sm:text-sm text-white drop-shadow-md">Emergency Care</div>
                  </div>
                </div>
          </div>

              {/* Right Content - Doctor Image */}
              <div className="relative w-full h-full flex items-end justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-0">
                <div className="relative w-full h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  {/* Professional Doctor Image - Clear and Bright */}
                  <Image
                    src="/hero/doctorwebsiteimage.webp"
                    alt="Dr. Sarah Johnson - Family Medicine Specialist"
                    fill
                    className="object-cover object-center sm:object-bottom rounded-xl sm:rounded-2xl"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
