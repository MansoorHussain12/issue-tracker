"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DropdownMenu, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import Comment from "./Comment";
import { Comment as CommentModel } from "@prisma/client";

interface Props {
  comments: CommentModel[];
}

const AllComment = ({ comments }: Props) => {
  return (
    <Flex direction="column" gap="3">
      <Flex justify="between">
        <Heading size="3" className="mb-5">
          Comments
        </Heading>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Flex className="cursor-pointer">
              <Text size="2" className="text-violet-600 font-medium">
                Latest
              </Text>
              <ChevronDownIcon className="text-violet-600 ml-1" />
            </Flex>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>Sort by</DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href="/issues/30">Latest</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/issues/30">Oldest</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
      {comments.map((comment) => (
        <Comment key={comment.id} />
      ))}
    </Flex>
  );
};

export default AllComment;
