import { HeartFilledIcon } from "@radix-ui/react-icons";
import { Flex, Avatar, Heading, Text, Box, Tooltip } from "@radix-ui/themes";

const Comment = () => {
  return (
    <Flex gap="2">
      <Avatar
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="A"
        radius="full"
      />
      <Box className="relative">
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
        <Tooltip content="Mansoor Hussain">
          <HeartFilledIcon
            className="absolute bottom-10 -right-2"
            color="red"
          />
        </Tooltip>
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
