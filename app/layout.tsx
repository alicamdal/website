import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: {
    default: '[YOUR NAME] — PhD Researcher & AI Engineer',
    template: '%s | [YOUR NAME]',
  },
  description: 'PhD student and AI Engineer specializing in Computer Vision & Remote Sensing at the University of Twente, and AI Software Engineer at Baykar Technology.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://[YOUR-DOMAIN].com',
    siteName: '[YOUR NAME]',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script in <head> — not inside a React component, so no React 19 warning */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=document.documentElement;if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${lora.variable} font-sans bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
