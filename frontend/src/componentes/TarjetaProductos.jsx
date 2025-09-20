import { useCart } from "../context/CartContext.jsx";

export default function TarjetaProductos({ producto }) {
  const { add } = useCart();

  return (
    <article
      style={{
        border: "1.5px solid #e3e8f0",
        borderRadius: 18,
        padding: "24px 18px 18px 18px",
        background: "#f7fafd",
        boxShadow: "0 2px 12px #1976d211",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        minWidth: 220,
        maxWidth: 260,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1976d2 60%, #42a5f5 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 32,
          marginBottom: 8,
          boxShadow: "0 2px 8px #1976d233",
        }}
      >
        🛍️
      </div>
      <h4
        style={{
          margin: 0,
          fontSize: 20,
          color: "#1976d2",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {producto.titulo}
      </h4>
      <div
        style={{
          color: "#388e3c",
          fontWeight: 700,
          fontSize: 18,
          marginBottom: 8,
        }}
      >
        ${new Intl.NumberFormat("es-CO").format(producto.precio)}
      </div>
      <button
        onClick={() => add({ ...producto, qty: 1 })}
        style={{
          background: "linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "10px 22px",
          fontWeight: 700,
          fontSize: 16,
          cursor: "pointer",
          boxShadow: "0 2px 8px #1976d233",
          transition: "background 0.2s, transform 0.15s",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(90deg, #1565c0 60%, #64b5f6 100%)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)")
        }
      >
        Agregar al carrito
      </button>
    </article>
  );
}
