import React from "react";
import Icons from "./Icons";

function Text() {
    return (
        <div
            className="half"
            style={{ float: "left", marginLeft: "15%", width: "34.5%" }}
        >
            <p style={{ marginTop: "0", marginBottom: "1vh", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Me chamo <strong style={{ color: "var(--text-primary)" }}>Guilherme</strong>, sou formado na Universidade de Mogi das Cruzes,amo tecnologia, os meus maiores hobbies são basquete e automação.
                <br /><br /> Sou{" "}
                <a style={{ color: "var(--accent-light)" }} href="https://www.linkedin.com/in/guifgr/">
                    <b>Software Engineer</b>
                </a>{" "}
                no{" "}
                <a style={{ color: "var(--accent-light)" }} href="https://www.itau.com.br/">
                    <b>Itaú Unibanco</b>
                </a>.
            </p>

            <p style={{ marginBottom: "1vh", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Formation in <b style={{ color: "var(--text-primary)" }}>Sistemas de Informação</b> pela UMC. Apaixonado por arquitetura de software,microsserviços e sistemas distribuídos.
            </p>

            <p style={{ marginBottom: "1vh", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Atualmente trabalhando no ecossistema de <b style={{ color: "var(--text-primary)" }}>Ofertas Públicas</b> — microsserviços críticos com .NET Core, Apache Kafka, AWS e Datadog.
            </p>

            <p style={{ marginBottom: "1vh", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Entusiasta de self-hosting, automação com n8n e infraestrutura Linux conteinerizada.
            </p>

            <Icons />
        </div>
    );
}

export default Text;
