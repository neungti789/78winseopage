// components/Header.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

export const domains = [
        "https://78win88.short.gy/ptgALP",
        "https://78win88.short.gy/n8tGSC",
        "https://78win88.short.gy/qHajPa",
        "https://78win88.short.gy/R754sC",
        "https://78win88.short.gy/xMW5ip",
        "https://78win88.short.gy/p9EDL5",
        "https://78win88.short.gy/I1zprE",
        "https://78win88.short.gy/5WcfXb",
        "https://78win88.short.gy/KakYur",
        "https://78win88.short.gy/ulSXy8",
        "https://78win88.short.gy/JFkfDT",
        "https://78win88.short.gy/fuvInL",
        "https://78win88.short.gy/PQEpCm",
        "https://78win88.short.gy/cBT1vv"
    ];

export default function Header() {
    
    return (
        <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#007aff] to-[#dbeeff] text-black shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/img/78win-500x150.png" alt="78win" width={120} height={32} />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/" className="hover:underline">หน้าแรก</Link>
                    <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
                    <button
                        onClick={() => {
                            const randomUrl = domains[Math.floor(Math.random() * domains.length)];
                            window.location.href = randomUrl;
                        }}
                        className="bg-white text-[#1974e6] hover:bg-[#1974e6] hover:text-white font-semibold py-1.5 px-5 rounded-md transition cursor-pointer"
                    >
                        เข้าสู่ระบบ
                    </button>
                    <button
                        onClick={() => {
                            const randomUrl = domains[Math.floor(Math.random() * domains.length)];
                            window.location.href = randomUrl;
                        }}
                        className="border border-white bg-transparent text-white hover:bg-white hover:text-[#1974e6] font-semibold py-1.5 px-5 rounded-md transition cursor-pointer"
                    >
                        สมัครสมาชิก
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="flex flex-col gap-1">
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
