import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Heart, ShieldCheck, BarChart3, Mail, MessageCircle, FileText, Calendar, DollarSign, PieChart } from 'lucide-react';

const Copy = {
  hero: {
    headline: "Stop Drowning in Receipts. We Bring Calm to Your QuickBooks.",
    subheadline: "We provide judgment-free QuickBooks cleanup and monthly bookkeeping for small business owners who are tired of stressing over their numbers. Get clear, accurate reports without the jargon—so you can finally breathe easy.",
    cta: "Book Your Free QuickBooks Clarity Call"
  },
  pain: [
    "I’m drowning in receipts and I’m honestly embarrassed to let anyone see how bad it is.",
    "I keep putting off logging into QuickBooks because I’m afraid I’ll mess something up.",
    "I have no idea if I’m actually making a profit, and I’m scared to see the truth.",
    "Tax time is a nightmare every year—I just panic and hope I don't get audited.",
    "My accountant talks in circles and makes me feel dumb for not understanding my own business.",
    "I started this business to do what I love, not to fight with bookkeeping software all weekend."
  ],
  solution: {
    intro: "We are QuickBooks specialists who take the weight off your shoulders. We don’t just \"do the books\"—we turn your chaotic data into a calm, reliable system. You handle the business; we’ll handle the numbers (and we promise never to judge the mess).",
    items: [
      { pain: "My QuickBooks and bank never match.", fix: "We reconcile your accounts line-by-line and fix beginning balances so your numbers finally tell the truth." },
      { pain: "I have a shoebox of receipts I’m ignoring.", fix: "We categorize every single transaction for you, turning that pile of stress into organized data." },
      { pain: "I’m terrified of handing this over to my accountant.", fix: "We prepare clean, accurate monthly reports that your accountant will love, making tax season a breeze." },
      { pain: "I don't understand what these reports mean.", fix: "We walk you through your Profit & Loss and Balance Sheet in plain English, so you actually know where your money is going." },
      { pain: "I’m behind. Like, years behind.", fix: "We specialize in judgment-free catch-up work. We’ll go back, clean it up, and get you current without a lecture." }
    ]
  },
  services: [
    {
      title: "The \"Deep Breath\" Cleanup & Catch-Up",
      description: "For when you’re behind, overwhelmed, and need a fresh start. We dive into your messy QuickBooks history to categorize past transactions, fix errors, and reconcile accounts so you can stop looking over your shoulder.",
      features: [
        "Full historical transaction categorization",
        "Bank and credit card reconciliation (fixing those mismatches)",
        "Correction of setup errors and \"mystery\" balances",
        "Accurate beginning balance setup for the new year"
      ],
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Monthly QuickBooks Care",
      description: "For ongoing peace of mind and numbers you can trust. Hand off the monthly chore completely. We keep your QuickBooks Online perfectly up-to-date so you always know exactly how your business is performing.",
      features: [
        "Monthly categorization of all income and expenses",
        "Monthly bank and credit card reconciliation",
        "Monthly financial reports (Profit & Loss, Balance Sheet)",
        "Email support for your \"How do I code this?\" questions"
      ],
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Full-Service Admin Support",
      description: "For when you need help with the moving parts, too. Beyond just tracking the numbers, we help manage the cash flow tasks that eat up your week.",
      features: [
        "Everything in Monthly Care, PLUS:",
        "Bill pay management",
        "Invoicing clients and matching payments",
        "Payroll processing support"
      ],
      icon: <BarChart3 className="w-6 h-6" />
    }
  ],
  howItWorks: [
    {
      step: "Step 1: The \"No-Judgment\" Review",
      text: "We hop on a quick call to look at your current QuickBooks setup (or lack thereof). No shame, no lectures—just a look at what needs to be done."
    },
    {
      step: "Step 2: The Cleanup & Setup",
      text: "We get to work fixing the backlog. We organize the receipts, reconcile the accounts, and build a system that actually works for your specific business."
    },
    {
      step: "Step 3: Monthly Zen",
      text: "You get a simple monthly report in your inbox that makes sense. You stop worrying about tax time and start focusing on growing your business."
    }
  ],
  about: {
    headline: "Hi, we’re Zen Books.",
    text: "We are a husband-and-wife team dedicated to taking the stress out of small business finance. While we live in the beautiful Bequia (Caribbean), our roots—and our business base—are in the Scranton, PA area.\n\nShe is the QuickBooks wizard who loves turning chaotic numbers into perfect rows and columns. He handles the operations and makes sure every client feels heard and supported.\n\nWe started Zen Books because we saw too many business owners treating bookkeeping like a shameful secret. We’re here to change that with a calm, friendly approach that explains everything in plain English. No suits, no ties, just clear numbers."
  },
  faq: [
    { q: "My QuickBooks is a total disaster. Is it too far gone to fix?", a: "Honestly? Probably not. We’ve seen it all—years of missing data, mixed personal/business expenses, negative bank balances. We specialize in untangling the knots. It’s fixable, and we can fix it." },
    { q: "What if I’m embarrassed to show you my books?", a: "Please don’t be! We are a judgment-free zone. Doctors don't judge you for being sick, and we don't judge you for having messy books. We are here to help, not to grade you." },
    { q: "Do you work with my accountant at tax time?", a: "Yes! We don’t replace your CPA or tax filer; we make their life (and yours) infinitely easier. We provide the clean, organized financial reports they need to file your taxes accurately and on time." },
    { q: "Do I have to already be using QuickBooks?", a: "Not at all. If you’re currently using a spreadsheet (or a shoebox), we can set you up with QuickBooks Online from scratch and import your data correctly from day one." },
    { q: "How do we work together if I’m not in Scranton?", a: "We work 100% remotely using secure cloud technology. We can access your QuickBooks Online securely, and we communicate via email and Zoom. We serve clients in PA and beyond without ever needing to step into your office." }
  ]
};

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold tracking-tight text-emerald-900">Zen Books</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors">About</a>
              <a href="#faq" className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors">FAQ</a>
              <button className="bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors shadow-sm hover:shadow-md">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-stone-50 to-stone-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-tight"
          >
            {Copy.hero.headline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {Copy.hero.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              {Copy.hero.cta}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Why this feels so heavy</h2>
            <p className="text-stone-500">Do any of these sound familiar?</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {Copy.pain.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start p-6 rounded-2xl bg-stone-50 border border-stone-100"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-red-400"></div>
                </div>
                <p className="text-stone-700 italic">"{item}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What Zen Books does</h2>
            <p className="text-lg text-stone-400 leading-relaxed">{Copy.solution.intro}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Copy.solution.items.map((item, index) => (
              <div key={index} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-red-300 italic mb-4 text-sm">"{item.pain}"</p>
                <div className="flex items-center text-emerald-400 mb-2">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  <span className="text-xs font-bold uppercase tracking-wider">The Fix</span>
                </div>
                <p className="text-stone-300">{item.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">QuickBooks-First Services</h2>
            <p className="text-stone-600 mt-4">Simple packages designed for peace of mind.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {Copy.services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 text-sm mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm text-stone-700">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl border-2 border-emerald-100 text-emerald-800 font-semibold hover:bg-emerald-50 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">How It Works</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-stone-100 -z-10 transform -translate-y-1/2"></div>
            
            {Copy.howItWorks.map((step, index) => (
              <div key={index} className="text-center bg-white">
                <div className="w-16 h-16 mx-auto bg-stone-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg ring-8 ring-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-4">{step.step.split(':')[0]}</h3>
                <p className="text-stone-600 max-w-xs mx-auto">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 p-8 bg-stone-50 rounded-2xl max-w-2xl mx-auto border border-stone-100">
            <p className="text-stone-700 font-medium">We believe in clear communication and zero jargon. You’ll always know what we’re doing and why.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">{Copy.about.headline}</h2>
              <div className="space-y-6 text-stone-300 leading-relaxed">
                {Copy.about.text.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10 flex items-center space-x-4">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-stone-700 border-2 border-stone-900 flex items-center justify-center text-xs">Him</div>
                  <div className="w-12 h-12 rounded-full bg-stone-600 border-2 border-stone-900 flex items-center justify-center text-xs">Her</div>
                </div>
                <span className="text-sm text-stone-400">Based in Bequia & Scranton, PA</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-stone-800 overflow-hidden relative">
                {/* Placeholder for couple photo */}
                <div className="absolute inset-0 flex items-center justify-center text-stone-600">
                  <span className="text-lg">Husband & Wife Team Photo</span>
                </div>
                <img 
                  src="https://picsum.photos/seed/zenbooks/800/800?grayscale" 
                  alt="Zen Books Team" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-75 transition-opacity duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-600 rounded-full blur-2xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-stone-700 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {Copy.faq.map((item, index) => (
              <div key={index} className="border-b border-stone-100 pb-8 last:border-0">
                <h3 className="text-lg font-bold text-stone-900 mb-3">{item.q}</h3>
                <p className="text-stone-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-semibold tracking-tight text-emerald-900">Zen Books</span>
            <p className="text-sm text-stone-500 mt-1">Calm, non-judgmental financial clarity.</p>
          </div>
          <div className="text-sm text-stone-400">
            &copy; {new Date().getFullYear()} Zen Books. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
