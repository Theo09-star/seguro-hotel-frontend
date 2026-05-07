export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://segurohotel.infinityfreeapp.com/backend/api/getRooms.php"
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Backend unreachable" });
  }
}