import type { Metadata } from 'next'
import AvatarPlaceholder from '@/components/AvatarPlaceholder'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about my research journey, PhD focus on Computer Vision & Remote Sensing, and industry experience at Baykar Technology.',
}

const researchSkills = ['Computer Vision', 'Remote Sensing', 'Object Detection', 'Semantic Segmentation', 'Change Detection', 'Similarity Search', 'Image Projection & Georeferencing', 'Self-supervised Learning']
const engineeringSkills = ['Python', 'PyTorch', 'TensorFlow', 'CUDA', 'Docker', 'Git', 'FastAPI', 'ONNX', 'TensorRT']
const toolSkills = ['QGIS', 'GDAL', 'Weights & Biases', 'HuggingFace', 'SLURM', 'Linux']

const timeline = [
  { icon: '🏢', role: 'AI Software Engineer', org: 'Baykar Technology', period: 'Aug 2023 – Present', description: 'Building production-grade Computer Vision systems for remote sensing and aerial intelligence applications.' },
  { icon: '🎓', role: 'PhD Researcher', org: 'University of Twente', period: '[START YEAR] – Present', description: 'PhD research focused on Computer Vision and Remote Sensing, developing novel deep learning approaches for aerial and satellite imagery understanding.' },
  { icon: '🎓', role: '[MSc/BSc]', org: '[UNIVERSITY]', period: '[YEAR]', description: 'Degree in [FIELD], with a focus on [SPECIALIZATION].' },
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-12">
        <AvatarPlaceholder initials="YN" size="md" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">[YOUR NAME]</h1>
          <p className="text-gray-600 dark:text-gray-400">PhD Researcher & AI Engineer</p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">About Me</h2>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">I am a PhD researcher at the University of Twente, where my work sits at the intersection of Computer Vision and Remote Sensing. My research investigates how deep learning models can be adapted and improved for the unique challenges posed by aerial and satellite imagery.</p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Alongside my PhD, I work as an AI Software Engineer at Baykar Technology (Aug 2023 – Present), where I design and implement production-grade computer vision systems applied to real-world aerial intelligence problems.</p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">My technical interests span object detection, semantic segmentation, change detection, visual similarity search, and image georeferencing — all applied to remote sensing contexts.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-base" aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-slate-100">{item.role}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{item.org}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.period}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Skills</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">Research</h3>
            <div className="flex flex-wrap gap-2">{researchSkills.map((s) => (<span key={s} className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">{s}</span>))}</div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">Engineering</h3>
            <div className="flex flex-wrap gap-2">{engineeringSkills.map((s) => (<span key={s} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">{s}</span>))}</div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">{toolSkills.map((s) => (<span key={s} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">{s}</span>))}</div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-4">
        <a href="/cv.pdf" download className="px-5 py-2.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors" aria-label="Download CV as PDF">Download CV (PDF)</a>
        <a href="https://people.utwente.nl/[USERNAME]" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">UT Profile →</a>
      </section>
    </div>
  )
}
