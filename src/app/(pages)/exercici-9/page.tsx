"use client";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import { isNumberObject } from "util/types";

function ipToInt(ip: string): number {
  const parts = ip.split(".").map(Number);

  return ((parts[0] * 256 + parts[1]) * 256 + parts[2]) * 256 + parts[3];
}

export function ipsBetween(start: string, end: string): number {
  return isNaN(ipToInt(end) - ipToInt(start))
    ? 0
    : ipToInt(end) - ipToInt(start);
}

export default function Home() {
  const [ip1, setIp1] = useState("");
  const [ip2, setIp2] = useState("");

  const result = useMemo(() => ipsBetween(ip1, ip2), [ip1, ip2]);
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
        onChange={(e) => setIp1(e.target.value)}
      />

      <Input
        type="text"
        className="w-40"
        onChange={(e) => setIp2(e.target.value)}
      />
      <h1>Resultado: {result}</h1>
    </div>
  );
}
