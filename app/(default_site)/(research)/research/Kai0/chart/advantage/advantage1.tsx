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
    { trick: "chrome", MAD: 0.0115, MADLabel: "0.0115", fill: "var(--color-chrome)" },
    { trick: "safari", MAD: 0.0151, MADLabel: "0.0151", fill: "var(--color-safari)" },
    { trick: "firefox", MAD: 0.0160, MADLabel: "0.0160", fill: "var(--color-firefox)" },
]



const chartConfig = {
    chrome: {
        label: "2T_SL (ours)",
        color: "var(--chart-1)",
    },
    safari: {
        label: "2T_TL",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "1T_TL (pi06)",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig



export function AdvantageBarChart1() {
    return (
        <Card className="max-w-1/3 bg-transparent border-0 shadow-transparent p-0 m-0 gap-3 flex-1">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Mean Absolute Difference (MAD)</CardDescription>
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
                            width={48}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
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



            {/* <CardFooter className="px-0 [.border-t]:pt-0">
                <div className="flex w-full items-start">
                    <i className="leading-relaxed font-normal text-sm">
                        Evolution of Data Collection
                    </i>
                </div>
            </CardFooter> */}



        </Card>
    )
}
