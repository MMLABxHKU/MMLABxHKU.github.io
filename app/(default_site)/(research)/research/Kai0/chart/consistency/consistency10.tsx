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
    { trick: "sync", absolute: 4.42, absolute_std: [0.8, 0.8], delta: 6.78, delta_std: [1, 1], },
    { trick: "+ inchunk smoothing", absolute: 4.21, absolute_std: [0.7, 0.7], delta: 2.25, delta_std: [0.5, 0.5], },
    { trick: "+ temporal smoothing", absolute: 11.61, absolute_std: [1.5, 1.5], delta: 9.25, delta_std: [1.2, 1.2], },
    { trick: "+ real-time chunking", absolute: 3.67, absolute_std: [0.6, 0.6], delta: 4.63, delta_std: [0.8, 0.8], },
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



export function ConsistencyBarChart10() {
    return (
        <Card className="bg-transparent border-0 shadow-transparent p-0 m-0 gap-3 flex-1">



            <CardHeader className="m-0 p-0 leading-relaxed font-normal text-sm">
                <CardDescription>Recover Cost (%) &#8595;</CardDescription>
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
                        Inference Optimization Methods Comparison
                    </i>
                </div>
            </CardFooter> */}



        </Card>
    )
}
