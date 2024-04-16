"use client";
import { ProblemStatement, CodeLanguage } from "@prisma/client";
import { Card, CardDescription, CardHeader, CardTitle } from "./shad/ui/card";
import MultipleOptionChip from "./MultipleOptionChip";
import ProblemStatementCardForm from "./ProblemStatementCardForm";

export default function EditProblemStatementCard({ problemStatement }: { problemStatement: ProblemStatement }) {
  return (
    <>
      <Card key={problemStatement.id}>
        <div className="grid grid-cols-6">
          <div className="col-span-6">
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>{problemStatement.problemId}</CardTitle>
                <ProblemStatementCardForm problemStatement={problemStatement} />
              </div>
              <CardDescription>MainFunction: {problemStatement.mainFuncName}()</CardDescription>
              <CardDescription>
                Languages:
                {problemStatement.languagesSupported.map((languagesSupported: CodeLanguage) => {
                  return <MultipleOptionChip key={languagesSupported.id} value={languagesSupported.value} />;
                })}
                Arguments:
                {problemStatement.argumentNames.map((argumentNames: string) => {
                  return <MultipleOptionChip key={argumentNames} value={argumentNames} />;
                })}
              </CardDescription>
              <CardDescription>
                Problem Link:{" "}
                <a href={`https://notion.so/${problemStatement.problem.notionDocId}`}>
                  {problemStatement.problem.notionDocId}
                </a>
              </CardDescription>
            </CardHeader>
          </div>
        </div>
      </Card>
    </>
  );
}