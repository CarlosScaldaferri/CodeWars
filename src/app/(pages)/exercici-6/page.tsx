"use client";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

export function rowSumOddNumbers(n: number): number {
  //return n * n * n 
  //ou
  let number = 0;
  let count = n * (n - 1) + 1;
  for (let i = 1; i <= n; i++) {
    number += count;
    count += 2;
  }
  return number;
}

export default function Home() {
  const [n, setN] = useState("");

  const result = useMemo(() => rowSumOddNumbers(Number(n)), [n]);

  return (
    <div className="flex flex-col m-4 gap-4">
      <h1>
        Dado o triângulo de números ímpares consecutivos: 1, 3 5, 7 9 11, 13 15
        17 19, 21 23 25 27 29 ... Calcule a soma dos números na n -ésima linha
        deste triângulo (começando no índice 1), por exemplo: ( Entrada -- Saída
        ) 1 -- 1, 2 -- 3 + 5 = 8
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
