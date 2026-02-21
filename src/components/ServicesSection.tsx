import React from 'react';
import { ShieldCheck, Heart, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: ServiceCard[] = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Cleanup & Catch-Up',
    description: 'For when you’re behind, your books are a mess, and tax time is looming. We dive into your history to fix errors and reconcile accounts.',
    features: [
      'Historical categorization',
      'Bank & card reconciliation',
      'Fixing balance errors',
      'Tax-ready financials'
    ],
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Monthly QuickBooks Care',
    description: 'Hand off the monthly chore completely. We keep your QuickBooks Online perfectly up-to-date with monthly categorization and simple reports.',
    features: [
      'Monthly categorization',
      'Account reconciliation',
      'Monthly P&L & Balance Sheet',
      'Email support'
    ],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Premium Support',
    description: 'For growing portfolios or busy practices that need deeper insight. Get more frequent reporting and regular check-in calls.',
    features: [
      'Detailed KPI tracking',
      'Quarterly review calls',
      'Budgeting & forecasting',
      'Priority support'
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-wide uppercase text-emerald-700 mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            What We Do For Your QuickBooks
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Simple, transparent packages to get you back on track.
          </p>
        </div>
        
        {/* 3-card grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-stone-200/60 p-8 flex flex-col hover:shadow-lg hover:border-stone-300/60 transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 mb-5">
                {svc.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-stone-900 mb-2">{svc.title}</h3>
              
              {/* Description */}
              <p className="text-sm text-stone-500 leading-relaxed mb-6">{svc.description}</p>
              
              {/* Feature list */}
              <ul className="space-y-3 mb-8 flex-1">
                {svc.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-stone-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              {/* Card CTA */}
              <a 
                href="#book" 
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors mt-auto"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
