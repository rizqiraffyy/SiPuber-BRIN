"use client"

import { useEffect } from "react"
import { useMap } from "react-leaflet"
import L, { LatLngExpression, Layer } from "leaflet"
import "leaflet.heat"
import { parseWKT, getLatestDataPerDevice } from "@/lib/heatmap"
import airData from "@/app/stakeholder/data.json"
type HeatLatLngTuple = [number, number, number]

export default function HeatmapLayer({ location }: { location: "semarang" | "yogyakarta" }) {
  const map = useMap()

  useEffect(() => {
    const filtered = airData 

    const latestPoints = getLatestDataPerDevice(filtered)

    const heatData: HeatLatLngTuple[] = latestPoints.map((item) => {
      const [lat, lng] = parseWKT(item.location)
      const intensity = Math.min(item.ispu_realtime / 300, 1)
      return [lat, lng, intensity]
    })

    console.log("Heatmap data:", heatData)

    const heatLayerFactory = (L as typeof L & {
      heatLayer: (points: LatLngExpression[], options?: object) => Layer
    }).heatLayer

    const heatLayer = heatLayerFactory(heatData, {
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

    return () => {
      map.removeLayer(heatLayer)
    }
  }, [location, map])

  return null
}