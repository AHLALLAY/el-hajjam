FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG VITE_API_URL=http://localhost:3000/api/v1
ENV VITE_API_URL=${VITE_API_URL}
RUN npm run build

FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve@14
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]