import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    experimental: {
      renderBuiltUrl(filename) {
        if (mode === "development") return;
        // here we set the base url. You might have to change this for react:
        if (env.VITE_APP_URL == undefined) return filename;
        return env.VITE_APP_URL + "/" + filename; // THIS fixes the wrong url in index.html after build.
      },
    },
  };
});
