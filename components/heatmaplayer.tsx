"use client"

import { useEffect } from "react"
import { useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet.heat"
import { parseWKT, getLatestDataPerDevice } from "@/lib/heatmap"
import airData from "@/app/stakeholder/data.json"

interface HeatmapLayerProps {
  location: "semarang" | "yogyakarta"
}

export function HeatmapLayer({ location }: HeatmapLayerProps) {
  const map = useMap()

  useEffect(() => {
    const filtered = airData // atau filter sesuai lokasi

    const latestPoints = getLatestDataPerDevice(filtered)

    const heatData = latestPoints.map((item) => {
      const [lat, lng] = parseWKT(item.location)
      const intensity = Math.min(item.ispu_realtime / 300, 1)
      return [lat, lng, intensity] as [number, number, number]
    })

    console.log("Heatmap data:", heatData)

    const heatLayer = L.heatLayer(heatData, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
      gradient: {
        0.1: "green",
        0.3: "yellow",
        0.6: "orange",
        0.8: "red",
        1.0: "purple",
      },
    })

    // ⬇️ Ini baris yang kamu tanyakan
    heatLayer.addTo(map)

    return () => {
      map.removeLayer(heatLayer)
    }
  }, [location, map])

  return null
}