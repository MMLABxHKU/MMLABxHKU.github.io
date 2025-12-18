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
    { trick: "baseline", absolute: 76.7, absolute_std: [13, 13], delta: 83.3, delta_std: [4.7, 4.7], },
    { trick: "w/. time scaling", absolute: 50.0, absolute_std: [4, 4], delta: 56.7, delta_std: [12, 12], },
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



export function ConsistencyBarChart3() {
    return (
        <Card className="bg-transparent border-0 shadow-transparent p-0 m-0 gap-3">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Success Rate (%) &#8593;</CardDescription>
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
