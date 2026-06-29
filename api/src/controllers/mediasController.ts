import type { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getAllMedias = async (_req: Request, res: Response) => {
  const medias = await prisma.media.findMany({ orderBy: { createdAt: 'asc' } });
  res.json(medias);
};

export const getMediasByType = async (req: Request, res: Response) => {
  const type = req.params.type as string;
  const normalized = type.toUpperCase();
  if (normalized !== 'SERIE' && normalized !== 'FILM') {
    res.status(400).json({ error: 'Type invalide. Utiliser "serie" ou "film".' });
    return;
  }
  const medias = await prisma.media.findMany({
    where: { type: normalized },
    orderBy: { createdAt: 'asc' },
  });
  res.json(medias);
};

export const createMedia = async (req: Request, res: Response) => {
  const { title, img, type } = req.body as { title: string; img: string; type: string };
  const media = await prisma.media.create({ data: { title, img, type } });
  res.status(201).json(media);
};

export const deleteMedia = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  await prisma.media.delete({ where: { id } });
  res.status(204).send();
};
