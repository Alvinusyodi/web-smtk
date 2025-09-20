import { Link } from "react-router-dom";
import {
    Target,
    Eye,
    Users,
    Award,
    Truck,
    Shield,
    ArrowRight
} from "lucide-react";

const About = () => {
    const stats = [
        { number: "15+", label: "Tahun Pengalaman" },
        { number: "500+", label: "Armada Truk" },
        { number: "50K+", label: "Pengiriman Berhasil" },
        { number: "34", label: "Provinsi Terjangkau" }
    ];

    const team = [
        {
            name: "Budi Santoso",
            role: "CEO & Founder",
            description: "15+ tahun pengalaman di industri logistik dan ekspedisi Indonesia"
        },
        {
            name: "Sari Dewi",
            role: "Manajer Operasional",
            description: "Memastikan operasional berjalan lancar dan efisien setiap harinya"
        },
        {
            name: "Ahmad Rahman",
            role: "Kepala Armada",
            description: "Bertanggung jawab atas perawatan dan pengelolaan seluruh armada"
        },
        {
            name: "Linda Kusuma",
            role: "Customer Service Manager",
            description: "Memastikan kepuasan pelanggan dan layanan berkualitas tinggi"
        }
    ];

    const values = [
        {
            icon: Shield,
            title: "Keamanan",
            description: "Menjaga keamanan barang pelanggan dengan sistem monitoring 24/7"
        },
        {
            icon: Award,
            title: "Kualitas",
            description: "Memberikan layanan berkualitas tinggi dengan standar internasional"
        },
        {
            icon: Users,
            title: "Kepercayaan",
            description: "Membangun hubungan jangka panjang berdasarkan kepercayaan"
        },
        {
            icon: Truck,
            title: "Profesionalisme",
            description: "Menjalankan bisnis dengan integritas dan profesionalisme tinggi"
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-white/20 text-white border border-white/30 text-sm font-medium">
                            Tentang TruckExpress
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Membangun Kepercayaan<br />
                            <span className="text-accent">Sejak 2009</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Kami adalah perusahaan ekspedisi terpercaya yang telah melayani ribuan pelanggan
                            di seluruh Indonesia dengan komitmen pada keamanan, kecepatan, dan kepercayaan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-muted-foreground font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Sejarah Kami
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white rounded-xl shadow-card p-8 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Awal Perjalanan (2009)</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    TruckExpress didirikan dengan visi sederhana namun kuat: memberikan layanan ekspedisi
                                    yang dapat diandalkan untuk membantu bisnis Indonesia berkembang. Dimulai dengan
                                    5 unit truk dan tim kecil yang berdedikasi.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-card p-8 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Ekspansi Nasional (2015)</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Setelah 6 tahun membangun reputasi di Pulau Jawa, kami memperluas layanan ke
                                    seluruh Indonesia. Membuka cabang di kota-kota besar dan menambah armada
                                    hingga 100 unit truk.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-card p-8 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Inovasi Digital (2020)</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Meluncurkan sistem tracking real-time dan digitalisasi proses operasional.
                                    Menjadi salah satu perusahaan ekspedisi pertama yang mengadopsi teknologi
                                    IoT untuk monitoring armada.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                                    <Eye className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">Visi Kami</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Menjadi perusahaan ekspedisi terdepan di Indonesia yang menghubungkan
                                seluruh nusantara dengan layanan logistik yang inovatif, terpercaya,
                                dan berkelanjutan untuk mendukung pertumbuhan ekonomi nasional.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">Misi Kami</h3>
                            </div>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start">
                                    <ArrowRight className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                                    Memberikan layanan ekspedisi berkualitas tinggi dengan teknologi modern
                                </li>
                                <li className="flex items-start">
                                    <ArrowRight className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                                    Membangun jaringan logistik yang menghubungkan seluruh Indonesia
                                </li>
                                <li className="flex items-start">
                                    <ArrowRight className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                                    Menciptakan solusi inovatif untuk kebutuhan ekspedisi modern
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Nilai-Nilai Kami
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Nilai-nilai yang menjadi fondasi dalam setiap layanan yang kami berikan
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="bg-white rounded-xl shadow-md text-center p-8 group hover:shadow-lg transition-all duration-300">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Tim Kami
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Dipimpin oleh profesional berpengalaman yang berdedikasi untuk memberikan layanan terbaik
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md text-center p-8 hover:shadow-lg transition-all duration-300">
                                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Users className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-accent font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Bergabunglah dengan Ribuan Pelanggan Kami
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Rasakan sendiri pengalaman layanan ekspedisi terbaik di Indonesia
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:opacity-90 transition"
                    >
                        Mulai Sekarang
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
