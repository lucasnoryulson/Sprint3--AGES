import express from 'express';
import { criaFilme, getFilmes, updateFilme,deleteFilme, getReviews, criaReview, updateReview, deleteReview } from './script.js';

const app = express()
const port = 3000
app.use(express.json());

app.post('/filmes', async (req, res) => {
  const {nome, ano} = req.body;
  try {
    const novoFilme = await criaFilme({nome,ano});
    res.status(201).json(novoFilme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao criar o filme' });
  }

})

app.get('/filmes',async(req,res) =>{
  try {
    const filmes = await getFilmes();
    res.status(201).json(filmes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao pegar o filme' });
  }
})

app.put('/filmes',async(req,res) =>{
  const {id,nome, ano} = req.body;
  try {
    const filme = await updateFilme({id,nome,ano});
    res.status(201).json(filme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao atualizar o filme' });
  }
})

app.delete('/filmes',async(req,res)=>{
  const {id} = req.body;
  try {
    const deletedFilme = await deleteFilme({id});
    res.status(201).json(deletedFilme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao deletar o filme' });
    
    
  }
})

//reviews
app.post('/reviews', async (req, res) => {
  const {autor, ano,nome_filme,nota,descricao} = req.body;
  try {
    const novaReview = await criaReview({autor, ano,nome_filme,nota,descricao});
    res.status(201).json(novaReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao criar nova review' });
  }

})

app.get('/reviews', async (req, res) => {
  const { id } = req.query;

  try {
    const reviews = await getReviews({ id });
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});




app.put('/reviews',async(req,res) =>{
  const {id,autor, ano,nome_filme,nota,descricao} = req.body;
  try {
    const review = await updateReview({id,autor, ano,nome_filme,nota,descricao});
    res.status(201).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao atualizar o review' });
  }
})

app.delete('/reviews',async(req,res)=>{
  const {id} = req.body;
  try {
    const deletedReview = await deleteReview({id});
    res.status(201).json(deletedReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao deletar o filme' });
    
    
  }
})



app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})
