const express = require('express');
const BuscaProcesso = require('busca-processos-judiciais');
const app = express();
const port = 3000;

app.use(express.static('.')); // path_to_your_html_file, in this case ./index.html

app.get('/buscarProcesso', async (req, res) => {
  try {
    const busca = new BuscaProcesso(
      "TJSP",
      "APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==",
    );
    const data = await busca.getCleanResult("50342112220234040000");
    res.json(data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
