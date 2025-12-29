"use client";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);

  // function digitalRoot(n: number): number {
  //   while (n >= 10) {
  //     n = n
  //       .toString()
  //       .split("")
  //       .reduce((acc, digit) => acc + Number(digit), 0);
  //   }
  //   return n;
  // }

  function calculation(): number {
    let sum: number = 99;
    let cacValue = value;
    while (sum.toString().length > 1) {
      sum = 0;
      for (const char of cacValue.toString()) {
        sum += Number(char);
      }
      cacValue = sum;
    }
    return sum;
  }
  const result = useMemo(() => calculation(), [value]);
  return (
    <div className="flex flex-col gap-4 m-4">
      <h1>
        Dado um valor n, some os dígitos de n. Se esse valor tiver mais de um
        dígito, continue reduzindo dessa forma até obter um número com um único
        dígito. A entrada será um número inteiro não negativo.
      </h1>
      <Input
        type="number"
        className="w-40"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <h1>Resultado: {result}</h1>
    </div>
  );
}
