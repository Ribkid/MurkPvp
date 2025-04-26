import { NextResponse } from "next/server"
import { isRedisAvailable } from "@/lib/redis"

export async function GET() {
  try {
    // Check Redis connection
    const isConnected = await isRedisAvailable()

    // Return connection status
    return NextResponse.json({
      isConnected,
      timestamp: new Date().toISOString(),
      environment: {
        hasRedisUrl: !!process.env.REDIS_URL || !!process.env.KV_URL,
        hasRedisToken: !!process.env.KV_REST_API_TOKEN,
      },
    })
  } catch (error: any) {
    console.error("Redis test error:", error)
    return NextResponse.json(
      {
        error: error.message || "Redis test failed",
        isConnected: false,
      },
      { status: 500 },
    )
  }
}
