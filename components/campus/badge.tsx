type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block bg-yellow-400 text-black font-semibold px-3 py-2 rounded-md text-center">
      {children}
    </span>
  );
}
