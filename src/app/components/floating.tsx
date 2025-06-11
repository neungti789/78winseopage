"use client"

import { domains } from "./Header";

export default function Floating() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 flex">
            <button onClick={() => {
                const randomUrl = domains[Math.floor(Math.random() * domains.length)];
                window.location.href = randomUrl;
            }} className="w-1/2 bg-[#bb2e2e] text-white font-bold py-3 hover:bg-[#a82828] transition cursor-pointer">
                สมัครสมาชิก
            </button>
            <button onClick={() => {
                const randomUrl = domains[Math.floor(Math.random() * domains.length)];
                window.location.href = randomUrl;
            }} className="w-1/2 bg-[#1e6bf0] text-white font-bold py-3 hover:bg-[#1657c8] transition cursor-pointer">
                เข้าสู่ระบบ
            </button>
        </div>
    )
}