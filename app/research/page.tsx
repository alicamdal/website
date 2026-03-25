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

type PubType = { title: string; authors: string; venue: string; year: number; type: string; abstract: string; pdf?: string; arxiv?: string; code?: string | null; bibtex: string }

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Research</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-12">My research focuses on Computer Vision and Remote Sensing at the University of Twente.</p>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Publications</h2>
        <div className="space-y-4">
          {(publications as PubType[]).map((pub, i) => (
            <PublicationCard key={i} publication={pub as any} />
          ))}
        </div>
      </section>

      <section>
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
