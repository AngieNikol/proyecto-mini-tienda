export default function Inicio({ irCatalogo, irAdmin }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e3f0ff 0%, #f9fbe7 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 60, marginBottom: 8 }}>🛍️</div>
        <h1
          style={{ fontWeight: 800, fontSize: 38, color: "#1976d2", margin: 0 }}
        >
          MiniTienda React + Flask
        </h1>
        <p style={{ color: "#444", fontSize: 18, marginTop: 8 }}>
          Bienvenido, elige una opción para comenzar
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 48,
        }}
      >
        <div
          onClick={irCatalogo}
          style={{
            cursor: "pointer",
            background: "linear-gradient(135deg, #1976d2 60%, #42a5f5 100%)",
            color: "#fff",
            borderRadius: 20,
            boxShadow: "0 6px 32px #1976d255",
            padding: "56px 44px",
            minWidth: 240,
            textAlign: "center",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 1,
            transition: "transform 0.15s, box-shadow 0.15s",
            border: "2px solid #1976d2",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div style={{ fontSize: 40, marginBottom: 8 }}>🛒</div>
          Ir al Catálogo
        </div>
        <div
          onClick={irAdmin}
          style={{
            cursor: "pointer",
            background: "linear-gradient(135deg, #ffa726 60%, #ffd54f 100%)",
            color: "#333",
            borderRadius: 20,
            boxShadow: "0 6px 32px #ffa72655",
            padding: "56px 44px",
            minWidth: 240,
            textAlign: "center",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 1,
            transition: "transform 0.15s, box-shadow 0.15s",
            border: "2px solid #ffa726",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div style={{ fontSize: 40, marginBottom: 8 }}>🛠️</div>
          Ir al Admin
        </div>
      </div>
    </div>
  );
}
