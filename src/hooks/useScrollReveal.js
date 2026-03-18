'use client'

import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.07}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
