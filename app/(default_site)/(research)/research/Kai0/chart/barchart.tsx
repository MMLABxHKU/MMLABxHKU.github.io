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
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig



export function ExampleBarChart() {
    return (



        <Card>



            <CardHeader>
                <CardTitle>Bar Chart - Multiple</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>



            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
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
                            tickMargin={8}
                        >
                            <Label
                                value="Visitors"
                                angle={-90}
                                position="insideLeft"
                                style={{ textAnchor: "middle" }}
                            />
                        </YAxis>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" yAxisId="left" radius={4}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                        <Bar dataKey="mobile" fill="var(--color-mobile)" yAxisId="left" radius={4}>
                            <ErrorBar 
                                dataKey="desktopStd" 
                                direction="y" 
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>



            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>



        </Card>
    )
}
