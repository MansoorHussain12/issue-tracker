"use client";

import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const pageSizes: string[] = ["5", "10", "20", "30", "50"];

const IssuePageSizeSelector = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedPageSize, setSelectedPageSize] = useState<
    string | undefined
  >();

  useEffect(() => {
    setSelectedPageSize(searchParams.get("pageSize") || "10");
  }, [searchParams]);

  const changeParameters = (pageSize: string) => {
    const params = new URLSearchParams(searchParams);
    if (params.get("pageSize")) params.set("pageSize", pageSize);
    else params.append("pageSize", pageSize);

    const query = params.size ? "?" + params.toString() : "";
    router.push(`/issues${query}`);
  };

  return (
    <Select.Root value={selectedPageSize} onValueChange={changeParameters}>
      <Select.Trigger placeholder="Select Page Size..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Page Size</Select.Label>
          {pageSizes.map((size) => (
            <Select.Item key={size} value={size}>
              {size}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default IssuePageSizeSelector;
