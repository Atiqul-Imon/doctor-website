import { 
  CheckCircleIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  HeartIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Board-Certified Expertise',
      description: 'Dr. Johnson is board-certified in Family Medicine with over 15 years of experience in comprehensive healthcare.'
    },
    {
      icon: HeartIcon,
      title: 'Patient-Centered Care',
      description: 'We prioritize your comfort and well-being, taking time to listen and understand your unique health needs.'
    },
    {
      icon: ClockIcon,
      title: 'Convenient Scheduling',
      description: 'Flexible appointment times including same-day visits and extended hours to fit your busy schedule.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Comprehensive Services',
      description: 'From preventive care to chronic disease management, we provide all your healthcare needs under one roof.'
    },
    {
      icon: UserGroupIcon,
      title: 'Family-Focused Approach',
      description: 'We care for patients of all ages, making it convenient for your entire family to receive care in one place.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Practice?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We&apos;re committed to providing exceptional healthcare that puts you and your family first. 
                Here&apos;s what sets us apart from other medical practices.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-sky-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="/about"
                className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors"
              >
                Learn More About Our Practice
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-8">
              <div className="space-y-6">
                {/* Doctor Image Placeholder */}
                <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-sky-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Dr. SJ</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Dr. Sarah Johnson</h3>
                    <p className="text-sky-600">Family Medicine Specialist</p>
                  </div>
                </div>

                {/* Credentials */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Credentials & Experience</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-sm text-gray-600">Board Certified Family Medicine</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-sm text-gray-600">15+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-sm text-gray-600">Fellow of American Academy of Family Physicians</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-sm text-gray-600">Continuing Medical Education</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
