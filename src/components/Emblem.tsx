export function Emblem({ className = "size-11" }: { className?: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}emblema.svg`}
      alt=""
      width={64}
      height={64}
      className={`${className} shrink-0 rounded-full`}
    />
  );
}
