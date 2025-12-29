"use client";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

export function narcissistic(value: number): string {
  if (value === undefined) return "";
  return value
    .toString()
    .split("")
    .reduce((acc, digit) => {
      acc += Number(digit) ** value.toString().length;
      return acc;
    }, 0) === value
    ? "O número é Narcisista"
    : "O número não é Narcisista";
}

export default function Home() {
  const [n, setN] = useState<number | undefined>(undefined);

  const result = useMemo(() => (n !== undefined ? narcissistic(n) : ""), [n]);
  return (
    <div className="flex flex-col m-4 gap-4">
      <h1>
        Um Número Narcisista (ou Número de Armstrong) é um número positivo que é
        a soma de seus próprios dígitos, cada um elevado à potência do número de
        dígitos em uma determinada base. Neste Kata, nos restringiremos ao
        sistema decimal (base 10)..
      </h1>
      <div className="flex flex-col gap-2 w-60">
        <div className="flex gap-2 items-center">
          Digite o número:
          <Input
            type="number"
            className="w-full"
            onChange={(e) =>
              setN(e.target.value === "" ? undefined : Number(e.target.value))
            }
          />
        </div>

        <div>Resultado: {result}</div>
      </div>
    </div>
  );
}
