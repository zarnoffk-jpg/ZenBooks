import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-semibold tracking-tight text-emerald-900">Zen Books</span>
            <p className="text-stone-500 mt-4 max-w-xs leading-relaxed">
              Judgment-free bookkeeping for Real Estate Investors and Therapists & Consultants. 
              Based in Scranton, PA, serving clients remotely across the U.S.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-stone-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-stone-600">
              <li><Link to="/real-estate-investors" className="hover:text-emerald-700">Real Estate Investors</Link></li>
              <li><Link to="/therapists-consultants" className="hover:text-emerald-700">Therapists & Consultants</Link></li>
              <li><Link to="/" className="hover:text-emerald-700">QuickBooks Cleanup</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-stone-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-stone-600">
              <li><Link to="/" className="hover:text-emerald-700">About Us</Link></li>
              <li><Link to="/" className="hover:text-emerald-700">Contact</Link></li>
              <li><Link to="/" className="hover:text-emerald-700">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-stone-400">
            &copy; {new Date().getFullYear()} Zen Books. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
