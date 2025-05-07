"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"



function MultiTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "flex flex-row gap-6 flex-wrap justify-between",
        className
      )}
      {...props}
    />
  )
}

function MultiTabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "bg-muted py-[3px] px-[6px] min-w-64 max-w-96 rounded-lg h-9 text-sm data-[state=active]:bg-mred data-[state=active]:text-background transition-[color,box-shadow] shadow-sm data-[state=active]:border-muted",
        className
      )}
      {...props}
    />
  )
}


export { MultiTabsList, MultiTabsTrigger }
