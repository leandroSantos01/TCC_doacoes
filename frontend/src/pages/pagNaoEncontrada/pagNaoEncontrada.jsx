import { Link } from "react-router";

export default function NaoPagina() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
     background: "linear-gradient(to top, #A6D8FF 0%, #E8F6FF 100%)"
    }}>
      <h1 style={{ fontSize: 50, color: "#333" }}>404</h1>
      <p style={{ fontSize: 18, color: "#555" }}>
        Ops! Página não encontrada.
      </p>

      <Link to="/" style={{
        marginTop: 20,
        padding: "10px 20px",
        background: "#007bff",
        color: "#fff",
        borderRadius: 6,
        textDecoration: "none"
      }}>
        Voltar para o início
      </Link>
    </div>
  );
}
