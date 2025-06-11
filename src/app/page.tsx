// src/app/page.tsx หรือ app/page.tsx
import Image from "next/image";
import FAQsSection from "./components/FAQsSection";
import Floating from "./components/floating";
import Footer from "./components/Footer";
import Header from "./components/Header";

//export const dynamic = 'force-dynamic';

export default async function Home() {
  return (<>
    <Header />
    <div className="grid items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 px-4 mt-5">

        {/* ภาพโปรโมชัน */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Image
            src="/img/We1.webp"
            alt="โปรฝาก 100 รับ 300"
            className="w-full shadow-md rounded-none sm:rounded-lg"
            width={487}
            height={487}
          />
          <Image
            src="/img/78win-welcome-bonus-188.webp"
            alt="สล็อต API 78winสมาชิกใหม่ฝากแรกรับ188"
            className="w-full shadow-md rounded-none sm:rounded-lg"
            width={487}
            height={487}
          />
        </div>

        {/* หัวข้อและเนื้อหา */}
        <section className="w-full max-w-screen-lg mx-auto px-4 py-10 text-gray-900">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-display:swap font-extrabold text-red-600 leading-tight mb-6">
            สล็อตเว็บตรง API แท้ ไม่ล็อกยูส 🔥 แตกง่ายทุกค่าย | ฝากถอนออโต้ ไม่มีขั้นต่ำ | ยิงปลา คาสิโนสด แทงบอล หวย ครบจบในเว็บเดียว 2025!
          </h1>

          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-justify">
            <p>
              <strong className="text-black">78WIN</strong> คือผู้ให้บริการ <strong>สล็อตเว็บตรงไม่ผ่านเอเย่นต์</strong> ที่ได้รับความไว้วางใจจากผู้เล่นทั่วประเทศไทย
              จุดเด่นคือการใช้ <strong>API แท้</strong> เชื่อมต่อกับค่ายเกมโดยตรง ไม่ผ่านตัวกลาง ทำให้การเล่นปลอดภัย โปร่งใส และไม่มีการแทรกแซงผลลัพธ์ (No User Lock หรือ ล็อคยูส)
            </p>

            <p>
              เราให้บริการด้วยระบบ <strong>ฝากถอนอัตโนมัติ (Auto)</strong> รองรับทุกธนาคาร รวมถึง <strong>TrueMoney Wallet</strong>
              ดำเนินการรวดเร็วภายใน 5 วินาที ไม่ต้องแนบสลิป ไม่มีขั้นต่ำในการทำธุรกรรม ทั้งสะดวกและปลอดภัย
            </p>

            <p>
              เว็บไซต์ของเรารวม <strong>เกมสล็อตแตกง่าย</strong> มากกว่า 2,000 เกม จากค่ายชั้นนำระดับโลก อาทิ <strong>PG, Joker, JILI, Pragmatic Play</strong>
              พร้อมทั้ง <strong>คาสิโนสด</strong> (บาคาร่า รูเล็ต เสือมังกร), <strong>แทงบอลออนไลน์</strong> และ <strong>หวยออนไลน์</strong> ให้คุณเลือกเล่นได้ครบจบในเว็บเดียว
            </p>

            <p>
              บริการทั้งหมดนี้มาพร้อมการดูแลจาก <strong>ทีมแอดมินมืออาชีพตลอด 24 ชั่วโมง</strong> ผ่าน LINE Official และ Live Chat
              รองรับทุกอุปกรณ์ ไม่ว่าจะเป็นมือถือ แท็บเล็ต หรือคอมพิวเตอร์ ด้วยระบบที่ลื่นไหล ไม่มีสะดุด
            </p>

            <p className="text-center text-blue-700 font-semibold text-xl sm:text-2xl">
              🔥 สมัครสมาชิกกับ <strong>78WIN</strong> วันนี้ รับ <strong>โบนัสฟรีทันที</strong> พร้อมโปรโมชั่นอัปเดตทุกวัน
              การันตี “ถอนเงินจริงทุกบิล” ไม่มีประวัติโกง 100%
            </p>
          </div>
        </section>

        <section className="max-w-screen-lg mx-auto px-4 py-10 text-gray-900">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 text-center mb-8">
            สล็อตเว็บตรงไม่ผ่านเอเย่นต์ คืออะไร? ทำไมถึงได้รับความนิยมสูงสุดในปี 2025
          </h1>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-justify">
            <p>
              ปี 2025 คือยุคทองของ <strong>สล็อตออนไลน์</strong> และผู้เล่นจำนวนมากต่างหันมาเลือกเล่นกับ <strong>สล็อตเว็บตรงไม่ผ่านเอเย่นต์</strong>
              เพราะเชื่อมั่นในความปลอดภัย ความยุติธรรม และโอกาสในการทำกำไรที่มากกว่าเว็บทั่วไป บทความนี้จะอธิบายแบบเจาะลึกว่า
              <strong>เว็บตรง API แท้</strong> คืออะไร และทำไมถึงเป็นตัวเลือกอันดับ 1 ของนักปั่นสล็อตมือโปรในยุคนี้
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">1. ความปลอดภัยสูงสุด โปร่งใส ตรวจสอบได้</h2>
            <p>
              เว็บตรงที่เชื่อมต่อกับค่ายเกมผ่าน <strong>API แท้</strong> ไม่มีการดัดแปลงผลเกม ไม่มีการล็อกยูส ระบบทุกอย่างควบคุมโดยบริษัทแม่
              และใช้การเข้ารหัส SSL เพื่อปกป้องข้อมูลส่วนตัวของผู้เล่น มั่นใจได้ว่าเงินทุกบาทของคุณจะปลอดภัยและถอนออกได้จริง
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">2. เกมแท้ลิขสิทธิ์จากค่ายระดับโลก</h2>
            <p>
              เว็บตรงให้บริการ <strong>เกมสล็อตลิขสิทธิ์แท้</strong> จากค่ายชั้นนำ เช่น <strong>PG Soft, Pragmatic Play, Joker, JILI, Evolution</strong>
              ซึ่งการันตีคุณภาพและอัตราจ่ายจริง ไม่มีปรับสคริปต์หรือโกงผลลัพธ์ ผู้เล่นจึงได้รับประสบการณ์การเล่นที่ยุติธรรม 100%
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">3. ระบบฝากถอนอัตโนมัติ ปลอดภัย ใช้งานง่าย</h2>
            <p>
              ไม่ต้องรอแอดมิน ระบบ <strong>ฝากถอนออโต้</strong> รองรับทุกธนาคารและ <strong>TrueMoney Wallet</strong>
              ทำรายการรวดเร็วภายใน 5–10 วินาที ไม่มีขั้นต่ำ และไม่มีค่าธรรมเนียม พร้อมแจ้งสถานะแบบ Real-time
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">4. ครบทุกบริการในเว็บเดียว</h2>
            <ul className="list-disc list-inside">
              <li>🎰 <strong>สล็อตเว็บตรง</strong> แตกง่ายทุกค่าย เกมใหม่อัปเดตตลอด</li>
              <li>🧨 <strong>เกมยิงปลา</strong> ภาพสวย ยิงมันส์ ล่ารางวัลใหญ่</li>
              <li>🃏 <strong>คาสิโนสด</strong> ถ่ายทอดสดแบบเรียลไทม์จากต่างประเทศ</li>
              <li>⚽ <strong>แทงบอล</strong> ราคาน้ำดี รองรับทั้งบอลเดี่ยวและสเต็ป</li>
              <li>🎯 <strong>หวยออนไลน์</strong> จ่ายเต็ม ไม่มีเลขอั้น</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">5. โปรจัดเต็ม + บริการมืออาชีพตลอด 24 ชม.</h2>
            <p>
              สมาชิกใหม่รับ <strong>โบนัสฟรีทันที</strong> และยังมีโปรโมชั่นรายวัน รายสัปดาห์ คืนยอดเสีย ชวนเพื่อนรับค่าคอมฯ พร้อมทีมแอดมินที่ผ่านการอบรม
              คอยตอบแชตและช่วยเหลือคุณแบบมืออาชีพตลอด 24 ชั่วโมง ผ่าน <strong>Live Chat</strong> และ <strong>LINE Official</strong>
            </p>

            <p className="text-center text-blue-700 font-semibold text-xl sm:text-2xl">
              อยากเล่นสล็อตเว็บตรงไม่ผ่านเอเย่นต์ของจริง เลือก <strong>78WIN</strong> เว็บแท้ การันตีจ่ายจริงทุกบิล ไม่มีล็อกยูสแน่นอน!
            </p>
          </div>
        </section>


        <section className="max-w-screen-lg mx-auto px-4 py-10 text-gray-900">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 text-center mb-8">
            ทำไมผู้เล่นมืออาชีพถึงเลือก ‘สล็อตเว็บตรง’ มากกว่าเว็บทั่วไป?
          </h1>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-justify">
            <p>
              หากคุณสงสัยว่า <strong>สล็อตเว็บตรง</strong> ต่างจากเว็บสล็อตทั่วไปอย่างไร? และทำไมจึงเป็นที่นิยมในกลุ่มนักปั่นสล็อตมืออาชีพ?
              บทความนี้จะช่วยไขข้อสงสัย พร้อมสรุป <strong>ข้อดีของเว็บตรง</strong> ที่ผู้เล่นจริงแนะนำ เพื่อให้คุณตัดสินใจได้ง่ายขึ้นว่าควรเลือกเว็บแบบไหนในปี 2025
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">1. โปร่งใส ไม่ล็อกยูสเซอร์</h2>
            <p>
              ระบบ <strong>API แท้</strong> ที่เว็บตรงใช้ เชื่อมต่อเกมโดยตรงกับค่ายแม่ เช่น PG Soft, Pragmatic Play
              ทำให้ไม่มีสิทธิ์แก้ไขผลเกมหรือปรับอัตราการแพ้ชนะเหมือนเว็บผ่านเอเย่นต์ ผู้เล่นจึงมั่นใจว่า <strong>ทุกการหมุนคือของจริง</strong> ไม่มีการแทรกแซง
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">2. ถอนเงินได้จริง ทุกยอด ไม่มีหัก</h2>
            <p>
              เว็บเอเย่นต์หลายแห่งมีปัญหาเรื่องถอนเงินไม่ได้ หรือหักค่าธรรมเนียมโดยไม่แจ้งล่วงหน้า
              แต่เว็บตรงอย่าง <strong>78WIN</strong> การันตีว่าคุณจะได้รับเงินเต็มจำนวน ไม่มีหักหัวคิว ถอนกี่ครั้งก็ไม่มีค่าธรรมเนียมแอบแฝง
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">3. เกมแท้ ลิขสิทธิ์ถูกต้อง</h2>
            <p>
              เกมที่มาจากเว็บตรงเป็นเกมเวอร์ชันแท้ที่ผ่านการรับรองจากองค์กรระดับโลก เช่น <strong>BMM Testlabs</strong>, <strong>GLI</strong>
              หมายความว่าคุณจะได้เล่นเกมที่มีค่า RTP ตรงตามมาตรฐาน ไม่ถูกดัดแปลง ไม่มีโกง
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">4. ระบบอัตโนมัติ ฝากถอนใน 5 วินาที</h2>
            <p>
              ระบบ <strong>ฝากถอนออโต้</strong> ที่เว็บตรงใช้จะทำงานผ่าน AI ปลอดภัยและรวดเร็ว เติมเงินหรือถอนเงินใช้เวลาไม่เกิน 5–10 วินาที
              รองรับทุกธนาคาร รวมถึง <strong>TrueMoney Wallet</strong> ไม่มีขั้นต่ำ เติม 1 บาทก็เล่นได้ทันที
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">5. ซัพพอร์ตจริง 24 ชั่วโมง ไม่ทิ้งผู้เล่น</h2>
            <p>
              ทีมงานของเว็บตรงมักเป็นมืออาชีพที่ผ่านการอบรม ช่วยแก้ไขปัญหาได้จริง ไม่ใช่แค่บอทตอบอัตโนมัติ
              ไม่ว่าจะเป็นปัญหาเกม, การเงิน หรือการใช้งาน ติดต่อได้ผ่าน <strong>LINE Official</strong> หรือ <strong>Live Chat</strong> ตลอด 24 ชั่วโมง
            </p>

            <p className="text-center text-blue-700 font-semibold text-xl sm:text-2xl">
              หากคุณต้องการประสบการณ์เล่นสล็อตที่โปร่งใส มั่นคง และได้เงินจริง 100% — <strong>78WIN</strong> คือเว็บตรงที่ผู้เล่นมือโปรไว้ใจมากที่สุดในปี 2025
            </p>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-4 py-10 text-gray-900">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 text-center mb-10">
            รีวิว 6 สล็อตเว็บตรงแตกง่าย 2025 🔥 จ่ายจริง ไม่ล็อกยูส ที่ผู้เล่นจริงแนะนำ
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.6949393020.com//TCG_PROD_IMAGES/SUBMENU_IMG/STYLE5/RNG-PGA.png",
                alt: "PG Soft สล็อตเว็บตรง แตกง่าย 2025",
                title: "PG Soft – เบอร์ 1 สล็อตแตกง่าย",
                desc: "🔥 Lucky Neko, Aztec\n✅ แตกง่ายทุกเกม\n✅ รองรับมือถือ"
              },
              {
                img: "https://images.6949393020.com//TCG_PROD_IMAGES/SUBMENU_IMG/STYLE5/RNG-JL.png",
                alt: "JILI สล็อตโบนัสแตกบ่อย",
                title: "JILI – สายโบนัส แตกซ้ำบ่อย",
                desc: "🔥 Crazy Hunter, Roma X\n✅ ทดลองฟรีได้\n✅ โบนัสเข้าไว"
              },
              {
                img: "https://images.6949393020.com//TCG_PROD_IMAGES/SUBMENU_IMG/STYLE5/RNG-PP.png",
                alt: "Pragmatic Play ซื้อฟรีสปินได้",
                title: "PRAGMATIC – ค่ายใหญ่ระดับโลก",
                desc: "🔥 Sweet Bonanza, Olympus\n✅ ซื้อฟรีสปินได้\n✅ RTP สูง"
              },
              {
                img: "https://images.6949393020.com//TCG_PROD_IMAGES/SUBMENU_IMG/STYLE5/RNG-CQ9.png",
                alt: "CQ9 สล็อตเอเชีย เล่นง่าย",
                title: "CQ9 – สล็อตเอเชีย เล่นสนุก",
                desc: "🔥 Fire Chibi, Dragon Boat\n✅ มือใหม่ก็แตกได้\n✅ ไม่มีล็อกยูส"
              },
              {
                img: "https://images.6949393020.com//TCG_PROD_IMAGES/SUBMENU_IMG/STYLE5/RNG-FC.png",
                alt: "FA CHAI สล็อตภาพสวย รองรับทรูวอลเล็ต",
                title: "FA CHAI – ภาพสวย ระบบดี",
                desc: "🔥 Lucky Fortunes, King of Dragon\n✅ แตกง่ายทุกช่วงเวลา\n✅ รองรับ True Wallet"
              },
              {
                img: "https://images.6949393020.com//TCG_PROD_IMAGES/SUBMENU_IMG/STYLE5/RNG-JDB.png",
                alt: "JOKER Gaming ROMA แตกดี",
                title: "JOKER – ตำนาน ROMA",
                desc: "🔥 ROMA, Mythical Sand\n✅ โบนัสเข้าไว\n✅ ระบบไม่ดีเลย์"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow p-5 flex flex-col items-center text-center transition hover:shadow-lg hover:scale-[1.02] duration-200">
                <Image src={item.img} alt={item.alt} width={384} height={384} className="w-24 h-24 mb-4 object-contain" loading="lazy" />
                <h2 className="text-lg font-bold text-red-600 mb-2">{item.title}</h2>
                <p className="text-sm whitespace-pre-line text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-blue-700 font-semibold text-xl sm:text-2xl">
            อยากแตกไว ถอนเงินจริง ต้องเลือกเล่นกับค่ายที่ไม่ล็อกยูสเท่านั้น 💸 สมัครผ่านเว็บตรง 78WIN ได้เลย!
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-4 py-10 text-gray-900">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 text-center mb-8">
            เว็บตรง เดิมพันเริ่มต้นเพียง 1 บาท รวมสล็อตทุกค่าย ยิงปลา คาสิโน แทงบอล หวย ครบ จบในเว็บเดียว!
          </h1>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-justify">
            <p>
              หากคุณกำลังมองหา <strong>เว็บตรงไม่ผ่านเอเย่นต์</strong> ที่ให้เริ่มเดิมพันเพียง 1 บาท คุณมาถูกที่แล้ว!
              เว็บตรงแบบนี้เหมาะสำหรับผู้เล่นทุกระดับ โดยเฉพาะผู้เริ่มต้น เพราะช่วยให้คุณทดลองระบบจริง
              ฝึกฝีมือ และลดความเสี่ยงโดยไม่ต้องลงทุนสูง พร้อมโอกาสสร้างกำไรอย่างมีประสิทธิภาพ
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">
              🔍 ทำไม &quot;เว็บตรง 1 บาท&quot; ถึงเป็นตัวเลือกที่มือโปรแนะนำ?
            </h2>
            <p>
              เว็บตรงที่ใช้ <strong>API แท้จากค่ายเกม</strong> ไม่สามารถล็อกยูสหรือปรับผลได้
              ทุกเกมจึงมีความโปร่งใส มั่นใจได้ว่าไม่มีการแทรกแซง และเหมาะกับผู้ที่ต้องการฝึกทักษะการเล่นอย่างจริงจัง
              เริ่มจากน้อย ค่อยเพิ่มทุนเมื่อมั่นใจ = แนวทางที่ผู้เล่นมือโปรส่วนใหญ่นิยมใช้
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">
              🎰 สล็อตเว็บตรง รวมทุกค่าย แตกง่าย เกมใหม่อัปเดตตลอด
            </h2>
            <p>
              เรารวมสล็อตจากค่ายชั้นนำ เช่น <strong>PG, JILI, PRAGMATIC, CQ9, JOKER</strong> มากกว่า 1,000 เกม
              ทุกเกมผ่านการรับรองจาก BMM หรือ GLI ค่า RTP สูง เล่นแล้วแตกบ่อยจริง
              มือใหม่แนะนำเริ่มจาก: <em>Lucky Neko, Roma X, Sweet Bonanza</em>
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">
              🧨 ยิงปลา – เกมสายทักษะ ทำกำไรไว ไม่พึ่งโชค
            </h2>
            <p>
              เกมยิงปลาช่วยฝึกสมาธิ ใช้ฝีมือมากกว่าดวง เล็งแม่น ยิงตรง ได้เงินจริง
              มีโบนัสพิเศษในปลา Boss และระบบคูณเงินแบบหลายเท่า รองรับมือถือ ลื่นไหลไม่มีสะดุด
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">
              🃏 คาสิโนสด – ถ่ายทอดสดจากต่างประเทศ เริ่มเบทต่ำ
            </h2>
            <p>
              เล่น <strong>บาคาร่า เสือมังกร รูเล็ต</strong> แบบเรียลไทม์ ถ่ายทอดภาพจากคาสิโนจริง
              โต๊ะขั้นต่ำเพียง 5–10 บาท เหมาะสำหรับฝึกกลยุทธ์ก่อนลงสนามจริง พร้อมบันทึกสถิติเกมย้อนหลัง
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">
              ⚽ แทงบอล – ราคาน้ำดี ครบทุกลีก แทงสดก็ได้
            </h2>
            <p>
              เว็บตรงให้ค่าน้ำดีกว่า และมีตัวเลือกเดิมพันหลากหลาย เช่น บอลเดี่ยว สเต็ป แทงบอลสด
              ระบบแสดงสถิติ + วิเคราะห์ก่อนเกม + แทงระหว่างแข่งได้จริง ครบทุกลีกทั้งไทยและต่างประเทศ
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-red-600">
              🎯 หวยออนไลน์ – ไม่มีเลขอั้น จ่ายบาทละ 900+
            </h2>
            <p>
              รองรับ <strong>หวยรัฐบาล, ลาว, ฮานอย, หุ้น</strong> ซื้อได้ตลอด 24 ชม.
              ระบบเสถียร ไม่มีเลื่อนผล ไม่มีโกง มีบันทึกสถิติย้อนหลัง พร้อมจ่ายบาทละสูงสุด 900+
            </p>

            <div className="text-center text-blue-700 font-semibold text-xl sm:text-2xl mt-8">
              💡 เคล็ดลับ: หากคุณเป็นมือใหม่ แนะนำทดลองเล่นโหมด Demo ก่อน และเริ่มจากทุน 1–5 บาทต่อรอบ
              ค่อยเพิ่มทุนเมื่อมั่นใจ เว็บตรงที่เริ่ม 1 บาท = จุดเริ่มต้นที่ดีที่สุดสำหรับทุกคน!
            </div>
          </div>
        </section>


        <section className="max-w-screen-xl mx-auto px-4 py-10 text-gray-900">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 text-center mb-10">
            6 เกมสล็อตแตกง่าย ค่าย PG ค่า RTP สูงที่สุด 2025 🔥 จากเว็บตรงไม่ล็อคยูส เล่นแล้วถอนเงินจริง!
          </h1>

          <p className="text-base sm:text-lg text-justify leading-relaxed mb-6">
            หากคุณกำลังมองหาเกมสล็อตที่ “แตกง่าย + RTP สูง” จากค่าย <strong>PG SLOT</strong> พร้อมความมั่นใจเรื่องความโปร่งใสในการเล่น
            ต้องไม่พลาด 6 เกมจากเว็บตรงที่ผู้เล่นจริงการันตีว่า “แตกง่าย จ่ายจริง ถอนเงินไว”
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Treasures of Aztec",
                rtp: "96.71%",
                img: "https://images.6440949940.com/TCG_GAME_ICONS/PGA/EN/PGA049.png",
                desc: "สล็อตสาวถ้ำยอดฮิตจาก PG SLOT RTP สูง ตัวคูณสะสม แตกง่าย ได้เงินจริง"
              },
              {
                title: "Mahjong Ways 2",
                rtp: "96.95%",
                img: "https://images.6440949940.com/TCG_GAME_ICONS/PGA/EN/PGA042.png",
                desc: "ไพ่นกกระจอกภาคต่อจาก PG SLOT ตัวคูณ x10 ฟรีสปินบ่อย เหมาะกับสายชิล"
              },
              {
                title: "Lucky Neko",
                rtp: "96.73%",
                img: "https://images.6440949940.com/TCG_GAME_ICONS/PGA/EN/PGA056.png",
                desc: "แมวกวักนำโชค ค่า RTP สูง โบนัสคูณไม่จำกัด เล่นเพลิน ทำกำไรดี"
              },
              {
                title: "Fortune Tiger",
                rtp: "96.81%",
                img: "https://images.6440949940.com/TCG_GAME_ICONS/PGA/EN/PGA081.png",
                desc: "เสือนำโชคจาก PG เกมจบไว เหมาะกับปั้นทุนเร็ว ภาพสดใส เล่นได้ทุกวัย"
              },
              {
                title: "Showdown",
                rtp: "96.92%",
                img: "https://images.6440949940.com/TCG_GAME_ICONS/PGA/EN/PGA093.png",
                desc: "เทพโชคลาภมาแจกแตก! ซื้อฟรีสปินได้ RTP ดีเยี่ยม เหมาะกับสายปั่นจริงจัง"
              },
              {
                title: "Wild Bandito",
                rtp: "96.73%",
                img: "https://images.6440949940.com/TCG_GAME_ICONS/PGA/EN/PGA133.png",
                desc: "แก๊งโจรเม็กซิกันจาก PG SLOT โบนัสคูณโหด เพลงมันส์ บู๊เพลินทุกสปิน"
              }
            ].map((game, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                <Image
                  src={game.img}
                  alt={`${game.title} เกมสล็อต PG SLOT RTP ${game.rtp}`}
                  loading="lazy"
                  height={600}
                  width={600}
                  className="w-[170px] h-[170px] object-cover mx-auto rounded-lg"
                />
                <div className="p-4 space-y-2">
                  <h2 className="text-lg font-bold text-red-600">{game.title}</h2>
                  <p className="text-sm text-gray-700">{game.desc}</p>
                  <p className="text-sm text-green-600 font-semibold">🎯 RTP: {game.rtp}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-blue-700 font-semibold text-xl sm:text-2xl">
            ✅ อยากเล่นสล็อตแตกง่าย RTP สูง แนะนำเลือกเว็บตรงที่ใช้ API แท้ ไม่ล็อกยูส เพื่อถอนเงินจริงได้ทุกบิล!
          </div>
        </section>

        <section className="max-w-screen-lg mx-auto px-4 py-10 text-gray-900">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 text-center mb-8">
            เทคนิคปั่นสล็อตเว็บตรงสำหรับคนทุนน้อย 2025 🔍 ปรับกลยุทธ์ยังไงให้แตกจริง ไม่ต้องง้อดวง!
          </h1>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-justify">
            <p>
              หากคุณมีงบจำกัดแต่อยากลุ้นโบนัสแตกหนัก <strong>สล็อตเว็บตรง</strong> คือคำตอบที่ดีที่สุดในปี 2025
              เพราะให้คุณเล่นแบบยุติธรรม ปลอดภัย และไม่ล็อคยูส โดยเฉพาะเมื่อเลือกเว็บที่ใช้ <strong>API แท้จากค่ายเกม</strong> ชั้นนำ
            </p>

            <ul className="list-disc list-inside ml-4">
              <li>✅ ระบบสุ่มเกม (RNG) โปร่งใส ไม่ปรับแต้ม</li>
              <li>✅ ค่า RTP สูงกว่าเว็บเอเย่นต์</li>
              <li>✅ ถอนเงินจริงได้ทุกยอด ไม่มีค่าธรรมเนียม</li>
            </ul>

            <h2 className="text-xl font-bold text-red-600 mt-6">
              🧠 เทคนิคเล่นสล็อตทุนน้อยให้คุ้มทุกบาท
            </h2>

            <h3 className="font-semibold text-lg text-gray-800">1. เลือกเกม RTP สูงจากค่ายเชื่อถือได้</h3>
            <p>
              ยิ่งค่า RTP (Return to Player) สูง โอกาสคืนทุนระยะยาวยิ่งมาก เกมแนะนำที่แตกดี:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>🎯 <strong>Treasures of Aztec (PG)</strong> – RTP 96.71%</li>
              <li>🎯 <strong>Fortune Tiger</strong> – เกมไว จบเร็ว กำไรดี</li>
              <li>🎯 <strong>Sweet Bonanza</strong> – ซื้อฟรีสปินได้ คูณหนัก</li>
            </ul>

            <h3 className="font-semibold text-lg text-gray-800">2. เริ่มต้นเบทต่ำสุด 20 รอบแรก</h3>
            <p>
              ใช้เป็นช่วงทดลองจับจังหวะ หากเกมไม่แจกเลยใน 20 ตาแรก แนะนำเปลี่ยนเกมทันที ห้ามหัวร้อนใส่ทุนเพิ่ม
            </p>

            <h3 className="font-semibold text-lg text-gray-800">3. ใช้ฟีเจอร์ “ซื้อฟรีสปิน” อย่างมีสติ</h3>
            <p>
              ควรซื้อเฉพาะเมื่อเห็นสัญญาณโบนัส เช่น WILD หรือ SCATTER ออกติด ๆ กัน เพื่อให้การซื้อคุ้มค่าที่สุด
            </p>

            <h3 className="font-semibold text-lg text-gray-800">4. เล่นช่วงเวลาโบนัสแตก (Peak Time)</h3>
            <p>
              สถิติจากผู้เล่นจริงระบุว่าเกมจะแจกโบนัสบ่อยที่สุดในช่วงเวลา:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>🕓 04:00 – 06:00 น.</li>
              <li>🕕 18:00 – 20:00 น.</li>
              <li>🕘 21:00 – 00:00 น.</li>
            </ul>

            <h3 className="font-semibold text-lg text-gray-800">5. ได้กำไรแล้ว “ถอนทันที”</h3>
            <p>
              ตั้งเป้ากำไร 2–3 เท่าของทุน เมื่อได้ตามเป้าให้ถอนทันที ห้ามหมุนต่อจนหมด
              การถอนบ่อยจะช่วยลดความเสี่ยงจากระบบดูดคืน (Rebalancing)
            </p>

            <h2 className="text-xl font-bold text-red-600 mt-6">🛡️ ข้อควรระวัง + คำแนะนำจากมือโปร</h2>
            <ul className="list-disc list-inside ml-4">
              <li>⛔ หลีกเลี่ยง Auto Spin หากทุนต่ำ</li>
              <li>✅ ตั้งงบ/เป้าหมายล่วงหน้า แล้วเล่นตามแผน</li>
              <li>✅ เล่นเฉพาะเว็บตรงที่มีใบรับรอง API จากค่าย</li>
            </ul>

            <div className="mt-8 text-center text-blue-700 font-semibold text-xl sm:text-2xl">
              🎯 อยากแตกไว ถอนเงินจริง แนะนำเริ่มจากเกม RTP สูง และเล่นผ่านเว็บตรงไม่ล็อคยูสเท่านั้น!
            </div>
          </div>
        </section>

        <FAQsSection />

      </main>
    </div>
    <Footer />
    <Floating />
  </>
  );
}
