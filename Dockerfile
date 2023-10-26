FROM docker.io/node:20-alpine AS runtime
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["pnpm", "run", "dev"]