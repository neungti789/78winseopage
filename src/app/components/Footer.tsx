import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#007aff] to-[#dbeeff] text-black py-6  mt-25 mb-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-4">

        {/* เมนูด้านบนโลโก้ */}
        <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm font-medium text-center">
          <Link href="/" className="hover:underline">
            หน้าแรก
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            นโยบายความเป็นส่วนตัว
          </Link>
          <Link href="/contact-us" className="hover:underline">
            ติดต่อเรา
          </Link>
          <Link href="/blog" className="hover:underline">
            บทความ
          </Link>
        </nav>

        {/* โลโก้ตรงกลาง */}
        <Image
          src="/img/78win-500x150.png"
          alt="78WIN Logo"
          width={140}
          height={40}
        />

        {/* เส้นแดงล่างสุด */}
      </div>
    </footer>
  );
}
