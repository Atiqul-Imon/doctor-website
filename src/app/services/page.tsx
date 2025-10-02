'use client';

import { useState, useEffect } from 'react';
import { 
  HeartIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  BeakerIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface Service {
  _id: string;
  name: string;
  description: string;
  icon: string;
  price: string;
  duration: string;
  category: string;
  featured: boolean;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // Static services as fallback
  const staticServices: Service[] = [
    {
      _id: 'static-1',
      name: 'Preventive Care',
      description: 'Comprehensive preventive healthcare to maintain your health and catch potential issues early.',
      icon: 'HeartIcon',
      price: 'Starting at $150',
      duration: '30-60 minutes',
      category: 'Preventive',
      featured: true
    },
    {
      _id: 'static-2',
      name: 'Family Medicine',
      description: 'Complete healthcare services for all family members, from infants to seniors.',
      icon: 'UserGroupIcon',
      price: 'Starting at $120',
      duration: '30-45 minutes',
      category: 'General',
      featured: true
    },
    {
      _id: 'static-3',
      name: 'Chronic Disease Management',
      description: 'Expert care for diabetes, hypertension, and other chronic conditions.',
      icon: 'ShieldCheckIcon',
      price: 'Starting at $180',
      duration: '45-60 minutes',
      category: 'Specialized',
      featured: false
    },
    {
      _id: 'static-4',
      name: 'Urgent Care',
      description: 'Same-day appointments for acute illnesses and minor injuries.',
      icon: 'ClockIcon',
      price: 'Starting at $100',
      duration: '15-30 minutes',
      category: 'Emergency',
      featured: false
    },
    {
      _id: 'static-5',
      name: 'Diagnostic Services',
      description: 'On-site laboratory tests and diagnostic procedures for accurate diagnosis.',
      icon: 'BeakerIcon',
      price: 'Starting at $80',
      duration: '20-40 minutes',
      category: 'Diagnostic',
      featured: false
    },
    {
      _id: 'static-6',
      name: 'Health Monitoring',
      description: 'Continuous monitoring and tracking of your health metrics and progress.',
      icon: 'ChartBarIcon',
      price: 'Starting at $90',
      duration: '20-30 minutes',
      category: 'Wellness',
      featured: false
    }
  ];

  useEffect(() => {
    fetchServices();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched services:', data.services);
        setServices(data.services || []);
      } else {
        console.error('Failed to fetch services:', response.status);
        // Fallback to static services if API fails
        setServices(staticServices);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      // Fallback to static services if API fails
      setServices(staticServices);
    } finally {
      setLoading(false);
    }
  };

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      'HeartIcon': HeartIcon,
      'UserGroupIcon': UserGroupIcon,
      'ShieldCheckIcon': ShieldCheckIcon,
      'ClockIcon': ClockIcon,
      'BeakerIcon': BeakerIcon,
      'ChartBarIcon': ChartBarIcon,
    };
    return iconMap[iconName] || HeartIcon;
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading services...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl float" style={{animationDelay: '2s'}}></div>
      
      {/* Hero Section */}
      <section className="relative hero-bg py-16 sm:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="hero-glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg mb-4 sm:mb-6">
                Our Medical Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-md mb-8 sm:mb-10">
                Comprehensive healthcare services designed to meet the needs of you and your family 
                at every stage of life. From preventive care to chronic disease management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a
                  href="/appointment"
                  className="glass-hover inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 group gentle-pulse text-sm sm:text-base"
                >
                  Schedule Appointment
                  <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="glass-hover inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/20 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 group text-sm sm:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our primary healthcare services are designed to provide comprehensive, 
              patient-centered care for all your medical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.length > 0 ? services.map((service, index) => {
              const IconComponent = getIconComponent(service.icon);
              return (
              <div
                key={service._id || index}
                className="glass-card rounded-2xl p-8 glass-hover"
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span className="font-medium text-sky-600">${service.price}</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                      {service.category}
                    </span>
                    <a
                      href="/appointment"
                      className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                    >
                      Book This Service
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              );
            }) : (
              <div className="col-span-full text-center py-12">
                <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
                  <p className="text-gray-500 mb-4">No services available at the moment.</p>
                  <p className="text-sm text-gray-400">Please try refreshing the page or contact us directly.</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
                  >
                    Refresh Page
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}