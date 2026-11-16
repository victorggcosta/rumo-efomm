import type { AvatarId, UserProfile } from "../types.ts";

const AVATARS: { id: AvatarId; label: string }[] = [
  { id: "ancora", label: "Âncora" },
  { id: "bussola", label: "Bússola" },
  { id: "leme", label: "Leme" },
  { id: "farol", label: "Farol" },
  { id: "onda", label: "Onda" },
];

export function avatarLabel(id: AvatarId): string {
  return AVATARS.find((item) => item.id === id)?.label ?? "Avatar";
}

export function avatarChoices(): { id: AvatarId; label: string }[] {
  return AVATARS;
}

export function UserMark({
  profile,
  className = "size-12",
}: {
  profile: Pick<UserProfile, "photo" | "avatar">;
  className?: string;
}) {
  if (profile.photo) {
    return (
      <img
        src={profile.photo}
        alt=""
        className={`${className} shrink-0 rounded-full border border-gold/70 object-cover`}
      />
    );
  }
  return (
    <span
      className={`${className} flex shrink-0 items-center justify-center rounded-full border border-gold/70 bg-navy text-gold`}
      aria-hidden="true"
    >
      <AvatarGlyph id={profile.avatar} />
    </span>
  );
}

function AvatarGlyph({ id }: { id: AvatarId }) {
  if (id === "bussola") {
    return (
      <svg viewBox="0 0 24 24" className="size-1/2" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4.5v2.2M12 17.3V19.5M4.5 12h2.2M17.3 12H19.5" />
        <path d="m14.8 9.2-1.2 4.4-4.4 1.2 1.2-4.4z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (id === "leme") {
    return (
      <svg viewBox="0 0 24 24" className="size-1/2" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2" />
      </svg>
    );
  }
  if (id === "farol") {
    return (
      <svg viewBox="0 0 24 24" className="size-1/2" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M9 21h6M10 21V11h4v10" />
        <path d="M8 11h8l-1.2-4H9.2z" />
        <path d="M12 7V4M4 8l2.2 1.2M20 8l-2.2 1.2" />
      </svg>
    );
  }
  if (id === "onda") {
    return (
      <svg viewBox="0 0 24 24" className="size-1/2" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
        <path d="M3 10c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-1/2" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="7" r="2.2" />
      <path d="M12 9.2v5.2" />
      <path d="m7 20 5-5.6L17 20" />
      <path d="M8.5 13.2h7" />
    </svg>
  );
}
