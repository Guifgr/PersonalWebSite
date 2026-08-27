import React from "react";
import "./Skills.css";

function Skills() {
    const categories = [
        {
            name: "Backend",
            skills: [".NET", "C#", "ASP.NET Core", "Entity Framework"],
        },
        {
            name: "Cloud",
            skills: ["AWS ECS/Lambda/SQS/SNS", "Azure"],
        },
        {
            name: "Messaging",
            skills: ["Apache Kafka", "RabbitMQ", "Redis"],
        },
        {
            name: "DevOps",
            skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"],
        },
        {
            name: "Databases",
            skills: ["PostgreSQL", "SQL Server", "MySQL"],
        },
    ];

    return (
        <section id="stack" style={sectionStyle}>
            <div style={containerStyle}>
                <p style={sectionLabel}>STACK & TECNOLOGIAS</p>
                <div style={gridStyle}>
                    {categories.map((cat) => (
                        <div key={cat.name} style={categoryStyle}>
                            <h3 style={catNameStyle}>{cat.name}</h3>
                            <div style={tagsStyle}>
                                {cat.skills.map((skill) => (
                                    <span key={skill} className="tag-pill">{skill}</span>
                                ))}
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
    backgroundColor: "var(--bg-secondary)",
    borderBottom: "1px solid var(--border)",
};

const containerStyle = {
    maxWidth: "1100px",
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

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
    gap: "2rem",
    marginTop: "2rem",
};

const categoryStyle = {
    backgroundColor: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "1.5rem",
};

const catNameStyle = {
    fontSize: "1rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    marginBottom: "1rem",
    fontFamily: "var(--font-mono)",
};

const tagsStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
};

export default Skills;
