interface HeaderProps {
  label: string;
  message: string;
}

export function Header({ label, message }: HeaderProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <span className="text-3xl">🐓</span>
      <h1 className="text-lg text-foreground">{label}</h1>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
