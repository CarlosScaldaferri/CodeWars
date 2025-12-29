"use client";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

export function duplicateEncode(word: string): string {
  const letters: Record<string, number> = {};
  const lower: string = word.toLowerCase();
  for (const char of lower) {
    letters[char] = (letters[char] || 0) + 1;
  }

  return [...lower].reduce((acc, letter) => {
    acc += letters[letter] > 1 ? ")" : "(";
    return acc;
  }, "");
}

export default function Home() {
  const [n, setN] = useState("");

  const result = useMemo(() => duplicateEncode(n), [n]);
  return (
    <div className="flex flex-col m-4 gap-4">
      <h1>
        O objetivo deste exercício é converter uma string em uma nova string
        onde cada caractere na nova string indica "("se ele aparece apenas uma
        vez na string original ou ")"se aparece mais de uma vez na string
        original. Ignore maiúsculas e minúsculas ao determinar se um caractere é
        duplicado.
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
