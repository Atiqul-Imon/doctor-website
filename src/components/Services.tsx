'use client';

import { useState, useEffect } from 'react';
import { 
  HeartIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  BeakerIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface Service {
  _id: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  duration: string;
  category: string;
  featured: boolean;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data.services || []);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading services...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50"></div>
          <div className="absolute top-20 left-4 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-40 sm:w-80 h-40 sm:h-80 bg-sky-100/15 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Our Medical Services
                </h2>
                <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                  We provide comprehensive healthcare services designed to meet the needs 
                  of you and your family at every stage of life.
                </p>
              </div>
            </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <div
                key={service._id}
                className="group glass-card rounded-2xl p-6 sm:p-8 glass-hover"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-500 mt-1">
                      <span className="font-medium text-blue-600">${service.price}</span>
                      <span>•</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {service.category}
                  </span>
                  {service.featured && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Ready to Take Control of Your Health?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Schedule your appointment today and start your journey towards better health 
                with our experienced medical team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/appointment"
                  className="glass-hover inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg gentle-pulse"
                >
                  Book Appointment
                </a>
                <a
                  href="/services"
                  className="glass-hover inline-flex items-center justify-center px-8 py-4 bg-white/80 text-blue-600 font-semibold rounded-xl border border-blue-200 hover:bg-white transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;