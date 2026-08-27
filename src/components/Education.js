import React from "react";
import "./Education.css";

function Education() {
    const education = {
        degree: "Bacharelado em Sistemas de Informação",
        school: "Universidade de Mogi das Cruzes (UMC)",
        period: "2020 – 2023",
    };

    const certifications = [
        { name: "AZ-900 — Microsoft Azure Fundamentals", date: "Jul/2025" },
        { name: "Kubernetes (Alura)", date: "Jan/2023", note: "×2" },
        { name: "Microsserviços (Alura)", date: "Jun/2022" },
        { name: "C# e SOLID (Udemy)", date: "Abr/2022" },
        { name: "xUnit (Pluralsight)", date: "Set/2021" },
        { name: "SignalR (Udemy)", date: "Ago/2021", note: "×2" },
        { name: "REST APIs ASP.NET Core (Udemy)", date: "Mar/2021" },
    ];

    return (
        <section id="formacao" style={sectionStyle}>
            <div style={containerStyle}>
                <p style={sectionLabel}>FORMAÇÃO & CERTIFICAÇÕES</p>
                <div style={gridStyle}>
                    <div style={cardStyle}>
                        <h3 style={cardTitleStyle}>
                            <svg width="20" height="20" viewBox="0 0 640 512" fill="var(--accent-light)" style={{ marginRight: "0.5rem", flexShrink: 0 }}>
                                <path d="M320 32c8.8 0 16 7.2 16 16V96c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h144zM0 128c0-35.3 28.7-64 64-64H224c35.3 0 64 28.7 64 64v42.5c0 5.6-3.9 10.6-9.4 12.3L223.9 327.7c-4.8 1.5-10.1-.6-12.3-4.6L160 214.1 84.4 323.1c-2.2 4-7.4 6.1-12.3 4.6L16.4 187.8C10.9 186 7 181.1 7 175.5V133C7 97.7 35.7 69 71 69h26c35.3 0 64 28.7 64 64V128zM457.4 224H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H201.6c-4.8 1.5-10.1-.6-12.3-4.6l-48-80c-2.2-4-1.4-9.1 1.8-11.8l62.6-45.9c4.8-3.5 11.4-4.2 16.9-1.8l38.4 21.9c4.1 2.3 9.1 2.1 13-.6l56.8-45.8c4.4-3.5 10.8-3.7 15.4-.6l78.7 52.9c5.6 3.8 7.5 11.2 4.6 17.2l-29.4 59.3c-2.6 5.1-7.8 8.2-13.4 8.2z"/>
                            </svg>
                            Formação Acadêmica
                        </h3>
                        <div style={eduItemStyle}>
                            <p style={degreeStyle}>{education.degree}</p>
                            <p style={schoolStyle}>{education.school}</p>
                            <p style={periodStyle}>{education.period}</p>
                        </div>
                    </div>

                    <div style={cardStyle}>
                        <h3 style={cardTitleStyle}>
                            <svg width="20" height="20" viewBox="0 0 384 512" fill="var(--accent-light)" style={{ marginRight: "0.5rem", flexShrink: 0 }}>
                                <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 50.8-14.4 21.3 34.7L313.1 160h-99.2z"/>
                            </svg>
                            Certificações
                        </h3>
                        <ul style={certListStyle}>
                            {certifications.map((cert, i) => (
                                <li key={i} style={certItemStyle}>
                                    <span style={certNameStyle}>{cert.name}</span>
                                    {cert.note && <span style={certNoteStyle}>{cert.note}</span>}
                                    <span style={certDateStyle}>{cert.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
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
    maxWidth: "900px",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
};

const cardStyle = {
    backgroundColor: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "1.5rem",
};

const cardTitleStyle = {
    fontSize: "1rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    marginBottom: "1.25rem",
    display: "flex",
    alignItems: "center",
};

const eduItemStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
};

const degreeStyle = {
    fontSize: "1rem",
    fontWeight: 600,
    color: "var(--text-primary)",
};

const schoolStyle = {
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
};

const periodStyle = {
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
    fontFamily: "var(--font-mono)",
    marginTop: "0.25rem",
};

const certListStyle = {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
};

const certItemStyle = {
    display: "flex",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: "0.3rem",
    paddingBottom: "0.75rem",
    borderBottom: "1px solid var(--border)",
};

const certNameStyle = {
    fontSize: "0.9rem",
    color: "var(--text-primary)",
    flex: "1",
    minWidth: "150px",
};

const certNoteStyle = {
    fontSize: "0.75rem",
    color: "var(--accent-light)",
    fontWeight: 600,
};

const certDateStyle = {
    fontSize: "0.8rem",
    color: "var(--text-secondary)",
    fontFamily: "var(--font-mono)",
    marginLeft: "auto",
};

export default Education;
