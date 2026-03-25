import { MetadataRoute } from 'next'
import { industryProjects } from '@/data/industry-projects'
import { getBlogSlugs } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://[YOUR-DOMAIN].com'
  const staticRoutes = ['', '/about', '/research', '/industry', '/projects', '/blog', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  const industryRoutes = industryProjects.map((p) => ({ url: `${baseUrl}/industry/${p.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 }))
  const blogRoutes = getBlogSlugs().map((slug) => ({ url: `${baseUrl}/blog/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 }))
  return [...staticRoutes, ...industryRoutes, ...blogRoutes]
}
