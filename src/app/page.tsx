import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4 m-4">
      <h1>Exercícios CodeWars</h1>
      <div className="flex gap-1">
        <Link href="/exercici-1">
          <Button className="w-full" variant="default">
            1
          </Button>
        </Link>
        <Link href="/exercici-2">
          <Button className="w-full" variant="default">
            2
          </Button>
        </Link>
        <Link href="/exercici-3">
          <Button className="w-full" variant="default">
            3
          </Button>
        </Link>
        <Link href="/exercici-4">
          <Button className="w-full" variant="default">
            4
          </Button>
        </Link>
        <Link href="/exercici-5">
          <Button className="w-full" variant="default">
            5
          </Button>
        </Link>
        <Link href="/exercici-6">
          <Button className="w-full" variant="default">
            6
          </Button>
        </Link>
        <Link href="/exercici-7">
          <Button className="w-full" variant="default">
            7
          </Button>
        </Link>
        <Link href="/exercici-8">
          <Button className="w-full" variant="default">
            8
          </Button>
        </Link>
        <Link href="/exercici-9">
          <Button className="w-full" variant="default">
            9
          </Button>
        </Link>
      </div>
    </div>
  );
}
