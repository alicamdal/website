export type MediaItem = {
  label: string
  aspectRatio: '16/9' | '4/3'
  type: 'video' | 'gif' | 'image' | 'comparison'
}

export type IndustryProject = {
  slug: string
  title: string
  category: string
  categoryColor: 'blue' | 'green' | 'orange' | 'purple' | 'teal'
  shortDescription: string
  overview: string
  tech: string[]
  problem: string
  approach: string
  results: string
  metrics: { label: string; value: string }[]
  primaryMedia: MediaItem
  secondaryMedia: MediaItem[]
  additionalMedia?: MediaItem
}

export const industryProjects: IndustryProject[] = [
  {
    slug: 'object-detection-aerial',
    title: 'Aerial Object Detection',
    category: 'Object Detection',
    categoryColor: 'blue',
    shortDescription:
      'Real-time detection of vehicles, aircraft, and infrastructure in high-resolution aerial and satellite imagery.',
    overview:
      'Real-time detection of vehicles, aircraft, and infrastructure in high-resolution aerial and satellite imagery using custom-trained detection architectures optimized for overhead perspectives.',
    tech: ['PyTorch', 'ONNX', 'TensorRT', 'CUDA', 'Docker'],
    problem:
      'Standard object detectors trained on ground-level imagery struggle with the unique challenges of aerial perspectives: small object sizes, dense packing, arbitrary orientations, and the need for real-time inference at scale.',
    approach:
      'Multi-scale inference pipelines with specialized small-object handling, custom anchor configurations for aerial perspectives, and hardware-optimized inference using TensorRT for real-time deployment.',
    results:
      'Achieved production-grade detection performance across multiple object categories in aerial imagery, with inference latency suitable for real-time applications.',
    metrics: [
      { label: 'mAP@50', value: 'XX.X%' },
      { label: 'Inference', value: 'XX ms' },
    ],
    primaryMedia: {
      label: 'Primary Demo — Video / GIF',
      aspectRatio: '16/9',
      type: 'video',
    },
    secondaryMedia: [
      { label: 'Before / After comparison', aspectRatio: '4/3', type: 'comparison' },
      { label: 'Output visualization', aspectRatio: '4/3', type: 'image' },
    ],
    additionalMedia: {
      label: 'Additional visualization',
      aspectRatio: '16/9',
      type: 'image',
    },
  },
  {
    slug: 'semantic-segmentation-maps',
    title: 'Land Cover Semantic Segmentation',
    category: 'Semantic Segmentation',
    categoryColor: 'green',
    shortDescription:
      'Pixel-level classification of land cover types from multi-spectral aerial imagery for mapping and environmental monitoring.',
    overview:
      'Pixel-level classification of land cover types — buildings, vegetation, roads, water bodies — from multi-spectral aerial imagery.',
    tech: ['PyTorch', 'GDAL', 'OpenCV'],
    problem:
      'Automated land cover mapping from aerial imagery requires handling multi-spectral inputs, large image tiles, and producing spatially consistent predictions across wide geographic areas.',
    approach:
      'Encoder-decoder architecture adapted for multi-spectral input channels, with sliding window inference for large-scale imagery and post-processing for spatial consistency.',
    results:
      'Consistent land cover maps produced across diverse terrain types, supporting downstream environmental analysis and urban planning workflows.',
    metrics: [{ label: 'mIoU', value: 'XX.X%' }],
    primaryMedia: {
      label: 'Primary Demo — Video / GIF',
      aspectRatio: '16/9',
      type: 'video',
    },
    secondaryMedia: [
      { label: 'Before / After comparison', aspectRatio: '4/3', type: 'comparison' },
      { label: 'Output visualization', aspectRatio: '4/3', type: 'image' },
    ],
    additionalMedia: {
      label: 'Additional visualization',
      aspectRatio: '16/9',
      type: 'image',
    },
  },
  {
    slug: 'change-detection',
    title: 'Multi-temporal Change Detection',
    category: 'Change Detection',
    categoryColor: 'orange',
    shortDescription:
      'Detecting and localizing changes between aerial images captured at different time points for environmental monitoring.',
    overview:
      'Detecting and localizing changes between aerial images captured at different time points, enabling monitoring of construction, deforestation, and urban growth.',
    tech: ['PyTorch', 'GDAL', 'Docker'],
    problem:
      'Identifying meaningful changes between bi-temporal satellite or aerial image pairs is complicated by illumination differences, seasonal variation, sensor noise, and the need to distinguish true changes from false positives.',
    approach:
      'Siamese dual-branch architecture that jointly processes bi-temporal image pairs, learning change-sensitive feature representations robust to appearance variations while sensitive to structural changes.',
    results:
      'Reliable change detection across urban and rural environments, supporting automated monitoring pipelines for construction activity and land use change.',
    metrics: [
      { label: 'F1', value: 'XX.X%' },
      { label: 'IoU', value: 'XX.X%' },
    ],
    primaryMedia: {
      label: 'Primary Demo — Video / GIF',
      aspectRatio: '16/9',
      type: 'video',
    },
    secondaryMedia: [
      { label: 'Before / After comparison', aspectRatio: '4/3', type: 'comparison' },
      { label: 'Output visualization', aspectRatio: '4/3', type: 'image' },
    ],
    additionalMedia: {
      label: 'Additional visualization',
      aspectRatio: '16/9',
      type: 'image',
    },
  },
  {
    slug: 'similarity-search',
    title: 'Visual Similarity Search',
    category: 'Similarity Search',
    categoryColor: 'purple',
    shortDescription:
      'Embedding-based retrieval system for finding visually similar patches across large-scale remote sensing archives.',
    overview:
      'Embedding-based retrieval system that finds visually similar patches or regions across large-scale remote sensing image archives.',
    tech: ['PyTorch', 'FAISS', 'HuggingFace', 'FastAPI'],
    problem:
      'Searching large remote sensing image archives for visually similar regions is computationally prohibitive with pixel-level comparison, requiring efficient representation learning and approximate nearest neighbor search at scale.',
    approach:
      'Contrastive learning to train compact visual embeddings for remote sensing patches, paired with FAISS approximate nearest neighbor indexing for sub-second retrieval over million-scale image archives.',
    results:
      'Sub-second query response times over large image archives, enabling practical interactive search for analysts and downstream automated workflows.',
    metrics: [{ label: 'Recall@5', value: 'XX.X%' }],
    primaryMedia: {
      label: 'Primary Demo — Video / GIF',
      aspectRatio: '16/9',
      type: 'video',
    },
    secondaryMedia: [
      { label: 'Before / After comparison', aspectRatio: '4/3', type: 'comparison' },
      { label: 'Output visualization', aspectRatio: '4/3', type: 'image' },
    ],
    additionalMedia: {
      label: 'Additional visualization',
      aspectRatio: '16/9',
      type: 'image',
    },
  },
  {
    slug: 'image-projection',
    title: 'Image Projection & Georeferencing',
    category: 'Image Projection',
    categoryColor: 'teal',
    shortDescription:
      'Projecting aerial and satellite imagery onto geographic coordinate systems for accurate spatial analysis and map overlay.',
    overview:
      'Projecting aerial and satellite imagery onto geographic coordinate systems, enabling accurate spatial analysis and map overlay.',
    tech: ['OpenCV', 'GDAL', 'QGIS', 'NumPy'],
    problem:
      'Raw aerial imagery from UAVs and satellites lacks accurate geographic context. Aligning imagery to map coordinate systems requires camera calibration, distortion correction, and robust coordinate transformation pipelines.',
    approach:
      'Camera model calibration for lens distortion, homography estimation for planar scenes, and full RPC-based coordinate transformation pipelines supporting multiple coordinate reference systems.',
    results:
      'Production pipeline for georeferencing imagery from multiple sensor types, supporting downstream GIS analysis and map overlay workflows.',
    metrics: [{ label: 'Reprojection error', value: 'X.XX px' }],
    primaryMedia: {
      label: 'Primary Demo — Video / GIF',
      aspectRatio: '16/9',
      type: 'video',
    },
    secondaryMedia: [
      { label: 'Before / After comparison', aspectRatio: '4/3', type: 'comparison' },
      { label: 'Output visualization', aspectRatio: '4/3', type: 'image' },
    ],
    additionalMedia: {
      label: 'Additional visualization',
      aspectRatio: '16/9',
      type: 'image',
    },
  },
]
