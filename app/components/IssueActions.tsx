import prisma from "@/prisma/client";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueAssigneeSelector from "../issues/_components/IssueAssigneeSelector";
import IssuePageSizeSelector from "../issues/_components/IssuePageSizeSelector";
import IssueStatusFilter from "../issues/_components/IssueStatusFilter";

const IssueActions = async () => {
  const users = await prisma.user.findMany();

  return (
    <Flex justify="between">
      <Flex gap="3">
        <IssueAssigneeSelector assignees={users} />
        <IssueStatusFilter />
        <IssuePageSizeSelector />
      </Flex>
      <Button asChild>
        <Link href="/issues/new">Create Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
