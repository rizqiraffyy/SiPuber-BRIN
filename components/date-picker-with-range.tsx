"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils" // Pastikan file ini ada dan ekspor fungsi `cn`
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A date picker component that allows users to select a range of dates.
 * 
 * @param className - Additional CSS classes to apply to the component.
 * @param date - The currently selected date range. If undefined, no date is selected.
 * @param setDate - Function to update the selected date range.
 * 
 * This component uses a popover to display the calendar for selecting dates.
 * The selected date range is displayed on the button. If no date is selected,
 * a placeholder text "Pick a date" is shown.
 */

/*******  22d15b05-f729-4907-a2c4-521199cd184a  *******/
export function DatePickerWithRange({
  className,
  date,
  setDate,
}: React.HTMLAttributes<HTMLDivElement> & {
  date: DateRange | undefined
  setDate: (value: DateRange | undefined) => void
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "sm:w-[300px] w-10 sm:justify-start justify-center sm:text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
        <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            <span className="hidden sm:inline ml-2">
              {date.to
                ? `${format(date.from, "LLL dd, y")} - ${format(date.to, "LLL dd, y")}`
                : format(date.from, "LLL dd, y")}
            </span>
          ) : (
            <span className="hidden sm:inline ml-2">Pick a date</span>
          )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
