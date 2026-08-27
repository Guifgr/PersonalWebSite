import React from "react";
import "./Experience.css";

function Experience() {
    const experiences = [
        {
            company: "Itaú Unibanco",
            role: "Analista de Engenharia PL",
            period: "Set 2025 – Presente",
            description:
                "Squad de Ofertas Públicas — microsserviços críticos para o mercado de capitais. AWS/Terraform, Datadog, Apache Kafka, .NET Core, PostgreSQL.",
        },
        {
            company: "XP Inc.",
            role: "Software Engineer III → II",
            period: "Nov 2023 – Set 2025 · 1 ano e 11 meses",
            description:
                "CQRS, .NET Core/ASP.NET, APIs REST, mensageria assíncrona, xUnit.",
        },
        {
            company: "Meta",
            role: "Desenvolvedor .NET Jr → Pleno → Arquitetura/Governança",
            period: "Nov 2021 – Out 2023 · 2 anos",
            description:
                "Full-stack .NET/React, SignalR, liderança técnica e mentoria.",
        },
    ];

    return (
        <section id="experiencia" style={sectionStyle}>
            <div style={containerStyle}>
                <p style={sectionLabel}>EXPERIÊNCIA</p>
                <div style={timelineStyle}>
                    {experiences.map((exp, index) => (
                        <div key={index} style={entryStyle}>
                            <div style={dotColumnStyle}>
                                <div style={dotStyle}></div>
                                {index < experiences.length - 1 && <div style={lineStyle}></div>}
                            </div>
                            <div style={contentStyle}>
                                <div style={cardStyle} className="experience-card">
                                    <div style={headerRowStyle}>
                                        <h3 style={companyStyle}>{exp.company}</h3>
                                        <span style={periodStyle}>{exp.period}</span>
                                    </div>
                                    <p style={roleStyle}>{exp.role}</p>
                                    <p style={descStyle}>{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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

const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
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

const timelineStyle = {
    marginTop: "2rem",
};

const entryStyle = {
    display: "flex",
    gap: "1.5rem",
};

const dotColumnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
    width: "16px",
};

const dotStyle = {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "var(--accent)",
    border: "3px solid var(--bg-primary)",
    boxShadow: "0 0 0 2px var(--accent)",
    flexShrink: 0,
    marginTop: "1.5rem",
};

const lineStyle = {
    width: "2px",
    flex: 1,
    backgroundColor: "var(--border)",
    minHeight: "40px",
    marginTop: "4px",
};

const contentStyle = {
    flex: 1,
    paddingBottom: "2rem",
};

const cardStyle = {
    backgroundColor: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "1.5rem",
};

const headerRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "0.5rem",
};

const companyStyle = {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "var(--text-primary)",
};

const periodStyle = {
    fontSize: "0.8rem",
    color: "var(--text-secondary)",
    fontFamily: "var(--font-mono)",
    whiteSpace: "nowrap",
};

const roleStyle = {
    fontSize: "0.95rem",
    color: "var(--accent-light)",
    fontWeight: 500,
    marginBottom: "0.75rem",
};

const descStyle = {
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    lineHeight: "1.6",
};

export default Experience;
