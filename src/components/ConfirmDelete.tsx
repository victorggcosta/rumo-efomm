import { useState } from "react";

export function ConfirmDelete({ onConfirm }: { onConfirm: () => void }) {
  const [armed, setArmed] = useState(false);

  if (!armed) {
    return (
      <button
        type="button"
        className="min-h-11 px-1 text-sm font-semibold text-muted underline decoration-line underline-offset-4"
        onClick={() => setArmed(true)}
      >
        Apagar
      </button>
    );
  }

  return (
    <span className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        className="min-h-11 rounded-xl bg-clay px-3 text-sm font-semibold text-white"
        onClick={onConfirm}
      >
        Confirmar exclusão
      </button>
      <button
        type="button"
        className="min-h-11 px-2 text-sm font-semibold text-navy"
        onClick={() => setArmed(false)}
      >
        Cancelar
      </button>
    </span>
  );
}
