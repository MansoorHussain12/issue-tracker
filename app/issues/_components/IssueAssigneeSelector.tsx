"use client";

import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  assignees: User[];
}

const IssueAssigneeSelector = ({ assignees }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedUser, setSelectedUser] = useState<string | undefined>();

  useEffect(() => {
    setSelectedUser(searchParams.get("assignee") || "Select Assignee");
  }, [searchParams]);

  const changeParameters = (assignee: string) => {
    const params = new URLSearchParams(searchParams);
    if (assignee !== "Select Assignee") params.set("assignee", assignee);
    else params.delete("assignee");

    const query = params.toString() ? "?" + params.toString() : "";
    router.push(`/issues${query}`);
  };

  return (
    <Select.Root value={selectedUser} onValueChange={changeParameters}>
      <Select.Trigger placeholder="Filter by assignees..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Assignees</Select.Label>
          {assignees.map((assignee) => (
            <Select.Item
              key={assignee.id || "Select Assignee"}
              value={assignee.id || "Select Assignee"}
            >
              {assignee.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueAssigneeSelector;
