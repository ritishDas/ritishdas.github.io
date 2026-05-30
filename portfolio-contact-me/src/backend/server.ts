// server.ts
import type { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import express from 'express';
import frontendRoute from './routes/gardener.route.js'
import cors from 'cors';


const app = express();
app.use(
  cors({
    origin: ["https://ritish.site", "http://localhost:5173"],
  })
);


app.use(express.json());
app.use(frontendRoute);


app.use((err: Error & { status: number }, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server listening 🚀🚀🚀 PORT:", PORT, "\n");
  console.log(`http://localhost:${PORT}`);
});


