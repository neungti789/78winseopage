// app/not-found.tsx

export const runtime = 'edge';

export default function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>ไม่พบหน้าที่คุณต้องการ</h1>
      <p>ลองกลับไปหน้าแรกดูสิครับ</p>
    </div>
  );
}
