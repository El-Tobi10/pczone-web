import { NextResponse } from 'next/server';
import prisma from "@/lib/prisma";


export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);

    const componente = searchParams.get('componente');
    const nombre = searchParams.get('nombre');
    const orden = searchParams.get('orden') || 'id';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    
    const prismaModeloMap: Record<string, {
        findMany: Function;
        count: Function;
        }> = {
        graficas: prisma.graficas,
        fuentes: prisma.fuentes,
        cpus: prisma.cpus,
        rams: prisma.rams,
        mothers: prisma.mothers,
        coolers: prisma.coolers,
        gabinetes: prisma.gabinetes,
        memorias_externas: prisma.memorias_externas,
        memorias_internas: prisma.memorias_internas,
        sounds: prisma.sounds
        } as const;

    if (!componente || !(componente in prismaModeloMap)) {
    return NextResponse.json({ error: 'Categoría inválida' }, { status: 400 });
    }

    const modelo = prismaModeloMap[componente];

    const skip = (page - 1) * limit;

    const where: any = {};
    if (nombre) {
        where.name = {
        contains: nombre,
        mode: 'insensitive',
        };
    }


    let orderBy: any = {};
    if (orden === 'precio_asc') orderBy = { price: 'asc' };
    else if (orden === 'precio_desc') orderBy = { price: 'desc' };
    else orderBy = { id: 'asc' }; // default

    try {
        const productos = await modelo.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        });

        const total = await modelo.count({ where });

        return NextResponse.json({
        productos,
        total,
        page,
        pages: Math.ceil(total / limit),
        });
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 });
    }
}
