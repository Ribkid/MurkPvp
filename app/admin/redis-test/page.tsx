import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function RedisTestPage() {
  // Check for environment variables
  const envVars = {
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL ? "Set" : "Not set",
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN ? "Set" : "Not set",
    KV_REST_API_URL: process.env.KV_REST_API_URL ? "Set" : "Not set",
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN ? "Set" : "Not set",
    KV_URL: process.env.KV_URL ? "Set" : "Not set",
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Redis Environment Variables Test</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Environment Variables Status</CardTitle>
          <CardDescription>Check if Redis environment variables are available</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {Object.entries(envVars).map(([key, value]) => (
              <li key={key} className="flex justify-between">
                <span className="font-medium">{key}:</span>
                <span className={value === "Set" ? "text-green-500" : "text-red-500"}>{value}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="text-sm text-muted-foreground">
        <p>Note: This page only checks if the environment variables are set, not if they are valid.</p>
        <p>If variables show as "Not set", check your Vercel project settings.</p>
      </div>
    </div>
  )
}
