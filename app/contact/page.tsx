import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch via email or social media.',
}

const links = [
  { label: 'Email', href: 'mailto:[EMAIL]@utwente.nl', display: '[EMAIL]@utwente.nl' },
  { label: 'UT Profile', href: 'https://people.utwente.nl/[USERNAME]', display: 'people.utwente.nl/[USERNAME]' },
  { label: 'GitHub', href: 'https://github.com/[USERNAME]', display: 'github.com/[USERNAME]' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/[USERNAME]', display: 'linkedin.com/in/[USERNAME]' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=[SCHOLAR_ID]', display: 'Google Scholar Profile' },
]

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Contact</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">Feel free to reach out via email or connect on social media.</p>
      <div className="space-y-4">
        {links.map(({ label, href, display }) => (
          <div key={href} className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-28 flex-shrink-0">{label}</span>
            <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'} className="text-sm text-blue-600 dark:text-blue-400 hover:underline break-all">{display}</a>
          </div>
        ))}
      </div>
      <div className="mt-10 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900/50">
        <h2 className="font-semibold text-gray-900 dark:text-slate-100 mb-3">Send a Message</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">The best way to reach me is by email. Click the link above or use the button below to open your email client.</p>
        <a href="mailto:[EMAIL]@utwente.nl?subject=Hello from your website" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors" aria-label="Send email">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          Send Email
        </a>
      </div>
    </div>
  )
}
