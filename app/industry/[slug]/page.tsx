import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { industryProjects } from '@/data/industry-projects'
import MediaPlaceholder from '@/components/MediaPlaceholder'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ProjectNav from '@/components/ProjectNav'
import Tag from '@/components/Tag'
import TechChips from '@/components/TechChips'

export function generateStaticParams() {
  return industryProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = industryProjects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return { title: project.title, description: project.overview }
}

const colorMap: Record<string, 'blue' | 'green' | 'orange' | 'purple' | 'teal'> = {
  blue: 'blue', green: 'green', orange: 'orange', purple: 'purple', teal: 'teal',
}

export default function IndustryProjectPage({ params }: { params: { slug: string } }) {
  const index = industryProjects.findIndex((p) => p.slug === params.slug)
  if (index === -1) notFound()

  const project = industryProjects[index]
  const prev = index > 0 ? industryProjects[index - 1] : undefined
  const next = index < industryProjects.length - 1 ? industryProjects[index + 1] : undefined

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
        <Link href="/industry" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Industry Work</Link>
        <span aria-hidden="true">›</span>
        <span className="text-gray-900 dark:text-slate-100">{project.title}</span>
      </nav>

      <section className="mb-8">
        <MediaPlaceholder label={project.primaryMedia.label} aspectRatio={project.primaryMedia.aspectRatio} />
        <p className="text-sm italic text-gray-400 dark:text-gray-500 mt-2 text-center">Demonstration using publicly available remote sensing datasets</p>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <Tag variant={colorMap[project.categoryColor]}>{project.category}</Tag>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-5">{project.overview}</p>
        <TechChips items={project.tech} />
      </section>

      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.secondaryMedia.map((media, i) => (
            <div key={i}>
              {project.slug === 'semantic-segmentation-maps' && i === 0 ? (
                <BeforeAfterSlider beforeLabel="Input" afterLabel="Segmentation" />
              ) : (
                <MediaPlaceholder label={media.label} aspectRatio={media.aspectRatio} />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h2 className="font-semibold text-gray-900 dark:text-slate-100 mb-2">Problem</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.problem}</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h2 className="font-semibold text-gray-900 dark:text-slate-100 mb-2">Approach</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.approach}</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
            <h2 className="font-semibold text-gray-900 dark:text-slate-100 mb-2">Results</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{project.results}</p>
            <div className="space-y-1.5">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">{m.label}</span>
                  <span className="font-mono font-semibold text-gray-900 dark:text-slate-100">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.additionalMedia && (
        <section className="mb-10">
          <MediaPlaceholder label={project.additionalMedia.label} aspectRatio={project.additionalMedia.aspectRatio} />
        </section>
      )}

      <ProjectNav
        prev={prev ? { slug: prev.slug, title: prev.title } : undefined}
        next={next ? { slug: next.slug, title: next.title } : undefined}
      />
    </div>
  )
}
