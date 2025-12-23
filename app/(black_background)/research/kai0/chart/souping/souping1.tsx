"use client"



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
    { trick: "Task A", single: 60, single_std: [9.4, 9.4], full: 73.33, full_std: [4.7, 4.7], model: 90, model_std: [4.7, 4.7], },
    { trick: "Task B", single: 63.33, single_std: [4.7, 4.7], full: 80, full_std: [4.7, 4.7], model: 86.66, model_std: [9.4, 9.4], },
    { trick: "Task C", single: 16.66, single_std: [4.7, 4.7], full: 26.66, full_std: [9.4, 9.4], model: 53.33, model_std: [14, 14], },
]



const chartConfig = {
    single: {
        label: "best candidate",
        color: "#4286F3",
    },
    full: {
        label: "full data",
        color: "#ebb017",
    },
    model: {
        label: "model arithmetic",
        color: "#55AF7B",
    },
} satisfies ChartConfig



export function SoupingBarChart1() {
    return (
        <Card className="w-full lg:max-w-1/2 p-4 m-0 gap-3 flex-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Success Rate (%) &#8593;</CardDescription>
            </CardHeader>



            <CardContent className="px-0">
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <defs>
                            <linearGradient id="liquidGlassBlueSoup" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6BA3FF" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#4286F3" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity={0.7} />
                            </linearGradient>
                            <linearGradient id="liquidGlassGoldSoup" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#FFD700" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#ebb017" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#B8860B" stopOpacity={0.7} />
                            </linearGradient>
                            <linearGradient id="liquidGlassGreenSoup" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#7DD3A0" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#55AF7B" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#3D8B5F" stopOpacity={0.7} />
                            </linearGradient>
                            <filter id="glassGlowSoup" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <CartesianGrid vertical={false} strokeOpacity={0.1} />
                        <XAxis
                            dataKey="trick"
                            tickLine={false}
                            tickMargin={6}
                            axisLine={false}
                            tickFormatter={(value) => value}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={6}
                            width={Math.max(...chartData.map((d) => String(d.single).length)) * 8}
                        />
                        <ChartTooltip
                            cursor={false}
                            isAnimationActive={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} className="text-white"/>
                        <Bar dataKey="single" fill="var(--color-single)" yAxisId="left" radius={4} isAnimationActive={false}>
                            <ErrorBar stroke="white" 
                                dataKey="single_std" 
                                direction="y" 
                            />
                        </Bar>
                        <Bar dataKey="full" fill="var(--color-full)" yAxisId="left" radius={4} isAnimationActive={false}>
                            <ErrorBar stroke="white" 
                                dataKey="full_std" 
                                direction="y" 
                            />
                        </Bar>
                        <Bar dataKey="model" fill="var(--color-model)" yAxisId="left" radius={4} isAnimationActive={false}>
                            <ErrorBar stroke="white" 
                                dataKey="model_std" 
                                direction="y" 
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>



            {/* <CardFooter className="px-0 [.border-t]:pt-0">
                <div className="flex w-full justify-center">
                    <i className="leading-relaxed font-normal text-white text-sm">
                       desc
                    </i>
                </div>
            </CardFooter> */}



        </Card>
    )
}
