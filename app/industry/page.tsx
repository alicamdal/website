import type { Metadata } from 'next'
import { industryProjects } from '@/data/industry-projects'
import IndustryProjectCard from '@/components/IndustryProjectCard'
import TechChips from '@/components/TechChips'

export const metadata: Metadata = {
  title: 'Industry Work',
  description: 'Production-grade Computer Vision systems for remote sensing and aerial intelligence at Baykar Technology.',
}

const techStack = ['Python', 'PyTorch', 'ONNX', 'TensorRT', 'GDAL', 'QGIS', 'Docker', 'CUDA', 'FastAPI']

export default function IndustryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-8">Industry Work</h1>
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-6 flex-col sm:flex-row">
            <div className="w-24 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xs text-gray-400 dark:text-gray-500 text-center leading-tight px-2">Baykar<br/>Logo</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">Baykar Technology</h2>
              <p className="text-[#D01212] font-medium mt-0.5">AI Software Engineer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Aug 2023 – Present</p>
              <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm leading-relaxed">Building production-grade Computer Vision systems for remote sensing and aerial intelligence applications.</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">Tech Stack</h3>
          <TechChips items={techStack} />
        </div>
        <p className="text-sm italic text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 bg-gray-50 dark:bg-gray-900/50">
          All demonstrations use publicly available datasets. Proprietary systems and data are not disclosed.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Projects</h2>
        <div className="space-y-6">
          {industryProjects.map((project) => (
            <IndustryProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
