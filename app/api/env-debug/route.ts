import { NextResponse } from "next/server"

export async function GET() {
  // Check for all possible environment variables
  const envVars = {
    // Upstash Redis variables
    UPSTASH_REDIS_REST_URL: maskValue(process.env.UPSTASH_REDIS_REST_URL),
    UPSTASH_REDIS_REST_TOKEN: maskValue(process.env.UPSTASH_REDIS_REST_TOKEN),
    KV_REST_API_URL: maskValue(process.env.KV_REST_API_URL),
    KV_REST_API_TOKEN: maskValue(process.env.KV_REST_API_TOKEN),
    KV_URL: maskValue(process.env.KV_URL),
    KV_REST_API_READ_ONLY_TOKEN: maskValue(process.env.KV_REST_API_READ_ONLY_TOKEN),

    // Other environment variables
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
  }

  // Check if we're running in a Vercel environment
  const isVercel = !!process.env.VERCEL || !!process.env.VERCEL_ENV

  return NextResponse.json({
    environment: envVars,
    isVercel,
    timestamp: new Date().toISOString(),
    message: "This endpoint shows available environment variables (with sensitive data masked)",
  })
}

// Helper function to mask sensitive values
function maskValue(value: string | undefined): string | undefined {
  if (!value) return undefined
  if (value.length <= 8) return "***" // Mask short values entirely
  return value.substring(0, 4) + "..." + value.substring(value.length - 4)
}
