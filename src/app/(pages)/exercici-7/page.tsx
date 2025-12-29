"use client";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

export const high = (str: string): string => {
  let maxScore = 0;
  let resultWord = "";

  str.split(" ").forEach((word) => {
    const wordScore = word
      .split("")
      .reduce((acc, letter) => acc + letter.charCodeAt(0) - 96, 0);
    if (wordScore > maxScore) {
      resultWord = word;
      maxScore = wordScore;
    }
  });

  return resultWord;
};

export default function Home() {
  const [n, setN] = useState("");

  const result = useMemo(() => high(n), [n]);
  return (
    <div className="flex flex-col m-4 gap-4">
      <h1>
        Dada uma sequência de palavras, você precisa encontrar a palavra com a
        maior pontuação. Cada letra de uma palavra recebe pontos de acordo com
        sua posição no alfabeto: a = 1, b = 2, c = 3 etc. Por exemplo, a
        pontuação de abadé 8(1 + 2 + 1 + 4). Você precisa retornar a palavra com
        a maior pontuação como uma string. Se duas palavras tiverem a mesma
        pontuação, retorne a palavra que aparece primeiro na sequência original.
        Todas as letras serão minúsculas e todas as entradas serão válidas.
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
