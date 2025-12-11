import { build } from "esbuild";
import { execSync } from "child_process";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

async function buildClient() {
  console.log("Building client...");
  execSync("vite build", {
    stdio: "inherit",
    cwd: rootDir,
  });
  console.log("Client build complete!");
}

async function buildServer() {
  const serverDir = path.join(rootDir, "server");
  
  if (!existsSync(serverDir)) {
    console.log("Server directory not found, skipping server build.");
    return;
  }

  const serverIndexPath = path.join(serverDir, "index.ts");
  
  if (!existsSync(serverIndexPath)) {
    console.log("Server index.ts not found, skipping server build.");
    return;
  }

  console.log("Building server...");
  
  await build({
    entryPoints: [serverIndexPath],
    bundle: true,
    platform: "node",
    target: "node20",
    format: "cjs",
    outfile: path.join(rootDir, "dist", "index.cjs"),
    // For Node.js platform, esbuild automatically handles node_modules correctly
    // but we can explicitly exclude them if needed
    packages: "external",
    minify: process.env.NODE_ENV === "production",
    sourcemap: process.env.NODE_ENV !== "production",
  });

  console.log("Server build complete!");
}

async function main() {
  try {
    await buildClient();
    await buildServer();
    console.log("Build completed successfully!");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

main();

