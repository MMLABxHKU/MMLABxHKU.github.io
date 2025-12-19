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
    { trick: "chrome", MAD: 80, MADLabel: "80", fill: "var(--color-chrome)" },
    { trick: "safari", MAD: 76, MADLabel: "76", fill: "var(--color-safari)" },
    { trick: "firefox", MAD: 67, MADLabel: "67", fill: "var(--color-firefox)" },
]



const chartConfig = {
    chrome: {
        label: "2T_SL (ours)",
        color: "#4286F3",
    },
    safari: {
        label: "2T_TL",
        color: "#ebb017",
    },
    firefox: {
        label: "1T_TL (pi06)",
        color: "#55AF7B",
    },
} satisfies ChartConfig



export function AdvantageBarChart3() {
    return (
        <Card className="max-w-1/3 bg-transparent border-0 shadow-transparent p-0 m-0 gap-3 flex-1">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Success Rate (%)</CardDescription>
            </CardHeader>



            <CardContent className="px-0">
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData} margin={{ top: 16, right: 0, left: 0, bottom: 0 }}>
                        <CartesianGrid vertical={false} />
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
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <ChartLegend content={<ChartLegendContent />} className="text-white"/>
                        <Bar
                            yAxisId="left"
                            dataKey="MAD"
                            strokeWidth={2}
                            radius={4}
                            activeIndex={2}
                            activeBar={({ ...props }) => <Rectangle {...props} fillOpacity={0.8} />}
                        >
                            <LabelList
                                dataKey="MAD"
                                position="top"
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>



            <CardFooter className="px-0 -mt-6">
                <div className="flex w-full justify-center">
                    <i className="leading-relaxed font-normal text-white text-sm">
                       desc
                    </i>
                </div>
            </CardFooter>



        </Card>
    )
}
