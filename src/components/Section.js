import React from "react";
import "./Section.css";

function Section() {
    const projects = [
        {
            title: "Ofertas Públicas — Itaú",
            description:
                "Microsserviços críticos para o mercado de capitais. .NET Core com PostgreSQL, Apache Kafka para mensageria assíncrona, AWS (Terraform), Datadog para observabilidade e monitoramento em tempo real.",
            tags: [".NET Core", "Apache Kafka", "PostgreSQL", "AWS", "Terraform", "Datadog"],
            link: "https://www.linkedin.com/in/guifgr/",
        },
        {
            title: "Hub de Assessores XP",
            description:
                "Plataforma web de alta disponibilidade para milhares de assessores financeiros. Microsserviços em .NET Core com CQRS, APIs REST e mensageria assíncrona. Websockets para atualização em tempo real, SQL Server para persistência e integrações com AWS (Lambda, Step Functions, RDS, Athena). Observabilidade com DataDog.",
            tags: [".NET Core", "CQRS", "WebSockets", "SQL Server", "AWS Lambda", "Step Functions", "RDS", "Athena", "DataDog"],
            link: "https://www.linkedin.com/in/guifgr/",
        },
        {
            title: "ComprAqui",
            description:
                "Plataforma de automação para serviços de alimentação. Real-time com SignalR, cache com Redis e persistência em MariaDB.",
            tags: ["SignalR", "Redis", "MariaDB"],
            link: "https://github.com/Guifgr",
        },
        {
            title: "Self-Hosted Infrastructure",
            description:
                "Infraestrutura self-hosted em Ubuntu com Docker, Portainer, Cloudflare Tunnels e Tailscale. Hospeda CouchDB, ntfy, Wiki.js, Immich e automação com n8n.",
            tags: ["Docker", "Linux", "Cloudflare", "Tailscale", "CouchDB"],
            link: "https://github.com/Guifgr",
        },
    ];

    return (
        <section id="projetos" style={sectionStyle}>
            <p style={sectionLabel}>PROJETOS</p>
            <div style={gridStyle}>
                {projects.map((proj, index) => (
                    <a
                        key={index}
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={cardLinkStyle}
                        className="project-card"
                    >
                        <div style={cardStyle} className="project-card-inner">
                            <h3 style={titleStyle}>{proj.title}</h3>
                            <p style={descStyle}>{proj.description}</p>
                            <div style={tagsStyle}>
                                {proj.tags.map((tag) => (
                                    <span key={tag} className="tag-pill">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div style={githubLinkStyle}>
                <a
                    href="https://github.com/Guifgr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={githubAnchorStyle}
                >
                    Ver mais no GitHub
                    <svg width="18" height="18" viewBox="0 0 496 512" fill="currentColor" style={{ marginLeft: "0.5rem" }}>
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                </a>
            </div>
        </section>
    );
}

const sectionStyle = {
    minHeight: "auto",
    padding: "5rem 2rem",
    backgroundColor: "var(--bg-primary)",
    borderBottom: "1px solid var(--border)",
};

const sectionLabel = {
    fontSize: "0.85rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    color: "var(--accent-light)",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
    textAlign: "center",
};

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1100px",
    margin: "2rem auto 0",
};

const cardLinkStyle = {
    textDecoration: "none",
    display: "block",
};

const cardStyle = {
    backgroundColor: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "1.5rem",
    height: "100%",
    transition: "all 0.2s ease",
};

const titleStyle = {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    marginBottom: "0.75rem",
};

const descStyle = {
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    lineHeight: "1.6",
    marginBottom: "1rem",
};

const tagsStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
};

const githubLinkStyle = {
    textAlign: "center",
    marginTop: "3rem",
};

const githubAnchorStyle = {
    display: "inline-flex",
    alignItems: "center",
    color: "var(--accent-light)",
    fontSize: "1rem",
    fontWeight: 500,
    textDecoration: "none",
    transition: "color 0.2s ease",
};

export default Section;
