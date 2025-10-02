import { StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Patient',
      content: 'Dr. Johnson has been my family doctor for over 5 years. Her compassionate care and attention to detail have helped us maintain excellent health. She truly cares about her patients.',
      rating: 5,
      image: 'SM'
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      content: 'The entire team at this practice is exceptional. From scheduling to follow-up care, everything is handled professionally. I highly recommend Dr. Johnson to anyone looking for quality healthcare.',
      rating: 5,
      image: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      content: 'Dr. Johnson took the time to explain my treatment options and made sure I understood everything. Her expertise and bedside manner are outstanding. I feel confident in her care.',
      rating: 5,
      image: 'ER'
    },
    {
      name: 'David Thompson',
      role: 'Patient',
      content: 'I\'ve been seeing Dr. Johnson for my diabetes management, and the results speak for themselves. My health has improved significantly under her care. She\'s simply the best.',
      rating: 5,
      image: 'DT'
    },
    {
      name: 'Lisa Anderson',
      role: 'Patient',
      content: 'The preventive care approach here is excellent. Dr. Johnson caught a potential health issue early during my routine checkup. I\'m grateful for her thoroughness and expertise.',
      rating: 5,
      image: 'LA'
    },
    {
      name: 'Robert Wilson',
      role: 'Patient',
      content: 'As a senior, I appreciate Dr. Johnson&apos;s patience and understanding. She takes the time to address all my concerns and provides comprehensive care that keeps me healthy and active.',
      rating: 5,
      image: 'RW'
    }
  ];

  return (
        <section className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50"></div>
          <div className="absolute top-10 right-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-sky-100/15 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
            <div className="text-center mb-16">
              <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  What Our Patients Say
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Don&apos;t just take our word for it. Here&apos;s what our patients have to say 
                  about their experience with our practice.
                </p>
              </div>
            </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 glass-hover"
            >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 text-center mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="glass-hover rounded-2xl p-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-slate-600">Patient Satisfaction</div>
              </div>
              <div className="glass-hover rounded-2xl p-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-slate-600">Happy Patients</div>
              </div>
              <div className="glass-hover rounded-2xl p-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="glass-hover rounded-2xl p-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-slate-600">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
