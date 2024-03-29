import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "../issues/_components/IssueStatusFilter";
import IssuePageSizeSelector from "../issues/_components/IssuePageSizeSelector";

const IssueActions = () => {
  return (
    <Flex justify="between">
      <Flex gap="3">
        <IssueStatusFilter />
        <IssuePageSizeSelector />
      </Flex>
      <Button>
        <Link href="/issues/new">Create Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
