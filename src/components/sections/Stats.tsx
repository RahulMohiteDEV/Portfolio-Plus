import { STATS } from '@/lib/constants';

export function Stats() {
  return (
    <>
      <div className="gradient-divider" />
      <div className="bg-surface-container-lowest py-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[40px] text-primary leading-tight">
                  {stat.value}
                </p>
                <p className="font-label-md text-on-surface-variant uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="gradient-divider" />
    </>
  );
}