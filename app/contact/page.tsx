import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch via email or social media.',
}

const links = [
  { label: 'Email', href: 'mailto:alicamdal0@gmail.com', display: 'alicamdal0@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/alicamdal', display: 'github.com/alicamdal' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/alicamdal', display: 'linkedin.com/in/alicamdal' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=[SCHOLAR_ID]', display: 'Google Scholar Profile' },
]

export default function ContactPage() {
  return (
    <div className="relative max-w-2xl mx-auto px-4 sm:px-6 py-16">

      {/* Signal / Network Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" className="opacity-[0.10] dark:opacity-[0.18]">
          <defs>
            <radialGradient id="sig-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="1"/>
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <ellipse cx="960" cy="400" rx="500" ry="500" fill="url(#sig-glow)" opacity="0.10"/>

          {/* Signal waves — concentric arcs from center */}
          {[120,220,320,420,520,620].map((r, i) => (
            <path key={i} d={`M ${960-r} 540 A ${r} ${r} 0 0 1 ${960+r} 540`} fill="none" stroke="#f472b6" strokeWidth="1.2" opacity={0.8 - i * 0.1} strokeDasharray={i % 2 === 0 ? 'none' : '8 10'}/>
          ))}

          {/* Origin dot */}
          <circle cx="960" cy="540" r="8" fill="#f472b6" opacity="0.6"/>
          <circle cx="960" cy="540" r="20" fill="none" stroke="#f472b6" strokeWidth="1.5" opacity="0.4"/>

          {/* Network nodes */}
          <circle cx="400" cy="300" r="10" fill="none" stroke="#f472b6" strokeWidth="1.5"/>
          <circle cx="700" cy="200" r="10" fill="none" stroke="#f472b6" strokeWidth="1.5"/>
          <circle cx="1200" cy="250" r="10" fill="none" stroke="#f472b6" strokeWidth="1.5"/>
          <circle cx="1500" cy="350" r="10" fill="none" stroke="#f472b6" strokeWidth="1.5"/>
          <circle cx="350" cy="750" r="10" fill="none" stroke="#ec4899" strokeWidth="1.5"/>
          <circle cx="1550" cy="700" r="10" fill="none" stroke="#ec4899" strokeWidth="1.5"/>
          <circle cx="900" cy="850" r="10" fill="none" stroke="#ec4899" strokeWidth="1.5"/>

          {/* Lines connecting nodes to center */}
          <line x1="400" y1="300" x2="960" y2="540" stroke="#f472b6" strokeWidth="0.8" strokeDasharray="6 8" opacity="0.6"/>
          <line x1="700" y1="200" x2="960" y2="540" stroke="#f472b6" strokeWidth="0.8" strokeDasharray="6 8" opacity="0.6"/>
          <line x1="1200" y1="250" x2="960" y2="540" stroke="#f472b6" strokeWidth="0.8" strokeDasharray="6 8" opacity="0.6"/>
          <line x1="1500" y1="350" x2="960" y2="540" stroke="#f472b6" strokeWidth="0.8" strokeDasharray="6 8" opacity="0.6"/>
          <line x1="350" y1="750" x2="960" y2="540" stroke="#ec4899" strokeWidth="0.8" strokeDasharray="6 8" opacity="0.6"/>
          <line x1="1550" y1="700" x2="960" y2="540" stroke="#ec4899" strokeWidth="0.8" strokeDasharray="6 8" opacity="0.6"/>
          <line x1="900" y1="850" x2="960" y2="540" stroke="#ec4899" strokeWidth="0.8" strokeDasharray="6 8" opacity="0.6"/>

          {/* Location pin */}
          <path d="M 960 160 C 920 160, 890 190, 890 225 C 890 270, 960 320, 960 320 C 960 320, 1030 270, 1030 225 C 1030 190, 1000 160, 960 160 Z" fill="none" stroke="#f472b6" strokeWidth="2"/>
          <circle cx="960" cy="225" r="14" fill="none" stroke="#f472b6" strokeWidth="1.5"/>

          {/* Node labels */}
          <text x="360" y="290" fill="#f472b6" fontSize="9" fontFamily="monospace">Dublin</text>
          <text x="660" y="190" fill="#f472b6" fontSize="9" fontFamily="monospace">Kayseri</text>
          <text x="1160" y="240" fill="#f472b6" fontSize="9" fontFamily="monospace">Amsterdam</text>
          <text x="1460" y="340" fill="#f472b6" fontSize="9" fontFamily="monospace">Istanbul</text>
          <text x="310" y="740" fill="#ec4899" fontSize="9" fontFamily="monospace">Kentucky</text>
          <text x="1510" y="690" fill="#ec4899" fontSize="9" fontFamily="monospace">Ankara</text>

          <text x="50" y="1065" fill="#6b7280" fontSize="8" fontFamily="monospace">PROTOCOL: HTTPS  |  ENCRYPTION: TLS 1.3  |  LATENCY: &lt;50ms  |  UPTIME: 99.9%</text>
        </svg>
      </div>
      <h1 className="relative z-10 text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Contact</h1>
      <p className="relative z-10 text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">Feel free to reach out via email or connect on social media.</p>
      <div className="relative z-10 space-y-4">
        {links.map(({ label, href, display }) => (
          <div key={href} className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-24 sm:w-28 flex-shrink-0">{label}</span>
            <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'} className="text-sm text-blue-600 dark:text-blue-400 hover:underline break-all">{display}</a>
          </div>
        ))}
      </div>
      <div className="relative z-10 mt-10 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900/50">
        <h2 className="font-semibold text-gray-900 dark:text-slate-100 mb-3">Send a Message</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">The best way to reach me is by email. Click the link above or use the button below to open your email client.</p>
        <a href="mailto:alicamdal0@gmail.com?subject=Hello from your website" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors" aria-label="Send email">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          Send Email
        </a>
      </div>
    </div>
  )
}
