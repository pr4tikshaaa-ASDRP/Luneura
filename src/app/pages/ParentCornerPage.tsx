import { Heart, BookOpen, Shield, Lightbulb, Users, GraduationCap, Info, Check, X, XCircle, CheckCircle, ChevronDown, ChevronUp, Sparkles, Brain, ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Label } from "@/app/components/ui/label";
import { useState } from "react";

const ParentCornerPage = () => {
  const supportAreas = [
    {
      icon: Heart,
      emoji: "❤️",
      title: "Emotional Support",
      items: [
        "Validate their feelings and experiences",
        "Create a judgment-free environment",
        "Listen without trying to immediately fix",
        "Celebrate their unique strengths",
        "Respect their need for alone time",
      ],
    },
    {
      icon: Lightbulb,
      emoji: "💡",
      title: "Sensory Support",
      items: [
        "Identify and minimize sensory triggers",
        "Provide quiet spaces for decompression",
        "Offer sensory tools (fidgets, noise-canceling headphones)",
        "Plan breaks during overwhelming activities",
        "Respect clothing and texture preferences",
      ],
    },
    {
      icon: Users,
      emoji: "👥",
      title: "Social Support",
      items: [
        "Teach social skills explicitly and concretely",
        "Help them find like-minded friends",
        "Don't force eye contact or hugs",
        "Explain unspoken social rules clearly",
        "Support their communication style",
      ],
    },
    {
      icon: GraduationCap,
      emoji: "🎓",
      title: "School Advocacy",
      items: [
        "Work with teachers on accommodations",
        "Consider IEP or 504 plan",
        "Communicate regularly with school",
        "Document challenges and successes",
        "Advocate for your child's needs",
      ],
    },
  ];

  const myths = [
    {
      myth: "Autism is rare in girls",
      fact: "Girls are often underdiagnosed because they may mask symptoms or present differently than boys. Current research suggests autism may be more common in girls than previously thought.",
    },
    {
      myth: "Autistic girls don't want friends",
      fact: "Many autistic girls deeply want connection and friendship. They may struggle with the unspoken social rules, but the desire for meaningful relationships is very much there.",
    },
    {
      myth: "If she makes eye contact, she can't be autistic",
      fact: "Many autistic girls learn to make eye contact as a masking strategy. Eye contact alone does not determine whether someone is autistic.",
    },
    {
      myth: "Autistic girls are all the same",
      fact: "Autism is a spectrum, and every autistic girl is unique. Strengths, challenges, and support needs vary widely from person to person.",
    },
    {
      myth: "Girls outgrow autism",
      fact: "Autism is a lifelong neurological difference, not a phase. Support needs may change over time, but autism itself does not disappear.",
    },
    {
      myth: "Autistic girls don't have empathy",
      fact: "Many autistic girls feel empathy very deeply — sometimes overwhelmingly so. They may express or process it differently, but a lack of empathy is a myth.",
    },
  ];

  const [openMythIdx, setOpenMythIdx] = useState<number | null>(0);

  const keyBehaviors = [
    {
      emoji: "🤝",
      title: "Socializing",
      question: "Why socializing feels confusing or tiring",
      answer: "Social situations require processing lots of information at once—facial expressions, tone of voice, body language, and spoken words. For autistic brains, this is like constantly translating a foreign language. It takes a lot of energy! Social rules aren't always logical or clear, which can be confusing and exhausting."
    },
    {
      emoji: "😵",
      title: "Overwhelm",
      question: "Why loud or busy places are overwhelming",
      answer: "Autistic brains process sensory information differently. Sounds might seem louder, lights brighter, smells stronger. It's like all the volume knobs in the world are turned way up! When there's too much sensory input at once, it can feel overwhelming or even physically painful."
    },
    {
      emoji: "⭐",
      title: "Special Interests",
      question: "Why intense interests happen",
      answer: "Deep focus and passion for specific topics is a wonderful autistic strength! These special interests bring joy, comfort, and help regulate emotions. They're a safe space where everything makes sense. This intense focus can lead to amazing expertise and accomplishments."
    },
    {
      emoji: "📅",
      title: "Routines",
      question: "Why routines and predictability are preferred",
      answer: "Routines help the brain feel safe and use less energy. When you know what to expect, you don't have to spend mental energy figuring out what comes next. Predictability reduces anxiety and helps create a manageable, comfortable world where you feel in control."
    },
    {
      emoji: "🌀",
      title: "Stimming",
      question: "Why repeated movements or sounds happen",
      answer: "Stimming (like hand flapping, rocking, or making sounds) helps self-regulate emotions, manage sensory overload, reduce anxiety, and express feelings. It's a healthy way the body calms itself and processes the world. Stimming is natural and helpful!"
    },
    {
      emoji: "🎭",
      title: "Masking",
      question: "Why hiding true feelings happens",
      answer: "Many autistic people learn to hide or 'mask' their autistic traits to fit in with others. This might mean forcing eye contact, suppressing stims, or copying others' behavior. While masking helps in the moment, it's exhausting and can lead to burnout, anxiety, and depression."
    },
  ];

  const [selectedSection, setSelectedSection] = useState("overview");

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center space-x-2 text-5xl mb-4">
            <span>💜</span>
            <span>📚</span>
            <span>🌈</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground">
            Parent Corner
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Understanding autism & supporting your special girl
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* What is Autism Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-medium text-foreground text-center flex items-center justify-center space-x-3">
              <Brain className="w-8 h-8 text-primary" />
              <span>🧠 What Is Autism?</span>
            </h2>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Info className="w-6 h-6 text-primary" />
                  <span>Understanding Autism</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Autism is a way of experiencing and interacting with the world. It's part of who your child is, like having brown eyes or being left-handed.
                </p>
                <p>
                  Autistic people may:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl flex-shrink-0">🧠</span>
                    <span>Think and process information differently</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl flex-shrink-0">👂</span>
                    <span>Have unique sensory experiences (sounds, lights, textures)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl flex-shrink-0">💬</span>
                    <span>Communicate in their own special way</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl flex-shrink-0">⭐</span>
                    <span>Have specific interests they're passionate about</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl flex-shrink-0">📅</span>
                    <span>Prefer routines and predictability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Myths vs Facts */}
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-medium text-foreground">Myths vs Facts</h3>
                <p className="text-muted-foreground">Understanding the truth about autism in girls helps us provide better support.</p>
              </div>
              <div className="space-y-3">
                {myths.map((item, idx) => {
                  const isOpen = openMythIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border rounded-2xl overflow-hidden bg-card"
                      style={{ borderColor: "hsl(var(--border))" }}
                    >
                      <button
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                        onClick={() => setOpenMythIdx(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center space-x-3">
                          <XCircle className="w-5 h-5 flex-shrink-0" style={{ color: "hsl(var(--muted-foreground))" }} />
                          <span className="text-foreground">{item.myth}</span>
                        </div>
                        {isOpen
                          ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
                          : <ChevronDown className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
                        }
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <div className="rounded-xl px-5 py-4" style={{ backgroundColor: "hsl(var(--primary) / 0.08)" }}>
                            <div className="flex items-center space-x-2 mb-2">
                              <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--primary))" }} />
                              <span className="text-sm font-medium" style={{ color: "hsl(var(--primary))" }}>The Truth:</span>
                            </div>
                            <p className="text-foreground leading-relaxed">{item.fact}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* More About Me Learning Section */}
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-medium text-foreground flex items-center justify-center space-x-3">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  <span>💡 Understanding Behaviors</span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  Learn about common autistic behaviors and why they happen
                </p>
              </div>

              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">
                      <strong>These behaviors are normal and okay!</strong> They're part of how an autistic brain works, and they help manage the world. Understanding why these things happen can help both you and your child feel less worried or confused.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Accordion type="multiple" className="space-y-4">
                {keyBehaviors.map((behavior, idx) => (
                  <AccordionItem key={idx} value={behavior.title} className="border-2 rounded-2xl px-6 bg-card">
                    <AccordionTrigger className="text-xl hover:no-underline">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{behavior.emoji}</span>
                        <span>{behavior.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 text-lg text-muted-foreground pt-4 pl-14">
                      <p className="leading-relaxed">{behavior.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-medium text-foreground text-center">
              🌟 How to Support Your Special Girl
            </h2>
            
            <Card className="border-2">
              <CardContent className="p-8 space-y-4 text-lg leading-relaxed">
                <p className="text-foreground">
                  Supporting an autistic girl means understanding her unique needs, celebrating her strengths, and advocating for her in a world that wasn't designed with her in mind.
                </p>
                <p className="text-muted-foreground">
                  This section provides practical tools, strategies, and resources to help you support your special girl at every stage of her life.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {supportAreas.map((area, idx) => (
                <Card key={idx} className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl">
                        {area.emoji}
                      </div>
                      <span>{area.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Daily Routines & Tips */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium text-foreground text-center">
              📋 Daily Routines & Practical Tips
            </h2>

            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="morning" className="border-2 rounded-2xl px-6 bg-card">
                <AccordionTrigger className="text-xl hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌅</span>
                    <span>Morning Routines</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-lg text-muted-foreground pt-4">
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Use visual schedules for morning tasks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Allow extra time for transitions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Prepare the night before (clothes, backpack)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Keep mornings calm and predictable</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Offer sensory-friendly breakfast options</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="school" className="border-2 rounded-2xl px-6 bg-card">
                <AccordionTrigger className="text-xl hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🏫</span>
                    <span>School Support</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-lg text-muted-foreground pt-4">
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Pack sensory tools (fidgets, headphones)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Provide a safe communication method with teachers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Plan for after-school decompression time</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Create a homework-friendly environment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Advocate for breaks and accommodations</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="emotional" className="border-2 rounded-2xl px-6 bg-card">
                <AccordionTrigger className="text-xl hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💗</span>
                    <span>Emotional Regulation</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-lg text-muted-foreground pt-4">
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Teach emotion identification with visual aids</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Create a calm-down space at home</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Use clear, concrete language about feelings</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Validate big emotions without judgment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Provide coping tools that work for them</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="social" className="border-2 rounded-2xl px-6 bg-card">
                <AccordionTrigger className="text-xl hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">👭</span>
                    <span>Social Situations</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 text-lg text-muted-foreground pt-4">
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Prepare for social events in advance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Provide an exit strategy from overwhelming situations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Don't force interactions they're uncomfortable with</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Help them find activities aligned with their interests</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span>✓</span>
                      <span>Teach friendship skills explicitly</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Important Resources */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <span className="text-2xl">📚</span>
                <span>Important Resources</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
              <div className="space-y-2">
                <p className="text-foreground font-medium flex items-center space-x-2">
                  <span className="text-xl">🎓</span>
                  <span>Educational Support:</span>
                </p>
                <p>IEP (Individualized Education Program) and 504 plans, special education services, occupational therapy</p>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium flex items-center space-x-2">
                  <span className="text-xl">🏥</span>
                  <span>Medical & Therapeutic:</span>
                </p>
                <p>Autism specialists, therapists who understand autistic girls, sensory integration therapy</p>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium flex items-center space-x-2">
                  <span className="text-xl">👥</span>
                  <span>Community & Support:</span>
                </p>
                <p>Parent support groups, autistic-led organizations, online communities, mentorship programs</p>
              </div>
            </CardContent>
          </Card>

          {/* Self-Care for Parents */}
          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">💆‍♀️</span>
                <h3 className="text-2xl font-medium text-foreground">
                  Self-Care for Parents
                </h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Remember: You can't pour from an empty cup. Taking care of yourself isn't selfish — it's essential. Find your own support network, take breaks when you need them, and celebrate the small victories along the way.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ParentCornerPage;