"use client";

import { commentSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, Flex, TextArea } from "@radix-ui/themes";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

type CommentFormData = z.infer<typeof commentSchema>;

interface Props {
  issue: Issue;
  session: Session;
}

const CommentForm = ({ issue, session }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  });

  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    // try {
    //   setSubmitting(true);
    //   if (issue && session.user)
    //     await axios.post("/api/comments", {
    //       content: data.content,
    //       issueId: issue.id,
    //       userEmail: session.user.email,
    //     });
    //   setSubmitting(false);
    //   reset();
    //   router.refresh();
    // } catch (error) {
    //   setSubmitting(false);
    // }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Flex gap="2" mt="3">
          <TextArea
            className="w-full"
            placeholder="Type your comment here..."
            size="2"
            {...register("content")}
          />
          <Button
            disabled={!isValid || submitting}
            variant="surface"
            className="self-center"
          >
            Add
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default CommentForm;
