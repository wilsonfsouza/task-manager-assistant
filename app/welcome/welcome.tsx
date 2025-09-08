import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function Welcome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Task Manager</CardTitle>
          <CardDescription>The best way to manage your tasks.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This is a simple task manager application built with React,
            TypeScript, and Tailwind CSS.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
