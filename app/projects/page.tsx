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
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16">

      {/* Code / Git Graph Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" className="opacity-[0.10] dark:opacity-[0.18]">
          <defs>
            <radialGradient id="code-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="1"/>
              <stop offset="100%" stopColor="#34d399" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <ellipse cx="1600" cy="900" rx="360" ry="360" fill="url(#code-glow)" opacity="0.12"/>

          {/* Git commit graph — main branch */}
          <line x1="200" y1="200" x2="200" y2="900" stroke="#34d399" strokeWidth="2"/>
          <circle cx="200" cy="220" r="8" fill="none" stroke="#34d399" strokeWidth="2"/>
          <circle cx="200" cy="340" r="8" fill="none" stroke="#34d399" strokeWidth="2"/>
          <circle cx="200" cy="460" r="8" fill="none" stroke="#34d399" strokeWidth="2"/>
          <circle cx="200" cy="600" r="8" fill="none" stroke="#34d399" strokeWidth="2"/>
          <circle cx="200" cy="740" r="8" fill="none" stroke="#34d399" strokeWidth="2"/>
          <circle cx="200" cy="860" r="8" fill="none" stroke="#34d399" strokeWidth="2"/>
          <text x="225" y="224" fill="#34d399" fontSize="9" fontFamily="monospace">feat: add TensorRT export pipeline</text>
          <text x="225" y="344" fill="#34d399" fontSize="9" fontFamily="monospace">fix: ONNX dynamic axes for batch inference</text>
          <text x="225" y="464" fill="#34d399" fontSize="9" fontFamily="monospace">feat: semantic segmentation head</text>
          <text x="225" y="604" fill="#34d399" fontSize="9" fontFamily="monospace">refactor: modular backbone registry</text>
          <text x="225" y="744" fill="#34d399" fontSize="9" fontFamily="monospace">feat: multi-scale feature pyramid</text>
          <text x="225" y="864" fill="#34d399" fontSize="9" fontFamily="monospace">init: project scaffold</text>

          {/* Feature branch */}
          <path d="M 200 460 C 200 500, 380 500, 380 540" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="380" y1="540" x2="380" y2="700" stroke="#3b82f6" strokeWidth="2"/>
          <path d="M 380 700 C 380 740, 200 740, 200 740" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="380" cy="560" r="7" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="380" cy="640" r="7" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          <text x="405" y="564" fill="#3b82f6" fontSize="9" fontFamily="monospace">feat/change-detection</text>
          <text x="405" y="644" fill="#3b82f6" fontSize="9" fontFamily="monospace">wip: siamese encoder</text>

          {/* Code symbols — right area */}
          <text x="1200" y="200" fill="#34d399" fontSize="72" fontFamily="monospace" opacity="0.6">{'{'}</text>
          <text x="1340" y="200" fill="#34d399" fontSize="72" fontFamily="monospace" opacity="0.6">{'}'}</text>
          <text x="1450" y="280" fill="#3b82f6" fontSize="56" fontFamily="monospace" opacity="0.5">{'<>'}</text>
          <text x="1200" y="420" fill="#6b7280" fontSize="13" fontFamily="monospace">def forward(self, x: Tensor) -&gt; Dict:</text>
          <text x="1240" y="448" fill="#6b7280" fontSize="13" fontFamily="monospace">feats = self.backbone(x)</text>
          <text x="1240" y="476" fill="#6b7280" fontSize="13" fontFamily="monospace">fpn = self.neck(feats)</text>
          <text x="1240" y="504" fill="#6b7280" fontSize="13" fontFamily="monospace">return self.head(fpn)</text>

          {/* Terminal prompt */}
          <text x="1200" y="620" fill="#34d399" fontSize="13" fontFamily="monospace">$ python train.py --cfg configs/det.yaml</text>
          <text x="1200" y="648" fill="#6b7280" fontSize="13" fontFamily="monospace">Epoch 42/100  loss: 0.0312  mAP: 0.847</text>
          <text x="1200" y="676" fill="#6b7280" fontSize="13" fontFamily="monospace">Epoch 43/100  loss: 0.0298  mAP: 0.851</text>
          <text x="1200" y="700" fill="#34d399" fontSize="13" fontFamily="monospace">▌</text>

          <text x="50" y="1065" fill="#6b7280" fontSize="8" fontFamily="monospace">BRANCH: main  |  COMMITS: 347  |  LANG: Python 84%  C++ 12%  |  LICENSE: MIT  |  STATUS: passing</text>
        </svg>
      </div>
      <h1 className="relative z-10 text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">Personal and open-source projects in Computer Vision and Remote Sensing.</p>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (<ProjectCard key={p.title} {...p} />))}
      </div>
    </div>
  )
}
