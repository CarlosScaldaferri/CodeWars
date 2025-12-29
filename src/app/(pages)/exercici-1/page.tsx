"use client";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";

function solution(str: string, ending: string): string {
  if (str === "" || ending === "") return "";
  return str.endsWith(ending) ? "Deu certo" : "Deu Errado";
}

export default function Exercici1() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const result = useMemo(() => solution(value1, value2), [value1, value2]);

  return (
    <div className="flex flex-col gap-4 m-5">
      <h1>
        Complete a solução de forma que ela retorne verdadeiro se o primeiro
        argumento (uma string) passado terminar com o segundo argumento (também
        uma string).
      </h1>
      <div className="flex flex-col gap-1 p-3">
        <label>Valor 1</label>
        <Input
          type="text"
          className="border w-40"
          onChange={(e) => setValue1(e.target.value)}
        />

        <label>Valor 2</label>
        <Input
          type="text"
          className="border w-40"
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <h2>Resultado: {result}</h2>
    </div>
  );
}
