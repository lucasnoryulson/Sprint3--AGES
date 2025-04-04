import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function criaFilme({ nome, ano }) {
  const filme = await prisma.filme.create({
    data: {
      name: nome,
      year: ano,
    },
  });
  return filme;
}

export async function updateFilme({ id, nome, ano }) {
  const filmeAtualizado = await prisma.filme.update({
    where: { id: Number(id) },
    data: {
      name: nome,
      year: ano,
    },
  });
  return filmeAtualizado;
}

export async function deleteFilme({ id }) {
  const filmeDeletado = await prisma.filme.delete({
    where: {
      id: Number(id),
    },
  });
  return filmeDeletado;
}

export async function criaReview({ autor, ano, nome_filme, nota, descricao }) {
  const review = await prisma.review.create({
    data: {
      year: ano,
      author: autor,
      film_name: nome_filme,
      rating: nota,
      description: descricao,
    },
  });
  return review;
}

export async function updateReview({ id, autor, ano, nome_filme, nota, descricao }) {
  const reviewAtualizada = await prisma.review.update({
    where: { id: Number(id) },
    data: {
      author: autor,
      year: ano,
      film_name: nome_filme,
      description: descricao,
      rating: nota,
    },
  });
  return reviewAtualizada;
}

export async function deleteReview({ id }) {
  const reviewDeletada = await prisma.review.delete({
    where: {
      id: Number(id),
    },
  });
  return reviewDeletada;
}

export async function getFilmes() {
  const filmes = await prisma.filme.findMany();
  return filmes;
}

export async function getReviews({ id } = {}) {
  if (!id) {
    throw new Error('ID é obrigatório para buscar as reviews.');
  }

  const reviews = await review.find({ id });
  return reviews;
}


async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
