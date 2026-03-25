import type { Metadata } from 'next'
import AvatarPlaceholder from '@/components/AvatarPlaceholder'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about my research journey, PhD focus on Computer Vision & Remote Sensing, and industry experience at Baykar Technology.',
}

const researchSkills = ['Computer Vision', 'Remote Sensing', 'Object Detection', 'Semantic Segmentation', 'Change Detection', 'Similarity Search', 'Image Projection & Georeferencing', 'Self-supervised Learning']
const engineeringSkills = ['Python', 'C++', 'PyTorch', 'ONNX', 'ONNXRuntime', 'TensorRT', 'CUDA', 'Docker', 'Git', 'Django', 'PostgreSQL', 'OpenCV', 'MATLAB']
const toolSkills = ['ESP32', 'Raspberry Pi', 'Nvidia Jetson', 'Microservices', 'Distributed Systems', 'Embedded Systems', 'Linux']

const experience = [
  { icon: '🏢', role: 'AI Software Engineer', org: 'Baykar Technology', period: 'Jun 2023 – Present', description: 'Core member of the Baykar Mapping team. Led design of scalable microservices and asynchronous workers in Docker. Developed real-time AI apps on Jetson Orin AGX with C++ and TensorRT. Built end-to-end object detection, semantic segmentation, and change detection pipelines. Integrated multi-modal LLM interfaces using LangChain.' },
  { icon: '🏢', role: 'Embedded Software Developer', org: 'Keklikoglu Plastic', period: 'Aug 2020 – Feb 2023', description: 'Developed embedded software for educational human manikins using ESP32, C++, Raspberry Pi and Python. Designed health monitor simulator systems with a custom Linux OS built via Yocto. Implemented BLE, WiFi, SPI, I2C, Serial communication protocols and web server GUIs.' },
]

const education = [
  { icon: '🎓', role: 'Guest Researcher / PhD Candidate', org: 'University of Twente', period: 'Present', description: 'PhD research focused on Computer Vision and Remote Sensing, developing deep learning approaches for aerial and satellite imagery understanding.' },
  { icon: '🎓', role: 'MSc — Electrical and Electronic Engineering', org: 'Trinity College Dublin', period: 'Sep 2021 – Sep 2022', description: 'Master\'s degree in Electrical and Electronic Engineering. Thesis project on real-time YOLOv5-based debris detection for Unmanned Surface Vehicles.' },
]

export default function AboutPage() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">

      {/* Neural Network / Circuit Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" className="opacity-[0.09] dark:opacity-[0.16]">
          <defs>
            <radialGradient id="nn-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="1"/>
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <ellipse cx="1700" cy="250" rx="380" ry="380" fill="url(#nn-glow)" opacity="0.12"/>

          {/* Neural network — input layer (left) */}
          {[200,320,440,560,680].map((y, i) => (
            <circle key={i} cx="320" cy={y} r="16" fill="none" stroke="#22d3ee" strokeWidth="1.5"/>
          ))}
          {/* Hidden layer 1 */}
          {[160,280,400,520,640,760].map((y, i) => (
            <circle key={i} cx="640" cy={y} r="16" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
          ))}
          {/* Hidden layer 2 */}
          {[200,340,480,620,760].map((y, i) => (
            <circle key={i} cx="960" cy={y} r="16" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
          ))}
          {/* Output layer */}
          {[280,440,600].map((y, i) => (
            <circle key={i} cx="1280" cy={y} r="18" fill="none" stroke="#22d3ee" strokeWidth="2"/>
          ))}

          {/* Connections input → hidden1 */}
          {[200,320,440,560,680].map((y1) =>
            [160,280,400,520,640,760].map((y2, j) => (
              <line key={`${y1}-${j}`} x1="336" y1={y1} x2="624" y2={y2} stroke="#3b82f6" strokeWidth="0.4" opacity="0.5"/>
            ))
          )}
          {/* Connections hidden1 → hidden2 */}
          {[160,280,400,520,640,760].map((y1) =>
            [200,340,480,620,760].map((y2, j) => (
              <line key={`${y1}-${j}`} x1="656" y1={y1} x2="944" y2={y2} stroke="#3b82f6" strokeWidth="0.4" opacity="0.5"/>
            ))
          )}
          {/* Connections hidden2 → output */}
          {[200,340,480,620,760].map((y1) =>
            [280,440,600].map((y2, j) => (
              <line key={`${y1}-${j}`} x1="976" y1={y1} x2="1262" y2={y2} stroke="#22d3ee" strokeWidth="0.5" opacity="0.5"/>
            ))
          )}

          {/* Layer labels */}
          <text x="302" y="780" fill="#22d3ee" fontSize="9" fontFamily="monospace">INPUT</text>
          <text x="622" y="800" fill="#3b82f6" fontSize="9" fontFamily="monospace">HIDDEN</text>
          <text x="938" y="800" fill="#3b82f6" fontSize="9" fontFamily="monospace">HIDDEN</text>
          <text x="1258" y="660" fill="#22d3ee" fontSize="9" fontFamily="monospace">OUTPUT</text>

          {/* PCB traces right side */}
          <path d="M 1500 100 L 1600 100 L 1600 200 L 1750 200" fill="none" stroke="#3b82f6" strokeWidth="1.2"/>
          <path d="M 1500 160 L 1550 160 L 1550 300 L 1750 300" fill="none" stroke="#3b82f6" strokeWidth="1.2"/>
          <path d="M 1500 220 L 1640 220 L 1640 400 L 1750 400" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
          <circle cx="1600" cy="100" r="4" fill="#3b82f6"/>
          <circle cx="1550" cy="160" r="4" fill="#3b82f6"/>
          <circle cx="1640" cy="220" r="4" fill="#22d3ee"/>
          <rect x="1750" y="180" width="80" height="240" fill="none" stroke="#3b82f6" strokeWidth="1.2"/>
          <text x="1768" y="308" fill="#3b82f6" fontSize="8" fontFamily="monospace">MCU</text>

          <text x="50" y="1065" fill="#6b7280" fontSize="8" fontFamily="monospace">ARCH: ENCODER-DECODER  |  PARAMS: 87M  |  BACKBONE: ViT-B/16  |  TASK: DENSE PREDICTION</text>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-12 text-center sm:text-left">
        <AvatarPlaceholder initials="AC" size="md" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Ali Camdal</h1>
          <p className="text-gray-600 dark:text-gray-400">PhD Researcher & AI Engineer</p>
        </div>
      </div>

      <section className="relative z-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">About Me</h2>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">I am an AI Software Engineer at Baykar Technology, contributing to end-to-end AI applications for ultra-high-resolution aerial imagery across defense and civilian domains. My work spans the full lifecycle from system design to inference optimization on edge hardware.</p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">I hold an MSc in Electrical and Electronic Engineering from Trinity College Dublin. My research background includes machine learning-assisted detection for biosensing, real-time object detection for unmanned vehicles, and computer vision for remote sensing.</p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">My technical interests span object detection, semantic segmentation, change detection, visual similarity search, and image georeferencing — all applied to aerial and satellite imagery contexts.</p>
        </div>
      </section>

      <section className="relative z-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
          <div className="space-y-8">
            {experience.map((item, i) => (
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

      <section className="relative z-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Education</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
          <div className="space-y-8">
            {education.map((item, i) => (
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

      <section className="relative z-10 mb-12">
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

      <section className="relative z-10 flex flex-wrap gap-4">
        <a href="/cv.pdf" download className="px-5 py-2.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors" aria-label="Download CV as PDF">Download CV (PDF)</a>
        <a href="https://github.com/alicamdal" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">GitHub →</a>
      </section>
    </div>
  )
}
