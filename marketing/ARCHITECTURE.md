# 🏗 Professional Architecture Diagram

Here is the Mermaid.js representation of the OpenClaw Enterprise Architecture. You can render this directly in GitHub, Notion, or copy it into tools like draw.io / Mermaid Live Editor.

```mermaid
graph TD
    %% Styling
    classDef user fill:#2563eb,stroke:#1e40af,stroke-width:2px,color:#fff
    classDef alb fill:#f59e0b,stroke:#b45309,stroke-width:2px,color:#fff
    classDef eks fill:#10b981,stroke:#047857,stroke-width:2px,color:#fff
    classDef pod fill:#06b6d4,stroke:#0e7490,stroke-width:2px,color:#fff
    classDef db fill:#8b5cf6,stroke:#5b21b6,stroke-width:2px,color:#fff
    classDef api fill:#ef4444,stroke:#b91c1c,stroke-width:2px,color:#fff

    User((Users)):::user -->|HTTPS/TLS| Route53[AWS Route53 DNS]
    Route53 --> ALB[Application Load Balancer]:::alb
    
    subgraph AWS EKS Cluster [Amazon EKS Cluster - Multi AZ]
        ALB -->|Ingress| NGINX[Nginx Ingress Controller]
        NGINX --> SVC[OpenClaw Kubernetes Service]
        
        subgraph Node Group
            SVC --> Pod1[OpenClaw Pod 1]:::pod
            SVC --> Pod2[OpenClaw Pod 2]:::pod
            SVC --> PodN[OpenClaw Pod N - Auto Scaled]:::pod
        end
    end

    Pod1 --> DB[(RDS / PostgreSQL)]:::db
    Pod2 --> Redis[(ElastiCache / Redis)]:::db
    
    subgraph External AI Services
        Pod1 --> OpenRouter[OpenRouter API]:::api
        Pod2 --> ElevenLabs[ElevenLabs TTS]:::api
        PodN --> Brave[Brave Search API]:::api
    end
```
