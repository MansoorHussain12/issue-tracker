"use client";

import { Skeleton } from "@/app/components";
import {
  ToastComponent,
  ToastProvider,
} from "@/app/components/ToastNotification";
import useUsers from "@/app/hooks/useUsers";
import { Issue } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, isLoading, error } = useUsers();
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [selectedAssignee, setSelectedAssignee] = useState<
    string | undefined
  >();
  const router = useRouter();

  useEffect(() => {
    setSelectedAssignee(issue.assignedToUserId || "unassigned");
  }, [issue]);

  if (error) return null;

  if (isLoading) return <Skeleton />;

  const assignIssue = async (userId: string) => {
    try {
      setToastMessage("Updating assignee...");
      setOpen(true);

      await new Promise((resolve) => setTimeout(resolve, 300)); // a small artificial delay

      await axios.patch(`/api/issues/${issue.id}`, {
        assignedToUserId: userId !== "unassigned" ? userId : null,
      });

      setSelectedAssignee(userId);
      setToastMessage("Assignee updated successfully");
      router.refresh();

      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } catch (error) {
      setToastMessage("Changes could not be saved");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Select.Root value={selectedAssignee} onValueChange={assignIssue}>
        <Select.Trigger className="w-full" placeholder="Assign..." />
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

      <ToastProvider>
        <ToastComponent title={toastMessage} onOpen={setOpen} open={open} />
      </ToastProvider>
    </div>
  );
};

export default AssigneeSelect;
