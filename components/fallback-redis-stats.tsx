import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FallbackRedisStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Redis Statistics</CardTitle>
        <CardDescription>Real-time bug report data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Connection Status:</span>
            <span className="font-medium text-amber-500">Offline Mode</span>
          </div>
          <div className="text-sm bg-amber-50 dark:bg-amber-950/30 p-2 rounded">
            Redis connection is currently unavailable. Bug reports will be stored in Supabase only.
          </div>
          <div className="flex items-center justify-between">
            <span>Total Bug Reports:</span>
            <span className="font-medium">-</span>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Reports by Category:</h4>
            <p className="text-sm text-muted-foreground">Data unavailable in offline mode</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
