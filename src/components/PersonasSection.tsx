import React from 'react';
import { ArrowRight, Home as HomeIcon, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PersonaCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  colorClass: string;
}

const personas: PersonaCard[] = [
  {
    icon: <HomeIcon className="w-6 h-6" />,
    title: 'Real Estate Investors',
    description: 'You juggle multiple properties, loans, and entities. We keep your books clean by property so you always know your true cash flow.',
    href: '/real-estate-investors',
    colorClass: 'bg-blue-50 text-blue-700 group-hover:bg-blue-100',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Therapists',
    description: 'You want to stay in session, not in spreadsheets. We organize your income and expenses so you know exactly what you’re taking home.',
    href: '/therapists-consultants',
    colorClass: 'bg-purple-50 text-purple-700 group-hover:bg-purple-100',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Consultants & Coaches',
    description: 'You manage retainers and project income. We track your revenue streams clearly so you know if you can hire help or cut back hours.',
    href: '/therapists-consultants',
    colorClass: 'bg-amber-50 text-amber-700 group-hover:bg-amber-100',
  },
];

export function PersonasSection() {
  return (
    <section id="personas" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-wide uppercase text-emerald-700 mb-3">
            Who We Help
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Specialized Support for Your Niche
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            We understand the specific challenges of your industry.
          </p>
        </div>
        
        {/* 3-card grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {personas.map((p, i) => (
            <Link 
              key={i} 
              to={p.href}
              className="group bg-stone-50 rounded-2xl border border-stone-200/60 p-8 flex flex-col hover:shadow-lg hover:border-emerald-200 transition-all duration-200"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${p.colorClass}`}>
                {p.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
                {p.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-stone-500 leading-relaxed mb-6 flex-1">{p.description}</p>
              
              {/* Link */}
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 group-hover:text-emerald-800 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
