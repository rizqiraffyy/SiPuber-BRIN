import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card">
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              Device
            </CardTitle>
            <div className="w-6 h-6 rounded-full bg-green-500 border border-white shadow"/>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Lorem ipsum dolor sit.
          </div>
          <div className="text-muted-foreground">
            Lorem ipsum dolor sit amet.
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              Device
            </CardTitle>
            <div className="w-6 h-6 rounded-full bg-green-500 border border-white shadow"/>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Lorem ipsum dolor sit.
          </div>
          <div className="text-muted-foreground">
            Lorem ipsum dolor sit amet.
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              Device
            </CardTitle>
            <div className="w-6 h-6 rounded-full bg-red-500 border border-white shadow"/>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Lorem ipsum dolor sit.
          </div>
          <div className="text-muted-foreground">
            Lorem ipsum dolor sit amet.
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <div className="flex items-center justify-between">
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              Device
            </CardTitle>
            <div className="w-6 h-6 rounded-full bg-red-500 border border-white shadow"/>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Lorem ipsum dolor sit.
          </div>
          <div className="text-muted-foreground">
            Lorem ipsum dolor sit amet.
          </div>
        </CardFooter>
      </Card>
      
    </div>
  )
}