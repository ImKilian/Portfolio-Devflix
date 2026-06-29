import type { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getAllSkills = async (_req: Request, res: Response) => {
  const skills = await prisma.skill.findMany({ orderBy: { id: 'asc' } });
  res.json(skills);
};

export const createSkill = async (req: Request, res: Response) => {
  const { name, icon, category } = req.body as { name: string; icon: string; category: string };
  const skill = await prisma.skill.create({ data: { name, icon, category } });
  res.status(201).json(skill);
};

export const deleteSkill = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  await prisma.skill.delete({ where: { id } });
  res.status(204).send();
};
