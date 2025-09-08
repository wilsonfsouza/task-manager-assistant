import {
  BookText,
  CheckCircle2,
  Clock,
  FileText,
  Lightbulb,
  ListChecks,
  TestTube2,
} from "lucide-react";
import { Button } from "~/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";

const task = {
  title: "Secure Login Form with Authentication",
  description:
    "Implement a modern login form with field validation, session-based authentication, and real-time error feedback.",
  estimated_time: "2 days",
  steps: [
    "Create a form component using React",
    "Add field validation using a suitable library",
    "Connect backend for user authentication",
    "Persist sessions using SQLite",
    "Test full login and logout flow",
  ],
  suggested_tests: [
    "it('should render login form correctly')",
    "it('should validate input fields')",
    "it('should authenticate valid credentials')",
    "it('should prevent access with invalid credentials')",
  ],
  acceptance_criteria: [
    "Login form displays properly with required fields",
    "Invalid input is correctly flagged",
    "Valid users can log in and maintain a session",
    "Users are redirected upon login and logout",
  ],
  implementation_suggestion:
    "Use React Hook Form for input validation, Prisma ORM for managing user data, and configure protected routes using React Router 7.",
};

export function TaskContent() {
  return (
    <section>
      <ScrollArea className="h-[calc(100vh-120px)] pb-4">
        <div className="grid gap-4">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <FileText className="size-8" />
                <div className="leading-none">
                  <CardTitle>Title</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>{task.title}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <BookText className="size-8" />
                <div className="leading-none">
                  <CardTitle>Description</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>{task.description}</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <Clock className="size-8" />
                <div className="leading-none">
                  <CardTitle>Estimated Time</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>{task.estimated_time}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <ListChecks className="size-8" />
                <div className="leading-none">
                  <CardTitle>Steps</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-4">
                  {task.steps.map((step) => {
                    return <li key={step}>{step}</li>;
                  })}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <TestTube2 className="size-8" />
                <div className="leading-none">
                  <CardTitle>Suggested Tests</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-4">
                  {task.suggested_tests.map((test) => {
                    return <li key={test}>{test}</li>;
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <CheckCircle2 className="size-8" />
              <div className="leading-none">
                <CardTitle>Acceptance Criteria</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1 pl-4">
                {task.acceptance_criteria.map((criteria) => {
                  return <li key={criteria}>{criteria}</li>;
                })}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <Lightbulb className="size-8" />
              <div className="leading-none">
                <CardTitle>Implementation Suggestion</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>{task.implementation_suggestion}</p>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
      <div className="flex justify-end">
        <Button>Save Task</Button>
      </div>
    </section>
  );
}
