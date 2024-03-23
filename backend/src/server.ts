import env from './util/validateEnv'
import app from './app';
const port = env.PORT;
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})