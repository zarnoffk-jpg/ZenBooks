import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, ShieldCheck, Heart, BarChart3, Users, Home as HomeIcon, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-stone-50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-stone-50 to-stone-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-tight"
          >
            Stop Drowning in QuickBooks. <br className="hidden md:block" />
            <span className="text-emerald-800">We Bring Calm to Your Numbers.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Judgment-free QuickBooks bookkeeping for <strong>Real Estate Investors</strong> and <strong>Therapists & Consultants</strong>. Based in Scranton, PA, serving clients remotely across the U.S.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Book a QuickBooks Clarity Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* What We Do For Your QuickBooks */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900">What We Do For Your QuickBooks</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cleanup & Catch-Up",
                desc: "For when you’re behind, your books are a mess, and tax time is looming. We dive into your history to categorize past transactions, fix errors, and reconcile accounts so you can stop looking over your shoulder.",
                icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />
              },
              {
                title: "Monthly QuickBooks Care",
                desc: "Hand off the monthly chore completely. We keep your QuickBooks Online perfectly up-to-date with monthly categorization, reconciliation, and simple reports you can actually understand.",
                icon: <Heart className="w-8 h-8 text-emerald-600" />
              },
              {
                title: "Premium Support",
                desc: "For growing portfolios or busy practices that need deeper insight. Get more frequent reporting, detailed KPI tracking, and regular check-in calls to review your numbers.",
                icon: <BarChart3 className="w-8 h-8 text-emerald-600" />
              }
            ].map((service, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900">Who We Help</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real Estate Investors",
                desc: "You juggle multiple properties, loans, and entities. We keep your books clean by property so you always know your true cash flow and are ready for lenders or tax time.",
                icon: <HomeIcon className="w-6 h-6 text-blue-600" />,
                link: "/real-estate-investors",
                color: "bg-blue-50 text-blue-900"
              },
              {
                title: "Therapists",
                desc: "You want to stay in session, not in spreadsheets. We organize your income and expenses so you know exactly what you’re taking home and can focus on your clients.",
                icon: <Users className="w-6 h-6 text-purple-600" />,
                link: "/therapists-consultants",
                color: "bg-purple-50 text-purple-900"
              },
              {
                title: "Consultants & Coaches",
                desc: "You manage retainers and project income but feel unsure about your true profit. We track your revenue streams clearly so you know if you can hire help or cut back hours.",
                icon: <Briefcase className="w-6 h-6 text-amber-600" />,
                link: "/therapists-consultants",
                color: "bg-amber-50 text-amber-900"
              }
            ].map((persona, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${persona.color}`}>
                  {persona.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{persona.title}</h3>
                <p className="text-stone-600 mb-6">{persona.desc}</p>
                <Link to={persona.link} className="text-emerald-700 font-medium hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Why Your QuickBooks Feels So Heavy</h2>
            <p className="text-stone-500">Do any of these sound familiar?</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "I’m drowning in receipts and I’m honestly embarrassed to let anyone see how bad it is.",
              "I have no idea if I’m actually making a profit on this property, and I’m scared to look.",
              "Tax time is a nightmare every year—I just panic and hope I don’t get audited.",
              "I keep putting off logging into QuickBooks because I’m afraid I’ll mess something up.",
              "My accountant asks for reports and I freeze because I know my numbers are a mess.",
              "I started this business to build wealth or help people, not to fight with bookkeeping software all weekend."
            ].map((item, index) => (
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
            <h2 className="text-3xl font-bold mb-6">What Zen Books Does</h2>
            <p className="text-lg text-stone-400 leading-relaxed">
              We are QuickBooks specialists who take the weight off your shoulders. We don’t just "do the books"—we turn chaotic data into a calm, reliable system. You handle the business; we’ll handle the numbers (and we’ll never judge the mess).
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { pain: "My QuickBooks and bank never match.", fix: "We reconcile your accounts line by line and fix beginning balances so your numbers finally tell the truth." },
              { pain: "I have a shoebox of receipts I’m ignoring.", fix: "We categorize every single transaction, turning that pile of stress into organized data." },
              { pain: "I’m terrified of handing this over to my accountant.", fix: "We prepare clean, accurate monthly reports that your accountant will love, so tax season is boring instead of scary." },
              { pain: "I don't understand what these reports mean.", fix: "We walk you through your Profit & Loss and Balance Sheet in plain English so you actually know where your money is going." },
              { pain: "I’m behind. Like, years behind.", fix: "We specialize in judgment-free catch-up work. We’ll go back, clean it up, and get you current—no lectures." }
            ].map((item, index) => (
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

      {/* Why Clients Choose Zen Books */}
      <section className="py-20 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900">Why Clients Choose Zen Books</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "QuickBooks-Only Focus", desc: "We don't dabble in Xero or Wave. We are deep experts in QuickBooks Online, meaning we know every trick to keep your file clean, fast, and accurate." },
              { title: "Niche Expertise", desc: "We understand the specific headaches of real estate (escrow, cap ex, class tracking) and professional services (retainers, commingled funds). We speak your language." },
              { title: "Judgment-Free Zone", desc: "We’ve seen it all—years of missing data, mixed personal expenses, negative balances. We fix it without making you feel bad. Ever." },
              { title: "Remote, But Personal", desc: "We serve clients across the U.S. securely via the cloud, but we’re real humans you can talk to. No bots, no offshore call centers." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section id="how-it-works" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">How It Works</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "The No-Judgment Review", desc: "We hop on a quick call to look at your current setup. No shame, just a clear plan." },
              { title: "The Cleanup & Setup", desc: "We organize the chaos, reconcile the accounts, and build a QuickBooks system that actually works for you." },
              { title: "Monthly Zen", desc: "You get simple, clear reports and ongoing support. You stop worrying about tax time and start trusting your numbers." }
            ].map((step, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 text-center">
                <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Book a QuickBooks Clarity Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
