"use client"

import { useEffect, useState, type ReactNode } from "react"

export default function FadeIn({ children, delay = 0, duration = 500, className = "" }: { children: ReactNode, delay?: number, duration?: number, className?: string }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay])

    return (
        <div className={`transform transition-all ${isVisible ? "translate-y-0 opacity-100 filter-none" : "-translate-y-[-10px] opacity-0 filter blur-sm"} ${className}`} style={{ transitionDuration: `${duration}ms` }}>
            {children}
        </div>
    )
}