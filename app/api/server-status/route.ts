import { NextResponse } from "next/server"

// Simple function to simulate pinging a Minecraft server
// In a real implementation, you would use a library like minecraft-server-util
async function pingMinecraftServer(serverAddress: string): Promise<boolean> {
  try {
    // In a real implementation, this would actually ping the server
    // For now, we'll simulate with random responses
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 300))

    // Simulate some servers being online and some offline
    // In production, replace this with actual server pinging logic
    if (serverAddress === "adventure.murkpvp.com") {
      return Math.random() > 0.3 // 70% chance of being online
    }

    return Math.random() > 0.1 // 90% chance of being online for other servers
  } catch (error) {
    console.error(`Error pinging server ${serverAddress}:`, error)
    return false
  }
}

export async function GET() {
  try {
    const servers = [
      { name: "Survival", address: "panel.murkpvp.com", version: "1.20.4" },
      { name: "Skyblock", address: "skyblock.murkpvp.com", version: "1.20.4" },
      { name: "Adventure", address: "adventure.murkpvp.com", version: "1.21" },
    ]

    const serverStatuses = await Promise.all(
      servers.map(async (server) => {
        const isOnline = await pingMinecraftServer(server.address)
        return {
          ...server,
          status: isOnline ? "online" : "offline",
        }
      }),
    )

    return NextResponse.json({ servers: serverStatuses })
  } catch (error) {
    console.error("Error checking server status:", error)
    // Return a more informative error response
    return NextResponse.json(
      {
        error: "Failed to check server status",
        servers: [
          { name: "Survival", address: "panel.murkpvp.com", version: "1.20.4", status: "unknown" },
          { name: "Skyblock", address: "skyblock.murkpvp.com", version: "1.20.4", status: "unknown" },
          { name: "Adventure", address: "adventure.murkpvp.com", version: "1.21", status: "unknown" },
        ],
      },
      { status: 200 }, // Return 200 with fallback data instead of 500
    )
  }
}
