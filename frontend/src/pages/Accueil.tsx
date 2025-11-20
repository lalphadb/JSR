import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Truck, Mountain, Phone, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { PHOTOS } from "@/lib/photos";
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Testimonials } from "@/components/Testimonials";
import { AnimatedStats } from "@/components/AnimatedStats";
import { FAQ } from "@/components/FAQ";
import { BeforeAfterComparator } from "@/components/BeforeAfterComparator";
import { Timeline } from "@/components/Timeline";
import { BlogSection } from "@/components/BlogSection";
import { DynamicForm } from "@/components/DynamicForm";
import { ParallaxSection } from "@/components/ParallaxSection";
import { CounterAnimation } from "@/components/CounterAnimation";

const Accueil = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Déneigement Commercial",
      description: "Services de déneigement professionnel disponibles 24h/24 pour maintenir vos accès dégagés",
    },
    {
      icon: Truck,
      title: "Excavation & Fondation",
      description: "Travaux d'excavation précis pour fondations résidentielles et commerciales",
    },
    {
      icon: Mountain,
      title: "Terrassement & Nivellement",
      description: "Préparation et aménagement de terrain selon les normes industrielles",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Avec animations */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <picture>
            <source type="image/webp" srcSet={PHOTOS.parcMachines.webp640} />
            <img
              src={PHOTOS.parcMachines.jpg1280}
              alt={PHOTOS.parcMachines.alt}
              className="w-full h-full object-cover object-center"
            />
          </picture>
          {/* Animated Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/40 to-transparent"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Excellence en
              <motion.span
                className="block text-orange mt-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Excavation • Terrassement • Déneigement
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-white/90 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Plus de 15 ans d'expertise au service de votre projet
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-orange hover:bg-orange-hover text-white px-8">
                  <Link to="/contact">Obtenir une soumission</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white text-dark hover:bg-gray-100 px-8">
                  <a href="tel:+14188050063" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    418-805-0063
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section - Avec animations */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
              Nos Services Spécialisés
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Solutions complètes pour projets résidentiels et commerciaux
            </p>
          </FadeInUp>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group hover:border-brand transition-all duration-300 border border-surface-border bg-white h-full">
                    <CardContent className="p-8">
                      {/* Icon */}
                      <motion.div
                        className="bg-brand/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <service.icon className="h-8 w-8 text-brand group-hover:text-white transition-colors duration-300" />
                      </motion.div>

                      <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-brand transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <FadeInUp className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-brand hover:bg-brand-hover text-white px-8 py-6">
                <Link to="/services" className="flex items-center gap-2">
                  Tous nos services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </FadeInUp>
        </div>
      </section>

      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Why Choose Us - Avec animations */}
      <section className="py-20 bg-white border-y border-surface-border">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <motion.div
                className="bg-brand/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-brand hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Award className="h-8 w-8 text-brand" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-text-primary">15+ Années</h3>
              <p className="text-text-secondary">D'expérience dans l'industrie</p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <motion.div
                className="bg-brand/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-brand hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Clock className="h-8 w-8 text-brand" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-text-primary">Service 24/7</h3>
              <p className="text-text-secondary">Disponibilité pour urgences</p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <motion.div
                className="bg-brand/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-brand hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Shield className="h-8 w-8 text-brand" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-text-primary">Qualité Assurée</h3>
              <p className="text-text-secondary">Travaux garantis et conformes</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section - Avec animations */}
      <section className="py-20 bg-dark text-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-orange/10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Démarrez Votre Projet Aujourd'hui
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Demandez une soumission gratuite et détaillée pour votre projet d'excavation ou de terrassement
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-orange hover:bg-orange-hover text-white text-lg px-8 py-6">
                <Link to="/contact">Demander une soumission</Link>
              </Button>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white text-dark hover:bg-gray-100 text-lg px-8 py-6">
                <a href="tel:+14188050063" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  418-805-0063
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Accueil;
