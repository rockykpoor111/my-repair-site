const https = require('https');

function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => reject(err));
    });
}

async function checkSeo() {
    try {
        const sitemap = await fetchHtml('https://appliancespro.in/sitemap.xml');
        console.log('--- SITEMAP CHECK ---');
        console.log('Contains /brands?', sitemap.includes('/brands'));

        const homeHtml = await fetchHtml('https://appliancespro.in/');
        console.log('\n--- HOMEPAGE SEO CHECK ---');

        // Check H1
        const h1Match = homeHtml.match(/<h1[^>]*>(.*?)<\/h1>/i);
        console.log('H1 Tag:', h1Match ? h1Match[1] : 'Not found');

        // Check Meta Description
        const metaDescMatch = homeHtml.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i);
        console.log('Meta Description:', metaDescMatch ? metaDescMatch[1] : 'Not found');

        // Check Canonical
        const canonicalMatch = homeHtml.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i);
        console.log('Canonical Tag:', canonicalMatch ? canonicalMatch[1] : 'Not found');

        const brandsHtml = await fetchHtml('https://appliancespro.in/brands');
        console.log('\n--- BRANDS PAGE STATUS ---');
        console.log('Brands length:', brandsHtml.length);
        console.log('Has Brands Serviced text?', brandsHtml.includes('Ready to Book a Service'));

    } catch (err) {
        console.error('Error:', err.message);
    }
}

checkSeo();
