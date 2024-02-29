import { getAuthSession } from "@/lib/auth";
import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const session = await getAuthSession();
  console.log(session);
  if (session?.user?.email) {
    const body = await req.json();
    const email = session.user.email;
    const bodySchema = z.object({
      quantity: z.number().gt(0),
      productId: z.number().gt(0),
    });
    const parsedBody = await bodySchema.safeParseAsync(body);
    if (parsedBody.success) {
      try {
        await db.cart.create({
          data: {
            User: {
              connect: {
                email,
              },
            },
            ProductCart: {
              create: {
                quantity: parsedBody.data.quantity,
                productId: parsedBody.data.productId,
              },
            },
          },
        });
      } catch (error) {
        return new Response("Wrong product ID", {
          status: 400,
        });
      }

      return NextResponse.json({
        token: req.cookies.get("next-auth.session-token"),
        body,
      });
    }
    return new Response("Wrong cart data", {
      status: 400,
    });
  }
  return new Response("Auth requred", { status: 401 });
}
export async function GET(req: NextRequest) {
  const session = await getAuthSession();
  console.log(session);
  if (session?.user?.email) {
    // Добавьте вашу логику обработки GET запроса здесь
    return NextResponse.json({
      message: "GET request successful",
      session,
    });
  }
  return new Response("Auth requred", { status: 401 });
}
