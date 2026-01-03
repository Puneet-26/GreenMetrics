'use client';

import { Pie, PieChart, Cell } from 'recharts';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from '@/components/ui/chart';
import type { EmissionData } from '@/lib/types';

interface EmissionsChartProps {
    emissions: EmissionData;
}

export default function EmissionsChart({ emissions }: EmissionsChartProps) {
    const chartData = [
        { category: 'Transport', value: emissions.transport, fill: 'var(--color-transport)' },
        { category: 'Electricity', value: emissions.electricity, fill: 'var(--color-electricity)' },
        { category: 'Heating', value: emissions.heating, fill: 'var(--color-heating)' },
        { category: 'Food', value: emissions.food, fill: 'var(--color-food)' },
        { category: 'Waste', value: emissions.waste, fill: 'var(--color-waste)' },
    ].filter(d => d.value > 0);

    const chartConfig = {
        transport: { label: 'Transport', color: 'hsl(var(--chart-1))' },
        electricity: { label: 'Electricity', color: 'hsl(var(--chart-2))' },
        heating: { label: 'Heating', color: 'hsl(var(--chart-3))' },
        food: { label: 'Food', color: 'hsl(var(--chart-4))' },
        waste: { label: 'Waste', color: 'hsl(var(--chart-5))' },
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Emissions Breakdown</CardTitle>
                <CardDescription>Here&apos;s where your carbon emissions come from this week.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="category"
                            innerRadius="60%"
                            strokeWidth={5}
                            labelLine={false}
                            label={({ payload, ...props }) => {
                                const { category, value } = payload as any;
                                const percentage = Math.round((props.percent || 0) * 100);
                                if (percentage < 5) return null;
                                return (
                                <text
                                    {...props}
                                    x={props.cx + (props.outerRadius + 10) * Math.cos(-props.midAngle * (Math.PI / 180))}
                                    y={props.cy + (props.outerRadius + 10) * Math.sin(-props.midAngle * (Math.PI / 180))}
                                    textAnchor={props.textAnchor}
                                    dominantBaseline="central"
                                    className="fill-foreground text-xs"
                                >
                                    {category} ({percentage}%)
                                </text>
                                );
                            }}
                        >
                            {chartData.map((entry) => (
                                <Cell key={`cell-${entry.category}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <ChartLegend content={<ChartLegendContent nameKey="category" />} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
