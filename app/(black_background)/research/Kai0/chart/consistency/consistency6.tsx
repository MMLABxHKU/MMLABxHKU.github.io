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
    { trick: "baseline", absolute: 15.81, absolute_std: [1.75, 1.75], delta: 31.13, delta_std: [7, 7], },
    { trick: "w/. space mirroring", absolute: 33, absolute_std: [2.68, 2.68], delta: 61.68, delta_std: [14, 14], },
]



const chartConfig = {
    absolute: {
        label: "absolute",
        color: "var(--chart-1)",
    },
    delta: {
        label: "delta action",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig



export function ConsistencyBarChart6() {
    return (
        <Card className="max-w-1/3 bg-transparent border-0 shadow-transparent p-0 m-0 gap-3 flex-1">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Throughput (%) &#8593;</CardDescription>
            </CardHeader>



            <CardContent className="px-0">
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
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
                            width={Math.max(...chartData.map((d) => String(d.absolute).length)) * 8}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="absolute" fill="var(--color-absolute)" yAxisId="left" radius={4}>
                            <ErrorBar 
                                dataKey="absolute_std" 
                                direction="y" 
                            />
                        </Bar>
                        <Bar dataKey="delta" fill="var(--color-delta)" yAxisId="left" radius={4}>
                            <ErrorBar 
                                dataKey="delta_std" 
                                direction="y" 
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>



            <CardFooter className="px-0 [.border-t]:pt-0">
                <div className="flex w-full justify-center">
                    <i className="leading-relaxed font-normal text-white text-sm">
                       desc
                    </i>
                </div>
            </CardFooter>



        </Card>
    )
}
