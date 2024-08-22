"use client";

import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const IssueAssigneeSelector = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageSizes: string[] = ["5", "10", "20", "30", "50"];

  const changeParameters = (pageSize: string) => {
    const params = new URLSearchParams();
    if (pageSize) params.append("pageSize", pageSize);

    if (searchParams.get("status"))
      params.append("status", searchParams.get("status")!);
    if (searchParams.get("orderBy"))
      params.append("orderBy", searchParams.get("orderBy")!);
    if (searchParams.get("sort"))
      params.append("sort", searchParams.get("sort")!);

    const query = params.size ? "?" + params.toString() : "";
    router.push(`/issues${query}`);
  };

  return (
    <Select.Root
      defaultValue={searchParams.get("pageSize") || "10"}
      onValueChange={changeParameters}
    >
      <Select.Trigger placeholder="Select Page Size..." />
      <Select.Content>
        {pageSizes.map((size) => (
          <Select.Item key={size} value={size}>
            {size}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueAssigneeSelector;
