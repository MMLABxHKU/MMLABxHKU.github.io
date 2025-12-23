"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A multiple line chart"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#4286F3",
    },
    mobile: {
        label: "Mobile",
        color: "#ebb017",
    },
} satisfies ChartConfig



export function ExampleChart() {
    return (
        <Card className="p-4 m-0 gap-3 flex-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">


            <CardContent className="px-0">
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                        left: 12,
                        right: 12,
                        }}
                    >
                        <defs>
                            <linearGradient id="liquidGlassBlueLineEx" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#2563EB" />
                                <stop offset="50%" stopColor="#4286F3" />
                                <stop offset="100%" stopColor="#6BA3FF" />
                            </linearGradient>
                            <linearGradient id="liquidGlassGoldLineEx" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#B8860B" />
                                <stop offset="50%" stopColor="#ebb017" />
                                <stop offset="100%" stopColor="#FFD700" />
                            </linearGradient>
                            <filter id="glassGlowLineEx" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <CartesianGrid vertical={false} strokeOpacity={0.1} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} isAnimationActive={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="desktop"
                            type="monotone"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={false}
                        />
                        <Line
                            dataKey="mobile"
                            type="monotone"
                            stroke="var(--color-mobile)"
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>



            <CardFooter className="px-0 [.border-t]:pt-0">
                <div className="flex w-full items-start">
                    <i className="leading-relaxed font-normal text-sm">
                        Example Chart
                    </i>
                </div>
            </CardFooter>



        </Card>
    )
}
