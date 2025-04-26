"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { AdminNav } from "@/components/admin-nav"
import { checkAuthSession } from "@/lib/auth"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check authentication status
    const isAuth = checkAuthSession()
    setIsAuthenticated(isAuth)

    // If not authenticated and not on login page, redirect to login
    if (!isAuth && pathname !== "/admin") {
      router.push("/admin")
    }

    setIsLoading(false)

    // Check auth status every minute
    const interval = setInterval(() => {
      const currentAuth = checkAuthSession()
      if (isAuthenticated && !currentAuth) {
        // Session expired
        router.push("/admin")
      }
    }, 60000)

    return () => clearInterval(interval)
  }, [pathname, router, isAuthenticated])

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Show error state
  if (error && pathname !== "/admin") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Alert variant="destructive" className="max-w-md">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <button
          onClick={() => router.push("/admin")}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
        >
          Return to Login
        </button>
      </div>
    )
  }

  // If on login page or not authenticated, just render children
  if (pathname === "/admin" || !isAuthenticated) {
    return <>{children}</>
  }

  // If authenticated and not on login page, render admin layout
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AdminNav />
      <div className="flex flex-col">
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
