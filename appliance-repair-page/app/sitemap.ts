import { MetadataRoute } from 'next'
import { locationsList, servicesList } from '@/lib/seo-data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://appliancespro.in'
    
    // Core routes
    const routes: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/ac-repair`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/fridge-repair`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/washing-machine`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/microwave-repair`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/tv-repair`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/brands`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ];

    // Add Location Hub routes & Dynamic Pages
    locationsList.forEach(loc => {
        routes.push({
            url: `${baseUrl}/locations/${loc.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        });

        // Add 150+ dynamically generated combinations
        servicesList.forEach(srv => {
            routes.push({
                url: `${baseUrl}/locations/${loc.id}/${srv.id}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    });

    return routes;
}
