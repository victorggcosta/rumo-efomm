import { formatShortDate } from "../lib/dates.ts";
import { formatKg } from "../lib/format.ts";
import { sortWeights } from "../lib/body.ts";
import type { WeightEntry } from "../types.ts";

const WIDTH = 640;
const HEIGHT = 236;
const PAD = { l: 52, r: 18, t: 24, b: 36 };

export function WeightChart({ entries }: { entries: WeightEntry[] }) {
  const sorted = sortWeights(entries);
  if (sorted.length === 0) {
    return (
      <p className="text-base leading-relaxed text-muted">
        Nenhuma pesagem salva. Quando você adicionar um peso, a linha aparece aqui.
      </p>
    );
  }

  const plotW = WIDTH - PAD.l - PAD.r;
  const plotH = HEIGHT - PAD.t - PAD.b;
  const kilos = sorted.map((entry) => entry.kg);
  const minKg = Math.min(...kilos);
  const maxKg = Math.max(...kilos);
  const padKg = Math.max(0.8, (maxKg - minKg) * 0.45);
  const yMin = minKg - padKg;
  const yMax = maxKg + padKg;
  const xOf = (index: number) =>
    sorted.length === 1 ? PAD.l + plotW / 2 : PAD.l + (index / (sorted.length - 1)) * plotW;
  const yOf = (kg: number) => PAD.t + (1 - (kg - yMin) / (yMax - yMin)) * plotH;
  const points = sorted.map((entry, index) => ({ entry, x: xOf(index), y: yOf(entry.kg) }));
  const line = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const area =
    sorted.length > 1
      ? `${line} L ${points.at(-1)?.x} ${PAD.t + plotH} L ${points[0]?.x} ${PAD.t + plotH} Z`
      : "";
  const ticks = [yMin, (yMin + yMax) / 2, yMax];
  const summary = sorted
    .map((entry) => `${formatShortDate(entry.date)} ${formatKg(entry.kg)} kg`)
    .join(", ");

  return (
    <div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label={`Gráfico do peso: ${summary}`}
      >
        {ticks.map((tick) => (
          <g key={tick}>
            <line
              x1={PAD.l}
              x2={WIDTH - PAD.r}
              y1={yOf(tick)}
              y2={yOf(tick)}
              stroke="#E4DCCB"
              strokeWidth="1"
            />
            <text x={PAD.l - 8} y={yOf(tick) + 4} textAnchor="end" fill="#4A5968" fontSize="12">
              {formatKg(tick)}
            </text>
          </g>
        ))}
        {area ? <path d={area} fill="#0B1F3A" opacity="0.06" /> : null}
        {sorted.length > 1 ? (
          <path d={line} fill="none" stroke="#0B1F3A" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        ) : null}
        {points.map((point, index) => {
          const last = index === points.length - 1;
          const showValue = sorted.length <= 6 || index === 0 || last;
          return (
            <g key={point.entry.id}>
              <circle cx={point.x} cy={point.y} r={last ? 6 : 4.5} fill="#C6A15B" stroke="#0B1F3A" strokeWidth="1.6">
                <title>
                  {formatShortDate(point.entry.date)}: {formatKg(point.entry.kg)} kg
                </title>
              </circle>
              {showValue ? (
                <text x={point.x} y={point.y - 12} textAnchor="middle" fill="#0B1F3A" fontSize="12" fontWeight="600">
                  {formatKg(point.entry.kg)}
                </text>
              ) : null}
            </g>
          );
        })}
        {points.map((point, index) => {
          const showDate = sorted.length <= 5 || index === 0 || index === points.length - 1;
          if (!showDate) return null;
          return (
            <text
              key={`${point.entry.id}-data`}
              x={point.x}
              y={HEIGHT - 10}
              textAnchor="middle"
              fill="#4A5968"
              fontSize="12"
            >
              {formatShortDate(point.entry.date)}
            </text>
          );
        })}
      </svg>
      <table className="sr-only">
        <caption>Pesagens registradas</caption>
        <thead>
          <tr>
            <th>Data</th>
            <th>Peso</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{formatKg(entry.kg)} kg</td>
            </tr>
          ))}
        </tbody>
      </table>
      {sorted.length === 1 ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Ponto de partida. A linha aparece quando houver outra pesagem.
        </p>
      ) : null}
    </div>
  );
}
