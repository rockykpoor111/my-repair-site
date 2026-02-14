import Image from "next/image";

export function Logo({ className = "", showTagline = true }: { className?: string; showTagline?: boolean }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* User Provided Transparent Logo Icon */}
            <div className="relative flex items-center justify-center">
                <Image
                    src="/logo.png"
                    alt="Appliances Pro Logo"
                    width={48} // h-12 = 48px
                    height={48}
                    className="h-12 w-auto object-contain" // Native transparency, no blend mode needed
                    priority
                />
            </div>

            {/* Text Group */}
            <div className="flex flex-col">
                <div className="flex items-baseline leading-none">
                    <span className="text-3xl font-bold text-primary tracking-tight">
                        Appliances
                    </span>
                    <span className="text-3xl font-bold text-accent tracking-tight">
                        Pro
                    </span>
                </div>

                {showTagline && (
                    <span className="text-[11px] uppercase font-bold text-black tracking-widest leading-tight mt-0.5">
                        Make Home Better
                    </span>
                )}
            </div>
        </div>
    );
}
