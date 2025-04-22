import { NextResponse } from "next/server"

// Simple function that always returns online status
async function pingMinecraftServer(): Promise<boolean> {
  // Always return true (online)
  return true
}

export async function GET() {
  try {
    const servers = [
      { name: "Survival", address: "panel.murkpvp.com", version: "1.21.4" },
      { name: "Skyblock", address: "skyblock.murkpvp.com", version: "1.21.4" },
      { name: "Adventure", address: "adventure.murkpvp.com", version: "1.21" },
    ]

    const serverStatuses = await Promise.all(
      servers.map(async (server) => {
        const isOnline = await pingMinecraftServer()
        return {
          ...server,
          status: isOnline ? "online" : "offline", // Will always be "online" now
        }
      }),
    )

    return NextResponse.json({ servers: serverStatuses })
  } catch (error) {
    console.error("Error checking server status:", error)
    // Return a more informative error response with servers always online
    return NextResponse.json(
      {
        error: "Failed to check server status",
        servers: [
          { name: "Survival", address: "panel.murkpvp.com", version: "1.21.4", status: "online" },
          { name: "Skyblock", address: "skyblock.murkpvp.com", version: "1.21.4", status: "online" },
          { name: "Adventure", address: "adventure.murkpvp.com", version: "1.21", status: "online" },
        ],
      },
      { status: 200 },
    )
  }
}
