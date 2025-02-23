import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@/components/Header'가 'src/components/Header'로 매핑되도록 설정
    },
  },
});

// prettier-ignore

// jsconfig.js 파일을 생성했을 경우(vscode 에서 인식함)

/*

{
  "compilerOptions": {
    "baseUrl": "./src",  // src 디렉터리를 기준으로 alias 설정
    "paths": {
      "@/*": ["*"]  // '@/components/Header'가 'src/components/Header'로 매핑되도록 설정
    }
  }
}

*/
