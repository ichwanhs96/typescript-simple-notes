import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Writer } from './lib/writer';

const writer = new Writer();

// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.json());

app.get('/health', function (req, res) {
  res.send('OK');
});

app.get('/read', function (req, res) {
  const note = writer.read();
  res.send(note);
});

app.post('/writes', function (req, res) {
  const note = writer.write(req.body.text);
  res.send(note);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});