import {db} from '@/prisma/db';


export async function GET() {

    const data = await db.product.findMany()

    return Response.json({data})
}
