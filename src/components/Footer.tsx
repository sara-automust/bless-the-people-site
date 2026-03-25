const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 mt-auto">
      <div className="container mx-auto px-4 text-center space-y-3">
        <h3 className="text-xl font-bold" style={{ fontFamily: "'Frank Ruhl Libre', serif" }}>
          לעובדי השם בארץ הקודש
        </h3>
        <p className="text-primary-foreground/80 text-sm">בית מדרש לתורה והלכה</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-primary-foreground/80">
          <span>📍 בן נריה ברוך 4, בני ברק</span>
          <span>📞 054-8887080</span>
        </div>
        <p className="text-xs text-primary-foreground/50 pt-4">
          © {new Date().getFullYear()} לעובדי השם בארץ הקודש. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
