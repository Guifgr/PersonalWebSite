import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <section id="contato" style={sectionStyle}>
            <div style={containerStyle}>
                <p style={sectionLabel}>CONTATO</p>
                <p style={subtitleStyle}>Entre em contato comigo!</p>
                <p style={descStyle}>
                    Mande um email caso precise de mais alguma informação, comentário sobre projeto,
                    orçamentos ou até mesmo para marcar um café!
                </p>

                <form method="post" action="mailto:guifgr@users.noreply.github.com" style={formStyle}>
                    <div className="contact-row">
                        <input
                            style={inputStyle}
                            type="text"
                            id="nome"
                            placeholder="Nome"
                            title="nome"
                            name="nome"
                        ></input>
                        <input
                            style={inputStyle}
                            type="text"
                            id="sobrenome"
                            placeholder="Sobrenome"
                            title="sobrenome"
                            name="sobrenome"
                        ></input>
                    </div>
                    <div className="contact-row">
                        <input
                            style={inputStyle}
                            type="email"
                            id="email"
                            placeholder="Email"
                            title="email"
                            name="email"
                        ></input>
                        <input
                            style={inputStyle}
                            type="tel"
                            id="telefone"
                            placeholder="Telefone"
                            title="telefone"
                            name="telefone"
                        ></input>
                    </div>
                    <div style={textareaWrapperStyle}>
                        <textarea
                            rows="6"
                            style={textareaStyle}
                            placeholder="Escreva aqui sua mensagem..."
                            name="message"
                            id="messageText"
                        ></textarea>
                    </div>

                    <div style={btnDivStyle}>
                        <button style={btnStyle} type="submit">Enviar</button>
                    </div>
                </form>

                <p style={linkedInNoteStyle}>
                    Ou me encontre no{" "}
                    <a
                        href="https://www.linkedin.com/in/guifgr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkedInLinkStyle}
                    >
                        LinkedIn
                    </a>
                    !
                </p>
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
    maxWidth: "600px",
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

const subtitleStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    color: "var(--text-primary)",
    textAlign: "center",
    marginBottom: "1rem",
};

const descStyle = {
    fontSize: "0.95rem",
    color: "var(--text-secondary)",
    textAlign: "center",
    marginBottom: "2.5rem",
    lineHeight: "1.7",
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
};

const inputStyle = {
    flex: 1,
    height: "50px",
    padding: "0 1rem",
    backgroundColor: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s ease",
};

const textareaWrapperStyle = {
    width: "100%",
};

const textareaStyle = {
    width: "100%",
    padding: "1rem",
    backgroundColor: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    resize: "vertical",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "var(--font-main)",
};

const btnDivStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "0.5rem",
};

const btnStyle = {
    padding: "0.75rem 2.5rem",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#fff",
    backgroundColor: "var(--accent)",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    fontFamily: "var(--font-main)",
};

const linkedInNoteStyle = {
    textAlign: "center",
    marginTop: "2rem",
    fontSize: "0.95rem",
    color: "var(--text-secondary)",
};

const linkedInLinkStyle = {
    color: "var(--accent-light)",
    fontWeight: 600,
};

export default Contact;
