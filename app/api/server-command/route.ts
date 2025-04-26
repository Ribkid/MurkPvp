import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Get the request body
    const body = await request.json()
    const { serverId, command, apiKey } = body

    if (!serverId || !command || !apiKey) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Make the request to the Minecraft server API
    const response = await fetch(`https://panel.murkpvp.com/api/client/servers/${serverId}/command`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ command }),
    })

    // Get the response data
    const data = await response.json()

    // Return the response
    return NextResponse.json({ success: response.ok, data }, { status: response.ok ? 200 : response.status })
  } catch (error: any) {
    console.error("Error executing server command:", error)
    return NextResponse.json({ error: error.message || "Failed to execute command" }, { status: 500 })
  }
}
