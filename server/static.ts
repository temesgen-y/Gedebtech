import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static files with explicit MIME types
  app.use(express.static(distPath, {
    setHeaders: (res, filePath) => {
      const ext = path.extname(filePath);
      if (ext === ".html") {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
      } else if (ext === ".js") {
        res.setHeader("Content-Type", "application/javascript; charset=utf-8");
      } else if (ext === ".css") {
        res.setHeader("Content-Type", "text/css; charset=utf-8");
      } else if (ext === ".json") {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
      }
    },
  }));

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res, next) => {
    // Only handle non-API routes
    if (req.originalUrl.startsWith("/api")) {
      return next();
    }
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.sendFile(path.resolve(distPath, "index.html"), (err) => {
      if (err) {
        next(err);
      }
    });
  });
}
