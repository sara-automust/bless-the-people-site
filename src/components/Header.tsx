import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-card border-b border-border py-4 shadow-sm">
      <div className="container mx-auto flex flex-col items-center gap-3 px-4">
        <Link to="/" className="flex flex-col items-center gap-2">
          <img src={logo} alt="לוגו לעובדי השם" className="h-48 w-auto" />
          <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
            לעובדי השם בארץ הקודש
          </h1>
        </Link>
        <p className="text-sm text-muted-foreground">בית מדרש לתורה והלכה</p>
      </div>
    </header>
  );
};

export default Header;
