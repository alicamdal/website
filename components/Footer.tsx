const socialLinks = [
  { href: 'https://github.com/[USERNAME]', label: 'GitHub' },
  { href: 'https://linkedin.com/in/[USERNAME]', label: 'LinkedIn' },
  { href: 'https://scholar.google.com/citations?user=[SCHOLAR_ID]', label: 'Google Scholar' },
  { href: 'mailto:[EMAIL]@utwente.nl', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} [YOUR NAME]. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label={label}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
