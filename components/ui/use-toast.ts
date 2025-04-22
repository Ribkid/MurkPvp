"use client"

import { useState, useCallback } from "react"

type Toast = {
  id: string
  title?: string
  description?: string
  duration?: number
}

type ToastOptions = Omit<Toast, "id">

// Create a singleton instance for the toast state
let toasts: Toast[] = []
let listeners: Function[] = []

function notify() {
  listeners.forEach((listener) => listener(toasts))
}

export function toast(options: ToastOptions) {
  const id = Math.random().toString(36).substring(2, 9)
  const newToast = { id, ...options, duration: options.duration || 5000 }

  toasts = [...toasts, newToast]
  notify()

  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id)
    notify()
  }, newToast.duration)

  return id
}

export function useToast() {
  const [state, setState] = useState<Toast[]>(toasts)

  useCallback(() => {
    function handleChange(newToasts: Toast[]) {
      setState([...newToasts])
    }

    listeners.push(handleChange)
    return () => {
      listeners = listeners.filter((listener) => listener !== handleChange)
    }
  }, [])

  return {
    toast,
    toasts: state,
  }
}
