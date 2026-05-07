import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple (à remplacer par backend PHP plus tard)
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="box">
        <h2> Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Se connecter</button>
        </form>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}