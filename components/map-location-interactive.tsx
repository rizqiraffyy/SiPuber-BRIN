"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup, ToggleGroupItem,
} from "@/components/ui/toggle-group"

// ⬇️ HeatmapLayer diimpor secara dinamis tanpa SSR
const HeatmapLayer = dynamic<{
  location: "semarang" | "yogyakarta"
}>(() => import("./heatmaplayer"), { ssr: false })

const locations: Record<"semarang" | "yogyakarta", { center: [number, number]; zoom: number }> = {
  semarang: { center: [-6.9667, 110.4167], zoom: 11 },
  yogyakarta: { center: [-7.7956, 110.3695], zoom: 11 },
}

export function MapLocationInteractive() {
  const isMobile = useIsMobile()
  const [location, setLocation] = React.useState<"semarang" | "yogyakarta">("semarang")

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Air Pollution Map</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden">
            Peta sebaran tingkat polusi (ISPU) secara real-time
          </span>
          <span className="@[540px]/card:hidden">
            {location === "semarang" ? "Semarang" : "Yogyakarta"}
          </span>
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={location}
            onValueChange={(val) => val && setLocation(val as "semarang" | "yogyakarta")}
            variant="outline"
            className="@[767px]/card:flex hidden"
          >
            <ToggleGroupItem value="semarang" className="h-8 px-2.5">Semarang</ToggleGroupItem>
            <ToggleGroupItem value="yogyakarta" className="h-8 px-2.5">Yogyakarta</ToggleGroupItem>
          </ToggleGroup>
          <Select value={location} onValueChange={(val) => setLocation(val as "semarang" | "yogyakarta")}>
            <SelectTrigger className="@[767px]/card:hidden flex w-40" aria-label="Select Location">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent className="rounded-xl z-[999]">
              <SelectItem value="semarang" className="rounded-lg">Semarang</SelectItem>
              <SelectItem value="yogyakarta" className="rounded-lg">Yogyakarta</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <div className="relative z-0 h-[400px] w-full rounded-lg overflow-hidden">
          <MapContainer
            key={location}
            center={locations[location].center}
            zoom={isMobile ? locations[location].zoom - 1 : locations[location].zoom}
            scrollWheelZoom
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <HeatmapLayer location={location} />
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  )
}
