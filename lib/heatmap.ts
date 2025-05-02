// utils/heatmap.ts

export type RawISPUData = {
    device_id: string
    created_at: string
    location: string
    ispu_realtime: number
  }
  
  // Parse WKT: "SRID=4326;POINT(110.364917 -7.801194)" -> [lat, lng]
  export const parseWKT = (wkt: string): [number, number] => {
    const match = wkt.match(/POINT\(([-\d.]+) ([-\d.]+)\)/)
    if (!match) return [0, 0]
    const [, lng, lat] = match
    return [parseFloat(lat), parseFloat(lng)]
  }
  
  // Ambil data terbaru per device
  export const getLatestDataPerDevice = (data: RawISPUData[]): RawISPUData[] => {
    const latestByDevice: Record<string, RawISPUData> = {}
  
    for (const item of data) {
      if (!item.ispu_realtime || item.ispu_realtime < 0) continue
  
      const current = latestByDevice[item.device_id]
      if (!current || new Date(item.created_at) > new Date(current.created_at)) {
        latestByDevice[item.device_id] = item
      }
    }
  
    return Object.values(latestByDevice)
  }
  