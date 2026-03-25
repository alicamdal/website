'use client'

import { useState } from 'react'
import Tag from './Tag'

interface Publication {
  title: string
  authors: string
  venue: string
  year: number
  type: 'conference' | 'journal'
  abstract: string
  pdf?: string
  arxiv?: string
  code?: string | null
  bibtex: string
}

interface PublicationCardProps {
  publication: Publication
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const [abstractOpen, setAbstractOpen] = useState(false)
  const [bibtexOpen, setBibtexOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyBibtex = async () => {
    await navigator.clipboard.writeText(publication.bibtex)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="flex items-start gap-3 flex-wrap mb-2">
        <Tag variant={publication.type === 'conference' ? 'blue' : 'green'}>
          {publication.type === 'conference' ? 'Conference' : 'Journal'}
        </Tag>
        <span className="text-sm text-gray-500 dark:text-gray-400">{publication.year}</span>
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-slate-100 mb-1 leading-snug">
        {publication.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{publication.authors}</p>
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{publication.venue}</p>

      <div className="flex flex-wrap gap-2">
        {publication.pdf && publication.pdf !== '#' && (
          <a
            href={publication.pdf}
            className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
            aria-label={`PDF for ${publication.title}`}
          >
            PDF
          </a>
        )}
        {publication.pdf === '#' && (
          <span className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">PDF</span>
        )}
        {publication.arxiv && (
          <a
            href={publication.arxiv === '#' ? undefined : publication.arxiv}
            className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            arXiv
          </a>
        )}
        {publication.code && (
          <a
            href={publication.code === '#' ? undefined : publication.code}
            className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Code
          </a>
        )}
        <button
          onClick={() => setAbstractOpen(!abstractOpen)}
          className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-expanded={abstractOpen}
        >
          {abstractOpen ? 'Hide Abstract' : 'Abstract'}
        </button>
        <button
          onClick={() => setBibtexOpen(!bibtexOpen)}
          className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-expanded={bibtexOpen}
        >
          BibTeX
        </button>
      </div>

      {abstractOpen && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{publication.abstract}</p>
        </div>
      )}

      {bibtexOpen && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="relative">
            <pre className="text-xs bg-gray-50 dark:bg-gray-900 p-3 rounded overflow-x-auto text-gray-700 dark:text-gray-300">
              {publication.bibtex}
            </pre>
            <button
              onClick={copyBibtex}
              className="absolute top-2 right-2 text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Copy BibTeX to clipboard"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
