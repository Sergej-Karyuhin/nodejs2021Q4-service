declare global { // eslint-disable-next-line no-unused-vars
  namespace NodeJS { // eslint-disable-next-line no-unused-vars
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      JWT_SECRET_KEY: string;
      AUTH_MODE: 'true' | 'false';
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DB: string;
      POSTGRES_PORT: number;
      POSTGRES_HOST: string;
    }
  }
}

export {};
