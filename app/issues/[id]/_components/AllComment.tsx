import { Flex, Heading } from "@radix-ui/themes";
import Comment from "./Comment";

const AllComment = () => {
  return (
    <Flex direction="column" gap="5">
      <Heading size="3" className="mb-5">
        Comments
      </Heading>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Flex>
  );
};

export default AllComment;
