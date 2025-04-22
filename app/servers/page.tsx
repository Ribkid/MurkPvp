import Image from "next/image"
import { ServerStatus } from "@/components/server-status"

export const metadata = {
  title: "Servers | MurkCraft Wiki",
  description: "Information about MurkCraft servers",
}

export default function ServersPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Our Servers</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Server Status</h2>
        <ServerStatus />
      </div>

      <div className="space-y-12 mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Survival Server</h2>
            <p className="text-lg mb-4">
              Our main survival server features custom enchantments, land claiming, and more. Join us for a unique
              survival experience with a friendly community.
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="font-mono">panel.murkpvp.com</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/blocky-survival.png"
              alt="Survival Server"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:order-2">
            <Image
              src="/images/skyblock-logo.png"
              alt="Skyblock Server"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4">Skyblock Server</h2>
            <p className="text-lg mb-4">
              Start your adventure on a floating island and expand your territory. Our Skyblock server includes custom
              islands, challenges, and economy.
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="font-mono">skyblock.murkpvp.com</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Adventure Server</h2>
            <p className="text-lg mb-4">
              Explore custom-made adventures, dungeons, and quests on our Adventure server. New content is added
              regularly for an ever-evolving experience.
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="font-mono">adventure.murkpvp.com</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/pixelated-quest.png"
              alt="Adventure Server"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
