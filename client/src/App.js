import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [secret, setSecret]     = useState('');
  const [token, setToken]       = useState('');
  const [remaining, setRemaining] = useState(0);

  const API_URL = 'http://localhost:4000/totp-generate';

  // Poll backend every 1s when a secret is set
  useEffect(() => {
    if (!secret) return;
    const fetchToken = async () => {
      try {
        const { data } = await axios.post(
          API_URL,
          { secret }
        );
        setToken(data.token);
        setRemaining(data.remaining);
      } catch (err) {
        console.error(err);
      }
    };

    fetchToken();
    const interval = setInterval(fetchToken, 2000);
    return () => clearInterval(interval);
  }, [secret]);

  return (
    <div className="container">
      <div className="card">
        <h1>2FA Code Generator</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Base32 Secret"
            value={secret}
            onChange={e => setSecret(e.target.value.trim())}
            className="secret-input"
          />
        </div>
        { token && (
          <div className="token-container">
            <div className="token-display">
              <div className="token">{token}</div>
              <div className="remaining">
                Expires in: <span className="remaining-time">{remaining}s</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
