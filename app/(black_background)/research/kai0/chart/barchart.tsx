"use client"



import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, LabelList, ErrorBar, YAxis, Label  } from "recharts"



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
    ChartLegend,
    ChartLegendContent,
    type ChartConfig,
} from "@/components/ui/chart"



const chartData = [
    { month: "January", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
    { month: "February", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
    { month: "March", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
    { month: "April", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
    { month: "May", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
    { month: "June", desktop: 186, desktopStd: [16.6, 20.6], mobile: 80, mobileStd: [16.6, 20.6], },
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



export function ExampleBarChart() {
    return (
        <Card className="p-4 m-0 gap-3 flex-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>January - June 2024 &#8593; &#8595;</CardDescription>
            </CardHeader>



            <CardContent className="px-0">
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <defs>
                            <linearGradient id="liquidGlassBlueEx" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6BA3FF" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#4286F3" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity={0.7} />
                            </linearGradient>
                            <linearGradient id="liquidGlassGoldEx" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#FFD700" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#ebb017" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#B8860B" stopOpacity={0.7} />
                            </linearGradient>
                            <filter id="glassGlowEx" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
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
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            width={Math.max(...chartData.map((d) => String(d.desktop).length)) * 11}
                        >
                            {/* <Label
                                value="Visitors"
                                angle={-90}
                                position="insideLeft"
                                style={{ textAnchor: "middle" }}
                            /> */}
                        </YAxis>
                        <ChartTooltip
                            cursor={false}
                            isAnimationActive={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} className="text-white"/>
                        <Bar dataKey="desktop" fill="var(--color-desktop)" yAxisId="left" radius={4} isAnimationActive={false}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                        <Bar dataKey="mobile" fill="var(--color-mobile)" yAxisId="left" radius={4} isAnimationActive={false}>
                            <ErrorBar stroke="white" 
                                dataKey="desktopStd" 
                                direction="y" 
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>



            <CardFooter className="px-0 [.border-t]:pt-0">
                <div className="flex w-full items-start">
                    <i className="leading-relaxed font-normal text-sm">
                        Example Bar Chart
                    </i>
                </div>
            </CardFooter>



        </Card>
    )
}
