import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <small>
          © {new Date().getFullYear()} Employee Management System | Built by
          Anjana
        </small>
      </div>
    </footer>
  );
}
