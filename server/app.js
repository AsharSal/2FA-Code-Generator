const express    = require('express');
const bodyParser = require('body-parser');
const speakeasy  = require('speakeasy');
const cors       = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/totp-generate', (req, res) => {
  const { secret } = req.body;
  if (!secret) {
    return res.status(400).json({ error: 'Missing secret' });
  }

  // Generate current TOTP token
  const token = speakeasy.totp({
    secret,
    encoding: 'base32',
    // optional: window, step, etc.
  });

  // Time until this token expires (30s window default)
  const remaining = 30 - Math.floor((Date.now() / 1000.0) % 30);

  res.json({ token, remaining });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`2FA server listening on port ${PORT}`); // :contentReference[oaicite:8]{index=8}
});
