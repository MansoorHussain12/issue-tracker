import authOptions from "@/app/auth/authOptions";
import { commentSchema } from "@/app/validationSchemas";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const validation = commentSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: {
      id: body.issueId,
    },
  });

  if (!issue)
    return NextResponse.json({ error: "Inavlid request" }, { status: 400 });

  const newComment = await prisma.comment.create({
    data: {
      content: body.content,
      issueId: body.issueId,
    },
  });

  return NextResponse.json(newComment, { status: 201 });
}
