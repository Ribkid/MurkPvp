"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { AdminNav } from "@/components/admin-nav"
import { supabase } from "@/lib/supabase"
import { setupDatabase } from "@/lib/db-setup"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user is authenticated first
        const { data } = await supabase.auth.getSession()
        const isAuth = !!data.session

        setIsAuthenticated(isAuth)

        // Only try to set up the database if we're on the admin page
        // This prevents unnecessary database setup attempts on every page load
        if (pathname === "/admin") {
          // Try to set up the database if needed
          await setupDatabase().catch((err) => {
            console.error("Database setup error:", err)
          })
        }

        // If not authenticated and not on login page, redirect to login
        if (!isAuth && pathname !== "/admin") {
          router.push("/admin")
        }
      } catch (error) {
        console.error("Auth check error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()

    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      const isAuth = !!session
      setIsAuthenticated(isAuth)

      if (!isAuth && pathname !== "/admin") {
        router.push("/admin")
      }
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [pathname, router])

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
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
