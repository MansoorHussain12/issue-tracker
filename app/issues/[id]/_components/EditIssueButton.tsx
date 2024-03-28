import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button asChild>
      <Link href={`/issues/${issueId}/edit`}>
        <div className="flex items-center gap-2">
          <Pencil2Icon />
          <span>Edit Issue</span>
        </div>
      </Link>
    </Button>
  );
};

export default EditIssueButton;
