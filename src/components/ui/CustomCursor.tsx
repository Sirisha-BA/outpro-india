'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [outline, setOutline] = useState({ x: 0, y: 0 })
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setTimeout(() => setOutline({ x: e.clientX, y: e.clientY }), 80)
    }

    const handleHover = () => setIsHover(true)
    const handleLeave = () => setIsHover(false)

    window.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px) scale(${isHover ? 2 : 1})`,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          transform: `translate(${outline.x - 18}px, ${outline.y - 18}px)`,
          width: isHover ? '60px' : '36px',
          height: isHover ? '60px' : '36px',
          borderColor: isHover ? 'rgba(0,212,255,0.8)' : 'rgba(0,212,255,0.4)',
        }}
      />
    </>
  )
}
