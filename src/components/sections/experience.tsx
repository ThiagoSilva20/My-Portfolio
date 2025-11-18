import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"

type ExperienceItem = {
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Desenvolvedor Junior",
    company: "65A",
    period: "Maio 2025 - Presente",
    description: [
      "Atuação em desenvolvimento de software, contribuindo para a criação e manutenção de soluções digitais.",
    ],
  },
  {
    title: "Desenvolvedor Front End",
    company: "Next Devs Academy",
    period: "Fevereiro 2025 - Maio 2025",
    description: [
      "Desenvolvimento de sites e aplicações web utilizando Next.js, React.js e Node.js para criar soluções otimizadas, escaláveis e de alto desempenho.",
      "Construção de interfaces modernas e responsivas com Tailwind CSS.",
      "Integração e gerenciamento de bancos de dados PostgreSQL com Prisma ORM, garantindo segurança, eficiência e facilidade na manipulação de dados.",
      "Aplicação de boas práticas de desenvolvimento, otimização de performance e acessibilidade.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading title="Experiência" highlight="Profissional" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <p className="text-emerald-500">{experience.company}</p>
          </div>
          <p className="text-zinc-400 mt-2 md:mt-0">{experience.period}</p>
        </div>
        <ul className="space-y-2 text-zinc-300">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-emerald-500 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>        
      </CardContent>
    </Card>
  )
}
