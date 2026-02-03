export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-foreground font-semibold">Soti Pavan Singh</p>
            <p className="text-sm text-muted-foreground">Fullstack Developer</p>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved. Built with Next.js & React.
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
