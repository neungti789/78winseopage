'use client';

import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 hover:text-red-600"
      >
        {question}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="mt-2 text-gray-600 text-base leading-relaxed">{answer}</div>}
    </div>
  );
};

export default function FAQsSection() {
  const faqs = [
    {
      question: "สล็อตเว็บตรง คืออะไร และดีกว่ายังไงเมื่อเทียบกับเว็บเอเย่นต์?",
      answer:
        "สล็อตเว็บตรง (Direct Web Slot) คือเว็บไซต์ที่เชื่อมต่อระบบเกมผ่าน API แท้จากค่ายโดยตรง เช่น PG, JILI, PRAGMATIC PLAY โดยไม่มีตัวกลาง (เอเย่นต์) ทำให้ระบบปลอดภัย โปร่งใส ไม่สามารถล็อกยูสเซอร์หรือปรับอัตราการชนะได้ ผู้เล่นจึงได้รับประสบการณ์ที่ยุติธรรมมากกว่า และมีสิทธิ์ถอนเงินจริงเต็มจำนวน"
    },
    {
      question: "เว็บตรงที่ดีควรมีใบรับรองอะไรเพื่อเพิ่มความน่าเชื่อถือ?",
      answer:
        "เว็บตรงคุณภาพควรได้รับใบอนุญาตจากองค์กรควบคุมสากล เช่น MGA (Malta Gaming Authority), PAGCOR (ฟิลิปปินส์), หรือ BMM Testlabs ซึ่งตรวจสอบระบบสุ่ม RNG และ RTP ของเกม เพื่อให้มั่นใจว่าทุกการเดิมพันเป็นธรรมและไม่มีการโกง"
    },
    {
      question: "ผู้เล่นทุนน้อยสามารถเริ่มเล่นสล็อตเว็บตรงได้หรือไม่?",
      answer:
        "แน่นอน! สล็อตเว็บตรงรองรับการเริ่มเดิมพันตั้งแต่ 1 บาท ทำให้ผู้เล่นทุนน้อยสามารถเข้าถึงและทดลองเล่นได้ แนะนำให้เริ่มจากเกมที่มี RTP สูง หรือฟีเจอร์ซื้อฟรีสปิน เพื่อเพิ่มโอกาสสร้างกำไรในงบประมาณจำกัด"
    },
    {
      question: "ค่า RTP คืออะไร? ส่งผลต่อการแตกง่ายของเกมยังไง?",
      answer:
        "RTP หรือ Return to Player คืออัตราการจ่ายคืนให้ผู้เล่นในระยะยาว ยิ่งเกมมี RTP สูง (เช่น 96-98%) ยิ่งหมายความว่าเกมนั้นมีโอกาสจ่ายเงินคืนมากขึ้น เหมาะสำหรับผู้เล่นที่ต้องการผลลัพธ์ที่ยั่งยืนมากกว่าพึ่งโชคเพียงอย่างเดียว"
    },
    {
      question: "สามารถเล่นสล็อตเว็บตรงผ่านมือถือได้หรือไม่?",
      answer:
        "ได้ 100%! สล็อตเว็บตรงยุคใหม่พัฒนาด้วยเทคโนโลยี HTML5 ทำให้สามารถเล่นผ่านมือถือทั้ง iOS และ Android ได้ลื่นไหล ไม่ต้องดาวน์โหลดแอป และยังมีความปลอดภัยกว่าการติดตั้งซอฟต์แวร์ภายนอก"
    },
    {
      question: "เว็บตรงปลอดภัยแค่ไหน? แล้วจะรู้ได้อย่างไรว่าถูกโกง?",
      answer:
        "เว็บตรงที่ได้รับใบรับรองสากลจะไม่สามารถปรับระบบหรือโกงผู้เล่นได้ หากคุณเลือกเว็บที่มีรีวิวผู้ใช้งานจริง ระบบถอนเงินออโต้ และไม่มีประวัติร้องเรียน ก็มั่นใจได้ว่าเล่นได้ปลอดภัย 100% ต่างจากเว็บเถื่อนหรือเว็บเอเย่นต์ที่มีโอกาสโดนโกงหรือถอนเงินไม่เข้า"
    }
  ];

  return (
    <section className="max-w-screen-lg mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-8">
        FAQs คำถามที่พบบ่อยเกี่ยวกับ สล็อตเว็บตรง (ฉบับอัปเดต 2025)
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
