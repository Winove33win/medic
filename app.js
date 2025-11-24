const express = require('express');
const path = require('path');
const app = express();

// A porta é fornecida pelo ambiente (Plesk/cPanel) ou usa 3000 como padrão
const port = process.env.PORT || 3000;

// Serve os arquivos estáticos da pasta 'dist' (gerada pelo npm run build)
app.use(express.static(path.join(__dirname, 'dist')));

// Rota "catch-all": Qualquer requisição que não seja um arquivo estático
// é redirecionada para o index.html. Isso é essencial para SPAs (React Router).
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});