import { Link } from "react-router-dom";
import {
    Truck,
    Shield,
    Zap,
    Clock,
    CheckCircle2,
    ArrowRight,
    Gauge,
    Weight,
    Users
} from "lucide-react";
import isoTank from "@/assets/ISOtANK.png";
import stainlisTank from "@/assets/TracktorStainlisTank.png";
import mildStillTank from "@/assets/TractorMildStillTank.png";

const Armada = () => {
    const fleetTypes = [
        {
            name: "Tractor 4x2 x ISOTANK (20 Feet)",
            image: isoTank,
            capacity: "25KL - 27.5KL",
            description: "Ideal untuk industri kimia, makanan & minuman, dan farmasi karena menjaga integritas produk.",
            specifications: [
                "Standar internasional ISO Tank",
                "Perlindungan maksimal untuk cairan sensitif",
                "Sertifikasi untuk bahan kimia dan food grade",
                "Sistem loading/unloading yang aman",
                "Monitoring temperatur dan tekanan"
            ],
            advantages: ["Industri Kimia", "Farmasi", "Maknan & Minuman"],
            popular: true
        },
        {
            name: "Tractor Mild Steel Tank",
            image: mildStillTank,
            capacity: "32KL (30 Feet) & 40KL (40 Feet)",
            description: "Dirancang kuat dan ekonomis untuk pengangkutan bahan non-korosif dengan efisiensi tinggi.",
            specifications: [
                "Konstruksi baja mild steel berkualitas tinggi",
                "Kapasitas besar untuk volume ekonomis",
                "Perawatan mudah dan biaya operasional rendah",
                "Cocok untuk cairan non-korosif",
                "Desain aerodinamis untuk efisiensi bahan bakar"
            ],
            advantages: ["Minyak Nabati", "Bahan Non-Korosif", "Industri Umum"]
        },
        {
            name: "Tractor Stainless Steel Tank",
            image: stainlisTank,
            capacity: "32KL (30 Feet) & 40KL (40 Feet)",
            description: "Pilihan premium untuk cairan yang butuh standar kebersihan tinggi dan tahan korosi, seperti minyak nabati dan cairan food grade.",
            specifications: [
                "Material stainless steel grade 316L",
                "Tahan korosi dan kontaminasi",
                "Standar kebersihan food grade",
                "Sertifikasi halal untuk produk makanan",
                "Kemudahan pembersihan dan sterilisasi"
            ],
            advantages: ["Food Grate", "Minyak Nabati", "Produk Halal"]
        }
    ];

    const fleetFeatures = [
        {
            icon: Shield,
            title: "Perawatan Rutin",
            description: "Semua armada menjalani perawatan berkala setiap 5.000 km untuk memastikan performa optimal"
        },
        {
            icon: Zap,
            title: "GPS Terpasang",
            description: "Sistem GPS tracking real-time untuk monitoring posisi dan keamanan armada 24/7"
        },
        {
            icon: Clock,
            title: "Siaga 24/7",
            description: "Tim driver dan mekanik standby 24 jam untuk memastikan pengiriman tepat waktu"
        },
        {
            icon: Users,
            title: "Driver Profesional",
            description: "Driver berpengalaman dengan sertifikat dan pengetahuan rute seluruh Indonesia"
        }
    ];

    const fleetStats = [
        { number: "100+", label: "Total Armada", icon: Truck },
        { number: "99.8%", label: "On-Time Delivery", icon: Clock },
        { number: "24/7", label: "Monitoring", icon: Shield },
        { number: "50+", label: "Tahun Pengalaman", icon: CheckCircle2 }
    ];

    const techFeatures = [
        "Sistem GPS tracking real-time",
        "Sensor suhu untuk barang sensitif",
        "Kamera keamanan CCTV",
        "Sistem komunikasi radio",
        "Emergency button untuk keadaan darurat",
        "Fuel monitoring system",
        "Digital logbook",
        "Maintenance scheduling system"
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium border border-white/30">
                            Armada TruckExpress
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Armada Modern<br />
                            <span className="text-accent">Teknologi Canggih</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Lebih dari 100++ unit truk dengan berbagai kapasitas, dilengkapi teknologi terdepan
                            dan dioperasikan oleh driver profesional berpengalaman.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {fleetStats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        {stat.number}
                                    </h3>
                                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Fleet Types */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Jenis Armada Kami
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Pilih jenis truk yang sesuai dengan kebutuhan pengiriman Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {fleetTypes.map((fleet, index) => (
                            <div
                                key={index}
                                className={`relative rounded-xl border bg-white shadow transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 ${fleet.popular ? "ring-2 ring-accent ring-offset-2" : ""
                                    } flex flex-col`}
                            >
                                {fleet.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow z-50">
                                        Most Popular
                                    </span>
                                )}
                                <div className="relative h-64 overflow-hidden rounded-t-lg">
                                    <img
                                        src={fleet.image}
                                        alt={fleet.name}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-block bg-accent text-white font-semibold text-sm px-3 py-1 rounded-full">
                                            {fleet.capacity}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-4">
                                        {fleet.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-6">{fleet.description}</p>

                                    <div className="mb-5 space-y-4">
                                        <h4 className="font-semibold text-foreground">Cocok Untuk:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {fleet.advantages.map((advantage, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-block text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-700 bg-gray-50"
                                                >
                                                    {advantage}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto space-y-4">
                                        <h4 className="font-semibold text-foreground">Spesifikasi & Keunggulan</h4>
                                        <div className="space-y-2">
                                            {fleet.specifications.map((spec, idx) => (
                                                <div key={idx} className="flex items-center text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                                                    <span className="text-foreground">{spec}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet Features */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Keunggulan Armada Kami
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Standar tinggi dalam perawatan dan teknologi untuk menjamin keamanan pengiriman
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {fleetFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="text-center rounded-xl border bg-white p-8 shadow hover:shadow-card transition-all duration-300"
                                >
                                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technology Features */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Teknologi Terdepan
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Setiap armada dilengkapi dengan teknologi canggih untuk memastikan
                                keamanan, efisiensi, dan transparansi dalam setiap pengiriman.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {techFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                        <span className="text-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                                >
                                    Konsultasi Armada
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Gauge, title: "Real-time Monitoring", desc: "Pantau kecepatan, lokasi, dan status armada" },
                                { icon: Shield, title: "Security System", desc: "Sistem keamanan berlapis untuk perlindungan barang" },
                                { icon: Weight, title: "Load Monitoring", desc: "Sensor berat untuk mengoptimalkan muatan" },
                                { icon: Clock, title: "Schedule Optimizer", desc: "AI untuk optimasi rute dan jadwal pengiriman" }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="rounded-xl border bg-white p-6 text-center shadow hover:shadow-card transition-all duration-300">
                                        <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                                        <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Butuh Armada Khusus?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Kami siap menyediakan armada dengan spesifikasi khusus sesuai kebutuhan bisnis Anda
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                        >
                            Diskusi Kebutuhan
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-medium bg-white/10 hover:bg-white/20 transition"
                        >
                            Lihat Layanan Kami
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Armada;
