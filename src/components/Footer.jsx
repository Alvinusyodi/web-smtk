import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            {/* <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                <Truck className="w-6 h-6" />
                            </div> */}
                            <div>
                                <h3 className="text-lg font-bold">PT. Surya Mitra Tirta Kencana</h3>
                                <p className="text-sm text-primary-foreground/80">Ekspedisi Indonesia</p>
                            </div>
                        </div>
                        <p className="text-sm text-primary-foreground/80">
                            Melayani pengiriman ke seluruh Indonesia dengan armada terpercaya dan layanan terbaik.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Menu</h4>
                        <div className="space-y-2">
                            <Link to="/" className="block text-sm text-primary-foreground/80 hover:text-white transition-colors">
                                Home
                            </Link>
                            <Link to="/about" className="block text-sm text-primary-foreground/80 hover:text-white transition-colors">
                                About Us
                            </Link>
                            <Link to="/services" className="block text-sm text-primary-foreground/80 hover:text-white transition-colors">
                                Services
                            </Link>
                            <Link to="/armada" className="block text-sm text-primary-foreground/80 hover:text-white transition-colors">
                                Armada
                            </Link>
                            <Link to="/contact" className="block text-sm text-primary-foreground/80 hover:text-white transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-primary-foreground/60" />
                                <span className="text-sm text-primary-foreground/80">+62 21 1234 5678</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-primary-foreground/60" />
                                <span className="text-sm text-primary-foreground/80">info@truckexpress.id</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 text-primary-foreground/60 mt-0.5" />
                                <span className="text-sm text-primary-foreground/80">
                                    Jl. Raya Logistik No. 123<br />
                                    Jakarta 12345, Indonesia
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <Clock className="w-4 h-4 text-primary-foreground/60 mt-0.5" />
                                <div className="text-sm text-primary-foreground/80">
                                    <p>Senin - Jumat: 08:00 - 18:00</p>
                                    <p>Sabtu: 08:00 - 16:00</p>
                                    <p>Minggu: Tutup</p>
                                    <p className="mt-2 text-accent">Layanan 24/7 untuk tracking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center">
                    <p className="text-sm text-primary-foreground/60">
                        © 2024 TruckExpress. Semua hak cipta dilindungi.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;