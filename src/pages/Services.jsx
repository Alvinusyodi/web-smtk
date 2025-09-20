import { Link } from "react-router-dom";
import {
    Package,
    Truck,
    Clock,
    Shield,
    MapPin,
    CheckCircle2,
    ArrowRight,
    Container,
    Settings,
    Calendar
} from "lucide-react";

const Services = () => {
    const mainServices = [
        {
            icon: Package,
            title: "Pengiriman Kargo (FCL/LCL)",
            description: "Layanan pengiriman barang dalam jumlah besar dengan container penuh (FCL) atau berbagi container (LCL)",
            features: [
                "Container 20ft dan 40ft",
                "Door to door service",
                "Custom clearance",
                "Dokumentasi lengkap"
            ],
            popular: true
        },
        {
            icon: Calendar,
            title: "Logistik Kontrak",
            description: "Solusi logistik jangka panjang untuk kebutuhan rutin perusahaan dengan kontrak khusus",
            features: [
                "Jadwal pengiriman tetap",
                "Harga khusus kontrak",
                "Dedicated customer service",
                "Reporting berkala"
            ]
        },
        {
            icon: Settings,
            title: "Sewa Truk Khusus",
            description: "Layanan sewa truk dengan spesifikasi khusus untuk kebutuhan pengiriman tertentu",
            features: [
                "Berbagai jenis truk",
                "Driver berpengalaman",
                "Flexible scheduling",
                "GPS tracking"
            ]
        }
    ];

    const additionalServices = [
        { icon: Shield, title: "Asuransi Barang", description: "Perlindungan menyeluruh untuk barang Anda selama perjalanan" },
        { icon: Clock, title: "Express Delivery", description: "Layanan pengiriman cepat untuk kebutuhan mendesak" },
        { icon: MapPin, title: "Tracking Real-time", description: "Pantau posisi barang Anda secara real-time via aplikasi" },
        { icon: Container, title: "Warehousing", description: "Layanan penyimpanan sementara di gudang modern kami" }
    ];

    const processSteps = [
        { step: "1", title: "Konsultasi", description: "Hubungi tim kami untuk konsultasi kebutuhan pengiriman" },
        { step: "2", title: "Penawaran", description: "Dapatkan penawaran harga terbaik sesuai kebutuhan" },
        { step: "3", title: "Pickup", description: "Tim kami akan mengambil barang di lokasi Anda" },
        { step: "4", title: "Pengiriman", description: "Barang dikirim dengan armada terpercaya dan tracking real-time" },
        { step: "5", title: "Delivery", description: "Barang sampai di tujuan dengan kondisi aman dan sesuai jadwal" }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium border border-white/30">
                            Layanan TruckExpress
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Solusi Lengkap<br />
                            <span className="text-accent">Ekspedisi Indonesia</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Dari pengiriman kargo hingga logistik kontrak, kami menyediakan berbagai layanan
                            untuk memenuhi kebutuhan bisnis Anda di seluruh Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Layanan Utama Kami
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Pilih layanan yang sesuai dengan kebutuhan bisnis Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {mainServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className={`relative rounded-xl border bg-white shadow transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 ${service.popular ? "ring-2 ring-accent ring-offset-2" : ""
                                        } flex flex-col`}
                                >
                                    {service.popular && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                                            Most Popular
                                        </span>
                                    )}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6">{service.description}</p>

                                        <div className="space-y-3 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <CheckCircle2 className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                                    <span className="text-sm text-foreground">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto border-t pt-6">
                                            {/* <p className="text-2xl font-bold text-primary mb-4">{service.price}</p> */}
                                            <Link
                                                to="/contact"
                                                className="w-full inline-flex items-center justify-center gap-2 bg-accent text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
                                            >
                                                Dapatkan Penawaran
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Layanan Tambahan
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Layanan pendukung untuk memberikan pengalaman ekspedisi yang sempurna
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {additionalServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="text-center rounded-xl border bg-white p-8 shadow hover:shadow-card transition-all duration-300"
                                >
                                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Proses Kerja Kami
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Langkah mudah untuk menggunakan layanan ekspedisi kami
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="text-center relative">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.description}</p>
                                {index < processSteps.length - 1 && (
                                    <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-accent" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Butuh Layanan Khusus?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Tim ahli kami siap membantu merancang solusi ekspedisi yang tepat untuk kebutuhan spesifik bisnis Anda
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                        >
                            Konsultasi Gratis
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/armada"
                            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-medium bg-white/10 hover:bg-white/20 transition"
                        >
                            Lihat Armada Kami
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
