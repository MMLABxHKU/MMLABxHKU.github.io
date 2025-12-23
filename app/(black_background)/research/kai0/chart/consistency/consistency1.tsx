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
    { trick: "baseline", pi05: 20.0, pi05_std: [2.5, 2.5], pi0: 0, pi0_std: [0, 0.001], },
    // { trick: "improved\nbaseline", pi05: 60, pi05_std: [3.5, 3.5], pi0: 53.3, pi0_std: [9.4, 9.4], },
    { trick: "+ heuristic DAgger", pi05: 83.3, pi05_std: [2.8, 2.8], pi0: 73.3, pi0_std: [3.2, 3.2], },
    { trick: "+ DAgger", pi05: 93.3, pi05_std: [2.2, 2.2], pi0: 80, pi0_std: [2.8, 2.8], },
]



const chartConfig = {
    pi05: {
        label: "pi05",
        color: "#4286F3",
    },
    pi0: {
        label: "pi0",
        color: "#ebb017",
    },
} satisfies ChartConfig



export function ConsistencyBarChart1() {
    return (
        <Card className="w-full lg:max-w-1/2 p-4 m-0 gap-3 flex-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Success Rate (%) &#8593;</CardDescription>
            </CardHeader>



            <CardContent className="px-0">
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <defs>
                            <linearGradient id="liquidGlassBlue1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6BA3FF" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#4286F3" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity={0.7} />
                            </linearGradient>
                            <linearGradient id="liquidGlassGold1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#FFD700" stopOpacity={0.9} />
                                <stop offset="50%" stopColor="#ebb017" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#B8860B" stopOpacity={0.7} />
                            </linearGradient>
                            <filter id="glassGlow1" x="-50%" y="-50%" width="200%" height="200%">
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
                            height={60}
                            angle={0}
                            textAnchor="middle"
                            tick={(props: any) => {
                                const { x, y, payload } = props;
                                return (
                                    <g transform={`translate(${x},${y})`}>
                                        <text
                                            x={0}
                                            y={0}
                                            dy={16}
                                            textAnchor="middle"
                                            fill="#fff"
                                            fontSize={10}
                                        >
                                            {payload.value.split('\n').map((line: string, i: number) => (
                                                <tspan key={i} x={0} dy={i === 0 ? 0 : 14}>
                                                    {line}
                                                </tspan>
                                            ))}
                                        </text>
                                    </g>
                                );
                            }}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={6}
                            width={Math.max(...chartData.map((d) => String(d.pi05).length)) * 8}
                        />
                        <ChartTooltip
                            cursor={false}
                            isAnimationActive={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} className="text-white"/>
                        <Bar dataKey="pi05" fill="var(--color-pi05)" yAxisId="left" radius={4} isAnimationActive={false}>
                            <ErrorBar stroke="white" 
                                dataKey="pi05_std" 
                                direction="y" 
                            />
                        </Bar>
                        <Bar dataKey="pi0" fill="var(--color-pi0)" yAxisId="left" radius={4} isAnimationActive={false}>
                            <ErrorBar stroke="white" 
                                dataKey="pi0_std" 
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
