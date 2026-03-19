"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Waves, Users, Phone, Mail, MapPin, Calendar, Sparkles, Sun, TreePine } from "lucide-react"
import { useEffect, useState } from "react"

export default function Page() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            {/* <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <TreePine className="w-6 h-6 text-primary-foreground" />
            </div> */}
            <div>
              <img src="/logo-finca-el-saman.png" alt="Logo" className="w-50" />
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#amenidades"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              Espacios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#galeria"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              Galería
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          <a href="https://wa.link/ckm2p7"
            target="_blank"
            rel="noopener noreferrer"
          ><Button className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:scale-105 transition-all duration-300 text-primary-foreground font-semibold relative overflow-hidden group">
              <span className="absolute inset-0 animate-shimmer"></span>
              <Calendar className="w-4 h-4 mr-2 relative z-10" />
              <span className="relative z-10">Reservar</span>
            </Button></a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        {/* Fondo decorativo con parallax */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInUp">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full border border-secondary/30">
                <Sun className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">Verano 2025 - Reserva Ahora</span>
                <Sparkles className="w-4 h-4 text-accent" />
              </div>*/}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent">
                Finca Hotel el Samán de Cerritos
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                turismo, familia y eventos en el corazón del Eje Cafetero
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.link/ckm2p7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:scale-105 transition-all duration-300 text-primary-foreground font-semibold text-lg px-8"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Reservar Ahora
                  </Button>
                </a>
                <a href="https://wa.link/ckm2p7"
                  target="_blank"
                  rel="noopener noreferrer"
                ><Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-lg px-8 bg-transparent"
                >
                    <Phone className="w-5 h-5 mr-2" />
                    Contactar
                  </Button></a>
              </div>
            </div>
            <div className="relative h-[450px] md:h-[600px] animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="/zonas-comunes/hero-finca-el-saman.JPG"
                  alt="Finca El Saman vista principal"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenidades Section */}
      <section id="amenidades" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Nuestros espacios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Todo lo que Necesitas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comodidad, diversión y naturaleza en un solo lugar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary hover:shadow-2xl transition-all duration-500 group overflow-hidden relative animate-fadeInUp bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 space-y-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Home className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  Habitaciones Familiares
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Cómodas habitaciones equipadas para toda la familia, con espacios amplios y ambiente acogedor para tu
                  descanso perfecto.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 group overflow-hidden relative animate-fadeInUp bg-card"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 space-y-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Waves className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">Piscina Refrescante</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Refrescante piscina rodeada de naturaleza, perfecta para disfrutar en familia y crear momentos
                  memorables bajo el sol.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-2 border-border hover:border-accent hover:shadow-2xl transition-all duration-500 group overflow-hidden relative animate-fadeInUp bg-card"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 space-y-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">Salón de Eventos</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Amplio salón ideal para celebraciones, reuniones y eventos especiales con capacidad para grupos
                  grandes y ambiente único.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Galería</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Conoce Nuestros Espacios</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Un vistazo a la belleza y comodidad que te espera
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/habitaciones/habitacion.JPG",
                title: "Habitaciones",
                color: "from-primary/80",
              },
              {
                src: "/zonas-comunes/piscina.JPG",
                title: "Piscina",
                color: "from-secondary/80",
              },
              {
                src: "/zonas-comunes/salon-eventos.JPG",
                title: "Salón de Eventos",
                color: "from-accent/80",
              },
              {
                src: "/zonas-comunes/jardines.JPG",
                title: "Jardines",
                color: "from-primary/80",
              },
              {
                src: "/zonas-comunes/zona-bbq.JPG",
                title: "Zona de BBQ",
                color: "from-primary/80",
              },
              {
                src: "/zonas-comunes/juegos.JPG",
                title: "Zona de juegos",
                color: "from-primary/80",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                ></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white font-bold text-2xl drop-shadow-lg">{item.title}</span>
                    <p className="text-white/90 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Ver más detalles
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Reserva Ahora</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Reserva Tu Experiencia</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Contáctanos para disponibilidad y reservaciones
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 grid-center border-border hover:border-primary hover:shadow-2xl transition-all duration-500 bg-card">
                <CardContent className="p-8 space-y-8">
                  <h3 className="text-2xl font-bold">Información de Contacto</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-1">Teléfono</p>
                        <p className="text-muted-foreground">+57 310 4947159</p>
                      </div>
                    </div>

                    {/*<div className="flex items-start gap-4 group">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/60 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-secondary-foreground" />
                      </div>
                       <div>
                        <p className="font-semibold text-lg mb-1">Email</p>
                        <p className="text-muted-foreground">jecenterprise777@gmail.com</p>
                      </div> 
                    </div>*/}

                    <div className="flex items-start gap-4 group">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-1">Ubicación</p>
                        <p className="text-muted-foreground">Cerritos, Risaralda, Colombia</p>
                      </div>
                    </div>
                  </div>

                  <a href="https://wa.link/ckm2p7"
                    target="_blank"
                    rel="noopener noreferrer"
                  ><Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:scale-105 transition-all duration-300 text-primary-foreground font-semibold text-lg py-6">
                      <Calendar className="w-5 h-5 mr-2" />
                      Solicitar Disponibilidad
                    </Button></a>
                </CardContent>
              </Card>

              {/*<Card className="border-2 border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-8">Envíanos un Mensaje</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-semibold mb-3 text-foreground">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        className="w-full px-5 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-background text-foreground"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-background text-foreground"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-semibold mb-3 text-foreground">
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        rows={4}
                        className="w-full px-5 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none bg-background text-foreground"
                        placeholder="Cuéntanos sobre tu evento o consulta..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-secondary to-accent hover:shadow-xl hover:scale-105 transition-all duration-300 text-secondary-foreground font-semibold text-lg py-6"
                    >
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-foreground via-foreground to-primary/20 text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div>
                <img src="/logo-finca-el-saman.png" alt="Logo" className="w-40" />
              </div>
            </div>
            <p className="text-sm text-background/80">© 2025 Finca El Saman. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
