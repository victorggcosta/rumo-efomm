import { useState } from "react";
import { useAndroidBack } from "../lib/androidBack.ts";
import { EXAM_PLAN, drawExam } from "../lib/exam.ts";
import { useAppState } from "../state.tsx";
import type { ExamMode } from "../types.ts";

export function ExamLauncher() {
  const { beginExam } = useAppState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<ExamMode | null>(null);
  const [error, setError] = useState("");
  useAndroidBack(open, () => setOpen(false), 70);

  async function start(mode: ExamMode) {
    setLoading(mode);
    setError("");
    try {
      const questions = await drawExam(mode);
      beginExam(mode, questions);
      setOpen(false);
    } catch {
      setError("Não consegui sortear as questões agora. Tente de novo.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <>
      <button
        type="button"
        id="abrir-simulado"
        className="w-full rounded-2xl bg-gold px-4 py-5 text-left text-navy"
        onClick={() => {
          setError("");
          setOpen(true);
        }}
      >
        <span className="text-xs font-semibold uppercase tracking-wide">Modo prova</span>
        <span className="mt-1 block font-serif text-2xl leading-tight">Simulado Oficial EFOMM (Modo Prova)</span>
        <span className="mt-2 block text-sm leading-relaxed">
          Matemática, Física, Inglês e Português, com cronômetro e cartão-resposta.
        </span>
      </button>
      {open ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-navy/40 p-4 sm:items-center">
          <div role="dialog" aria-modal="true" aria-labelledby="simulado-titulo" className="w-full max-w-lg rounded-2xl bg-white p-5">
            <h2 id="simulado-titulo" className="font-serif text-2xl text-navy">
              Escolha o simulado
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              As questões saem do banco das quatro disciplinas. No fim, cada matéria recebe nota de 0 a 100. Abaixo de 50 em qualquer uma, a regra eliminatória reprova.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                id="simulado-mini"
                className="btn btn-primary"
                disabled={loading !== null}
                onClick={() => void start("mini")}
              >
                {loading === "mini" ? "Sorteando..." : `${EXAM_PLAN.mini.label} · 10 por matéria · ${EXAM_PLAN.mini.timeLabel}`}
              </button>
              <button
                type="button"
                id="simulado-completo"
                className="btn btn-quiet"
                disabled={loading !== null}
                onClick={() => void start("completo")}
              >
                {loading === "completo"
                  ? "Sorteando..."
                  : `${EXAM_PLAN.completo.label} · 20 por matéria · ${EXAM_PLAN.completo.timeLabel}`}
              </button>
              <button type="button" className="btn btn-quiet" disabled={loading !== null} onClick={() => setOpen(false)}>
                Cancelar
              </button>
            </div>
            {error ? (
              <p role="alert" className="mt-3 text-sm text-clay">
                {error}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
