import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { cache } from "react";
import AssigneeSelect from "./_components/AssigneeSelect";
import DeleteIssueButton from "./_components/DeleteIssueButton";
import EditIssueButton from "./_components/EditIssueButton";
import IssueDetails from "./_components/IssueDetails";
import StatusSelect from "./_components/StatusSelect";
import AllComment from "./_components/comment/AllComment";
import CommentForm from "./_components/comment/CommentForm";

interface Props {
  params: { id: string };
}

const fetchIssue = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } })
);

const IssueDetailsPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await fetchIssue(parseInt(params.id));
  const comments = await prisma.comment.findMany({
    where: {
      issueId: parseInt(params.id),
    },
    include: { user: true, likes: true, replies: true, _count: true },
  });

  if (!issue) notFound();

  return (
    <Grid
      gap="5"
      columns={{
        initial: "1",
        sm: "5",
      }}
    >
      <Flex className="md:col-span-4" direction="column" gap="5">
        <IssueDetails issue={issue} />
        {session && <CommentForm issue={issue} session={session} />}
        <AllComment comments={comments} />
      </Flex>
      {session && (
        <Flex direction="column" gap="4">
          <AssigneeSelect issue={issue} />
          <StatusSelect issue={issue} />
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Flex>
      )}
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchIssue(parseInt(params.id));

  return {
    title: issue?.title,
    descrption: "Details of issue " + issue?.id,
  };
}

export default IssueDetailsPage;
