import { Heart, BookOpen, Shield, Lightbulb, Users, GraduationCap, Info, Check, X, XCircle, CheckCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Sparkles, Brain, ClipboardList, Sun, School, Smile, UserCheck, PhoneCall } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { useState } from "react";

/* ─── Support Slider ──────────────────────────────────────────────── */
const SupportSlider = ({ areas }: { areas: typeof supportAreas }) => {
  const [idx, setIdx] = useState(0);
  const area = areas[idx];
  const Icon = area.icon;
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border-2 border-border bg-card">
        {/* Adjusted to a grid layout on medium+ screens to separate text and illustration columns */}
        <div className="grid md:grid-cols-2 items-center gap-8 p-8 sm:p-10 min-h-[360px]">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-between h-full space-y-5 ">
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{idx + 1} of {areas.length}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {area.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Dot indicators moved beneath text area */}
            <div className="flex justify-start space-x-2 pt-6">
              {areas.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`rounded-full transition-all ${i === idx ? "w-6 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-border"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Card Illustration */}
          <div className="flex justify-center items-center w-full h-full border-t border-border/40 pt-6 md:pt-0 md:border-t-0 md:border-l md:pl-8">
            <img 
              src={area.image} 
              alt={`${area.title} Illustration`}
              className="max-w-full h-auto max-h-[260px] object-contain rounded-xl"
            />
          </div>

        </div>
      </div>
      {/* Arrows */}
      <button
        onClick={() => setIdx((idx - 1 + areas.length) % areas.length)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-card border-2 border-border shadow-sm flex items-center justify-center hover:bg-secondary transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={() => setIdx((idx + 1) % areas.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-card border-2 border-border shadow-sm flex items-center justify-center hover:bg-secondary transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
    </div>
  );
};

/* ─── Circular Timeline ───────────────────────────────────────────── */
const routineNodes = [
  {
    id: "morning",
    label: "Morning Routines",
    icon: Sun,
    angle: -90,
    color: "#F5E0A0",
    items: [
      "Use visual schedules for morning tasks",
      "Allow extra time for transitions",
      "Prepare the night before (clothes, backpack)",
      "Keep mornings calm and predictable",
      "Offer sensory-friendly breakfast options",
    ],
  },
  {
    id: "school",
    label: "School Support",
    icon: School,
    angle: 0,
    color: "#A8E0C8",
    items: [
      "Pack sensory tools (fidgets, headphones)",
      "Provide a safe communication method with teachers",
      "Plan for after-school decompression time",
      "Create a homework-friendly environment",
      "Advocate for breaks and accommodations",
    ],
  },
  {
    id: "emotional",
    label: "Emotional Regulation",
    icon: Smile,
    angle: 90,
    color: "#C8B0E0",
    items: [
      "Teach emotion identification with visual aids",
      "Create a calm-down space at home",
      "Use clear, concrete language about feelings",
      "Validate big emotions without judgment",
      "Provide coping tools that work for them",
    ],
  },
  {
    id: "social",
    label: "Social Situations",
    icon: UserCheck,
    angle: 180,
    color: "#A8C0E0",
    items: [
      "Prepare for social events in advance",
      "Provide an exit strategy from overwhelming situations",
      "Don't force interactions they're uncomfortable with",
      "Help them find activities aligned with their interests",
      "Teach friendship skills explicitly",
    ],
  },
];

const ORBIT_R = 130;
const SVG_SIZE = 340;
const CX = SVG_SIZE / 2;
const CY = SVG_SIZE / 2;

function polarXY(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

const CircularTimeline = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedNode = routineNodes.find((n) => n.id === selected) ?? null;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      {/* Wheel */}
      <div className="flex-shrink-0 relative" style={{ width: SVG_SIZE, height: SVG_SIZE }}>
        <svg width={SVG_SIZE} height={SVG_SIZE} viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`} style={{ overflow: "visible" }}>
          {/* Orbit ring */}
          <circle cx={CX} cy={CY} r={ORBIT_R} fill="none" stroke="hsl(var(--border))" strokeWidth={2} strokeDasharray="6 4" />
          {/* Spoke lines */}
          {routineNodes.map((node) => {
            const outer = polarXY(node.angle, ORBIT_R - 28);
            return (
              <line key={node.id} x1={CX} y1={CY} x2={outer.x} y2={outer.y} stroke="hsl(var(--border))" strokeWidth={1.5} />
            );
          })}
          {/* Center circle */}
          <circle cx={CX} cy={CY} r={46} fill="hsl(var(--primary) / 0.12)" stroke="hsl(var(--primary) / 0.4)" strokeWidth={2} />
          <text x={CX} y={CY - 8} textAnchor="middle" fontSize={12} fontFamily="inherit" fill="hsl(var(--primary))" fontWeight="600">Daily</text>
          <text x={CX} y={CY + 8} textAnchor="middle" fontSize={12} fontFamily="inherit" fill="hsl(var(--primary))" fontWeight="600">Routines</text>
        </svg>

        {/* Bubble nodes — positioned absolutely over the SVG */}
        {routineNodes.map((node) => {
          const pos = polarXY(node.angle, ORBIT_R);
          const NodeIcon = node.icon;
          const isSelected = selected === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelected(isSelected ? null : node.id)}
              style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: isSelected ? node.color : "white",
                border: `2.5px solid ${isSelected ? node.color : "hsl(var(--border))"}`,
                boxShadow: isSelected ? `0 0 0 4px ${node.color}55` : "0 1px 4px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              aria-label={node.label}
            >
              <NodeIcon style={{ width: 22, height: 22, color: isSelected ? "#444" : "hsl(var(--primary))", flexShrink: 0 }} />
              <span style={{ fontSize: 9, fontWeight: 600, color: isSelected ? "#444" : "hsl(var(--muted-foreground))", marginTop: 3, lineHeight: 1.2, textAlign: "center", maxWidth: 52 }}>
                {node.label.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="flex-1 w-full max-w-sm min-h-[200px] flex items-center justify-center">
        {selectedNode ? (
          <Card className="border-2 w-full" style={{ borderColor: selectedNode.color }}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: selectedNode.color }}>
                  <selectedNode.icon className="w-5 h-5 text-foreground/70" />
                </div>
                <h4 className="text-lg font-medium text-foreground">{selectedNode.label}</h4>
              </div>
              <ul className="space-y-2">
                {selectedNode.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center space-y-3 p-8">
            <div className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center mx-auto">
              <ClipboardList className="w-6 h-6 text-muted-foreground/40" />
            </div>
            <p className="text-muted-foreground">Select a bubble to see tips for that part of the day</p>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Flip Cards ──────────────────────────────────────────────────── */
const CARD_HEIGHT = 220;

const FlipCard = ({ myth, fact }: { myth: string; fact: string }) => {
  const [flipped, setFlipped] = useState(false);

  const faceBase: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: 16,
    padding: "18px 20px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: "1000px", cursor: "pointer", height: CARD_HEIGHT }}
      role="button"
      aria-label={flipped ? "Click to see myth" : "Click to see fact"}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front — Myth */}
        <div style={{ ...faceBase, backgroundColor: "#fef2f2", border: "1.5px solid #fca5a5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <XCircle style={{ width: 18, height: 18, color: "#dc6b6b", flexShrink: 0 }} />
            <p style={{ fontSize: 11, fontWeight: 700, color: "#dc6b6b", letterSpacing: "0.07em", textTransform: "uppercase" }}>Myth</p>
          </div>
          <p style={{ color: "#5a2e2e", lineHeight: 1.65, fontSize: 14, flex: 1, overflow: "hidden" }}>{myth}</p>
          <p style={{ fontSize: 11, color: "#dc6b6b99", textAlign: "right", marginTop: 10, flexShrink: 0 }}>Tap to reveal the truth</p>
        </div>

        {/* Back — Fact */}
        <div style={{ ...faceBase, backgroundColor: "#f0faf5", border: "1.5px solid #86c8a4", transform: "rotateY(180deg)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <CheckCircle style={{ width: 18, height: 18, color: "#3a9e6a", flexShrink: 0 }} />
            <p style={{ fontSize: 11, fontWeight: 700, color: "#3a9e6a", letterSpacing: "0.07em", textTransform: "uppercase" }}>Fact</p>
          </div>
          <p style={{ color: "#1e4a33", lineHeight: 1.65, fontSize: 14, flex: 1, overflow: "hidden" }}>{fact}</p>
          <p style={{ fontSize: 11, color: "#3a9e6a99", textAlign: "right", marginTop: 10, flexShrink: 0 }}>Tap to flip back</p>
        </div>
      </div>
    </div>
  );
};

/* ─── Data ────────────────────────────────────────────────────────── */
const supportAreas = [
  {
    icon: Heart,
    title: "Emotional Support",
    image: "src/imports/Gemini_Generated_Image_rbvkzgrbvkzgrbvk.png", // 👈 Make sure to match your exact file path names here
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
    title: "Sensory Support",
    image: "/src/imports/Gemini_Generated_Image_weosyweosyweosyw.png", // 👈 Make sure to match your exact file path names here
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
    title: "Social Support",
    image: "src/imports/Gemini_Generated_Image_n60tqon60tqon60t.png", // 👈 Make sure to match your exact file path names here
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
    title: "School Advocacy",
    image: "src/imports/Gemini_Generated_Image_259dpa259dpa259d.png", // 👈 Make sure to match your exact file path names here
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
    fact: "Many autistic girls deeply want connection and friendship. They may struggle with unspoken social rules, but the desire for meaningful relationships is very much there.",
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

/* ─── Page ────────────────────────────────────────────────────────── */
const ParentCornerPage = () => {
  const keyBehaviors = [
    {
      icon: Users,
      title: "Socializing",
      question: "Why socializing feels confusing or tiring",
      answer: "Social situations require processing lots of information at once — facial expressions, tone of voice, body language, and spoken words. For autistic brains, this is like constantly translating a foreign language. It takes a lot of energy! Social rules aren't always logical or clear, which can be confusing and exhausting."
    },
    {
      icon: Shield,
      title: "Overwhelm",
      question: "Why loud or busy places are overwhelming",
      answer: "Autistic brains process sensory information differently. Sounds might seem louder, lights brighter, smells stronger. It's like all the volume knobs in the world are turned way up! When there's too much sensory input at once, it can feel overwhelming or even physically painful."
    },
    {
      icon: Sparkles,
      title: "Special Interests",
      question: "Why intense interests happen",
      answer: "Deep focus and passion for specific topics is a wonderful autistic strength! These special interests bring joy, comfort, and help regulate emotions. They're a safe space where everything makes sense. This intense focus can lead to amazing expertise and accomplishments."
    },
    {
      icon: ClipboardList,
      title: "Routines",
      question: "Why routines and predictability are preferred",
      answer: "Routines help the brain feel safe and use less energy. When you know what to expect, you don't have to spend mental energy figuring out what comes next. Predictability reduces anxiety and helps create a manageable, comfortable world where you feel in control."
    },
    {
      icon: Brain,
      title: "Stimming",
      question: "Why repeated movements or sounds happen",
      answer: "Stimming (like hand flapping, rocking, or making sounds) helps self-regulate emotions, manage sensory overload, reduce anxiety, and express feelings. It's a healthy way the body calms itself and processes the world. Stimming is natural and helpful!"
    },
    {
      icon: BookOpen,
      title: "Masking",
      question: "Why hiding true feelings happens",
      answer: "Many autistic people learn to hide or 'mask' their autistic traits to fit in with others. This might mean forcing eye contact, suppressing stims, or copying others' behavior. While masking helps in the moment, it's exhausting and can lead to burnout, anxiety, and depression."
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground">Parent Corner</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Understanding autism & supporting your special girl
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* What is Autism */}
          <div className="space-y-8">
            <h2 className="text-3xl font-medium text-foreground text-center flex items-center justify-center space-x-3">
              <Brain className="w-8 h-8 text-primary" />
              <span>What Is Autism?</span>
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
                <p>Autistic people may:</p>
                <ul className="space-y-3">
                  {[
                    { icon: Brain, text: "Think and process information differently" },
                    { icon: Shield, text: "Have unique sensory experiences (sounds, lights, textures)" },
                    { icon: BookOpen, text: "Communicate in their own special way" },
                    { icon: Sparkles, text: "Have specific interests they're passionate about" },
                    { icon: ClipboardList, text: "Prefer routines and predictability" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Myths vs Facts — Flip Cards */}
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-medium text-foreground">Myths vs Facts</h3>
                <p className="text-muted-foreground">Tap each card to reveal the truth.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {myths.map((item, i) => (
                  <FlipCard key={i} myth={item.myth} fact={item.fact} />
                ))}
              </div>
            </div>

            {/* Understanding Behaviors */}
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-medium text-foreground flex items-center justify-center space-x-3">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  <span>Understanding Behaviors</span>
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
                        <behavior.icon className="w-6 h-6 text-primary flex-shrink-0" />
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

          {/* Support Section — Slider */}
          <div className="space-y-8">
            <h2 className="text-3xl font-medium text-foreground text-center">
              How to Support Your Special Girl
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
            <div className="px-8">
              <SupportSlider areas={supportAreas} />
            </div>
          </div>

          {/* Daily Routines — Circular Timeline */}
          <div className="space-y-8">
            <h2 className="text-3xl font-medium text-foreground text-center">
              Daily Routines & Practical Tips
            </h2>
            <CircularTimeline />
          </div>

          {/* Important Resources */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-primary" />
                <span>Important Resources</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
              {[
                { icon: GraduationCap, label: "Educational Support:", text: "IEP (Individualized Education Program) and 504 plans, special education services, occupational therapy" },
                { icon: Shield, label: "Medical & Therapeutic:", text: "Autism specialists, therapists who understand autistic girls, sensory integration therapy" },
                { icon: Users, label: "Community & Support:", text: "Parent support groups, autistic-led organizations, online communities, mentorship programs" },
              ].map(({ icon: Icon, label, text }) => (
                <div key={label} className="space-y-1">
                  <p className="text-foreground font-medium flex items-center space-x-2">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{label}</span>
                  </p>
                  <p className="pl-7">{text}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Self-Care */}
          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-medium text-foreground">Self-Care for Parents</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Remember: You can't pour from an empty cup. Taking care of yourself isn't selfish — it's essential. Find your own support network, take breaks when you need them, and celebrate the small victories along the way.
              </p>
            </CardContent>
          </Card>

          {/* Crisis Hotline Footer Information Banner */}
          <div className="pt-4 border-t border-border">
            <Card className="border-2 border-destructive/20 bg-destructive/5 overflow-hidden">
              <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center space-x-2.5 text-destructive font-medium">
                    <PhoneCall className="w-5 h-5 flex-shrink-0" />
                    <span className="text-lg">Need Immediate Support?</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    If you or someone you know is going through a difficult time or experiencing a mental health crisis, free, confidential support is available 24/7. You are never alone.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                  <div className="bg-background border border-border rounded-xl px-5 py-3 text-center flex-1 md:flex-none">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Call or Text</p>
                    <p className="text-xl font-bold text-foreground tracking-wide mt-0.5">988</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Suicide & Crisis Lifeline</p>
                  </div>
                  <div className="bg-background border border-border rounded-xl px-5 py-3 text-center flex-1 md:flex-none">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Crisis Text Line</p>
                    <p className="text-xl font-bold text-foreground tracking-wide mt-0.5">HOME</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Text to 741741</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ParentCornerPage;