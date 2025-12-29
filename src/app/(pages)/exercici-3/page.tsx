"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const likes = (a: string[]): string => {
  if (a.length === 0) return "no one likes this";
  if (a.length === 1) return a[0] + " likes this";
  if (a.length === 2) return a[0] + " and " + a[1] + " like this";
  if (a.length === 3) return a[0] + ", " + a[1] + " and " + a[2] + " like this";

  return a[0] + ", " + a[1] + " and " + (a.length - 2) + " others like this";
};

export default function Home() {
  const [names, setNames] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [resultText, setResultText] = useState<string>("");

  function handleAddClick() {
    name.length > 0 && setNames([...names, name]);
    setName("");
  }

  function handleGenerateClick() {
    setResultText(likes(names));
  }
  return (
    <div className="m-4 gap-4 flex flex-col">
      <h1>
        Você provavelmente conhece o sistema de "curtir" do Facebook e de outras
        páginas. As pessoas podem "curtir" posts de blogs, fotos ou outros
        itens. Queremos criar o texto que deve ser exibido ao lado desse item.
        Implemente a função que recebe um array contendo os nomes das pessoas
        que curtiram um item
      </h1>
      <div className="flex gap-2">
        <Input
          type="text"
          className="w-40"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Button onClick={handleAddClick}>ADD</Button>
      </div>
      <Card className="w-40 p-2">
        <CardTitle>Nomes</CardTitle>
        <CardDescription>
          {names.map((name, index) => (
            <div
              key={index}
              className="flex items-center m-2 space-x-1 space-y-1"
            >
              <div>{name}</div>
              <Button
                className="w-1 h-2 rounded-none"
                onClick={() => setNames(names.filter((_, i) => i !== index))}
              >
                X
              </Button>
            </div>
          ))}
        </CardDescription>
        <Button onClick={handleGenerateClick}>Gerar</Button>
        <CardFooter>{resultText}</CardFooter>
      </Card>
    </div>
  );
}
