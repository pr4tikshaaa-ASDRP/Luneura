import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Baby, School, Users2, GraduationCap, Briefcase, CheckCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Label } from "@/app/components/ui/label";
import { Progress } from "@/app/components/ui/progress";

type Answer = "often" | "sometimes" | "rarely" | "never";

interface Question {
  id: number;
  text: string;
  category: string;
}

interface AgeQuizzes {
  [key: string]: Question[];
}

const AgesStagesPage = () => {
  const [activeTab, setActiveTab] = useState("elementary");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showResults, setShowResults] = useState(false);

  // Age-specific quizzes with different vocabulary
  const ageQuizzes: AgeQuizzes = {
    infancy: [
      { id: 1, text: "Does loud noise bother them?", category: "👂 Sensory" },
      { id: 2, text: "Do they play the same way often?", category: "📅 Routines" },
      { id: 3, text: "Do certain clothes bother them?", category: "👕 Textures" },
      { id: 4, text: "Do they like things in a certain order?", category: "📋 Order" },
      { id: 5, text: "Do they focus deeply on favorite toys?", category: "⭐ Interests" },
    ],
    elementary: [
      { id: 1, text: "Do you feel upset when your daily schedule changes?", category: "📅 Routines" },
      { id: 2, text: "Do loud sounds or bright lights bother you?", category: "👂 Sensory" },
      { id: 3, text: "Do you have favorite topics you love learning about?", category: "⭐ Interests" },
      { id: 4, text: "Do you feel tired after playing with friends?", category: "😴 Social Energy" },
      { id: 5, text: "Do you notice small details others miss?", category: "👁️ Details" },
      { id: 6, text: "Do you prefer playing alone sometimes?", category: "🎮 Alone Time" },
      { id: 7, text: "Do certain food textures feel yucky?", category: "🍽️ Textures" },
    ],
    teen: [
      { id: 1, text: "Do you find social situations exhausting?", category: "😓 Social Energy" },
      { id: 2, text: "Do you struggle to understand hints or sarcasm?", category: "💬 Communication" },
      { id: 3, text: "Do you have intense interests you're passionate about?", category: "⭐ Special Interests" },
      { id: 4, text: "Do sensory experiences overwhelm you easily?", category: "👂 Sensory" },
      { id: 5, text: "Do you prefer routines and find changes stressful?", category: "📅 Routines" },
      { id: 6, text: "Do you notice patterns others don't see?", category: "🧩 Pattern Recognition" },
      { id: 7, text: "Do you feel like you're 'acting' in social situations?", category: "🎭 Masking" },
      { id: 8, text: "Do you need alone time to recharge?", category: "🔋 Recovery Time" },
    ],
    youngadult: [
      { id: 1, text: "Do you experience social exhaustion after interactions?", category: "😓 Social Energy" },
      { id: 2, text: "Do you have difficulty with unspoken social rules?", category: "👥 Social Norms" },
      { id: 3, text: "Do you engage in intense, focused interests?", category: "⭐ Deep Interests" },
      { id: 4, text: "Do sensory sensitivities impact your daily life?", category: "👂 Sensory Processing" },
      { id: 5, text: "Do you rely heavily on routines for stability?", category: "📅 Routines" },
      { id: 6, text: "Do you mask autistic traits in professional settings?", category: "🎭 Masking" },
      { id: 7, text: "Do you struggle with executive functioning?", category: "🧠 Executive Function" },
      { id: 8, text: "Do you experience autistic burnout?", category: "🔥 Burnout" },
    ],
    adult: [
      { id: 1, text: "Do you experience significant social fatigue?", category: "😓 Social Exhaustion" },
      { id: 2, text: "Do implicit social expectations confuse you?", category: "👥 Social Cognition" },
      { id: 3, text: "Do you maintain deep specialized interests?", category: "⭐ Expertise" },
      { id: 4, text: "Do sensory sensitivities affect your functioning?", category: "👂 Sensory Integration" },
      { id: 5, text: "Do structured routines support your wellbeing?", category: "📅 Structure" },
      { id: 6, text: "Do you camouflage autistic characteristics?", category: "🎭 Camouflaging" },
      { id: 7, text: "Do you experience executive dysfunction?", category: "🧠 Executive Challenges" },
      { id: 8, text: "Have you experienced autistic burnout?", category: "🔥 Burnout Experience" },
    ],
  };

  const stages = [
    {
      id: "infancy",
      label: "👶 0-5 Years",
      icon: Baby,
      emoji: "👶",
      title: "Early Childhood",
      description: "The early years and learning about the world",
      sections: [
        {
          emoji: "🎯",
          title: "What to Expect",
          content: [
            "Different patterns of play and interests",
            "Unique ways of learning and exploring",
            "Sensory preferences becoming noticeable",
            "Communication may develop differently",
            "Building routines and preferences",
          ],
        },
        {
          emoji: "💝",
          title: "How to Support",
          content: [
            "Respect sensory needs and preferences",
            "Allow for special interests to flourish",
            "Use clear, simple language",
            "Maintain consistent routines",
            "Celebrate all forms of communication",
          ],
        },
        {
          emoji: "📚",
          title: "Resources",
          content: [
            "Early intervention services",
            "Sensory-friendly activities",
            "Visual schedules and supports",
            "Parent support groups",
            "Occupational therapy options",
          ],
        },
      ],
    },
    {
      id: "elementary",
      label: "🎒 6-12 Years",
      icon: School,
      emoji: "🎒",
      title: "Elementary Years",
      description: "School, friends, and discovering yourself",
      sections: [
        {
          emoji: "🎯",
          title: "What to Expect",
          content: [
            "Navigating school environments",
            "Developing deeper special interests",
            "Challenges with unstructured time",
            "Growing awareness of being different",
            "Learning to manage sensory needs",
          ],
        },
        {
          emoji: "💝",
          title: "How to Support",
          content: [
            "Advocate for accommodations at school",
            "Provide quiet spaces for breaks",
            "Teach social skills explicitly",
            "Support special interests as strengths",
            "Create calm homework routines",
          ],
        },
        {
          emoji: "📚",
          title: "Resources",
          content: [
            "IEP or 504 plan support",
            "Social skills groups",
            "Sensory tools for school",
            "After-school clubs for interests",
            "Books about autism for children",
          ],
        },
      ],
    },
    {
      id: "teen",
      label: "🎓 13-17 Years",
      icon: Users2,
      emoji: "🎓",
      title: "Teen Years",
      description: "Identity, independence, and self-discovery",
      sections: [
        {
          emoji: "🎯",
          title: "What to Expect",
          content: [
            "Increased social complexity",
            "Managing emotions and sensory needs",
            "Identity development and self-advocacy",
            "Academic pressure and challenges",
            "Navigating friendships and relationships",
          ],
        },
        {
          emoji: "💝",
          title: "How to Support",
          content: [
            "Foster self-advocacy skills",
            "Provide space for identity exploration",
            "Support healthy masking breaks",
            "Navigate school accommodations",
            "Respect need for autonomy",
          ],
        },
        {
          emoji: "📚",
          title: "Resources",
          content: [
            "Transition planning services",
            "Autistic peer support groups",
            "Mental health support",
            "Career exploration programs",
            "Self-advocacy training",
          ],
        },
      ],
    },
    {
      id: "youngadult",
      label: "🎯 18-25 Years",
      icon: GraduationCap,
      emoji: "🎯",
      title: "Young Adult",
      description: "College, work, and building independence",
      sections: [
        {
          emoji: "🎯",
          title: "What to Expect",
          content: [
            "Navigating higher education or work",
            "Managing independent living",
            "Building support networks",
            "Understanding identity fully",
            "Balancing responsibilities and self-care",
          ],
        },
        {
          emoji: "💝",
          title: "How to Support",
          content: [
            "Access disability services at college/work",
            "Build self-advocacy skills",
            "Create sustainable routines",
            "Connect with autistic community",
            "Practice burnout prevention",
          ],
        },
        {
          emoji: "📚",
          title: "Resources",
          content: [
            "College disability services",
            "Vocational rehabilitation",
            "Independent living skills programs",
            "Autistic-led organizations",
            "Mental health professionals",
          ],
        },
      ],
    },
    {
      id: "adult",
      label: "💼 26+ Years",
      icon: Briefcase,
      emoji: "💼",
      title: "Adulthood",
      description: "Career, relationships, and thriving",
      sections: [
        {
          emoji: "🎯",
          title: "What to Expect",
          content: [
            "Managing career and relationships",
            "Understanding lifelong identity",
            "Navigating healthcare systems",
            "Building fulfilling life",
            "Managing burnout and wellbeing",
          ],
        },
        {
          emoji: "💝",
          title: "How to Support",
          content: [
            "Advocate for workplace accommodations",
            "Prioritize mental health and self-care",
            "Build supportive relationships",
            "Connect with autistic community",
            "Honor your needs and boundaries",
          ],
        },
        {
          emoji: "📚",
          title: "Resources",
          content: [
            "Workplace accommodations",
            "Autistic-affirming therapists",
            "Peer support networks",
            "Self-employment resources",
            "Life coaching services",
          ],
        },
      ],
    },
  ];

  const getCurrentStageQuiz = () => {
    return ageQuizzes[activeTab] || [];
  };

  const questions = getCurrentStageQuiz();

  const handleAnswer = (value: Answer) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    const weights = { often: 3, sometimes: 2, rarely: 1, never: 0 };
    return Object.values(answers).reduce((sum, answer) => sum + weights[answer], 0);
  };

  const getResultMessage = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 70) {
      return {
        title: "💜 Many Autistic Traits Noticed",
        message: "You've indicated experiencing many traits commonly associated with autism. This quiz suggests that exploring autism further might be helpful. Consider talking to a healthcare provider who understands autism, especially in girls.",
        color: "border-purple-300 bg-purple-50",
      };
    } else if (percentage >= 40) {
      return {
        title: "✨ Some Autistic Traits Noticed",
        message: "You've indicated experiencing some traits commonly associated with autism. Everyone is unique, and having some autistic traits is completely normal. If these traits impact daily life, consider learning more about autism.",
        color: "border-blue-300 bg-blue-50",
      };
    } else {
      return {
        title: "🌟 Few Autistic Traits Noticed",
        message: "Based on your responses, you've indicated fewer traits commonly associated with autism. Remember, this is just an informal quiz and doesn't replace professional assessment. Everyone experiences the world differently!",
        color: "border-green-300 bg-green-50",
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  const score = calculateScore();
  const maxScore = questions.length * 3;
  const result = getResultMessage(score, maxScore);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center space-x-2 text-4xl mb-4">
            <span>👶</span>
            <span>🎒</span>
            <span>🎓</span>
            <span>💼</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground">
            Ages & Quiz
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Age-specific guidance and quizzes from childhood through adulthood
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value); resetQuiz(); }} className="space-y-8">
            <TabsList className="grid grid-cols-5 w-full h-auto gap-2 bg-transparent">
              {stages.map((stage) => (
                <TabsTrigger
                  key={stage.id}
                  value={stage.id}
                  className="flex flex-col items-center py-4 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl border-2"
                >
                  <span className="text-2xl mb-2">{stage.emoji}</span>
                  <span className="text-xs sm:text-sm font-medium text-center">{stage.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {stages.map((stage) => (
              <TabsContent key={stage.id} value={stage.id} className="space-y-8">
                {/* Stage Info */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      <span className="text-4xl">{stage.emoji}</span>
                      <div>
                        <div>{stage.title}</div>
                        <p className="text-base text-muted-foreground font-normal mt-1">
                          {stage.description}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>

                {/* Sections Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {stage.sections.map((section, idx) => (
                    <Card key={idx} className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-lg">
                          <span className="text-2xl">{section.emoji}</span>
                          <span>{section.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {section.content.map((item, i) => (
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

                {/* Quiz Section */}
                <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-3xl">📋</span>
                      <span>Age-Appropriate Quiz</span>
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Answer questions designed for this age group
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {!showResults ? (
                      <>
                        {/* Progress */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Question {currentQuestion + 1} of {questions.length}</span>
                            <span>{Math.round(progress)}% Complete</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>

                        {/* Question */}
                        {questions[currentQuestion] && (
                          <div className="space-y-6">
                            <div className="space-y-3">
                              <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/20 text-primary">
                                {questions[currentQuestion].category}
                              </span>
                              <h3 className="text-2xl font-medium text-foreground leading-relaxed">
                                {questions[currentQuestion].text}
                              </h3>
                            </div>

                            {/* Answer Options */}
                            <RadioGroup
                              value={answers[currentQuestion]}
                              onValueChange={(value) => handleAnswer(value as Answer)}
                            >
                              <div className="space-y-3">
                                {[
                                  { value: "often", label: "Often" },
                                  { value: "sometimes", label: "Sometimes" },
                                  { value: "rarely", label: "Rarely" },
                                  { value: "never", label: "Never" },
                                ].map((option) => (
                                  <div
                                    key={option.value}
                                    className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                                      answers[currentQuestion] === option.value
                                        ? "border-primary bg-primary/10"
                                        : "border-border hover:border-primary/50"
                                    }`}
                                    onClick={() => handleAnswer(option.value as Answer)}
                                  >
                                    <RadioGroupItem value={option.value} id={option.value} />
                                    <Label
                                      htmlFor={option.value}
                                      className="text-lg cursor-pointer flex-1"
                                    >
                                      {option.label}
                                    </Label>
                                  </div>
                                ))}
                              </div>
                            </RadioGroup>

                            {/* Navigation */}
                            <div className="flex justify-between pt-4">
                              <Button
                                variant="outline"
                                onClick={handlePrevious}
                                disabled={currentQuestion === 0}
                              >
                                Previous
                              </Button>
                              <Button
                                onClick={handleNext}
                                disabled={!answers[currentQuestion]}
                              >
                                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                              </Button>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="space-y-6">
                        <Card className={`border-2 ${result.color}`}>
                          <CardContent className="p-8 space-y-4">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-12 h-12 text-primary flex-shrink-0" />
                              <h3 className="text-2xl font-medium text-foreground">
                                {result.title}
                              </h3>
                            </div>
                            <p className="text-lg text-foreground leading-relaxed">
                              {result.message}
                            </p>
                            <div className="pt-4 border-t border-border">
                              <p className="text-sm text-muted-foreground">
                                <strong>Important:</strong> This is an informal screening tool, not a diagnosis. If you have concerns, please consult with a healthcare professional who understands autism in girls.
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <div className="flex gap-4">
                          <Button onClick={resetQuiz} variant="outline" className="flex-1">
                            Retake Quiz
                          </Button>
                          <Button
                            onClick={() => window.location.href = "/contact"}
                            className="flex-1"
                          >
                            Contact Us for Support
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default AgesStagesPage;
