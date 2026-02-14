import Image from "next/image";

export function Logo({ className = "", showTagline = true }: { className?: string; showTagline?: boolean }) {
    return (
        <div className={`flex items-center ${className}`}>
            <svg
                viewBox="0 0 300 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-auto"
            >
                {/* --- ICON GROUP --- */}
                <g transform="translate(0, 5) scale(1.6)">
                    {/* Shield Shape (Primary Blue) - Symbol of Trust/Protection */}
                    <path
                        d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
                        fill="currentColor"
                        className="text-primary"
                    />

                    {/* House Silhouette (White) - Inside Shield */}
                    <path
                        d="M12 6L16.5 10V17H14.5V13H9.5V17H7.5V10L12 6Z"
                        fill="white"
                    />

                    {/* Gear/Wrench (Orange Accent) - Overlaying the Shield Bottom */}
                    <g transform="translate(14, 14)">
                        {/* Circle Background for Tool to pop against shield */}
                        <circle cx="0" cy="0" r="4.5" fill="white" />

                        {/* Gear */}
                        <path
                            d="M0 -3.5L0.7 -2.8L1.6 -3.2L1.8 -2.2L2.8 -2.0L2.5 -1.1L3.5 -0.7L2.8 0L3.5 0.7L2.5 1.1L2.8 2.0L1.8 2.2L1.6 3.2L0.7 2.8L0 3.5L-0.7 2.8L-1.6 3.2L-1.8 2.2L-2.8 2.0L-2.5 1.1L-3.5 0.7L-2.8 0L-3.5 -0.7L-2.5 -1.1L-2.8 -2.0L-1.8 -2.2L-1.6 -3.2L-0.7 -2.8L0 -3.5Z"
                            fill="currentColor"
                            className="text-accent"
                        />

                        {/* Wrench */}
                        <path
                            d="M-1.5 1.5L-2.5 2.5C-2.8 2.8 -2.8 3.2 -2.5 3.5C-2.2 3.8 -1.8 3.8 -1.5 3.5L-0.5 2.5L-1.5 1.5ZM1.5 -0.5L2.5 -1.5C2.8 -1.2 2.8 -0.8 2.5 -0.5C2.2 -0.2 1.8 -0.2 1.5 -0.5L0.5 0.5L1.5 -0.5Z"
                            stroke="currentColor"
                            className="text-accent"
                            strokeWidth="1"
                            transform="rotate(45)"
                        />
                        <path
                            d="M-1 1 L1 -1"
                            stroke="currentColor"
                            className="text-accent"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </g>
                </g>

                {/* --- TEXT GROUP --- */}
                <g transform="translate(45, 0)">
                    {/* Main Text: AppliancesPro */}
                    <text x="0" y="32" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="26">
                        <tspan className="fill-primary">Appliances</tspan>
                        <tspan className="fill-accent">Pro</tspan>
                    </text>

                    {/* Tagline: MAKE HOME BETTER */}
                    {showTagline && (
                        <text x="2" y="50" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="11" letterSpacing="1.5" className="fill-gray-500 uppercase">
                            Make Home Better
                        </text>
                    )}
                </g>
            </svg>
        </div>
    );
}
