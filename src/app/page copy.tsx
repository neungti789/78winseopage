// src/app/page.tsx หรือ app/page.tsx
import Image from "next/image";
import Floating from "./components/floating";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "โปรฝาก 100% รับเพิ่ม 100%",
  description: "โปรโมชั่นใหม่! ฝากครั้งแรก รับเครดิตเพิ่มเท่าตัว สมัครเลยก่อนหมดโปร!",
};

export default async function Home() {
  return (<>
    <Header />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-screen-xl mx-auto px-4 row-start-2 flex flex-col items-center gap-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="https://mustaqbalweb.com/wp-content/uploads/2025/03/photo_2025-03-08_14-54-35-1024x1024-1.jpg"
            alt="โปรฝาก 100 รับ 300"
            className="w-full rounded-lg shadow-md"
          />
          <Image
            src="https://mustaqbalweb.com/wp-content/uploads/2025/03/photo_2025-03-08_14-54-25-1024x1024-1.jpg"
            alt="สล็อต API แท้"
            className="w-full rounded-lg shadow-md"
          />
        </div>

      </main>
    </div>
    <Footer />
    <Floating />
  </>
  );
}
