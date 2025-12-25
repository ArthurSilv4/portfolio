---
title: "Projeto RAG Demo"
description: "Demonstração prática de uma arquitetura RAG (Retrieval-Augmented Generation) aplicada a um chatbot de suporte, utilizando ASP.NET Core, C# e integração com modelos de linguagem."
category: "Back-end com IA"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
date: "2025-01-01"
technologies: ["ASP.NET Core", "C#", "RAG", "LLM", "Microsoft Agent Framework"]
link: "https://github.com/ArthurSilv4/rag-demo"
---

# Visão Geral

Este projeto é uma **demonstração prática de uma arquitetura RAG (Retrieval-Augmented Generation)** aplicada a um chatbot de suporte, semelhante ao ChatGPT, com foco em **back-end, organização de estado e integração com modelos de linguagem**.

O objetivo é mostrar como combinar **dados estruturados**, **histórico de conversa** e **contexto recuperado de uma base de conhecimento** para gerar respostas mais precisas, confiáveis e alinhadas ao domínio da aplicação.

O projeto prioriza decisões de arquitetura claras, separação de responsabilidades e extensibilidade para cenários reais de produção.

---

## Principais Conceitos Demonstrados

- Gerenciamento de **sessões (threads) de conversa**
- Persistência de mensagens e histórico
- Construção dinâmica de prompts
- Estratégia de **contexto + histórico + pergunta**
- Integração com LLMs
- Base para evolução com:
  - Resumo automático de contexto
  - RAG com embeddings
  - Métricas e auditoria de respostas

---

## Arquitetura (Visão Simplificada)

Cliente (Chat UI)
↓
API ASP.NET Core
↓
Gerenciamento de Sessões e Mensagens
↓
Pipeline RAG (Contexto + Histórico)
↓
Modelo de Linguagem (LLM)

A sessão de conversa é tratada como um **agregado**, enquanto cada mensagem é persistida individualmente, permitindo controle fino do contexto e escalabilidade do sistema.

---

## Tecnologias Utilizadas

- **ASP.NET Core**
- **C#**
- **LLMs (Modelos de Linguagem)**
- **Arquitetura RAG**
- **Microsoft Agent Framework** (explorado como base conceitual)
- **SQL Server** (persistência de sessões e mensagens)

---

## Objetivo do Projeto

Este projeto não tem como foco ser um produto final, mas sim:

- Explorar boas práticas na construção de chatbots com IA
- Servir como base para estudos e experimentações
- Demonstrar arquitetura de back-end orientada a longo prazo
- Facilitar futuras extensões, como:
  - Integração com bases documentais
  - Embeddings e busca semântica
  - Fluxos de suporte automatizado

---

## Galeria

![Screenshot](https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop)

---

> “A simplicidade é o último grau de sofisticação.”  
> — Leonardo da Vinci