import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Personal and open-source projects in Computer Vision and Remote Sensing.',
}

const projects = [
  { title: 'CV Model Serving API', description: 'A production-ready FastAPI application with Docker containerization for serving computer vision models. Includes batching, async inference, and a REST API for image classification and object detection endpoints.', tech: ['Python', 'FastAPI', 'Docker', 'PyTorch', 'ONNX', 'TensorRT'], github: 'https://github.com/[USERNAME]/cv-serving-api' },
  { title: 'Remote Sensing Demo (HuggingFace Spaces)', description: 'Interactive Gradio demo for semantic segmentation of remote sensing imagery. Upload aerial images and visualize land cover predictions in real-time using a pre-trained segmentation model.', tech: ['Python', 'PyTorch', 'Gradio', 'HuggingFace Spaces', 'GDAL'], github: 'https://github.com/[USERNAME]/rs-segmentation-demo', demo: 'https://huggingface.co/spaces/[USERNAME]/rs-segmentation-demo' },
  { title: 'Remote Sensing Toolkit', description: 'Open-source Python library for common remote sensing pre- and post-processing tasks: image tiling, patch extraction, multi-spectral normalization, georeferencing utilities, and dataset preparation scripts.', tech: ['Python', 'GDAL', 'NumPy', 'Rasterio', 'QGIS'], github: 'https://github.com/[USERNAME]/rs-toolkit' },
]

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">Personal and open-source projects in Computer Vision and Remote Sensing.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (<ProjectCard key={p.title} {...p} />))}
      </div>
    </div>
  )
}
