import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16 px-4 relative">
      <div className="absolute inset-0 bg-slate-950 opacity-90 z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">KrimAI</h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing criminal investigations with state-of-the-art AI technology.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-blue-500 transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="text-gray-400 hover:text-blue-500 transition-colors">How It Works</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-blue-500 transition-colors">Pricing</Link></li>
              <li><Link href="#faq" className="text-gray-400 hover:text-blue-500 transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-blue-500 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-blue-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="/data-processing" className="text-gray-400 hover:text-blue-500 transition-colors">Data Processing</Link></li>
              <li><Link href="/compliance" className="text-gray-400 hover:text-blue-500 transition-colors">Compliance</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@krimai.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (888) 555-0123</span>
              </li>
              <li className="text-gray-400 mt-4">
                123 AI Boulevard<br />
                Tech District<br />
                San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} KrimAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
