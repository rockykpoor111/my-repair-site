export const servicesList = [
    { id: "ac-repair", name: "AC Repair", type: "AC" },
    { id: "fridge-repair", name: "Fridge Repair", type: "Fridge" },
    { id: "washing-machine-repair", name: "Washing Machine Repair", type: "Washing Machine" },
    { id: "tv-repair", name: "TV Repair", type: "TV" },
    { id: "microwave-repair", name: "Microwave Repair", type: "Microwave" }
];

export const locationsList = [
    // Main Cities
    { id: "delhi", name: "Delhi", type: "city" },
    { id: "south-delhi", name: "South Delhi", type: "zone" },
    { id: "east-delhi", name: "East Delhi", type: "zone" },
    { id: "west-delhi", name: "West Delhi", type: "zone" },
    { id: "north-delhi", name: "North Delhi", type: "zone" },
    { id: "central-delhi", name: "Central Delhi", type: "zone" },
    { id: "noida", name: "Noida", type: "city" },
    { id: "gurgaon", name: "Gurgaon", type: "city" },
    { id: "ghaziabad", name: "Ghaziabad", type: "city" },
    { id: "faridabad", name: "Faridabad", type: "city" },
    
    // Posh Areas Delhi
    { id: "vasant-vihar", name: "Vasant Vihar", type: "posh" },
    { id: "defence-colony", name: "Defence Colony", type: "posh" },
    { id: "greater-kailash", name: "Greater Kailash", type: "posh" },
    { id: "hauz-khas", name: "Hauz Khas", type: "posh" },
    { id: "chittaranjan-park", name: "Chittaranjan Park", type: "posh" },
    { id: "new-friends-colony", name: "New Friends Colony", type: "posh" },
    { id: "punjabi-bagh", name: "Punjabi Bagh", type: "posh" },
    
    // Posh Areas Gurgaon
    { id: "dlf-phase-1", name: "DLF Phase 1, Gurgaon", type: "posh" },
    { id: "dlf-phase-2", name: "DLF Phase 2, Gurgaon", type: "posh" },
    { id: "dlf-phase-3", name: "DLF Phase 3, Gurgaon", type: "posh" },
    { id: "dlf-phase-4", name: "DLF Phase 4, Gurgaon", type: "posh" },
    { id: "dlf-phase-5", name: "DLF Phase 5, Gurgaon", type: "posh" },
    { id: "golf-course-road", name: "Golf Course Road, Gurgaon", type: "posh" },
    { id: "sushant-lok", name: "Sushant Lok, Gurgaon", type: "posh" },
    
    // Posh Areas Noida
    { id: "noida-sector-15", name: "Sector 15, Noida", type: "posh" },
    { id: "noida-sector-44", name: "Sector 44, Noida", type: "posh" },
    { id: "noida-sector-50", name: "Sector 50, Noida", type: "posh" },
    { id: "noida-sector-137", name: "Sector 137, Noida", type: "posh" },
    { id: "jaypee-greens", name: "Jaypee Greens, Noida", type: "posh" },
    
    // Posh Ghaziabad
    { id: "indirapuram", name: "Indirapuram, Ghaziabad", type: "posh" },
    { id: "vaishali", name: "Vaishali, Ghaziabad", type: "posh" },
    { id: "kaushambi", name: "Kaushambi, Ghaziabad", type: "posh" }
];

export function getSeoMetadata(locationName: string, serviceName: string) {
    return {
        title: `Top ${serviceName} in ${locationName} | Fast Doorstep Repair`,
        description: `Looking for reliable ${serviceName} in ${locationName}? We provide certified technicians, same-day service, and transparent pricing. Book your repair today!`,
    };
}

export function getDynamicContent(locationName: string, serviceName: string) {
    const charCode = locationName.charCodeAt(0) + serviceName.charCodeAt(0);
    
    const descriptions = [
        `When your appliance breaks down, you need fast and reliable help. Our expert technicians specialized in ${serviceName} are just a call away for residents of ${locationName}. We pride ourselves on transparent pricing and same-day doorstep service.`,
        `Don't let a faulty appliance disrupt your day! We offer premium ${serviceName} across ${locationName}. From quick diagnoses to lasting repairs, our certified team ensures your home is running smoothly again in no time.`,
        `Living in ${locationName} and struggling with appliance issues? Our dedicated team provides swift ${serviceName} right at your doorstep. We use only high-quality spare parts and guarantee our workmanship.`,
        `Appliances Pro is the trusted name for ${serviceName} in ${locationName}. We understand the urgency of appliance breakdowns, which is why our verified technicians are dispatched quickly to solve your problems.`
    ];
    
    return descriptions[charCode % descriptions.length];
}
