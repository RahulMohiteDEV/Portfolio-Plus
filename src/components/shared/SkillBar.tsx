interface SkillBarProps {
  name: string;
  level: number;
  color: 'primary' | 'secondary' | 'tertiary';
}

export function SkillBar({ name, level, color }: SkillBarProps) {
  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  };

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1">
        <span className="font-label-md text-on-surface">{name}</span>
        <span className="text-[10px] text-on-surface-variant/60">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} rounded-full transition-all duration-500`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}