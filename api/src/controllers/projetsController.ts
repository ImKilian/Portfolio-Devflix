import type { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getAllProjets = async (_req: Request, res: Response) => {
  const projets = await prisma.projet.findMany({
    include: {
      technologies: {
        include: { techno: true },
      },
    },
    orderBy: { createdAt: 'asc' },
  });
  res.json(projets);
};

export const getProjetById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const projet = await prisma.projet.findUnique({
    where: { id },
    include: {
      technologies: {
        include: { techno: true },
      },
    },
  });
  if (!projet) {
    res.status(404).json({ error: 'Projet non trouvé.' });
    return;
  }
  res.json(projet);
};

export const createProjet = async (req: Request, res: Response) => {
  const { title, img, description, technoIds } = req.body as {
    title: string;
    img: string;
    description: string;
    technoIds: number[];
  };
  const projet = await prisma.projet.create({
    data: {
      title,
      img,
      description,
      technologies: {
        create: technoIds.map((technoId) => ({ technoId })),
      },
    },
    include: { technologies: { include: { techno: true } } },
  });
  res.status(201).json(projet);
};

export const deleteProjet = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  await prisma.projet.delete({ where: { id } });
  res.status(204).send();
};
