"use client"



import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, LabelList, YAxis } from "recharts"



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
    { trick: "chrome", SFR: 46.1, SFRLabel: "46.1", fill: "var(--color-chrome)" },
    { trick: "safari", SFR: 50.6, SFRLabel: "50.6", fill: "var(--color-safari)" },
    { trick: "firefox", SFR: 60.5, SFRLabel: "60.5", fill: "var(--color-firefox)" },
]



const chartConfig = {
    chrome: {
        label: "Value-diff",
        color: "#4286F3",
    },
    safari: {
        label: "Direct",
        color: "#ebb017",
    },
    firefox: {
        label: "Direct+Stage",
        color: "#55AF7B",
    },
} satisfies ChartConfig



export function AdvantageBarChart2() {
    return (
        <Card className="w-full lg:max-w-1/2 p-4 m-0 gap-3 flex-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Smooth Frame Ratio (SFR) (%) &#8593;</CardDescription>
            </CardHeader>



            <CardContent className="px-0">
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData} margin={{ top: 16, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="liquidGlassBlueAdv2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6BA3FF" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#4286F3" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity={0.7} />
                            </linearGradient>
                            <linearGradient id="liquidGlassGoldAdv2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#FFD700" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#ebb017" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#B8860B" stopOpacity={0.7} />
                            </linearGradient>
                            <linearGradient id="liquidGlassGreenAdv2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#7DD3A0" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#55AF7B" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#3D8B5F" stopOpacity={0.7} />
                            </linearGradient>
                            <filter id="glassGlowAdv2" x="-50%" y="-50%" width="200%" height="200%">
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
                            tickFormatter={(value) =>
                                chartConfig[value as keyof typeof chartConfig]?.label
                        }
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={6}
                            width={28}
                        />
                        <ChartTooltip
                            cursor={false}
                            isAnimationActive={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <ChartLegend content={<ChartLegendContent />} className="text-white"/>
                        <Bar
                            yAxisId="left"
                            dataKey="SFR"
                            strokeWidth={2}
                            radius={4}
                            activeIndex={2}
                            isAnimationActive={false}
                            activeBar={({ ...props }) => <Rectangle {...props} fillOpacity={0.8} />}
                        >
                            <LabelList
                                dataKey="SFR"
                                position="top"
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>



            {/* <CardFooter className="px-0 -mt-6">
                <div className="flex w-full justify-center">
                    <i className="leading-relaxed font-normal text-white text-sm">
                       desc
                    </i>
                </div>
            </CardFooter> */}



        </Card>
    )
}
