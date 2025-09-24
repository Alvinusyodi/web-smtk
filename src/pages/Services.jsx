import { Link } from "react-router-dom";
import {
    Droplets,
    Factory,
    Beaker,
    Shield,
    Users,
    ArrowRight,
    CheckCircle
} from "lucide-react";

const Services = () => {

    const serviceFeatures = [
        {
            icon: <Droplets className="h-8 w-8 text-blue-700" />,
            title: 'Transportasi Cairan Curah Khusus',
            description: 'Layanan utama kami adalah transportasi cairan curah khusus dalam volume besar dengan standar keamanan tinggi.'
        },
        {
            icon: <Shield className="h-8 w-8 text-green-600" />,
            title: 'Standar Keamanan Tinggi',
            description: 'Menggunakan armada tangki khusus yang memenuhi standar keamanan dan kebersihan internasional.'
        },
        {
            icon: <Factory className="h-8 w-8 text-blue-700" />,
            title: 'Melayani Berbagai Industri',
            description: 'Melayani berbagai skala industri dari UKM hingga perusahaan multinasional dengan solusi yang fleksibel.'
        },
        {
            icon: <Users className="h-8 w-8 text-green-600" />,
            title: 'Tim Profesional',
            description: 'Didukung tim berpengalaman yang memahami karakteristik dan penanganan khusus setiap jenis cairan.'
        }
    ];

    const liquidTypes = [
        {
            category: 'Bahan Kimia',
            icon: <Beaker className="h-8 w-8 text-red-600" />,
            description: 'Pengangkutan berbagai jenis bahan kimia industri dengan standar keamanan tertinggi',
            examples: ['Asam sulfat', 'Caustic soda', 'Pelarut industri', 'Bahan kimia dasar']
        },
        {
            category: 'Minyak Nabati',
            icon: <Droplets className="h-8 w-8 text-yellow-600" />,
            description: 'Transportasi minyak nabati dengan menjaga kualitas dan kemurnian produk',
            examples: ['Minyak kelapa sawit', 'Minyak kedelai', 'Minyak kelapa', 'Minyak jagung']
        },
        {
            category: 'Cairan Food Grade',
            icon: <Shield className="h-8 w-8 text-green-600" />,
            description: 'Pengangkutan cairan untuk industri makanan dan minuman dengan sertifikasi halal',
            examples: ['Sirup', 'Konsentrat minuman', 'Minyak goreng', 'Bahan makanan cair']
        }
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

            {/* Service Features */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Spesialisasi Cairan</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {liquidTypes.map((type, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                                        {type.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{type.category}</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-800">Contoh Produk:</h4>
                                    {type.examples.map((example, idx) => (
                                        <div key={idx} className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                            <span className="text-gray-600">{example}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
