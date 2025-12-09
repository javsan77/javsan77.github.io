---
layout: page
title: FactCheck XAI-RAG
description: FactCheck XAI-RAG
img: /assets/img/projects/factcheck-xai-rag/Main.png
importance: 1
category: work
related_publications: true
published: true
---

FactCheck XAI-RAG es un sistema que combina la Generación Aumentada por Recuperación (RAG) con la Explicabilidad (XAI) y la Verificación de Hechos. Su objetivo es proporcionar respuestas confiables y transparentes a preguntas científicas, mitigando las "alucinaciones" de los modelos de lenguaje y mostrando cómo se llegó a la respuesta.

<div align="center">
  <a href="https://github.com/javsan77/FactCheck-XAI-RAG">Código GitHub</a>
</div>


🔬 FactCheck XAI-RAG: Verificación de Hechos y Explicabilidad en IA
FactCheck XAI-RAG es un sistema que combina la Generación Aumentada por Recuperación (RAG) con la Explicabilidad (XAI) y la Verificación de Hechos. Su objetivo es proporcionar respuestas confiables y transparentes a preguntas científicas, mitigando las "alucinaciones" de los modelos de lenguaje y mostrando cómo se llegó a la respuesta.

✨ Características Principales
Respuestas Confiables: Utiliza un corpus científico para generar respuestas basadas en evidencia.
Detección de Errores: Identifica y alerta sobre el uso de terminología incorrecta o engañosa.
Puntuación de Confiabilidad: Evalúa qué tan bien la respuesta está respaldada por las fuentes.
Explicabilidad: Muestra las fuentes utilizadas y por qué una respuesta es considerada confiable o no.
Interfaz Fácil de Usar: Una interfaz web interactiva para hacer preguntas y ver los resultados.
⚙️ Cómo Funciona
El sistema funciona en varias etapas:

Recopilación de Datos: Descarga artículos científicos (ej. de ArXiv) para crear una base de conocimiento.
Base de Datos Vectorial: Convierte los documentos en "embeddings" (representaciones numéricas) y los almacena en ChromaDB para búsquedas rápidas.
Sistema RAG: Recupera los fragmentos de texto más relevantes para tu pregunta y los usa para guiar al Modelo de Lenguaje Grande (LLM) en la generación de la respuesta.
Verificación de Hechos: Analiza la respuesta del LLM en busca de "frases torturadas" y verifica su consistencia con las fuentes.
Explicabilidad (XAI): Genera resúmenes sobre las fuentes influyentes y los factores de confiabilidad.
Interfaz de Usuario: Presenta toda esta información de manera clara en una interfaz de Gradio.
🚀 Instalación y Uso
Clona el repositorio:

Instala las dependencias: Todas las librerías necesarias se instalan al ejecutar las primeras celdas del notebook de Colab (ej. transformers, langchain, chromadb, gradio).

Ejecuta en Google Colab: Abre el archivo .ipynb en Google Colab y ejecuta todas las celdas secuencialmente. La interfaz web de Gradio se iniciará automáticamente.

💡 Ejemplos de Uso
Haz preguntas científicas y el sistema te dará una respuesta, junto con un análisis de su confiabilidad y las fuentes utilizadas.

📄 Licencia
Este proyecto está bajo la Licencia [MIT / Apache 2.0 / etc.].

