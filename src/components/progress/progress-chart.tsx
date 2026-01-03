'use client';

import { Bar, BarChart, XAxis, YAxis, Cell } from 'recharts';
import { format } from 'date-fns';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartConfig,
} from '@/components/ui/chart';
import type { FootprintRecord } from '@/lib/types';
import { getFootprintColorInfo } from '@/lib/utils';


interface ProgressChartProps {
    data: FootprintRecord[];
}

const chartConfig = {
    total: {
        label: 'Total CO₂e',
    },
    green: {
        label: 'Low',
        color: 'hsl(140, 80%, 60%)',
    },
    yellow: {
        label: 'Medium',
        color: 'hsl(48, 80%, 60%)',
    },
    red: {
        label: 'High',
        color: 'hsl(0, 80%, 60%)',
    }
} satisfies ChartConfig;

export default function ProgressChart({ data }: ProgressChartProps) {
    const chartData = data
        .map(record => ({
            date: format(new Date(record.date), 'MMM d'),
            total: record.emissions.total,
            fill: getFootprintColorInfo(record.emissions.total).color,
        }))
        .reverse(); // To show chronologically

    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <XAxis
                    dataKey="date"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    fontSize={12}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    fontSize={12}
                    tickFormatter={(value) => `${value} kg`}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                    dataKey="total"
                    radius={4}
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Bar>
            </BarChart>
        </ChartContainer>
    );
}
