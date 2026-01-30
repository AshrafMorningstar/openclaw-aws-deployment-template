FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache curl bash git
RUN curl -fsSL https://openclaw.ai/install.sh | bash
EXPOSE 18789
CMD ["openclaw", "gateway"]
