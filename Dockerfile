FROM python:3.11-slim
WORKDIR /app
COPY . .
# Serve the static files on the port Cloud Run provides
CMD python -m http.server ${PORT:-8080}
