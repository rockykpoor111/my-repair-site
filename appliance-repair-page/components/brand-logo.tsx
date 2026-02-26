"use client";

import React, { useState } from "react";

export function BrandLogo({ name, domain }: { name: string; domain: string }) {
    const [error, setError] = useState(false);

    if (error) {
        return <span className="font-bold text-2xl text-accent">{name.charAt(0)}</span>;
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
            alt={`${name} logo`}
            className="object-contain w-10 h-10"
            onError={() => setError(true)}
        />
    );
}
