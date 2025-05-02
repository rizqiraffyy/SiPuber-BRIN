"use client"

import * as React from "react"
import { DateRange } from "react-day-picker"
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ColumnsIcon,
  MoreVerticalIcon,
  Download,
  CheckCircle2Icon,
  CircleIcon,
  AlertTriangleIcon,
  SkullIcon,
  XCircleIcon,
} from "lucide-react"
import { z } from "zod"
import { DatePickerWithRange } from "@/components/date-picker-with-range"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export const schema = z.object({
  id: z.number(),
  device_id: z.string(), // Menambahkan device_id yang bertipe string
  created_at: z.string(), // created_at berupa string, bisa gunakan z.string() atau z.date() jika ingin parsing menjadi Date
  location: z.string(), // location bertipe string
  co: z.number(), // co bertipe number
  so: z.number(), // so bertipe number
  no2: z.number(), // no2 bertipe number
  o3: z.number(), // o3 bertipe number
  nh3: z.number(), // nh3 bertipe number
  pm1: z.number(), // pm1 bertipe number
  pm25: z.number(), // pm25 bertipe number
  pm10: z.number(), // pm10 bertipe number
  high_params: z.string(), // high_params berupa array yang berisi string
  ispu_realtime: z.number(), // ispu_realtime bertipe number
})

const columns: ColumnDef<z.infer<typeof schema>>[] = [
  {
    accessorKey: "Device ID",
    header: () => <div className="min-w-[80px] px-4 text-center">Device ID</div>,
    cell: ({ row }) => (
      <div className="min-w-[80px] px-4 text-center">
        {row.original.device_id}
      </div>
    ),
  },
  {
    accessorKey: "Waktu",
    header: () => <div className="min-w-[80px] px-4 text-center">Waktu</div>,
    cell: ({ row }) => {
      const date = new Date(row.original.created_at);
  
      const formattedDate = date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
  
      const formattedTime = date.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
  
      return (
        <div className="min-w-[80px] px-4 text-center">
          <Badge variant="outline" className="block px-1.5 text-muted-foreground">
            {formattedDate}
          </Badge>
          <Badge variant="outline" className="block px-1.5 text-muted-foreground mt-1">
            {formattedTime}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "Lokasi",
    header: () => <div className="min-w-[80px] px-4 text-center">Location</div>,
    cell: ({ row }) => {
      const locationString = row.original.location;
  
      if (!locationString || typeof locationString !== "string") {
        return <div className="w-32 text-center text-muted-foreground">-</div>;
      }
  
      const match = locationString.match(/POINT\(([-\d.]+) ([-\d.]+)\)/);
      const longitude = match?.[1] || "-";
      const latitude = match?.[2] || "-";
  
      return (
        <div className="min-w-[80px] px-4 text-center">
          <Badge variant="outline" className="block px-1.5 text-muted-foreground">
            Long: {longitude}
          </Badge>
          <Badge variant="outline" className="block px-1.5 text-muted-foreground mt-1">
            Lat: {latitude}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "Status",
    header: () => <div className="min-w-[80px] px-4 text-center">Status</div>,
    cell: ({ row }) => {
      const ispu = row.original.ispu_realtime;
  
      // Style dan ikon berdasarkan kategori ISPU
      const getISPUStyle = (value: number) => {
        if (value <= 50)
          return { label: "Baik", color: "text-green-500", icon: "CheckCircle2" };
        if (value <= 100)
          return { label: "Sedang", color: "text-yellow-500", icon: "Circle" };
        if (value <= 200)
          return { label: "Tidak Sehat", color: "text-orange-500", icon: "XCircle" };
        if (value <= 300)
          return { label: "Sangat Tidak Sehat", color: "text-red-500", icon: "AlertTriangle" };
        return { label: "Berbahaya", color: "text-purple-600", icon: "Skull" };
      };
  
      const { label, color, icon } = getISPUStyle(ispu);
  
      // Map icon name ke komponen Lucide
      const IconComponent = {
        CheckCircle2: CheckCircle2Icon,
        Circle: CircleIcon,
        AlertTriangle: AlertTriangleIcon,
        Skull: SkullIcon,
        XCircle: XCircleIcon,
      }[icon];
  
      return (
        <Badge
          variant="outline"
          className={'min-w-[80px] px-4 text-center [&_svg]:size-3 ${color}'}
        >
          {IconComponent && <IconComponent className={color} />}
          <span className={color}>{label}</span>
        </Badge>
      );
    },
  },
  {
    accessorKey: "ISPU",
    header: () => <div className="min-w-[80px] px-4 text-center">ISPU</div>,
    cell: ({ row }) => (
      <div className="min-w-[80px] px-4 text-center">
        {row.original.ispu_realtime}
      </div>
    ),
  },
  {
    accessorKey: "Tertinggi",
    header: () => <div className="min-w-[80px] px-4 text-center">Tertinggi</div>,
  
    cell: ({ row }) => {
      const prettyLabel = (param: string) => {
        switch (param.toLowerCase()) {
          case "co":
            return "CO";
          case "so":
            return "SO";
          case "no2":
            return "NO₂";
          case "o3":
            return "O₃";
          case "nh3":
            return "NH₃";
          case "pm1":
            return "PM1";
          case "pm10":
            return "PM10";
          case "pm25":
            return "PM2.5";
          default:
            return param.toUpperCase();
        }
      };
  
      const param = row.original.high_params; // Asumsi hanya satu parameter
  
      return (
        <div className="min-w-[80px] px-4 text-center">
          <Badge
            variant="outline"
            className="px-1.5 text-muted-foreground"
          >
            {prettyLabel(param)}
          </Badge>
        </div>
      );
    },
  },  
  {
    accessorKey: "CO",
    header: () => <div className="min-w-[80px] px-4 text-center">CO (ppm)</div>,
    cell: ({ row }) => (
      <div className="min-w-[80px] px-4 text-center">
        {row.original.co}
      </div>
    ),
  },
  {
    accessorKey: "SO₂",
    header: () => <div className="min-w-[80px] px-4 text-center">SO₂ (ppm)</div>,
    cell: ({ row }) => (
      <div className="min-w-[80px] px-4 text-center">
        {row.original.so}
      </div>
    ),
  },
  {
    accessorKey: "NO₂",
    header: () => <div className="min-w-[80px] px-4 text-center">NO₂ (ppm)</div>,
    cell: ({ row }) => (
      <div className="min-w-[80px] px-4 text-center">
        {row.original.no2}
      </div>
    ),
  },
  {
    accessorKey: "O₃",
    header: () => <div className="min-w-[80px] px-4 text-center">O₃ (ppm)</div>,
    cell: ({ row }) => (
      <div className="min-w-[80px] px-4 text-center">
        {row.original.o3}
      </div>
    ),
  },
  {
    accessorKey: "NH₃",
    header: () => <div className="min-w-[80px] px-4 text-center">NH₃ (ppm)</div>,
    cell: ({ row }) => (
      <div className="min-w-[80px] px-4 text-center">
        {row.original.nh3}
      </div>
    ),
  },
  {
    accessorKey: "PM1",
    header: () => <div className="min-w-[80px] px-4 text-center">PM1 (µg/m³)</div>,
    cell: ({ row }) => (
      <div className="min-w-[80px] px-4 text-center">
        {row.original.pm1}
      </div>
    ),
  },
  {
    accessorKey: "PM25",
    header: () => <div className="min-w-[80px] px-4 text-center">PM2.5 (µg/m³)</div>,
    cell: ({ row }) => (
      <div className="min-w-[80px] px-4 text-center">
        {row.original.pm25}
      </div>
    ),
  },
  {
    accessorKey: "PM10",
    header: () => <div className="min-w-[80px] px-4 text-center">PM10 (µg/m³)</div>,
    cell: ({ row }) => (
      <div className="min-w-[80px] px-4 text-center">
        {row.original.pm10}
      </div>
    ),
  },
  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
            size="icon"
          >
            <MoreVerticalIcon />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

function DraggableRow({ row }: { row: Row<z.infer<typeof schema>> }) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  })

  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      data-dragging={isDragging}
      ref={setNodeRef}
      className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}
const KOTA_COORDINATES = {
  semarang: {
    latMin: -7.1,
    latMax: -6.9,
    lngMin: 110.3,
    lngMax: 110.5,
  },
  yogyakarta: {
    latMin: -7.9,
    latMax: -7.5,
    lngMin: 110.3,
    lngMax: 110.5,
  },
}
function downloadCSV(data: z.infer<typeof schema>[]) {
  const header = Object.keys(data[0] ?? {}).join(",")
  const rows = data.map((row) =>
    Object.values(row)
      .map((val) => `"${String(val).replace(/"/g, '""')}"`)
      .join(",")
  )
  const csvContent = [header, ...rows].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.setAttribute("download", "data.csv")
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function DataTable({
  data: initialData,
}: {
  data: z.infer<typeof schema>[]
}) {
  const [selectedLocation, setSelectedLocation] = React.useState("all")
  
  const [data, setData] = React.useState(() => initialData)
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const sortableId = React.useId()
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })  

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data?.map(({ id }) => id) || [],
    [data]
  )
  const filteredData = React.useMemo(() => {
    return initialData.filter((item) => {
      // Filter tanggal jika ada
      let isInDateRange = true
      if (dateRange?.from && dateRange?.to) {
        const start = new Date(dateRange.from)
        const end = new Date(dateRange.to)
        end.setHours(23, 59, 59, 999)
        const itemDate = new Date(item.created_at)
        isInDateRange = itemDate >= start && itemDate <= end
      }
  
      // Filter lokasi jika dipilih selain "all"
      let locationMatch = true
      if (selectedLocation !== "all") {
        const cleanLocation = item.location?.replace(/^SRID=\d+;/, "") || ""
        const match = cleanLocation.match(/POINT\(([-\d.]+) ([-\d.]+)\)/)
  
        if (!match) return false
  
        const lng = parseFloat(match[1])
        const lat = parseFloat(match[2])
  
        const bounds = KOTA_COORDINATES[selectedLocation as keyof typeof KOTA_COORDINATES]
        locationMatch =
          lat >= bounds.latMin &&
          lat <= bounds.latMax &&
          lng >= bounds.lngMin &&
          lng <= bounds.lngMax
      }
  
      return isInDateRange && locationMatch
    })
  }, [initialData, dateRange, selectedLocation])
  
  
  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id)
        const newIndex = dataIds.indexOf(over.id)
        return arrayMove(data, oldIndex, newIndex)
      })
    }
  }

  return (
    <Tabs
      defaultValue="outline"
      className="flex w-full flex-col justify-start gap-6"
    >
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label htmlFor="view-selector" className="sr-only">
          View
        </Label>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger
            className="@4xl/main:hidden flex w-fit"
            id="view-selector"
          >
            <SelectValue placeholder="Select a view" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="semarang">Semarang</SelectItem>
            <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
          </SelectContent>
        </Select>
        <TabsList className="@4xl/main:flex hidden">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="semarang" className="gap-1">
            Semarang{" "}
          </TabsTrigger>
          <TabsTrigger value="yogyakarta" className="gap-1">
            Yogyakarta{" "}
          </TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
        <div className="block sm:hidden mr-2">
          {/* Mobile only: Icon-only DatePicker */}
          <DatePickerWithRange
            date={dateRange}
            setDate={setDateRange}
            className="w-10 p-0 justify-center"
          />
        </div>
        <div className="hidden sm:block">
          {/* Desktop only: Full DatePicker */}
          <DatePickerWithRange date={dateRange} setDate={setDateRange} />
        </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <ColumnsIcon />
                <span className="hidden lg:inline">Customize Columns</span>
                <span className="lg:hidden">Columns</span>
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {table
                .getAllColumns()
                .filter(
                  (column) =>
                    typeof column.accessorFn !== "undefined" &&
                    column.getCanHide()
                )
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm" onClick={() => downloadCSV(filteredData)}>
            <Download />
            <span className="hidden lg:inline">Download</span>
          </Button>
        </div>
      </div>
      <TabsContent
        value="outline"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-lg border">
          <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            id={sortableId}
          >
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-muted">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className="**:data-[slot=table-cell]:first:w-8">
                {table.getRowModel().rows?.length ? (
                  <SortableContext
                    items={dataIds}
                    strategy={verticalListSortingStrategy}
                  >
                    {table.getRowModel().rows.map((row) => (
                      <DraggableRow key={row.id} row={row} />
                    ))}
                  </SortableContext>
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </DndContext>
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex w-full items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                Rows per page
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger className="w-20" id="rows-per-page">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-fit items-center justify-center text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>
            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to first page</span>
                <ChevronsLeftIcon />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to previous page</span>
                <ChevronLeftIcon />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to next page</span>
                <ChevronRightIcon />
              </Button>
              <Button
                variant="outline"
                className="hidden size-8 lg:flex"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to last page</span>
                <ChevronsRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="past-performance"
        className="flex flex-col px-4 lg:px-6"
      >
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
      <TabsContent value="key-personnel" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
      <TabsContent
        value="focus-documents"
        className="flex flex-col px-4 lg:px-6"
      >
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
    </Tabs>
  )
}

