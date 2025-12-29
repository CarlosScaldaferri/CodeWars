"use client";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

export function duplicateCount(text: string): number {
  const normalized = text.toLowerCase();
  const freq: Record<string, number> = {};
  for (const char of normalized) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return Object.values(freq).filter((count) => count > 1).length;
}

export default function Home() {
  const [n, setN] = useState("");

  const result = useMemo(() => duplicateCount(n.toString()), [n]);
  return (
    <div className="flex flex-col m-4 gap-4">
      <h1>
        Escreva uma função que retorne a contagem de caracteres alfabéticos e
        dígitos numéricos distintos, sem distinção entre maiúsculas e
        minúsculas, que ocorrem mais de uma vez na string de entrada. Assume-se
        que a string de entrada contenha apenas letras (maiúsculas e minúsculas)
        e dígitos numéricos.
      </h1>
      <Input
        type="text"
        className="w-40"
        onChange={(e) => setN(e.target.value)}
      />
      <h1>Resultado: {result}</h1>
    </div>
  );
}
