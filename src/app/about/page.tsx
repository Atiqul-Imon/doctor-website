import Image from 'next/image';
import { 
  HeartIcon, 
  StarIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const credentials = [
    'Board Certified in Family Medicine',
    'Fellow of the American Academy of Family Physicians',
    'MD from Johns Hopkins University School of Medicine',
    'Residency at Mayo Clinic',
    '15+ Years of Clinical Experience',
    'Continuing Medical Education in Latest Treatments'
  ];

  const achievements = [
    {
      icon: StarIcon,
      title: 'Patient Satisfaction',
      value: '98%',
      description: 'Consistently high patient satisfaction ratings'
    },
    {
      icon: UserGroupIcon,
      title: 'Patients Treated',
      value: '5,000+',
      description: 'Successfully treated thousands of patients'
    },
    {
      icon: ClockIcon,
      title: 'Years Experience',
      value: '15+',
      description: 'Extensive experience in family medicine'
    },
    {
      icon: HeartIcon,
      title: 'Community Impact',
      value: '100%',
      description: 'Dedicated to improving community health'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative hero-bg hero-section pb-0 overflow-hidden min-h-screen lg:min-h-[90vh] flex items-end">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 mt-4 sm:mt-0">
              <div className="hero-glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                  Meet Dr. Sarah Johnson
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-2xl drop-shadow-md">
                  A dedicated family medicine physician with over 15 years of experience 
                  providing compassionate, comprehensive healthcare to patients of all ages.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <a
                  href="/appointment"
                  className="glass-hover inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all duration-300 group gentle-pulse text-xs sm:text-sm md:text-base"
                >
                  Schedule Consultation
                </a>
                <a
                  href="/contact"
                  className="glass-hover inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white/20 text-white font-semibold rounded-lg sm:rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 group text-xs sm:text-sm md:text-base"
                >
                  Contact Us
                </a>
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
                  width={400}
                  height={600}
                  className="w-full h-full object-cover object-center sm:object-bottom rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Story */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    My journey in medicine began with a simple belief: everyone deserves access to 
                    compassionate, high-quality healthcare. After completing my medical degree at 
                    Johns Hopkins University and residency at Mayo Clinic, I dedicated my career 
                    to family medicine.
                  </p>
                  <p>
                    Over the past 15 years, I&apos;ve had the privilege of caring for thousands of 
                    patients, from newborns to seniors. Each patient has taught me something 
                    valuable about the art and science of medicine, and I continue to learn 
                    every day.
                  </p>
                  <p>
                    My approach to healthcare is holistic and patient-centered. I believe in 
                    building lasting relationships with my patients and their families, taking 
                    the time to understand not just their medical needs, but their personal 
                    goals and concerns.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">My Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">
                  &ldquo;I believe that the best healthcare happens when patients and doctors work 
                  together as partners. My goal is to empower you with the knowledge and tools 
                  you need to make informed decisions about your health, while providing the 
                  expert medical care you deserve.&rdquo;
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Credentials & Education</h2>
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className="bg-sky-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900">Preventive Care</div>
                    <div className="text-sm text-gray-600">Annual checkups & screenings</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900">Chronic Disease</div>
                    <div className="text-sm text-gray-600">Diabetes, hypertension</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900">Pediatric Care</div>
                    <div className="text-sm text-gray-600">Children&apos;s health</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900">Geriatric Care</div>
                    <div className="text-sm text-gray-600">Senior health management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and accomplishments that reflect my commitment to excellence in patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-sky-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Johnson and experience personalized, 
            compassionate healthcare that puts you first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-sky-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
