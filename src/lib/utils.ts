import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Thresholds for weekly CO₂e in kg
const HIGH_THRESHOLD = 200; // e.g., ~10.4 tonnes/year
const MEDIUM_THRESHOLD = 100; // e.g., ~5.2 tonnes/year

/**
 * Determines the color (red, yellow, green) based on the total carbon footprint.
 * @param totalEmissions - The total weekly emissions in kg CO₂e.
 * @returns 'red', 'yellow', or 'green'.
 */
export function getFootprintColor(totalEmissions: number): 'red' | 'yellow' | 'green' {
  if (totalEmissions >= HIGH_THRESHOLD) {
    return 'red';
  }
  if (totalEmissions >= MEDIUM_THRESHOLD) {
    return 'yellow';
  }
  return 'green';
}


/**
 * Returns color information for charts based on emission levels.
 * @param totalEmissions - The total weekly emissions in kg CO₂e.
 * @returns An object with the name and HSL color value.
 */
export function getFootprintColorInfo(totalEmissions: number): { name: string; color: string } {
    const colorName = getFootprintColor(totalEmissions);
    switch (colorName) {
        case 'red':
            return { name: 'High', color: 'hsl(0, 80%, 60%)' };
        case 'yellow':
            return { name: 'Medium', color: 'hsl(48, 80%, 60%)' };
        case 'green':
            return { name: 'Low', color: 'hsl(140, 80%, 60%)' };
    }
}
