// src/app/page.tsx หรือ app/contact-us/page.tsx
import Image from "next/image";
import Floating from "../components/floating";
import Footer from "../components/Footer";
import Header from "../components/Header";

//export const dynamic = "force-dynamic";

export const metadata = {
  title: "ติดต่อเรา | 78WIN สล็อตเว็บตรง ฝากถอนไว บริการตลอด 24 ชม.",
  description:
    "ช่องทางติดต่อทีมงาน 78WIN สำหรับสอบถามโปรโมชั่น ฝากถอน หรือปัญหาในการใช้งาน ติดต่อผ่าน LINE หรือแบบฟอร์มตลอด 24 ชั่วโมง",
};

export default async function ContactUs() {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-screen-xl mx-auto px-4 row-start-2 flex flex-col items-center gap-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-600 text-center">
            ติดต่อทีมงาน 78WIN
          </h1>

          <p className="text-center text-gray-700 max-w-2xl text-base sm:text-lg leading-relaxed">
            หากคุณมีคำถามเกี่ยวกับโปรโมชั่น การใช้งานเว็บไซต์ หรือการสมัครสมาชิก ทีมงานของเรายินดีให้ความช่วยเหลือ
            คุณสามารถติดต่อผ่านช่องทางด้านล่างได้ตลอด 24 ชั่วโมง
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl mt-4">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">📱 LINE Official</h2>
              <p>
                เพิ่มเพื่อนไลน์ผ่านลิงก์ด้านล่างเพื่อสอบถามข้อมูลหรือแจ้งปัญหาได้ตลอดเวลา
              </p>
              <a
                href="https://line.me/R/ti/p/@78win"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-600 transition"
              >
                เพิ่มเพื่อนผ่าน LINE
              </a>

              <h2 className="text-lg font-semibold text-gray-800">💬 Live Chat</h2>
              <p>สามารถคลิกที่ปุ่มแชตลอยหน้าจอเพื่อพูดคุยกับทีมงานได้ทันที</p>
            </div>

            <div>
              <Image
                src="/img/We1.webp"
                alt="ติดต่อทีมงาน 78WIN"
                className="w-full rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <Floating />
    </>
  );
}
