FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat

RUN npm install -g pnpm
ENV CI=true
ENV NODE_ENV=production
ENV PORT=3000

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml 

RUN pnpm install --frozen-lockfile
# RUN npm install

COPY build build
# COPY docs docs


EXPOSE 3000
CMD ["pnpm","start"]


