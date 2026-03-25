import type { Metadata } from 'next'
import Image from 'next/image'
import { industryProjects } from '@/data/industry-projects'
import IndustryProjectCard from '@/components/IndustryProjectCard'
import TechChips from '@/components/TechChips'

export const metadata: Metadata = {
  title: 'Industry Work',
  description: 'Production-grade Computer Vision systems for remote sensing and aerial intelligence at Baykar Technology.',
}

const techStack = ['C++', 'Torch', 'ONNX', 'TensorRT', 'GDAL', 'QGIS', 'Docker', 'CUDA', 'FastAPI']

export default function IndustryPage() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16">

      {/* UAV / Object Detection Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" className="opacity-[0.10] dark:opacity-[0.18]">
          {/* Flight path arc */}
          <path d="M 100 900 C 400 200, 900 800, 1400 200 C 1600 80, 1800 400, 1900 600" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="12 16"/>

          {/* ── AKINCI silhouette (plan view, top-down, nose → right) ── */}
          <g transform="translate(1540, 210) rotate(200) scale(1.25)" fill="#06b6d4">
            {/* Fuselage — wide, substantial body */}
            <path d="M 105,0 C 98,-10 65,-15 35,-14 L 5,-12 -40,-9 -82,-6 -100,-4 -106,-2 L -106,2 -100,4 -82,6 -40,9 5,12 35,14 C 65,15 98,10 105,0 Z"/>
            {/* Nose turret / sensor */}
            <ellipse cx="100" cy="0" rx="10" ry="7"/>
            {/* Left wing — slightly swept, large span */}
            <path d="M 42,-14 L 26,-14 L -12,-195 L -22,-192 L 5,-194 Z"/>
            {/* Left winglet */}
            <path d="M -12,-195 L -5,-212 L 3,-205 L -5,-192 Z"/>
            {/* Left engine nacelle */}
            <path d="M 18,-87 C 14,-94 -4,-96 -8,-87 C -4,-78 14,-78 18,-87 Z"/>
            {/* Right wing */}
            <path d="M 42,14 L 26,14 L -12,195 L -22,192 L 5,194 Z"/>
            {/* Right winglet */}
            <path d="M -12,195 L -5,212 L 3,205 L -5,192 Z"/>
            {/* Right engine nacelle */}
            <path d="M 18,87 C 14,94 -4,96 -8,87 C -4,78 14,78 18,87 Z"/>
            {/* Left tail boom */}
            <path d="M -8,-12 L -115,-42 L -112,-35 L -5,-9 Z"/>
            {/* Right tail boom */}
            <path d="M -8,12 L -115,42 L -112,35 L -5,9 Z"/>
            {/* Left horizontal stab */}
            <path d="M -126,-38 L -92,-46 L -90,-40 L -124,-32 Z"/>
            {/* Left V-tail fin */}
            <path d="M -116,-40 L -110,-57 L -104,-54 L -110,-37 Z"/>
            {/* Right horizontal stab */}
            <path d="M -126,38 L -92,46 L -90,40 L -124,32 Z"/>
            {/* Right V-tail fin */}
            <path d="M -116,40 L -110,57 L -104,54 L -110,37 Z"/>
            {/* Pusher prop disc */}
            <circle cx="-106" cy="0" r="16" fillOpacity="0.3"/>
            <rect x="-107" y="-16" width="2" height="32"/>
            <rect x="-122" y="-1" width="32" height="2"/>
          </g>
          <text x="1430" y="375" fill="#06b6d4" fontSize="9" fontFamily="monospace">AKINCI  ALT: 7500m  SPD: 185kt</text>

          {/* ── TB2 silhouette (plan view, top-down, nose → right) ── */}
          <g transform="translate(270, 790) rotate(25) scale(0.9)" fill="#3b82f6">
            {/* Fuselage — slim, elongated */}
            <path d="M 81,0 C 74,-6 48,-10 22,-9 L -5,-8 -38,-6 -68,-4 -78,-2 L -78,2 -68,4 -38,6 -5,8 22,9 C 48,10 74,6 81,0 Z"/>
            {/* Nose sensor dome */}
            <ellipse cx="77" cy="0" rx="7" ry="5"/>
            {/* Left wing — high aspect ratio, barely tapered */}
            <path d="M 28,-9 L 15,-9 L -14,-148 L -3,-148 Z"/>
            {/* Right wing */}
            <path d="M 28,9 L 15,9 L -14,148 L -3,148 Z"/>
            {/* Left tail boom — slender, angles outward */}
            <path d="M -5,-8 L -96,-26 L -94,-21 L -3,-6 Z"/>
            {/* Right tail boom */}
            <path d="M -5,8 L -96,26 L -94,21 L -3,6 Z"/>
            {/* Left horizontal stab */}
            <path d="M -104,-23 L -80,-29 L -79,-24 L -103,-18 Z"/>
            {/* Left V-tail fin */}
            <path d="M -96,-24 L -91,-37 L -86,-35 L -91,-22 Z"/>
            {/* Right horizontal stab */}
            <path d="M -104,23 L -80,29 L -79,24 L -103,18 Z"/>
            {/* Right V-tail fin */}
            <path d="M -96,24 L -91,37 L -86,35 L -91,22 Z"/>
            {/* Pusher prop disc */}
            <circle cx="-78" cy="0" r="13" fillOpacity="0.3"/>
            <rect x="-79" y="-13" width="2" height="26"/>
            <rect x="-91" y="-1" width="26" height="2"/>
          </g>
          <text x="185" y="885" fill="#3b82f6" fontSize="9" fontFamily="monospace">TB2  ALT: 5400m  SPD: 70kt</text>

          {/* Camera footprint / coverage area */}
          <rect x="500" y="300" width="580" height="440" fill="none" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="5 8"/>
          <line x1="580" y1="300" x2="580" y2="740" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="660" y1="300" x2="660" y2="740" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="740" y1="300" x2="740" y2="740" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="820" y1="300" x2="820" y2="740" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="900" y1="300" x2="900" y2="740" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="980" y1="300" x2="980" y2="740" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="1060" y1="300" x2="1060" y2="740" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="500" y1="380" x2="1080" y2="380" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="500" y1="460" x2="1080" y2="460" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="500" y1="540" x2="1080" y2="540" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="500" y1="620" x2="1080" y2="620" stroke="#3b82f6" strokeWidth="0.4"/>
          <line x1="500" y1="700" x2="1080" y2="700" stroke="#3b82f6" strokeWidth="0.4"/>
          <text x="505" y="295" fill="#06b6d4" fontSize="9" fontFamily="monospace">GSD: 0.05m/px  FOV: 84°</text>

          {/* Detection bounding boxes */}
          <rect x="580" y="390" width="100" height="140" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
          <text x="580" y="385" fill="#22c55e" fontSize="9" fontFamily="monospace">person 0.97</text>
          <rect x="820" y="440" width="130" height="80" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
          <text x="820" y="435" fill="#ef4444" fontSize="9" fontFamily="monospace">vehicle 0.91</text>
          <rect x="960" y="560" width="80" height="80" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
          <text x="960" y="555" fill="#f59e0b" fontSize="9" fontFamily="monospace">object 0.83</text>

          {/* Telemetry bar */}
          <text x="50" y="1065" fill="#6b7280" fontSize="8" fontFamily="monospace">PLATFORM: BAYRAKTAR TB2 / AKINCI  |  MODE: SURVEY  |  MISSION: ACTIVE  |  LINK: 5.8GHz  |  FRAMES: 2847</text>
        </svg>
      </div>
      <section className="relative z-10 mb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-8">Industry Work</h1>
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-6 flex-col sm:flex-row">
            <div className="w-24 h-16 flex items-center justify-center flex-shrink-0">
              <Image src="/images/baykar-logo.png" alt="Baykar Technology" width={96} height={64} className="object-contain" />
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

      <section className="relative z-10">
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
