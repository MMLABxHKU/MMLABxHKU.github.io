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
    { trick: "standard", pi05: 20.0, pi05_std: [2.5, 2.5], pi0: 0, pi0_std: [0, 1], },
    { trick: "improved standard", pi05: 60, pi05_std: [3.5, 3.5], pi0: 53.3, pi0_std: [9.4, 9.4], },
    { trick: "+ heuristic dagger", pi05: 83.3, pi05_std: [2.8, 2.8], pi0: 73.3, pi0_std: [3.2, 3.2], },
    { trick: "+ dagger", pi05: 93.3, pi05_std: [2.2, 2.2], pi0: 80, pi0_std: [2.8, 2.8], },
]



const chartConfig = {
    pi05: {
        label: "pi05",
        color: "var(--chart-1)",
    },
    pi0: {
        label: "pi0",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig



export function ConsistencyBarChart1() {
    return (
        <Card className="bg-transparent border-0 shadow-transparent p-0 m-0 gap-3 flex-1">



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
                            width={Math.max(...chartData.map((d) => String(d.pi05).length)) * 8}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="pi05" fill="var(--color-pi05)" yAxisId="left" radius={4}>
                            <ErrorBar 
                                dataKey="pi05_std" 
                                direction="y" 
                            />
                        </Bar>
                        <Bar dataKey="pi0" fill="var(--color-pi0)" yAxisId="left" radius={4}>
                            <ErrorBar 
                                dataKey="pi0_std" 
                                direction="y" 
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>



            <CardFooter className="px-0 [.border-t]:pt-0">
                <div className="flex w-full items-start">
                    <i className="leading-relaxed font-normal text-sm">
                        Evolution of Data Collection
                    </i>
                </div>
            </CardFooter>



        </Card>
    )
}
