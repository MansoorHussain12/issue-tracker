import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssuePageSizeSelector from "../issues/_components/IssuePageSizeSelector";
import IssueStatusFilter from "../issues/_components/IssueStatusFilter";

const IssueActions = () => {
  return (
    <Flex justify="between">
      <Flex gap="3">
        <IssueStatusFilter />
        <IssuePageSizeSelector />
        {/* <IssueAssigneeSelector /> */}
      </Flex>
      <Button asChild>
        <Link href="/issues/new">Create Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
