"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All status" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>();

  useEffect(() => {
    setSelectedStatus(searchParams.get("status") || "All status");
  }, [searchParams]);

  const changeParameters = (status: string) => {
    const params = new URLSearchParams(searchParams);

    if (status !== "All status") {
      if (params.get("status")) params.set("status", status);
      else params.append("status", status);
    } else params.delete("status");

    const query = params.size ? "?" + params.toString() : "";
    router.push(`/issues${query}`);
  };

  return (
    <Select.Root value={selectedStatus} onValueChange={changeParameters}>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item
            key={status.value || "All status"}
            value={status.value || "All status"}
          >
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
