export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        HUB<span style={{ color: "#f58a33" }}>SAGA</span>
      </div>

      <div style={styles.menu}></div>
    </header>
  )
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  menu: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.2)",
  },
}