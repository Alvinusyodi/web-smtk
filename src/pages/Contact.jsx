import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    ArrowRight,
    CheckCircle2
} from "lucide-react";

const Contact = () => {

    const contactInfo = [
        {
            icon: Phone,
            title: "Telepon",
            details: ["+62 21 1234 5678", "+62 811 2345 6789"],
            description: "Hubungi kami untuk konsultasi cepat"
        },
        {
            icon: Mail,
            title: "Email",
            details: ["info@truckexpress.id", "cs@truckexpress.id"],
            description: "Kirim pertanyaan detail melalui email"
        },
        {
            icon: MapPin,
            title: "Alamat",
            details: ["Jl. Raya Logistik No. 123", "Jakarta 12345, Indonesia"],
            description: "Kunjungi kantor pusat kami"
        },
        {
            icon: Clock,
            title: "Jam Operasional",
            details: ["Senin - Jumat: 08:00 - 18:00", "Sabtu: 08:00 - 16:00"],
            description: "Layanan tracking 24/7"
        }
    ];

    const offices = [
        {
            city: "Jakarta",
            address: "Jl. Raya Logistik No. 123, Jakarta 12345",
            phone: "+62 21 1234 5678",
            status: "Kantor Pusat"
        },
        {
            city: "Surabaya",
            address: "Jl. Industri Raya No. 456, Surabaya 60123",
            phone: "+62 31 2345 6789",
            status: "Cabang"
        },
        {
            city: "Medan",
            address: "Jl. Perdagangan No. 789, Medan 20123",
            phone: "+62 61 3456 7890",
            status: "Cabang"
        },
        {
            city: "Makassar",
            address: "Jl. Pelabuhan No. 321, Makassar 90123",
            phone: "+62 411 4567 8901",
            status: "Cabang"
        }
    ];

    const whyChooseUs = [
        "Respons cepat dalam 2 jam kerja",
        "Konsultasi gratis untuk kebutuhan logistik",
        "Penawaran harga kompetitif dan transparan",
        "Tim customer service berpengalaman",
        "Solusi customized sesuai kebutuhan bisnis"
    ];

    return (
        <div className="min-h-screen pt-20">

            {/* Hero Section */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 mb-6">
                            Hubungi TruckExpress
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Mari Diskusikan<br />
                            <span className="text-accent">Kebutuhan Anda</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Tim ahli kami siap membantu merancang solusi ekspedisi terbaik untuk bisnis Anda.
                            Hubungi kami sekarang untuk konsultasi gratis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Informasi Kontak</h2>
                    <p className="text-muted-foreground mb-12 text-center">
                        Berbagai cara untuk menghubungi kami. Pilih yang paling nyaman untuk Anda.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="font-medium">{detail}</p>
                                            ))}
                                            <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Why Choose Us */}
                    <div className="mt-12 bg-secondary rounded-2xl p-6 shadow-inner max-w-2xl mx-auto">
                        <h3 className="text-lg font-semibold mb-4 text-center">Mengapa Memilih Kami?</h3>
                        <div className="space-y-3">
                            {whyChooseUs.map((reason, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                                    <span>{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Kantor Kami</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Jaringan kantor di seluruh Indonesia untuk melayani Anda lebih dekat
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {offices.map((office, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold">{office.city}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${office.status === "Kantor Pusat" ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`}>
                                        {office.status}
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <MapPin className="w-4 h-4 text-muted-foreground mt-1 mr-2" />
                                        <p className="text-sm">{office.address}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-4 h-4 text-muted-foreground mr-2" />
                                        <p className="text-sm">{office.phone}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Lokasi Kantor Pusat</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Temukan kami di jantung kota Jakarta
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                        <div className="h-96 bg-secondary flex flex-col items-center justify-center text-center p-6">
                            <MapPin className="w-16 h-16 text-primary mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Kantor Pusat TruckExpress</h3>
                            <p className="text-muted-foreground mb-4">
                                Jl. Raya Logistik No. 123, Jakarta 12345, Indonesia
                            </p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                            >
                                Buka di Google Maps
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-2xl mx-auto">
                        <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Butuh Bantuan Cepat?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Hubungi hotline 24/7 kami untuk bantuan darurat atau tracking pengiriman
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-accent text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:opacity-90 transition">
                                <Phone className="w-5 h-5 mr-2" /> Hotline 24/7: +62 811 TRUCK-ID
                            </button>
                            <button className="border border-white/30 bg-white/10 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-white/20 transition">
                                <MessageCircle className="w-5 h-5 mr-2" /> Live Chat
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
