"use client";

import { DropdownMenu, Flex, Heading, Text } from "@radix-ui/themes";
import Comment from "./Comment";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const AllComment = () => {
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
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Flex>
  );
};

export default AllComment;
