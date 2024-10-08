import prisma from "@/prisma/client";
import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Table,
  Tooltip,
} from "@radix-ui/themes";
import Link from "next/link";
import { IssueStatusBadge } from "./components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: { assignedToUser: true },
  });

  return (
    <Box>
      <Heading size="5" mb="5">
        Latest Issues
      </Heading>
      <Card>
        <Table.Root>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Flex justify="between">
                    <Flex direction="column" align="start" gap="2">
                      <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                      <IssueStatusBadge status={issue.status} />
                    </Flex>
                    {issue.assignedToUser && (
                      <Tooltip content={issue.assignedToUser.name!}>
                        <Avatar
                          src={issue.assignedToUser.image!}
                          fallback="?"
                          size="2"
                          radius="full"
                        />
                      </Tooltip>
                    )}
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card>
    </Box>
  );
};

export default LatestIssues;
