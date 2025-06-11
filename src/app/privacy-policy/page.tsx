// src/app/page.tsx หรือ app/page.tsx
export const runtime = 'edge';
import Floating from "../components/floating";
import Footer from "../components/Footer";
import Header from "../components/Header";

//export const dynamic = 'force-dynamic';

export const metadata = {
    title: "นโยบายความเป็นส่วนตัว | 78WIN เว็บสล็อต เว็บตรง รวมบทความและโปรสล็อต 2025",
    description:
        "78WIN ให้ข้อมูลทั่วไปเกี่ยวกับสล็อตเว็บตรงและโปรโมชั่นโดยไม่จัดเก็บข้อมูลส่วนตัวของผู้ใช้งาน เว็บไซต์มีความปลอดภัยและเป็นมิตรต่อผู้เยี่ยมชม",
};

export default async function PrivacyPolicyPage() {
    return (<>
        <Header />
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <main className="max-w-screen-xl mx-auto px-4 row-start-2 flex flex-col items-center gap-8">
                <section className="max-w-screen-md mx-auto px-4 py-12 text-gray-900">
                    <h1 className="text-3xl sm:text-4xl font-bold text-red-600 text-center mb-8">
                        นโยบายความเป็นส่วนตัว (Privacy Policy)
                    </h1>

                    <div className="space-y-6 text-base sm:text-lg leading-relaxed text-justify">
                        <p>
                            เว็บไซต์ <strong>78WIN</strong> มุ่งมั่นในการให้บริการเนื้อหาและข้อมูลเกี่ยวกับสล็อตเว็บตรง
                            โปรโมชั่นล่าสุด และบทความเชิงความรู้ โดยคำนึงถึงความเป็นส่วนตัวของผู้ใช้งานเป็นสำคัญ
                        </p>

                        <h2 className="text-xl font-semibold text-red-600">ข้อมูลที่เราให้บริการ</h2>
                        <p>
                            เว็บไซต์จัดทำขึ้นเพื่อเผยแพร่ข้อมูลข่าวสารทั่วไป ไม่ได้ออกแบบมาเพื่อรวบรวมข้อมูลส่วนบุคคลของผู้เยี่ยมชม
                            ผู้ใช้งานสามารถเข้าชมเว็บไซต์ได้โดยไม่ต้องระบุข้อมูลใด ๆ ที่สามารถระบุตัวตนได้
                        </p>

                        <h2 className="text-xl font-semibold text-red-600">ลิงก์ภายนอก</h2>
                        <p>
                            บางบทความหรือหน้าเว็บไซต์ของเราอาจมีการเชื่อมโยงไปยังเว็บไซต์ภายนอก เพื่ออำนวยความสะดวกและให้ข้อมูลเพิ่มเติม
                            โดยเว็บไซต์ปลายทางนั้นอาจมีนโยบายความเป็นส่วนตัวที่แตกต่างกัน ซึ่งทางเราขอแนะนำให้ผู้ใช้งานศึกษาเพิ่มเติมก่อนใช้บริการ
                        </p>

                        <h2 className="text-xl font-semibold text-red-600">การวิเคราะห์การเข้าชม</h2>
                        <p>
                            เราอาจใช้เครื่องมือวิเคราะห์ทั่วไปเพื่อดูภาพรวมการเข้าชมเว็บไซต์ เช่น จำนวนผู้เข้าชม หรือหน้าเพจที่ได้รับความนิยม
                            แต่ไม่ได้ใช้เพื่อระบุตัวบุคคลหรือเก็บข้อมูลใด ๆ ที่เป็นความลับ
                        </p>

                        <h2 className="text-xl font-semibold text-red-600">ความปลอดภัยของผู้ใช้งาน</h2>
                        <p>
                            เว็บไซต์ของเราทำงานผ่านระบบที่ปลอดภัย ใช้การเชื่อมต่อแบบ HTTPS เพื่อป้องกันการเข้าถึงข้อมูลระหว่างผู้ใช้งานกับเว็บไซต์
                            และไม่มีการติดตั้งโค้ดฝังตัวที่มีเจตนาเก็บข้อมูลส่วนตัว
                        </p>

                        <h2 className="text-xl font-semibold text-red-600">การอัปเดตนโยบาย</h2>
                        <p>
                            เราอาจมีการปรับปรุงเนื้อหาของหน้านี้เป็นครั้งคราว เพื่อให้สอดคล้องกับการพัฒนาของเว็บไซต์หรือข้อกฎหมาย
                            ขอแนะนำให้ผู้ใช้งานเข้ามาอ่านนโยบายนี้อย่างสม่ำเสมอ
                        </p>

                        <h2 className="text-xl font-semibold text-red-600">ติดต่อเรา</h2>
                        <p>
                            หากท่านมีข้อสงสัยเพิ่มเติมเกี่ยวกับนโยบายความเป็นส่วนตัว หรือข้อเสนอแนะในการพัฒนาเว็บไซต์
                            สามารถติดต่อเราได้ผ่าน <a href="/about-contact-us" className="text-blue-600 underline">หน้าติดต่อเรา</a>
                        </p>

                        <p className="text-center text-blue-700 font-semibold text-lg mt-6">
                            ขอบคุณที่เข้ามาเยี่ยมชมเว็บไซต์ 78WIN เราหวังว่าจะได้เป็นส่วนหนึ่งในการให้ข้อมูลที่เป็นประโยชน์กับคุณ
                        </p>
                    </div>
                </section>

            </main>
        </div>
        <Footer />
        <Floating />
    </>
    );
}
