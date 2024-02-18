"use client";

import { Skeleton } from "@/app/components";
import useUsers from "@/app/hooks/useUsers";
import { Select } from "@radix-ui/themes";

const AssigneeFilter = () => {
  const { data: users, isLoading, error } = useUsers();

  if (error) return null;

  if (isLoading) return <Skeleton />;

  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by assignees" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="unassigned">Unassigned</Select.Item>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeFilter;
