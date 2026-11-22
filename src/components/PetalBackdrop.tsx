const PETALS = [
  { left: '6%', dx: '34px', duration: '13s', delay: '-2s', scale: 0.85, color: 'from-[#ECD08B] to-[#C8862B]' },
  { left: '15%', dx: '-28px', duration: '15s', delay: '-9s', scale: 0.65, color: 'from-[#D4A853] to-[#9E1B24]' },
  { left: '24%', dx: '46px', duration: '12s', delay: '-5s', scale: 0.9, color: 'from-[#F0D796] to-[#B87D28]' },
  { left: '34%', dx: '-40px', duration: '16s', delay: '-11s', scale: 0.72, color: 'from-[#D4A853] to-[#8C1D24]' },
  { left: '46%', dx: '26px', duration: '14s', delay: '-4s', scale: 0.8, color: 'from-[#ECD08B] to-[#C8862B]' },
  { left: '58%', dx: '-35px', duration: '11.5s', delay: '-8s', scale: 0.95, color: 'from-[#E2B761] to-[#A63A24]' },
  { left: '68%', dx: '42px', duration: '15.5s', delay: '-1s', scale: 0.7, color: 'from-[#D4A853] to-[#9E1B24]' },
  { left: '79%', dx: '-48px', duration: '13.5s', delay: '-7s', scale: 0.88, color: 'from-[#ECD08B] to-[#B87D28]' },
  { left: '89%', dx: '24px', duration: '14.5s', delay: '-12s', scale: 0.75, color: 'from-[#D4A853] to-[#8C1D24]' },
  { left: '95%', dx: '-30px', duration: '12.5s', delay: '-3s', scale: 0.68, color: 'from-[#F0D796] to-[#B87D28]' },
];

export function PetalBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      {PETALS.map((petal, idx) => (
        <span
          key={idx}
          style={{
            left: petal.left,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            ['--dx' as string]: petal.dx,
          }}
          className={`petal-particle absolute -top-6 block h-3.5 w-2.5 rounded-[50%_50%_50%_0] bg-gradient-to-br opacity-50 shadow-[0_0_8px_rgba(212,168,83,0.22)] ${petal.color}`}
        />
      ))}
    </div>
  );
}
