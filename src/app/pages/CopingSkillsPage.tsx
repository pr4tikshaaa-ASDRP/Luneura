import {
  Battery,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Headphones,
  Heart,
  MessageCircle,
  Moon,
  School,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const toolkitCards = [
  {
    icon: Headphones,
    title: "Sensory Toolkit",
    description: "Tools to keep nearby when sounds, lights, textures, or crowds feel overwhelming.",
    items: [
      "Noise-canceling headphones or earbuds",
      "Sunglasses, hoodie, or hat for bright spaces",
      "Fidget, textured item, or comfort object",
      "Water, gum, or a familiar snack",
      "A calming playlist or white noise",
    ],
  },
  {
    icon: School,
    title: "School Survival Tools",
    description: "Supports for class, homework, group work, assemblies, and busy school days.",
    items: [
      "Ask for written directions when possible",
      "Break assignments into tiny steps",
      "Use checklists, timers, or visual schedules",
      "Sit near a calmer part of the room",
      "Email a teacher when talking feels hard",
    ],
  },
  {
    icon: MessageCircle,
    title: "Scripts You Can Use",
    description: "Simple phrases for moments when it is hard to explain what you need.",
    items: [
      "“I need a short break.”",
      "“Can you explain that another way?”",
      "“I feel overwhelmed and need a quieter space.”",
      "“Texting is easier for me right now.”",
      "“Please ask before touching me.”",
    ],
  },
  {
    icon: Battery,
    title: "Energy Check-In",
    description: "A quick way to notice your social battery before you reach burnout.",
    items: [
      "Green: I feel okay and can keep going",
      "Yellow: I need a break soon",
      "Orange: I am close to overwhelmed",
      "Red: I need to stop, rest, or get help",
      "After social events, plan recovery time",
    ],
  },
];

const calmSteps = [
  "Notice what feels wrong: noise, light, pressure, hunger, confusion, or tiredness.",
  "Lower the demand: pause, step away, sit down, or ask for fewer questions.",
  "Use one support tool: headphones, water, fidget, music, breathing, or texting.",
  "Move to a calmer place if you can.",
  "Recover afterward without blaming yourself.",
];

const burnoutSigns = [
  "Everything feels harder than usual",
  "More shutdowns, meltdowns, or crying",
  "Feeling exhausted after normal activities",
  "Avoiding people, schoolwork, or hobbies",
  "More sensitivity to sounds, lights, or textures",
];

const recoveryTools = [
  "Reduce extra demands when possible",
  "Take quiet time without guilt",
  "Use sensory supports more often",
  "Ask for extensions or help when needed",
  "Spend time with safe people or comforting interests",
];

const CopingSkillsPage = () => {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-b from-secondary/30 to-background py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-medium text-foreground leading-tight">
            Coping Skills Toolkit
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Real-life tools for school stress, sensory overwhelm, social battery,
            burnout, and moments when everything feels like too much.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {toolkitCards.map((card) => {
              const Icon = card.icon;

              return (
                <Card
                  key={card.title}
                  className="rounded-3xl border-2 border-primary/20 bg-card shadow-sm hover:shadow-md transition-all"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-medium text-foreground">
                      {card.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-muted-foreground leading-relaxed"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="rounded-3xl border-2 border-primary/20 bg-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-medium text-foreground">
                <ClipboardList className="w-8 h-8 text-primary" />
                5-Step Calm-Down Plan
              </CardTitle>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Use this when you feel overwhelmed and do not know what to do first.
              </p>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {calmSteps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl bg-card border border-border p-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-3xl border-2 border-primary/20 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-medium text-foreground">
                  <Moon className="w-7 h-7 text-primary" />
                  Autistic Burnout Warning Signs
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Burnout can happen when stress, masking, sensory overload, and
                  daily demands build up for too long.
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {burnoutSigns.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-2 border-primary/20 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-medium text-foreground">
                  <Heart className="w-7 h-7 text-primary" />
                  Recovery Tools
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Recovery is not laziness. It is how your brain and body reset
                  after too much stress.
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {recoveryTools.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-3xl border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-medium text-foreground">
                <Users className="w-8 h-8 text-primary" />
                Real-World Situations
              </CardTitle>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Quick ideas for common moments that can feel stressful.
              </p>
            </CardHeader>

            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <SituationCard
                title="Loud Cafeteria"
                text="Try headphones, sit near the edge of the room, eat with one trusted person, or take a short quiet break afterward."
              />
              <SituationCard
                title="Group Project"
                text="Ask for a clear role, write down your part, use shared documents, or ask to communicate by text if speaking is stressful."
              />
              <SituationCard
                title="Too Many Assignments"
                text="Write everything down, choose one tiny first step, use a timer for 10 minutes, and ask for help before you shut down."
              />
            </CardContent>
          </Card>

          <div className="rounded-3xl bg-primary text-primary-foreground p-8 sm:p-10 text-center">
            <BookOpen className="w-10 h-10 mx-auto mb-4" />
            <h2 className="text-3xl font-medium mb-4">
              Build Your Personal Coping Plan
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Coping skills are personal. Try different tools, notice what
              actually helps, and keep a small list of strategies you can use at
              school, at home, with friends, and during overwhelming moments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const SituationCard = ({ title, text }: { title: string; text: string }) => (
  <div className="rounded-2xl border border-border bg-secondary/20 p-6">
    <h3 className="text-xl font-medium text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

export default CopingSkillsPage;