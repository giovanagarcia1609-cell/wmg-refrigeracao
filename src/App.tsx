/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MessageCircle, 
  CheckCircle2, 
  Snowflake, 
  Settings, 
  Refrigerator, 
  WashingMachine, 
  Wrench, 
  Zap, 
  ShieldCheck, 
  MapPin, 
  DollarSign, 
  Star,
  ArrowRight,
  Award,
  HelpCircle
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5517996685368?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20agendar%20com%20um%20t%C3%A9cnico%20da%20WMG%20refrigera%C3%A7%C3%A3o!";

export default function App() {
  // Schema.org JSON-LD for LocalBusiness
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WMG Refrigeração & Climatização",
    "image": "https://ais-dev-cxofxc4lvg5lo2jg73iokn-106502954099.us-west2.run.app/hero.png",
    "@id": "",
    "url": "https://ais-dev-cxofxc4lvg5lo2jg73iokn-106502954099.us-west2.run.app",
    "telephone": "+55 17 99668-5368",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "São José do Rio Preto",
      "addressLocality": "São José do Rio Preto",
      "addressRegion": "SP",
      "postalCode": "",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -20.8113,
      "longitude": -49.3758
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "sameAs": []
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full py-4 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-black text-primary leading-tight uppercase">
                WMG REFRIGERAÇÃO
              </span>
              <span className="text-xs md:text-sm text-slate-500 font-medium">
                S.J. do Rio Preto e Região
              </span>
            </div>
          </div>
          <motion.a 
            animate={{ 
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                "0 0 20px 5px rgba(37, 211, 102, 0.4)",
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-whatsapp text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold shadow-lg hover:bg-green-600 transition-colors relative overflow-hidden group"
          >
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            />
            <MessageCircle size={18} fill="currentColor" className="relative z-10" />
            <span className="relative z-10">WhatsApp</span>
          </motion.a>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-6"
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold w-fit">
                ASSISTÊNCIA TÉCNICA EM RIO PRETO
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-primary">
                Conserto, Instalação e Manutenção de Ar-Condicionado, Geladeira e Máquina de Lavar
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                A <strong>WMG Refrigeração</strong> oferece atendimento rápido em São José do Rio Preto. Técnicos especializados com orçamento imediato pelo WhatsApp para sua casa.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Atendimento no mesmo dia",
                  "Peças originais com garantia",
                  "Técnicos certificados",
                  "Preço justo e transparente"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="text-whatsapp" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-whatsapp text-white hover:bg-green-600 transition-all py-4 px-8 rounded-xl text-lg font-bold shadow-lg uppercase tracking-wide group w-full sm:w-fit"
                >
                  <MessageCircle size={24} fill="currentColor" />
                  ORÇAMENTO VIA WHATSAPP
                </a>
                <div className="flex items-center gap-2 text-whatsapp font-bold text-sm px-1">
                  <Zap className="animate-pulse" size={16} />
                  <span>Atendimento prioritário para agendamentos hoje</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video border-4 border-white">
                <img 
                  src="/hero.png" 
                  alt="Técnico de Refrigeração WMG realizando manutenção em São José do Rio Preto" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/ac-repair-tech/800/600";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-whatsapp/10 p-2 rounded-lg">
                    <Zap className="text-whatsapp" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Resposta em até</p>
                    <p className="text-lg font-black text-primary">1 hora</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-white py-20" id="servicos">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Serviços de Refrigeração em Rio Preto</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Especialistas em manutenção preventiva e corretiva para garantir o funcionamento perfeito dos seus aparelhos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Ar-Condicionado",
                  desc: "Limpeza, recarga de gás e conserto de todas as marcas (Split, Janela, Inverter).",
                  icon: <Snowflake className="text-primary" size={32} />
                },
                {
                  title: "Instalação Profissional",
                  desc: "Instalação de ar-condicionado seguindo rigorosamente as normas dos fabricantes.",
                  icon: <Settings className="text-primary" size={32} />
                },
                {
                  title: "Geladeiras e Freezers",
                  desc: "Conserto de geladeiras Frost Free, Side by Side e freezers domésticos.",
                  icon: <Refrigerator className="text-primary" size={32} />
                },
                {
                  title: "Máquinas de Lavar",
                  desc: "Manutenção de lavadoras e lava e seca. Troca de placa, bomba e mecânica.",
                  icon: <WashingMachine className="text-primary" size={32} />
                }
              ].map((service, i) => (
                <article 
                  key={i}
                  className="bg-background-light p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl text-primary mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-primary py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-16">Por que a WMG Refrigeração é a melhor escolha?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
              {[
                { icon: <Wrench size={32} />, label: "Técnico Especializado" },
                { icon: <Zap size={32} />, label: "Atendimento Rápido" },
                { icon: <DollarSign size={32} />, label: "Preço Justo" },
                { icon: <MapPin size={32} />, label: "Atendimento Local" },
                { icon: <ShieldCheck size={32} />, label: "Serviço com Garantia" },
                { icon: <Award size={32} />, label: "Anos de Experiência" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 text-white">
                  {item.icon}
                  <p className="font-bold text-xs md:text-sm uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Chips */}
        <section className="py-16 bg-background-light">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10 text-primary uppercase tracking-widest">Serviços de Reparo e Manutenção</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Recarga de Gás",
                "Higienização de Ar",
                "Troca de Borracha",
                "Limpeza Preventiva",
                "Manutenção de Freezer",
                "Reparo em Placas",
                "Troca de Compressor"
              ].map((chip, i) => (
                <span 
                  key={i} 
                  className="bg-white px-6 py-3 rounded-full border border-primary/10 font-semibold shadow-sm flex items-center gap-2 text-primary hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  <Wrench size={16} />
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Great for SEO */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-primary">Dúvidas Frequentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Vocês atendem em quais bairros de Rio Preto?",
                  a: "Atendemos em todos os bairros de São José do Rio Preto e também cidades vizinhas como Bady Bassitt, Cedral e Mirassol."
                },
                {
                  q: "O orçamento é cobrado?",
                  a: "Realizamos orçamentos transparentes. Em muitos casos, conseguimos passar uma estimativa inicial via WhatsApp baseada no seu relato."
                },
                {
                  q: "Quais marcas de geladeira vocês consertam?",
                  a: "Trabalhamos com as principais marcas do mercado: Brastemp, Consul, Electrolux, Samsung, LG, entre outras."
                },
                {
                  q: "Quanto tempo dura a garantia do serviço?",
                  a: "Todos os nossos serviços e peças trocadas possuem garantia legal, garantindo sua total tranquilidade e satisfação."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-background-light p-6 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-primary flex items-center gap-2 mb-2">
                    <HelpCircle size={20} className="text-whatsapp" />
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-primary">Como solicitar seu atendimento</h2>
            <div className="flex flex-col md:flex-row gap-12 justify-center items-start relative">
              {[
                { step: 1, title: "Chame no WhatsApp", desc: "Clique em qualquer botão do site para falar direto com o técnico." },
                { step: 2, title: "Explique o Problema", desc: "Diga o que está acontecendo com seu aparelho para um pré-diagnóstico." },
                { step: 3, title: "Agende a Visita", desc: "Combinamos o melhor horário para resolver seu problema em Rio Preto." }
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-whatsapp text-white flex items-center justify-center font-black text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-primary">{item.title}</h3>
                  <p className="text-slate-600 max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-background-light py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">O que dizem nossos clientes em Rio Preto</h2>
              <div className="flex justify-center items-center gap-3">
                <span className="text-3xl font-black text-slate-800">5.0</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Gabriel Oliva", text: "Rapaz, nunca pensei que um serviço pudesse ser tão rápido! Minha geladeira parou de funcionar de madrugada, e eles chegaram em menos de uma hora." },
                { name: "Guilherme Soares Gusmão", text: "Depois de procurar vários lugares, encontrei essa empresa e não me arrependo. Resolveram o problema da minha geladeira rapidamente, sem enrolação." },
                { name: "João Pedro", text: "Gostei do atendimento, foram rápidos e eficientes. Minha geladeira voltou a funcionar perfeitamente, e o técnico foi educado e profissional." },
                { name: "Aline LL", text: "Resolveram o atendimento no domingo com muita excelência e rapidez. Serviço de alta qualidade para emergência. Com peças em estoque originais." }
              ].map((review, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
                  <div className="flex mb-4 text-yellow-400">
                    {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={14} />)}
                  </div>
                  <p className="text-slate-600 italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
                  <p className="font-bold text-primary">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Precisa de conserto urgente?</h2>
            <p className="text-xl text-slate-600 mb-12">Não deixe seu problema para depois. Fale agora com quem entende de refrigeração em Rio Preto.</p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-whatsapp text-white hover:bg-green-600 transition-all py-6 px-10 rounded-2xl text-xl md:text-2xl font-black shadow-2xl uppercase tracking-tight"
            >
              <MessageCircle size={32} fill="currentColor" />
              <span>QUERO MEU ORÇAMENTO AGORA</span>
              <ArrowRight size={24} />
            </motion.a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <p className="text-white font-black text-xl">WMG Refrigeração & Climatização</p>
            <p className="text-sm leading-relaxed">
              Especialistas em conserto e manutenção de eletrodomésticos em São José do Rio Preto e região. Sua solução em refrigeração.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold uppercase tracking-widest text-sm">Horário de Atendimento</p>
            <p className="text-sm">Segunda a Sexta: 08:00 às 18:00</p>
            <p className="text-sm">Sábado: 08:00 às 12:00</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold uppercase tracking-widest text-sm">Contato</p>
            <p className="text-sm">São José do Rio Preto - SP e Região</p>
            <div className="flex justify-center md:justify-start items-center gap-2 text-white font-bold text-lg">
              <MessageCircle size={20} fill="currentColor" />
              17 99668-5368
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs">
          <p>© 2026 WMG Refrigeração. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

