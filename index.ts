import { app } from './src/shared/infra/http/App'

const port = 3333 || process.env.PORT

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
