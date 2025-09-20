import { useState } from "react";
import { updateProduct } from "../servicios/api";
import { useTheme } from "../context/ThemeContext.jsx";

export default function AdminPanel({
  productos,
  onAddProducto,
  onProductoEditado,
}) {
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [error, setError] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [editTitulo, setEditTitulo] = useState("");
  const [editPrecio, setEditPrecio] = useState("");
  const [editError, setEditError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!titulo.trim() || !precio) {
      setError("Completa todos los campos");
      return;
    }
    const p = parseFloat(precio);
    if (isNaN(p) || p <= 0) {
      setError("Precio inválido");
      return;
    }
    await onAddProducto({ titulo: titulo.trim(), precio: p });
    setTitulo("");
    setPrecio("");
  };

  const handleEditClick = (prod) => {
    setEditandoId(prod.id);
    setEditTitulo(prod.titulo);
    setEditPrecio(prod.precio);
    setEditError("");
  };

  const handleEditCancel = () => {
    setEditandoId(null);
    setEditTitulo("");
    setEditPrecio("");
    setEditError("");
  };

  const handleEditSave = async (e) => {
    e.preventDefault();
    setEditError("");
    if (!editTitulo.trim() || !editPrecio) {
      setEditError("Completa todos los campos");
      return;
    }
    const p = parseFloat(editPrecio);
    if (isNaN(p) || p <= 0) {
      setEditError("Precio inválido");
      return;
    }
    try {
      await updateProduct(editandoId, { titulo: editTitulo.trim(), precio: p });
      if (onProductoEditado) await onProductoEditado();
      handleEditCancel();
    } catch (err) {
      setEditError("Error al guardar");
    }
  };

  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      className={isDark ? "admin-panel" : undefined}
      style={{
        maxWidth: 520,
        margin: "0 auto",
        padding: 32,
        background: isDark ? "#232a36" : "#fff",
        color: isDark ? "#f7fafd" : undefined,
        borderRadius: 12,
        boxShadow: "0 2px 16px 0 #0001",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: isDark ? "#fff" : "#2a2a2a",
          marginBottom: 24,
        }}
      >
        Administrar productos
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: 32,
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Nombre del producto"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={{
            flex: 2,
            padding: "8px 10px",
            border: "1px solid #bbb",
            borderRadius: 6,
            fontSize: 15,
          }}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          style={{
            flex: 1,
            padding: "8px 10px",
            border: "1px solid #bbb",
            borderRadius: 6,
            fontSize: 15,
          }}
        />
        <button
          type="submit"
          style={{
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Agregar
        </button>
      </form>
      {error && (
        <div
          style={{ color: "#d32f2f", marginBottom: 16, textAlign: "center" }}
        >
          {error}
        </div>
      )}
      <h3 style={{ color: isDark ? "#fff" : "#333", marginBottom: 12 }}>
        Productos actuales
      </h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {productos.map((p) => (
          <li
            key={p.id}
            style={{
              marginBottom: 12,
              background: isDark ? "#181c24" : "#f7fafd",
              color: isDark ? "#f7fafd" : undefined,
              borderRadius: 8,
              padding: "10px 12px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {editandoId === p.id ? (
              <form
                onSubmit={handleEditSave}
                style={{ display: "flex", gap: 8, flex: 1 }}
              >
                <input
                  type="text"
                  value={editTitulo}
                  onChange={(e) => setEditTitulo(e.target.value)}
                  style={{
                    flex: 2,
                    padding: "6px 8px",
                    border: "1px solid #bbb",
                    borderRadius: 6,
                    fontSize: 15,
                  }}
                />
                <input
                  type="number"
                  value={editPrecio}
                  onChange={(e) => setEditPrecio(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "6px 8px",
                    border: "1px solid #bbb",
                    borderRadius: 6,
                    fontSize: 15,
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: "#388e3c",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "6px 14px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={handleEditCancel}
                  style={{
                    background: "#eee",
                    color: "#333",
                    border: "none",
                    borderRadius: 6,
                    padding: "6px 10px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Cancelar
                </button>
                {editError && (
                  <div
                    style={{
                      color: "#d32f2f",
                      marginTop: 4,
                      flexBasis: "100%",
                    }}
                  >
                    {editError}
                  </div>
                )}
              </form>
            ) : (
              <>
                <span style={{ flex: 2, fontWeight: 500 }}>{p.titulo}</span>
                <span style={{ flex: 1, color: "#1976d2", fontWeight: 600 }}>
                  ${p.precio}
                </span>
                <button
                  style={{
                    marginLeft: 8,
                    background: "#ffa726",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "6px 12px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                  onClick={() => handleEditClick(p)}
                >
                  Editar
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
