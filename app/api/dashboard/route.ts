import { currentUser, User } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";

class UserNotFoundError extends Error {};

export async function GET(){

    const user = await currentUser();
    if(!user) throw new UserNotFoundError();

    const stats = await prisma.form.aggregate({
        where:{
            userID: user.id
        },
        _sum:{
            visits:true,
            submissions:true
        }

    })

    const visits = stats._sum.visits ?? 0;
    const submissions = stats._sum.submissions ?? 0;
    const submissionRate = visits > 0 ? submissions / visits * 100 : 0;
    const bounceRate = 100 - submissionRate;

    return Response.json({visits, submissions, submissionRate, bounceRate});
}