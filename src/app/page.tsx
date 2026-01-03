'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Leaf, BarChart3, PlusCircle } from 'lucide-react';

export default function HomePage() {
    const heroImage = getPlaceholderImage('hero-nature');

    return (
        <div className="space-y-12">
            <Card className="overflow-hidden shadow-lg">
                <div className="relative h-80 w-full">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            data-ai-hint={heroImage.imageHint}
                            fill
                            className="object-cover"
                            priority
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                        <h1 className="text-5xl font-bold font-headline text-white drop-shadow-md">Welcome to EcoTrack</h1>
                        <p className="text-xl text-white/90 mt-2 max-w-2xl">Your journey to a smaller carbon footprint starts now. Let's make a difference, one week at a time.</p>
                    </div>
                </div>
                 <CardContent className="p-8 bg-gray-50 dark:bg-card">
                    <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                        Take control of your environmental impact. Log your weekly activities to understand and reduce your carbon footprint with personalized, AI-driven advice.
                    </p>
                    <div className="flex gap-4">
                        <Button asChild size="lg">
                            <Link href="/dashboard">
                                View Your Dashboard
                                <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary">
                            <Link href="/log">
                                Log Your First Week
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="text-center">
                <h2 className="text-3xl font-bold font-headline mb-2">How It Works</h2>
                <p className="text-lg text-muted-foreground mb-8">Three simple steps to a greener lifestyle.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
                <Card>
                    <CardHeader>
                        <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">
                            <PlusCircle className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle>1. Log Your Activities</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Easily input your weekly transport, energy, and food habits in under five minutes.</p>
                    </CardContent>
                </Card>
                <Card>
                     <CardHeader>
                        <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">
                             <Leaf className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle>2. Get Personalized Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Receive AI-powered suggestions tailored to your lifestyle to effectively reduce your emissions.</p>
                    </CardContent>
                </Card>
                <Card>
                     <CardHeader>
                        <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">
                            <BarChart3 className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle>3. Track Your Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Visualize your carbon footprint reduction over time with simple, beautiful charts.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
