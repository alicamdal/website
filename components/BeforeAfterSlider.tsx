'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

interface BeforeAfterSliderProps {
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export default function BeforeAfterSlider({
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    updatePosition(e.clientX)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    updatePosition(e.touches[0].clientX)
  }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (isDragging.current) updatePosition(e.clientX) }
    const onMouseUp = () => { isDragging.current = false }
    const onTouchMove = (e: TouchEvent) => { if (isDragging.current) updatePosition(e.touches[0].clientX) }
    const onTouchEnd = () => { isDragging.current = false }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [updatePosition])

  return (
    <div
      ref={containerRef}
      className={`relative w-full pb-[75%] select-none cursor-col-resize overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 ${className}`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      role="slider"
      aria-label="Before/after image comparison slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
        <p className="text-sm italic text-gray-400 dark:text-gray-500">[ {beforeLabel} ]</p>
      </div>
      <div
        className="absolute inset-0 overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <p className="text-sm italic text-gray-400 dark:text-gray-500">[ {afterLabel} ]</p>
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
        </div>
      </div>
      <span className="absolute bottom-2 left-3 text-xs font-medium text-white bg-black/50 px-2 py-0.5 rounded">{beforeLabel}</span>
      <span className="absolute bottom-2 right-3 text-xs font-medium text-white bg-black/50 px-2 py-0.5 rounded">{afterLabel}</span>
    </div>
  )
}
