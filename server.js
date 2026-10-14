const express = require('express');

const app = express();
app.use(express.json());

app.post('/hook', (req, res) => {
  res.json({
    commands: [
      {
        type: 'com.okta.access.patch',
        value: [
          {
            op: 'add',
            path: '/claims/scope',
            value: 'open id email quote bind'
          }
        ]
      }
    ]
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
