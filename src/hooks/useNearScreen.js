import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const elementRef = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver === 'undefined'
        ? import('intersection-observer')
        : window.IntersectionObserver
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(elementRef.current)
    })
  }, [elementRef])

  return [show, elementRef]
}
