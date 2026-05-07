import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DollarSign, Bed, Users } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "./AdminDashboard.css";

export default function AdminDashboard() {

  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [editingRoom, setEditingRoom] = useState(null);

  const [newRoom, setNewRoom] = useState({
    name: "",
    category: "standard",
    description: "",
    price: "",
    size: "",
    beds: "",
    max_guests: "",
    image: ""
  });

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  /* ===================== LOAD DATA ===================== */

  useEffect(() => {
    fetchRooms();
    fetchBookings();
  }, []);

  const fetchRooms = () => {
    fetch("http://localhost/backend/api/getAdminRooms.php")
      .then(res => res.json())
      .then(data => setRooms(data))
      .catch(err => console.error(err));
  };

  const fetchBookings = () => {
    fetch("http://localhost/backend/api/getBookings.php")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error(err));
  };

  const totalRevenue = rooms.reduce((acc, r) => acc + Number(r.revenue), 0);

  /* ===================== STATUS ===================== */

  const updateRoomStatus = (roomId, newStatus) => {
    fetch("http://localhost/backend/api/updateRoomStatus.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ room_id: roomId, status: newStatus })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) fetchRooms();
    });
  };

  /* ===================== DELETE ROOM ===================== */

  const deleteRoom = async (roomId) => {
    if (!window.confirm("Supprimer cette chambre ?")) return;

    const response = await fetch("http://localhost/backend/api/deleteRoom.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ room_id: roomId })
    });

    const result = await response.json();

    if (result.success) {
      alert("✅ Chambre supprimée");
      fetchRooms();
    }
  };

  /* ===================== UPDATE ROOM ===================== */

  const handleUpdateRoom = async () => {
    const response = await fetch("http://localhost/backend/api/updateRoom.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingRoom)
    });

    const result = await response.json();

    if (result.success) {
      alert("✅ Chambre modifiée");
      setEditingRoom(null);
      fetchRooms();
    }
  };

  /* ===================== UPLOAD IMAGE ===================== */

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("http://localhost/backend/api/uploadImage.php", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      setNewRoom({...newRoom, image: result.url});
    }
  };

  /* ===================== ADD ROOM ===================== */

  const handleAddRoom = async () => {
    const response = await fetch("http://localhost/backend/api/createRoom.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRoom)
    });

    const result = await response.json();

    if (result.success) {
      alert("✅ Chambre ajoutée !");
      setNewRoom({
        name: "",
        category: "standard",
        description: "",
        price: "",
        size: "",
        beds: "",
        max_guests: "",
        image: ""
      });
      fetchRooms();
    }
  };

  return (
    <div className="admin-layout">

      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <button onClick={handleLogout} className="logout-btn">
          Déconnexion
        </button>
      </aside>

      <main className="admin-main">

        <h1 className="dashboard-title">Tableau de bord SEGURO HÔTEL</h1>

        {/* STATS */}
        <div className="stats-row">
          <div className="stat-box">
            <DollarSign />
            <div>
              <p>Revenus</p>
              <h3>${totalRevenue}</h3>
            </div>
          </div>

          <div className="stat-box">
            <Bed />
            <div>
              <p>Chambres</p>
              <h3>{rooms.length}</h3>
            </div>
          </div>

          <div className="stat-box">
            <Users />
            <div>
              <p>Réservations</p>
              <h3>{bookings.length}</h3>
            </div>
          </div>
        </div>

        {/* LIST ROOMS */}
        <div className="room-status-section">
          <h2>Gestion des chambres</h2>

          <div className="room-status-grid">
            {rooms.map(room => (
              <div key={room.id} className="room-status-card">
                <h4>{room.type}</h4>
                <p>Statut : {room.status}</p>

                <div className="status-buttons">
                  <button onClick={() => updateRoomStatus(room.id, "available")}>
                    Disponible
                  </button>
                  <button onClick={() => updateRoomStatus(room.id, "occupied")}>
                    Occupée
                  </button>
                  <button onClick={() => updateRoomStatus(room.id, "maintenance")}>
                    Maintenance
                  </button>
                </div>

                <div className="admin-room-actions">
                  <button onClick={() => setEditingRoom(room)}>Modifier</button>
                  <button onClick={() => deleteRoom(room.id)} className="delete-btn">
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EDIT ROOM */}
        {editingRoom && (
          <div className="edit-room-section">
            <h2>Modifier chambre</h2>
            <input value={editingRoom.name}
              onChange={(e)=>setEditingRoom({...editingRoom,name:e.target.value})}/>
            <input value={editingRoom.price}
              onChange={(e)=>setEditingRoom({...editingRoom,price:e.target.value})}/>
            <button onClick={handleUpdateRoom}>Sauvegarder</button>
          </div>
        )}

        {/* ADD ROOM */}
        <div className="add-room-section">
          <h2>Ajouter une nouvelle chambre</h2>

          <div className="add-room-form">
            <input
              type="text"
              placeholder="Nom"
              value={newRoom.name}
              onChange={(e)=>setNewRoom({...newRoom,name:e.target.value})}
            />

            <input
              type="number"
              placeholder="Prix"
              value={newRoom.price}
              onChange={(e)=>setNewRoom({...newRoom,price:e.target.value})}
            />

            <input
              type="file"
              onChange={(e)=>handleImageUpload(e.target.files[0])}
            />

            <button onClick={handleAddRoom} className="add-room-btn">
              Ajouter Chambre
            </button>
          </div>
        </div>

        {/* BOOKINGS TABLE */}
        <div className="bookings-section">
          <h2>Toutes les réservations</h2>

          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Client</th>
                <th>Chambre</th>
                <th>Arrivée</th>
                <th>Départ</th>
                <th>Prix</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id}>
                  <td>{b.booking_code}</td>
                  <td>{b.full_name}</td>
                  <td>{b.room_name}</td>
                  <td>{b.check_in}</td>
                  <td>{b.check_out}</td>
                  <td>${b.total_price}</td>
                  <td>{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}