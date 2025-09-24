import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import { useState } from "react";

const Contact = () => {

    const [showMap, setShowMap] = useState(false);

    const contactInfo = [
        {
            icon: Phone,
            title: "Telepon",
            details: ["(031) 51503872", "(031) 51504725", "(031) 51501857"],
            description: "Hubungi kami untuk konsultasi cepat"
        },
        {
            icon: Mail,
            title: "Email",
            details: ["mail@suryatransport.com", "www.suryatransport.com"],
            description: "Kirim pertanyaan detail melalui email"
        },
        {
            icon: MapPin,
            title: "Alamat",
            details: ["Jl. Jemur Andayani 50 Blok A/18", "Surabaya 60237", "Jawa Timur, Indonesia"],
            description: "Datangi kantor kami"
        },
        {
            icon: Clock,
            title: "Jam Operasional",
            details: ["Senin - Jumat: 08:00 - 17:00 WIB", "Sabtu: 08:00 - 12:00 WIB"],
            description: "24/7 Emergency Support"
        }
    ];

    const offices = [
        {
            city: "Surabaya",
            address: "Jl. Jemur Andayani 50 Blok A/18, Surabaya 60237",
            phone: "(031) 51503872",
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
                                Jl. Jemur Andayani 50 Blok A/18 Surabaya 60237 Jawa Timur, Indonesia
                            </p>
                            <div className="text-center mt-10">
                                {!showMap ? (
                                    <button
                                        onClick={() => setShowMap(true)}
                                        className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                                    >
                                        Buka di Google Maps
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </button>
                                ) : (
                                    <div className="w-full h-full">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2264662642706!2d112.73123209678957!3d-7.328442500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb41cd3cb1e7%3A0x1a10d2ee61791a90!2sSurya%20Transport%20Group!5e0!3m2!1sen!2sid!4v1758684267579!5m2!1sen!2sid"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                )}
                            </div>
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
                                <Phone className="w-5 h-5 mr-2" /> Hotline 24/7: (031) 51503872
                            </button>
                            <button className="border border-white/30 bg-white/10 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-white/20 transition">
                                <MessageCircle className="w-5 h-5 mr-2" /> WhatApps
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
