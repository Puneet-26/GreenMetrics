'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart3 } from 'lucide-react';

export default function Welcome() {
    return (
        <Card className="text-center max-w-2xl mx-auto">
             <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">
                    <BarChart3 className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl">Welcome to Your Dashboard</CardTitle>
                <CardDescription className="text-lg">
                    It looks like you haven't logged any activity yet. Get started by calculating your first weekly carbon footprint.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild size="lg">
                    <Link href="/log">
                        Log Your First Week
                        <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
