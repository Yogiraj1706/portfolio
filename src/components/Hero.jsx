export default function Hero() {
  return (
    <section className="hero">
      <h1 style={{ 
  fontSize: "50px", 
  fontWeight: "700", 
  textAlign: "center", 
  margin: "10px 0", 
  color: "#222" 
}}>
  Hi, I'm <span style={{ color: "#ff6600" }}>Yogiraj Nimbalkar</span>
</h1>
      <p style={{ 
  fontSize: "30px", 
  fontWeight: "600", 
  padding: "10px 0", 
  textAlign: "center", 
  color: "#333" 
}}>
  Full-stack Developer | Electronics & Telecommunication Engineer
</p>
      <div className="hero-buttons" style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "30px" }}>
<a
  href="mailto:yogirajnimbalkar17@gmail.com"
  style={{
    padding: "10px 20px",
    background: "linear-gradient(45deg, #D44638, #f3cf57ff)", // Gmail red gradient
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "600",
    transition: "0.3s"
  }}
>
  Email Me
</a>

  <a
    href="https://github.com/Yogiraj1706"
    target="_blank"
    style={{
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      fontWeight: "600",
      transition: "0.3s"
    }}
  >
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/yogiraj-nimbalkar"
    target="_blank"
    style={{
      padding: "10px 20px",
      backgroundColor: "#0077B5",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      fontWeight: "600",
      transition: "0.3s"
    }}
  >
    LinkedIn
  </a>
</div>

    </section>
  );
}
