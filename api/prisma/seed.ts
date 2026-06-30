import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding...');

  await prisma.projetTechno.deleteMany();
  await prisma.projet.deleteMany();
  await prisma.techno.deleteMany();
  await prisma.media.deleteMany();
  await prisma.skill.deleteMany();

  // --- MEDIAS ---
  await prisma.media.createMany({
    data: [
      { title: 'Breaking Bad', img: '/img/breaking-bad2.png', type: 'SERIE' },
      { title: 'Chucky', img: '/img/chucky.png', type: 'SERIE' },
      { title: 'Arcane', img: '/img/arcane.png', type: 'SERIE' },
      { title: 'Hunter x Hunter', img: '/img/h-x-h.png', type: 'SERIE' },
      { title: 'La Casa de Papel', img: '/img/la-casa-de-papel.png', type: 'SERIE' },
      { title: 'Alice in Borderlands', img: '/img/alice-in-borderlands.png', type: 'SERIE' },
      { title: 'All of Us Are Dead', img: '/img/all-of-us-are-dead.png', type: 'SERIE' },
      { title: 'Cassandra', img: '/img/cassandra.png', type: 'SERIE' },
      { title: 'Naruto', img: '/img/naruto.png', type: 'SERIE' },
      { title: 'Game of Thrones', img: '/img/game-of-thrones.jpg', type: 'SERIE' },
      { title: 'From', img: '/img/from.jpg', type: 'SERIE' },
      { title: 'El Refugio Atómico', img: '/img/el-refugio-atomico.png', type: 'SERIE' },
      { title: 'Black Mirror', img: '/img/black-mirror.png', type: 'SERIE' },
      { title: 'Deadpool', img: '/img/dead-pool.webp', type: 'FILM' },
      { title: 'The Social Network', img: '/img/the-social-network.png', type: 'FILM' },
      { title: 'Transformers', img: '/img/transformers.png', type: 'FILM' },
      { title: 'Harry Potter', img: '/img/harry-potter.webp', type: 'FILM' },
      { title: 'Spider-Man', img: '/img/spiderman.png', type: 'FILM' },
      { title: 'Conjuring', img: '/img/conjuring.png', type: 'FILM' },
      { title: 'Sans un Bruit', img: '/img/sans-un-bruit.png', type: 'FILM' },
      { title: 'Les Dents de la Mer', img: '/img/les-dents-de-la-mer.png', type: 'FILM' },
      { title: 'Star Wars', img: '/img/star-wars.webp', type: 'FILM' },
      { title: 'Voyage', img: '/img/voyage.png', type: 'FILM' },
      { title: 'Fast & Furious', img: '/img/fast-furious.png', type: 'FILM' },
      { title: 'Avatar', img: '/img/avatar.webp', type: 'FILM' },
    ],
  });

  const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

  // --- TECHNOS ---
  const html = await prisma.techno.create({ data: { name: 'HTML', icon: '/img/icon-html.png' } });
  const css = await prisma.techno.create({ data: { name: 'CSS', icon: '/img/icon-css.png' } });
  const js = await prisma.techno.create({ data: { name: 'JavaScript', icon: '/img/icon-js.png' } });
  const ts = await prisma.techno.create({ data: { name: 'TypeScript', icon: `${CDN}/typescript/typescript-original.svg` } });
  const react = await prisma.techno.create({ data: { name: 'React', icon: '/img/icon-react.png' } });
  const node = await prisma.techno.create({ data: { name: 'Node.js', icon: '/img/icon-node.png' } });
  const express = await prisma.techno.create({ data: { name: 'Express', icon: 'https://cdn.simpleicons.org/express/ffffff' } });
  const postgres = await prisma.techno.create({ data: { name: 'PostgreSQL', icon: `${CDN}/postgresql/postgresql-original.svg` } });
  const prismaT = await prisma.techno.create({ data: { name: 'Prisma', icon: `${CDN}/prisma/prisma-original.svg` } });

  // --- PROJETS ---
  await prisma.projet.create({
    data: {
      title: 'CinéDélices',
      img: '/img/cinedelices.png',
      description: "CinéDélices est un projet de groupe réalisé en formation CDA chez O'Clock. Il s'agit d'une application web permettant de découvrir des recettes de cuisine inspirées de films et séries. Un projet full-stack alliant passion du cinéma et gastronomie.",
      githubUrl: 'https://github.com/ImKilian/CineDelices',
      technologies: { create: [{ technoId: react.id }, { technoId: ts.id }, { technoId: express.id }, { technoId: postgres.id }, { technoId: prismaT.id }] },
    },
  });
  await prisma.projet.create({
    data: {
      title: 'HiTech.NET',
      img: '/img/hi-tech.png',
      description: "HiTech.NET est une plateforme web moderne dédiée à la vente de composants hardware. Elle propose une interface intuitive, un design épuré et une présentation soignée des produits pour offrir une expérience d'achat fluide et professionnelle.",
      githubUrl: 'https://github.com/ImKilian/HiTech.NET',
      technologies: { create: [{ technoId: html.id }, { technoId: css.id }] },
    },
  });
  await prisma.projet.create({
    data: {
      title: 'Freshly-Restaurant',
      img: '/img/freshly-restaurant.jpg',
      description: "Freshly-Restaurant est un site vitrine moderne conçu pour présenter un restaurant de manière élégante et gourmande. Il met en avant la carte, l'ambiance et les services du restaurant grâce à une interface épurée, des visuels attractifs et une navigation simple et efficace.",
      githubUrl: 'https://github.com/ImKilian/Freshly-Restaurant',
      technologies: { create: [{ technoId: html.id }, { technoId: css.id }] },
    },
  });
  await prisma.projet.create({
    data: {
      title: 'Calculatrice',
      img: '/img/calculatrice.png',
      description: "Calculatrice est une application web simple et intuitive permettant d'effectuer rapidement les opérations mathématiques de base. Elle offre une interface claire, réactive et facile à utiliser, idéale pour s'exercer ou réaliser des calculs du quotidien.",
      githubUrl: 'https://github.com/ImKilian/Calculatrice',
      technologies: { create: [{ technoId: html.id }, { technoId: css.id }, { technoId: js.id }] },
    },
  });
  await prisma.projet.create({
    data: {
      title: 'Jeu de tir 2D',
      img: '/img/jeu-de-tir.png',
      description: "Jeu de tir 2D est un mini-jeu rapide et intuitif où des cibles apparaissent et se déplacent dans un champ de tir. Le joueur doit cliquer dessus le plus vite possible pour accumuler un maximum de points avant la fin du temps imparti.",
      githubUrl: 'https://github.com/ImKilian/Jeu-de-tir-en-JS',
      technologies: { create: [{ technoId: html.id }, { technoId: css.id }, { technoId: js.id }] },
    },
  });
  await prisma.projet.create({
    data: {
      title: 'Arkanoid',
      img: '/img/arkanoid.png',
      description: "Arkanoid est une réinterprétation moderne du célèbre jeu d'arcade. Il propose un gameplay fluide, des contrôles réactifs et des animations simples mais efficaces. L'objectif : détruire toutes les briques tout en évitant de perdre la balle.",
      githubUrl: 'https://github.com/ImKilian/Jeu-Arkanoid',
      technologies: { create: [{ technoId: html.id }, { technoId: css.id }, { technoId: js.id }] },
    },
  });
  await prisma.projet.create({
    data: {
      title: 'Mix Alchemy',
      img: '/img/mix-alchemy.png',
      description: "Mix Alchemy est un jeu d'association où le joueur combine différents éléments pour en découvrir de nouveaux. Chaque mélange peut révéler une création unique, encourageant l'expérimentation et la logique.",
      githubUrl: 'https://github.com/ImKilian/Mix-Alchemy',
      technologies: { create: [{ technoId: html.id }, { technoId: css.id }, { technoId: js.id }] },
    },
  });

  // --- SKILLS ---
  await prisma.skill.createMany({
    data: [
      // Frontend
      { name: 'HTML', icon: '/img/icon-html.png', category: 'Frontend' },
      { name: 'CSS', icon: '/img/icon-css.png', category: 'Frontend' },
      { name: 'JavaScript', icon: '/img/icon-js.png', category: 'Frontend' },
      { name: 'TypeScript', icon: `${CDN}/typescript/typescript-original.svg`, category: 'Frontend' },
      { name: 'React', icon: '/img/icon-react.png', category: 'Frontend' },
      { name: 'Next.js', icon: `${CDN}/nextjs/nextjs-original.svg`, category: 'Frontend' },
      { name: 'Vite', icon: `${CDN}/vitejs/vitejs-original.svg`, category: 'Frontend' },
      // Backend
      { name: 'Node.js', icon: '/img/icon-node.png', category: 'Backend' },
      { name: 'Express', icon: 'https://cdn.simpleicons.org/express/ffffff', category: 'Backend' },
      { name: 'PHP', icon: '/img/icon-php.png', category: 'Backend' },
      // Base de données
      { name: 'SQL', icon: '/img/icon-sql.png', category: 'Base de données' },
      { name: 'PostgreSQL', icon: `${CDN}/postgresql/postgresql-original.svg`, category: 'Base de données' },
      { name: 'MongoDB', icon: `${CDN}/mongodb/mongodb-original.svg`, category: 'Base de données' },
      { name: 'Prisma', icon: `${CDN}/prisma/prisma-original.svg`, category: 'Base de données' },
      // DevOps & Outils
      { name: 'Git', icon: `${CDN}/git/git-original.svg`, category: 'DevOps & Outils' },
      { name: 'Docker', icon: `${CDN}/docker/docker-original.svg`, category: 'DevOps & Outils' },
    ],
  });

  console.log('✅ Seed terminé !');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
