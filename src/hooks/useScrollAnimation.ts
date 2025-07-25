import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
}

export const useScrollAnimation = ({ threshold = 0.1, rootMargin = '0px' }: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold, rootMargin])

  return { isVisible, elementRef }
}

export const fadeInUp = (isVisible: boolean) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: 'all 0.6s ease-out',
})

export const fadeIn = (isVisible: boolean) => ({
  opacity: isVisible ? 1 : 0,
  transition: 'opacity 0.6s ease-out',
})

export const scaleIn = (isVisible: boolean) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'scale(1)' : 'scale(0.95)',
  transition: 'all 0.6s ease-out',
})

export const staggeredFadeInUp = (isVisible: boolean, index: number, delay: number = 0.1) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: `all 0.6s ease-out ${isVisible ? index * delay : 0}s`,
})