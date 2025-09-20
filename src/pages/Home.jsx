import { Link } from "react-router-dom";
import {
    Truck,
    Shield,
    Clock,
    MapPin,
    Star,
    Phone,
    ArrowRight
} from "lucide-react";

import heroImage from "@/assets/hero-trucks.jpg";

const Home = () => {
    const advantages = [
        {
            icon: MapPin,
            title: "Jaringan Luas",
            description: "Melayani pengiriman ke seluruh wilayah Indonesia dengan jaringan yang luas dan terpercaya."
        },
        {
            icon: Clock,
            title: "Pelacakan Real-time",
            description: "Pantau status pengiriman Anda secara real-time dengan sistem tracking canggih."
        },
        {
            icon: Shield,
            title: "Aman & Terpercaya",
            description: "Barang Anda dijamin aman dengan asuransi dan sistem keamanan berlapis."
        },
        {
            icon: Phone,
            title: "Layanan 24/7",
            description: "Customer service siap melayani Anda 24 jam sehari, 7 hari seminggu."
        }
    ];

    const testimonials = [
        {
            name: "PT. Sinar Jaya Logistics",
            rating: 5,
            comment: "Pelayanan sangat memuaskan, barang selalu sampai tepat waktu dan dalam kondisi baik.",
            role: "Manager Operasional"
        },
        {
            name: "CV. Maju Bersama",
            rating: 5,
            comment: "TruckExpress adalah partner terbaik untuk kebutuhan logistik perusahaan kami.",
            role: "Direktur"
        },
        {
            name: "Toko Elektronik Jaya",
            rating: 5,
            comment: "Sistem tracking yang mudah digunakan dan customer service yang responsif.",
            role: "Pemilik Usaha"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-hero"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-white text-sm font-medium bg-white/20 border border-white/30">
                        Ekspedisi Terpercaya Se-Indonesia
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Pengiriman <span className="text-accent">Cepat</span>,<br />
                        Aman, dan <span className="text-accent">Terpercaya</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Melayani pengiriman ke seluruh Indonesia dengan armada modern dan sistem tracking real-time
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex text-center items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold text-lg shadow-card hover:opacity-90 transition group"
                        >
                            Hubungi Kami
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex text-center items-center gap-2 px-6 py-3 rounded-lg border border-white/30 bg-white/10 text-white font-semibold text-lg hover:bg-white/20 transition"
                        >
                            Lihat Layanan
                        </Link>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Mengapa Memilih TruckExpress?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Kami memberikan pelayanan terbaik dengan teknologi modern dan pengalaman bertahun-tahun
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {advantages.map((advantage, index) => {
                            const Icon = advantage.icon;
                            return (
                                <div
                                    key={index}
                                    className="text-center bg-white rounded-xl shadow-card p-8 group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {advantage.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Kata Pelanggan Kami
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Kepercayaan pelanggan adalah prioritas utama kami
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-card p-8 hover:shadow-elegant transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                                    ))}
                                </div>
                                <p className="text-foreground mb-6 italic">
                                    "{testimonial.comment}"
                                </p>
                                <div>
                                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Siap Mengirim Barang Anda?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan layanan ekspedisi terpercaya
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/armada"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold text-lg shadow-card hover:opacity-90 transition group"
                        >
                            Lihat Armada
                            <Truck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 bg-white/10 text-white font-semibold text-lg hover:bg-white/20 transition"
                        >
                            <Phone className="w-5 h-5" />
                            Hubungi Sekarang
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
