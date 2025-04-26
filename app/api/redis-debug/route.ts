import { NextResponse } from "next/server"
import { redis, isRedisAvailable } from "@/lib/redis"

export async function GET() {
  // Get raw environment variables
  const rawUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || ""

  // Process URL for display (add https:// if missing)
  let processedUrl = rawUrl
  if (!processedUrl.startsWith("http://") && !processedUrl.startsWith("https://")) {
    processedUrl = `https://${processedUrl}`
  }

  // Redact sensitive parts for display
  const redactedUrl = processedUrl
    ? `${processedUrl.substring(0, 8)}...${processedUrl.substring(processedUrl.indexOf("."))}`
    : undefined

  // Collect environment variables (redact sensitive parts)
  const envVars = {
    KV_REST_API_URL: process.env.KV_REST_API_URL
      ? process.env.KV_REST_API_URL.startsWith("http")
        ? `${process.env.KV_REST_API_URL.substring(0, 10)}...`
        : process.env.KV_REST_API_URL
      : undefined,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL
      ? process.env.UPSTASH_REDIS_REST_URL.startsWith("http")
        ? `${process.env.UPSTASH_REDIS_REST_URL.substring(0, 10)}...`
        : process.env.UPSTASH_REDIS_REST_URL
      : undefined,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN
      ? `${process.env.KV_REST_API_TOKEN.substring(0, 5)}...`
      : undefined,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN
      ? `${process.env.UPSTASH_REDIS_REST_TOKEN.substring(0, 5)}...`
      : undefined,
    REDIS_URL: process.env.REDIS_URL ? `${process.env.REDIS_URL.substring(0, 10)}...` : undefined,
  }

  // Check Redis client
  const clientInitialized = !!redis

  // Check Redis connection
  let isConnected = false
  let pingError = null

  if (clientInitialized) {
    try {
      isConnected = await isRedisAvailable()
    } catch (error: any) {
      pingError = error.message
    }
  }

  return NextResponse.json({
    environment: envVars,
    processedUrl: redactedUrl,
    clientInitialized,
    isConnected,
    pingError,
    message: "This endpoint helps diagnose Redis connection issues",
  })
}
