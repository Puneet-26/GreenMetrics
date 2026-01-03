import type { EmissionData } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Car, Zap, Beef, Home, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { getFootprintColor } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface SummaryCardsProps {
    emissions: EmissionData;
    date: string;
}

const StatCard = ({ title, value, icon: Icon, subtext, className }: { title: string, value: string, icon: React.ElementType, subtext?: string, className?: string }) => (
    <Card className={className}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{subtext || 'kg CO₂e this week'}</p>
        </CardContent>
    </Card>
);

export default function SummaryCards({ emissions, date }: SummaryCardsProps) {
    const formattedDate = format(new Date(date), "MMMM do, yyyy");
    const totalFootprintColor = getFootprintColor(emissions.total);

    return (
        <div>
            <div className="mb-4">
                <h2 className="text-3xl font-bold font-headline">Your Weekly Summary</h2>
                <p className="text-muted-foreground">For the week ending {formattedDate}</p>
            </div>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                <StatCard 
                    title="Total Footprint" 
                    value={emissions.total.toLocaleString()} 
                    icon={Leaf} 
                    className={cn(
                        totalFootprintColor === 'green' && 'bg-green-100/50 dark:bg-green-900/30 border-green-200 dark:border-green-800',
                        totalFootprintColor === 'yellow' && 'bg-yellow-100/50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800',
                        totalFootprintColor === 'red' && 'bg-red-100/50 dark:bg-red-900/30 border-red-200 dark:border-red-800',
                    )}
                />
                <StatCard title="Transport" value={emissions.transport.toLocaleString()} icon={Car} />
                <StatCard title="Electricity" value={emissions.electricity.toLocaleString()} icon={Zap} />
                <StatCard title="Heating" value={emissions.heating.toLocaleString()} icon={Home} />
                <StatCard title="Food" value={emissions.food.toLocaleString()} icon={Beef} />
                <StatCard title="Waste" value={emissions.waste.toLocaleString()} icon={Trash2} />
            </div>
        </div>
    );
}
