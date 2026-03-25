import type { Metadata } from 'next'
import PublicationCard from '@/components/PublicationCard'
import publications from '@/data/publications.json'

export const metadata: Metadata = {
  title: 'Research',
  description: 'Publications and research projects in Computer Vision and Remote Sensing.',
}

const researchProjects = [
  { title: '[PLACEHOLDER] Robust Object Detection Under Diverse Atmospheric Conditions', description: 'Investigating domain adaptation techniques for aerial object detectors to generalize across different atmospheric and lighting conditions.', status: 'Ongoing' as const, tech: ['PyTorch', 'Domain Adaptation', 'Object Detection'] },
  { title: '[PLACEHOLDER] Foundation Model Pre-training for Remote Sensing', description: 'Developing self-supervised pre-training strategies tailored for large-scale satellite imagery.', status: 'Ongoing' as const, tech: ['Self-supervised Learning', 'Vision Transformers', 'Remote Sensing'] },
  { title: '[PLACEHOLDER] Efficient Change Detection for Urban Monitoring', description: 'Lightweight change detection architectures for monitoring urban growth using bi-temporal satellite image pairs.', status: 'Completed' as const, tech: ['Change Detection', 'PyTorch', 'GDAL'] },
]

type PubType = { title: string; authors: string; venue: string; year: number; type: string; abstract: string; pdf?: string; arxiv?: string | null; code?: string | null; bibtex: string }

export default function ResearchPage() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">

      {/* Satellite Constellation Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" className="opacity-[0.10] dark:opacity-[0.18]">
          <defs>
            <radialGradient id="sat-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="1"/>
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Glow */}
          <ellipse cx="400" cy="300" rx="420" ry="420" fill="url(#sat-glow)" opacity="0.14"/>

          {/* Orbit 1 — equatorial */}
          <ellipse cx="960" cy="540" rx="800" ry="120" fill="none" stroke="#a78bfa" strokeWidth="1.2" strokeDasharray="10 14"/>
          {/* Orbit 2 — polar tilt */}
          <ellipse cx="960" cy="540" rx="300" ry="700" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="8 12"/>
          {/* Orbit 3 — inclined */}
          <ellipse cx="960" cy="540" rx="680" ry="280" fill="none" stroke="#818cf8" strokeWidth="1" strokeDasharray="8 12" transform="rotate(-35 960 540)"/>
          {/* Orbit 4 — high */}
          <ellipse cx="960" cy="540" rx="950" ry="200" fill="none" stroke="#a78bfa" strokeWidth="0.8" strokeDasharray="6 10" transform="rotate(20 960 540)"/>

          {/* Satellites on orbits */}
          {/* Sat 1 */}
          <rect x="1745" y="525" width="14" height="10" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
          <line x1="1731" y1="530" x2="1745" y2="530" stroke="#a78bfa" strokeWidth="1.5"/>
          <line x1="1759" y1="530" x2="1773" y2="530" stroke="#a78bfa" strokeWidth="1.5"/>
          {/* Sat 2 */}
          <rect x="956" y="398" width="12" height="9" fill="none" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="944" y1="402" x2="956" y2="402" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="968" y1="402" x2="980" y2="402" stroke="#818cf8" strokeWidth="1.5"/>
          {/* Sat 3 — polar orbit */}
          <rect x="956" y="190" width="12" height="9" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
          <line x1="944" y1="194" x2="956" y2="194" stroke="#7c3aed" strokeWidth="1.5"/>
          <line x1="968" y1="194" x2="980" y2="194" stroke="#7c3aed" strokeWidth="1.5"/>

          {/* Ground track */}
          <path d="M 160 540 Q 400 420, 640 540 Q 880 660, 1120 540 Q 1360 420, 1600 540 Q 1760 620, 1920 540" fill="none" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 8" opacity="0.7"/>
          <text x="170" y="535" fill="#818cf8" fontSize="8" fontFamily="monospace">GROUND TRACK</text>

          {/* Spectral band indicator */}
          <text x="80" y="820" fill="#a78bfa" fontSize="9" fontFamily="monospace">SPECTRAL BANDS</text>
          <rect x="80" y="828" width="50" height="12" fill="#3b82f6" opacity="0.4"/>
          <rect x="134" y="828" width="50" height="12" fill="#22c55e" opacity="0.4"/>
          <rect x="188" y="828" width="50" height="12" fill="#ef4444" opacity="0.4"/>
          <rect x="242" y="828" width="50" height="12" fill="#a78bfa" opacity="0.4"/>
          <rect x="296" y="828" width="50" height="12" fill="#f59e0b" opacity="0.4"/>
          <text x="96" y="851" fill="#6b7280" fontSize="7" fontFamily="monospace">B</text>
          <text x="150" y="851" fill="#6b7280" fontSize="7" fontFamily="monospace">G</text>
          <text x="204" y="851" fill="#6b7280" fontSize="7" fontFamily="monospace">R</text>
          <text x="255" y="851" fill="#6b7280" fontSize="7" fontFamily="monospace">RE</text>
          <text x="307" y="851" fill="#6b7280" fontSize="7" fontFamily="monospace">NIR</text>

          {/* Radar sweep */}
          <circle cx="1700" cy="800" r="120" fill="none" stroke="#7c3aed" strokeWidth="0.8" opacity="0.6"/>
          <circle cx="1700" cy="800" r="80" fill="none" stroke="#7c3aed" strokeWidth="0.6" opacity="0.5"/>
          <circle cx="1700" cy="800" r="40" fill="none" stroke="#7c3aed" strokeWidth="0.6" opacity="0.5"/>
          <line x1="1700" y1="800" x2="1820" y2="738" stroke="#a78bfa" strokeWidth="1.5" opacity="0.8"/>
          <path d="M 1700 800 L 1820 738 A 120 120 0 0 0 1752 688 Z" fill="#a78bfa" opacity="0.06"/>

          <text x="50" y="1065" fill="#6b7280" fontSize="8" fontFamily="monospace">SENSOR: MSI  |  REVISIT: 5 DAYS  |  SWATH: 290km  |  RESOLUTION: 10m  |  ORBIT: SUN-SYNC 786km</text>
        </svg>
      </div>
      <h1 className="relative z-10 text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Research</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-12">My research focuses on Computer Vision and Remote Sensing at the University of Twente.</p>

      <section className="relative z-10 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Publications</h2>
        <div className="space-y-4">
          {(publications as PubType[]).sort((a, b) => b.year - a.year).map((pub, i) => (
            <PublicationCard key={i} publication={pub as any} />
          ))}
        </div>
      </section>

      <section className="relative z-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Research Projects</h2>
        <div className="space-y-4">
          {researchProjects.map((project, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-slate-100 leading-snug">{project.title}</h3>
                <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-0.5 rounded-full ${project.status === 'Ongoing' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}>{project.status}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">{project.tech.map((t) => (<span key={t} className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">{t}</span>))}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
