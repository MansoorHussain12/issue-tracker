import { Flex, Avatar, Heading, Text, Box } from "@radix-ui/themes";

const Comment = () => {
  return (
    <Flex gap="2">
      <Avatar
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="A"
        radius="full"
      />
      <Box>
        <Flex gap="2" direction="column" className="bg-gray-100 rounded-lg p-2">
          <Heading size="2">Name Here</Heading>
          <Text size="1">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            enim pariatur temporibus nihil libero quae ad nulla itaque
            doloremque, explicabo error sit ipsum saepe eius vero ea possimus
            impedit recusandae perferendis totam eaque necessitatibus, porro
            accusamus iure. Ab dolorem repudiandae quaerat consequatur
            exercitationem ea distinctio neque veritatis magnam, facilis
            doloribus.
          </Text>
        </Flex>
        <Flex gap="5" className="p-2">
          <Text color="blue" size="1" className="cursor-pointer font-bold">
            Like
          </Text>
          <Text color="blue" size="1" className="cursor-pointer font-bold">
            Reply
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Comment;
