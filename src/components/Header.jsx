import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: "Beranda", href: "/" },
        { name: "Tentang kami", href: "/about" },
        { name: "Layanan", href: "/services" },
        { name: "Armada", href: "/armada" },
    ];

    const isActive = (href) => location.pathname === href;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        {/* <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-elegant">
                            <Truck className="w-7 h-7 text-white" />
                        </div> */}
                        <div>
                            <h1 className="text-xl font-bold text-primary">PT. Surya Mitra</h1>
                            <p className="text-sm text-muted-foreground">Tirta Kencana</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.href)
                                        ? "bg-primary text-primary-foreground"
                                        : "text-foreground hover:bg-secondary hover:text-primary"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-4 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm shadow-card hover:opacity-90 transition"
                        >
                            Hubungi Kami
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-secondary transition"
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-b-lg shadow-card">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href)
                                            ? "bg-primary text-primary-foreground"
                                            : "text-foreground hover:bg-secondary hover:text-primary"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 pb-2">
                                <Link
                                    to="/contact"
                                    className="block w-full text-center px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-base shadow-card hover:opacity-90 transition"
                                >
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
