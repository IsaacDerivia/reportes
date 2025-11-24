import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/reports - Obtener todos los reportes
export async function GET() {
  try {
    const reports = await prisma.report.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(reports);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener reportes" },
      { status: 500 }
    );
  }
}

// POST /api/reports - Crear un nuevo reporte
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, content, userId } = body;

    const report = await prisma.report.create({
      data: {
        title,
        description,
        content,
        userId,
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear reporte" },
      { status: 500 }
    );
  }
}
