const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));

// @ts-ignore
app.get('*', (req: Request, res: { sendFile: (arg0: string) => void; }) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
