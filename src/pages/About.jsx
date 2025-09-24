import { Link } from "react-router-dom";
import {
    Target,
    Eye,
    Users,
    Award,
    Truck,
    Shield,
    ArrowRight,
    Heart,
    CheckCircle
} from "lucide-react";

const About = () => {
    const team = [
        {
            name: "Go Iwan Imara",
            role: "Direktur Utama",
            image: "/images/team/go-iwan.jpg"
        },
        {
            name: "Poedjiastuti",
            role: "Direktur I",
            image: "/images/team/poedjiastuti.jpg"
        },
        {
            name: "Wibowo Hadi Goutomo",
            role: "Direktur II",
            image: "/images/team/wibowo.jpg"
        },
        {
            name: "Song Herawati Sugandhi",
            role: "Komisaris Utama",
            image: "/images/team/song.jpg"
        },
        {
            name: "Candra Gunawan",
            role: "Komisaris",
            image: "/images/team/candra.jpg"
        },
        {
            name: "Handojo",
            role: "Komisaris",
            image: "/images/team/handojo.jpg"
        },
        {
            name: "Go Bie Hong",
            role: "Komisaris",
            image: "/images/team/go-bie-hong.jpg"
        }
    ];


    const directors = team.filter(member =>
        member.role.toLowerCase().includes("direktur")
    );

    const commissioners = team.filter(member =>
        member.role.toLowerCase().includes("komisaris")
    );


    const values = [
        {
            icon: Shield,
            title: "Integritas",
            description: "Berkomitmen pada kejujuran, transparansi, dan akuntabilitas dalam setiap aspek bisnis."
        },
        {
            icon: Award,
            title: "Keunggulan",
            description: "Selalu berusaha memberikan layanan terbaik dengan standar kualitas tertinggi."
        },
        {
            icon: Users,
            title: "Kepedulian",
            description: "Mengutamakan kepuasan pelanggan dan kesejahteraan karyawan sebagai prioritas utama."
        },
        {
            icon: Truck,
            title: "Profesionalisme",
            description: "Menjalankan bisnis dengan integritas dan profesionalisme tinggi"
        }
    ];

    const commitments = [
        'Memberikan layanan transportasi yang handal dan efisien',
        'Mendukung pertumbuhan bisnis pelanggan melalui solusi yang inovatif',
        'Mengutamakan kualitas, keselamatan, dan ketepatan waktu',
        'Menerapkan budaya continuous improvement dalam setiap aspek operasional',
        'Membangun hubungan jangka panjang dengan semua stakeholder'
    ]

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-white/20 text-white border border-white/30 text-sm font-medium">
                            Tentang Kami
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Membangun Kepercayaan<br />
                            <span className="text-accent">Sejak 1980</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Kami adalah perusahaan ekspedisi terpercaya yang telah melayani ribuan pelanggan
                            di seluruh Indonesia dengan komitmen pada keamanan, kecepatan, dan kepercayaan.
                        </p>
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
                                <h3 className="text-2xl font-bold text-foreground mb-4">Awal Perjalanan (1980)</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Dimulai dari UD. Surya yang bergerak di bidang sembako, membangun fondasi bisnis yang kuat.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-card p-8 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Ekspansi ke Transportasi (1994)</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Berdiri UD. Tirta Kencana yang menyewakan truk tangki, memasuki industri transportasi cairan.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-card p-8 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Merger Strategis (2012)</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Kedua perusahaan bergabung menjadi PT. Surya Mitra Tirta Kencana untuk sinergi maksimal.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-card p-8 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Masa Kini</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Memiliki lebih dari ratusan unit armada dan melayani klien di seluruh Indonesia.
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
                                Menjadi perusahaan transportasi terbaik yang dipilih karena kualitas dan etos kerja yang baik, serta memberikan nilai tambah bagi semua stakeholder.
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
                            {/* <ul className="space-y-3 text-muted-foreground">
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
                            </ul> */}
                            <p className="text-muted-foreground leading-relaxed">
                                Menyediakan solusi transportasi yang terpercaya, berkelanjutan, dan efisien untuk menciptakan nilai lebih bagi semua pemangku kepentingan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-10 rounded-xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                            <Heart className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Komitmen Kami</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Kami berkomitmen penuh untuk memberikan layanan terbaik dan mendukung pertumbuhan bisnis pelanggan
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {commitments.map((commitment, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-700 leading-relaxed">{commitment}</p>
                            </div>
                        ))}
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
                            Pimpinan Perusahan
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Dipimpin oleh profesional berpengalaman yang berdedikasi untuk memberikan layanan terbaik
                        </p>
                    </div>

                    {/* Direktur */}
                    <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                        Dewan Direksi
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {directors.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md text-center p-8 hover:shadow-lg transition-all duration-300">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-primary/20"
                                />
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-accent font-medium">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Komisaris */}
                    <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                        Dewan Komisaris
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {commissioners.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md text-center p-8 hover:shadow-lg transition-all duration-300">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-primary/20"
                                />
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-accent font-medium">
                                    {member.role}
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
