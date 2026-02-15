# CodeSaarthi AI - System Design Document

## 1. High-Level Architecture

CodeSaarthi follows a layered, cloud-native architecture:

Client Layer
→ Application Layer
→ Code Intelligence Engine
→ Knowledge Layer
→ AI Reasoning Layer

---

## 2. System Components

### 2.1 Client Layer
- React Web Application
- VS Code Extension (optional)

Responsibilities:
- User authentication
- Natural language query interface
- Architecture visualization
- Impact analysis display

---

### 2.2 Application Layer (FastAPI)

Responsibilities:
- API routing
- Authentication
- Query orchestration
- Context assembly for LLM
- Response formatting

Runs on:
- AWS Lambda / ECS

---

### 2.3 Code Intelligence Engine

Responsible for repository processing:

1. Repository Ingestion
2. AST Parsing
3. Dependency Extraction
4. Call Graph Generation
5. Feature Flow Mapping

Output:
- Structured metadata
- Relationship graph
- Code chunks for embedding

---

### 2.4 Knowledge Layer

Hybrid storage model:

#### Graph Database (Amazon Neptune)
Stores:
- Module relationships
- Function dependencies
- API flow mappings

#### Vector Database (OpenSearch)
Stores:
- Code embeddings
- Semantic search index

#### Object Storage (S3)
Stores:
- Repository snapshots
- Parsed artifacts

---

### 2.5 AI Reasoning Layer

Uses AWS Bedrock for:

- Context-aware explanations
- Feature flow reasoning
- Change impact summaries
- Documentation generation

Pipeline:
1. User query
2. Retrieve relevant graph + vector data
3. Build structured prompt
4. Generate response via LLM
5. Post-process and return result

---

## 3. Data Flow

1. User connects repository
2. Repository analyzed and indexed
3. Graph + embeddings generated
4. User submits query
5. Relevant context retrieved
6. LLM generates explanation
7. Response delivered to user

---

## 4. Change Impact Design

Steps:
- Identify selected function
- Traverse dependency graph
- Detect direct and indirect callers
- Evaluate affected modules
- Generate risk assessment summary

---

## 5. Scalability Strategy

- Serverless compute via AWS Lambda
- Stateless API design
- Independent scaling of vector and graph layers
- Async processing for large repositories

---

## 6. Security Considerations

- Repository access token encryption
- Role-based access control
- Secure API Gateway routing
- No persistent storage of sensitive source code (optional enterprise config)

---

## 7. Future Enhancements

- Multi-repository support
- Team knowledge tracking
- Personalized learning insights
- CI/CD pipeline integration
- Code quality scoring

---

## 8. Design Principles

- Architecture-aware AI (not file-level only)
- Hybrid Graph + Vector intelligence
- Serverless and scalable
- Developer-first UX
- Minimal friction onboarding
