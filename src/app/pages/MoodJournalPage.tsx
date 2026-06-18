import { useState } from "react";
import { Heart, Download, Sparkles, BookOpen, Wind, Sun, Cloud, CloudRain, Zap, Frown, Smile, Meh, AlertCircle, Coffee, Music } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const feelings = [
  {
    name: "Joyful",
    color: "#F5E0A0",
    hoverColor: "#EDD070",
    textColor: "#7A6020",
    description: "Feeling joyful means you're experiencing happiness and delight. This is a wonderful feeling to sit with. Notice where you feel it in your body — maybe a lightness in your chest or a smile that comes naturally.",
    suggestions: ["Share your joy with someone you trust", "Write about what made you feel this way", "Do something creative to celebrate"],
    icon: Sun,
  },
  {
    name: "Content",
    color: "#F9D4A8",
    hoverColor: "#F2BC7A",
    textColor: "#7A4E20",
    description: "Contentment is a quiet, steady kind of happiness. You feel settled and at ease. It's one of the most calming feelings — like everything is just right.",
    suggestions: ["Rest and enjoy this feeling", "Notice the small things that brought you here", "This is a safe moment to just breathe"],
    icon: Coffee,
  },
  {
    name: "Excited",
    color: "#F9C5A0",
    hoverColor: "#F2A070",
    textColor: "#7A3A20",
    description: "Excitement means something feels big and full of possibility! Your body might feel energetic or buzzy. It's a positive feeling, though sometimes it can feel overwhelming too.",
    suggestions: ["Channel your energy into something you love", "Talk or write about what you're excited for", "If it feels too big, take slow breaths to settle"],
    icon: Zap,
  },
  {
    name: "Playful",
    color: "#D4E8A8",
    hoverColor: "#B8D870",
    textColor: "#3A6020",
    description: "Feeling playful means you want to be light, creative, and free. Your mind is open and curious. This is a great time for imaginative activities.",
    suggestions: ["Draw, doodle, or create something", "Play a game or do something silly", "Enjoy this lightness — it's good for you"],
    icon: Music,
  },
  {
    name: "Relaxed",
    color: "#A8E0C8",
    hoverColor: "#70C8A0",
    textColor: "#20604A",
    description: "Relaxed means your body and mind feel soft and calm. Tension has melted away. This is a restorative state that helps your nervous system recover.",
    suggestions: ["Stay in this feeling as long as you can", "Do something gentle like reading or listening to music", "Notice how your body feels right now"],
    icon: Wind,
  },
  {
    name: "Peaceful",
    color: "#A0D8D5",
    hoverColor: "#68C0BC",
    textColor: "#205858",
    description: "Peaceful is a deep, still calm. There is no urgency or noise inside you right now. This feeling is precious — it's your nervous system at rest.",
    suggestions: ["Spend time in a quiet place", "Practice slow breathing to stay here", "Appreciate this moment of stillness"],
    icon: Wind,
  },
  {
    name: "Sad",
    color: "#A8C0E0",
    hoverColor: "#7098C8",
    textColor: "#203A70",
    description: "Sadness is a natural and valid feeling. It often comes when something feels lost or hard. It's okay to cry or feel quiet. Sadness helps us process things that matter to us.",
    suggestions: ["It's okay to feel sad — don't push it away", "Reach out to someone you trust if you feel alone", "Be extra gentle with yourself today"],
    icon: CloudRain,
  },
  {
    name: "Lonely",
    color: "#B8B0E0",
    hoverColor: "#8878C8",
    textColor: "#38287A",
    description: "Loneliness is the feeling of wanting connection but not having it right now. It's one of the most human feelings. You are not alone in feeling lonely.",
    suggestions: ["Send a message to someone you care about", "Spend time with a pet or comfort object", "Remember that feeling lonely is temporary"],
    icon: Cloud,
  },
  {
    name: "Worried",
    color: "#C8B0E0",
    hoverColor: "#A878C8",
    textColor: "#58287A",
    description: "Worry means your brain is trying to protect you by thinking ahead. It can feel uncomfortable, but it's trying to help. Naming the worry often makes it smaller.",
    suggestions: ["Write down exactly what you're worried about", "Ask yourself: is this happening right now?", "Talk to a trusted adult about what's on your mind"],
    icon: AlertCircle,
  },
  {
    name: "Nervous",
    color: "#DDB8D8",
    hoverColor: "#C888C0",
    textColor: "#6A2860",
    description: "Nervousness often appears before something new or uncertain. Your body is getting ready. It feels like worry mixed with anticipation.",
    suggestions: ["Take five slow, deep breaths", "Remind yourself of times you've managed hard things before", "It's okay to feel nervous — you can do it anyway"],
    icon: AlertCircle,
  },
  {
    name: "Frustrated",
    color: "#E0B8C0",
    hoverColor: "#C87888",
    textColor: "#7A2838",
    description: "Frustration happens when things don't go the way you hoped or expected. It can feel like a hot, tight feeling. It's okay — it means you care.",
    suggestions: ["Take a break from the thing that's frustrating you", "Move your body to release the tension", "Try to name what specifically is frustrating you"],
    icon: Frown,
  },
  {
    name: "Overwhelmed",
    color: "#ECC0C0",
    hoverColor: "#D89090",
    textColor: "#7A2828",
    description: "Feeling overwhelmed means there's too much — too much noise, too many tasks, too many feelings. Your system is asking for a break. This is a signal to slow down.",
    suggestions: ["Find a quiet, calm place to be", "Do one small thing, then rest", "Ask for help — you don't have to do this alone"],
    icon: Cloud,
  },
];

const cx = 175;
const cy = 175;
const outerR = 155;
const innerR = 58;
const total = feelings.length;

function polarToCartesian(centerX: number, centerY: number, radius: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(rad),
    y: centerY + radius * Math.sin(rad),
  };
}

function segmentPath(cx: number, cy: number, innerR: number, outerR: number, startAngle: number, endAngle: number) {
  const gap = 1.2;
  const s = startAngle + gap;
  const e = endAngle - gap;
  const outerStart = polarToCartesian(cx, cy, outerR, s);
  const outerEnd = polarToCartesian(cx, cy, outerR, e);
  const innerStart = polarToCartesian(cx, cy, innerR, s);
  const innerEnd = polarToCartesian(cx, cy, innerR, e);
  const largeArc = e - s > 180 ? 1 : 0;
  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

const FeelingWheel = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const sliceAngle = 360 / total;
  const selectedFeeling = selected !== null ? feelings[selected] : null;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-medium text-foreground">How Are You Feeling?</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Understanding and naming our emotions is an important step in self-awareness.<br />
          Select the feeling that best describes how you're feeling right now.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Wheel */}
        <div className="flex-shrink-0">
          <svg
            width={350}
            height={350}
            viewBox={`0 0 350 350`}
            style={{ overflow: "visible" }}
            aria-label="Feeling Wheel"
          >
            {feelings.map((feeling, i) => {
              const startAngle = i * sliceAngle;
              const endAngle = (i + 1) * sliceAngle;
              const midAngle = startAngle + sliceAngle / 2;
              const labelR = (innerR + outerR) / 2;
              const labelPos = polarToCartesian(cx, cy, labelR, midAngle);
              const isHovered = hovered === i;
              const isSelected = selected === i;
              const scale = isHovered || isSelected ? 1.04 : 1;
              const pathD = segmentPath(cx, cy, innerR, outerR, startAngle, endAngle);

              return (
                <g
                  key={i}
                  style={{ cursor: "pointer", transformOrigin: `${cx}px ${cy}px`, transform: `scale(${scale})`, transition: "transform 0.18s ease" }}
                  onClick={() => setSelected(selected === i ? null : i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  role="button"
                  aria-label={feeling.name}
                >
                  <path
                    d={pathD}
                    fill={isSelected ? feeling.hoverColor : isHovered ? feeling.hoverColor : feeling.color}
                    stroke="white"
                    strokeWidth={2}
                    style={{ transition: "fill 0.18s ease" }}
                  />
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={10.5}
                    fontFamily="inherit"
                    fill={feeling.textColor}
                    fontWeight={isSelected ? "600" : "500"}
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {feeling.name}
                  </text>
                </g>
              );
            })}

            {/* Center circle */}
            <circle cx={cx} cy={cy} r={innerR - 4} fill="white" stroke="hsl(var(--border))" strokeWidth={1.5} />
            <text x={cx} y={cy - 9} textAnchor="middle" fontSize={11} fontFamily="inherit" fill="hsl(var(--muted-foreground))" fontWeight="500">My</text>
            <text x={cx} y={cy + 7} textAnchor="middle" fontSize={11} fontFamily="inherit" fill="hsl(var(--muted-foreground))" fontWeight="500">Feelings</text>
          </svg>
        </div>

        {/* Info panel */}
        <div className="w-full max-w-sm min-h-[280px] flex items-center justify-center">
          {selectedFeeling ? (
            <Card className="border-2 w-full" style={{ borderColor: selectedFeeling.hoverColor }}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: selectedFeeling.color }}
                  >
                    <selectedFeeling.icon className="w-5 h-5" style={{ color: selectedFeeling.textColor }} />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{selectedFeeling.name}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{selectedFeeling.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">What might help:</p>
                  <ul className="space-y-1.5">
                    {selectedFeeling.suggestions.map((s, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center space-y-3 p-8">
              <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center mx-auto">
                <Heart className="w-7 h-7 text-muted-foreground/40" />
              </div>
              <p className="text-muted-foreground">Click on any section of the wheel</p>
              <p className="text-sm text-muted-foreground/70">Hover over emotions to see them highlight, then click to learn more</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MoodJournalPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1599081595921-238c45c87bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBqb3VybmFsJTIwbm90ZWJvb2slMjBtZW50YWwlMjBoZWFsdGglMjBjYWxtaW5nfGVufDF8fHx8MTc3MTkwNDY4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Calming mood journal notebook"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Heart className="w-10 h-10 text-primary" />
                      <h1 className="text-3xl sm:text-4xl font-medium text-foreground">Mood Journal</h1>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Track your feelings, identify patterns, and understand yourself better with our beautifully designed mood journal. A calm, supportive space for daily reflection.
                    </p>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Daily mood tracking with gentle prompts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Identify emotional patterns and triggers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Designed with neurodiversity in mind</span>
                    </li>
                  </ul>
                  <Button size="lg" className="rounded-full w-full sm:w-auto inline-flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Mood Journal</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feeling Wheel */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeelingWheel />
        </div>
      </section>

      {/* Journal tips */}
      <section className="py-12 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl font-medium text-foreground">Tips for Journaling</h2>
            <p className="text-muted-foreground">A few gentle reminders as you begin your journaling practice</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: BookOpen, title: "No rules", body: "There's no right or wrong way to journal. Write one word, a sentence, or pages — whatever feels right." },
              { icon: Heart, title: "Be kind to yourself", body: "Your feelings are valid, all of them. Journaling is a judgment-free space just for you." },
              { icon: Wind, title: "Go at your own pace", body: "You don't have to journal every day. Even once a week can make a difference." },
            ].map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-2">
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoodJournalPage;
