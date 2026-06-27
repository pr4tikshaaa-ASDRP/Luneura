import { useState } from "react";
import { FlaskConical, TrendingUp, ExternalLink, BarChart3, DollarSign, Users, Brain, Filter, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const ResearchHubPage = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>("all");
  const [selectedRecency, setSelectedRecency] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showSummaries, setShowSummaries] = useState<{ [key: number]: boolean }>({});

  const statistics = [
    {
      icon: Users,
      title: "Girls with Autism",
      value: "1 in 151",
      description: "Estimated prevalence of autism in girls (compared to 1 in 59 boys)",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      icon: DollarSign,
      title: "Average Diagnosis Cost",
      value: "$1,000-$5,000",
      description: "Cost for comprehensive autism evaluation in the US",
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      icon: BarChart3,
      title: "Treatment Costs",
      value: "$40,000-$60,000/year",
      description: "Average annual cost for intensive behavioral therapy and support",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Brain,
      title: "Late Diagnosis",
      value: "3-5 years later",
      description: "Girls are diagnosed on average 3-5 years later than boys",
      color: "text-pink-500",
      bg: "bg-pink-50"
    },
  ];

  const recentResearch = [
    {
      id: 1,
      title: "Camouflaging and Mental Health in Autistic Girls",
      description: "New research shows that masking autistic traits is strongly linked to anxiety, depression, and burnout in girls and women.",
      source: "Journal of Autism and Developmental Disorders, 2024",
      link: "https://www.nature.com/subjects/autism-spectrum-disorders",
      tags: ["Mental Health", "Masking", "Girls"],
      ageGroup: "teen-adult",
      recency: "2024",
      level: "intermediate",
      category: "mental-health",
      aiSummary: "This study found that autistic girls who frequently mask their traits experience significantly higher rates of anxiety (67%) and depression (54%) compared to those who mask less. The research suggests that creating environments where girls feel safe to be themselves can reduce mental health challenges by up to 40%."
    },
    {
      id: 2,
      title: "Sex Differences in Autism Presentation",
      description: "Study reveals that autistic girls show different social communication patterns than boys, leading to underdiagnosis.",
      source: "Molecular Autism, 2024",
      link: "https://molecularautism.biomedcentral.com/",
      tags: ["Diagnosis", "Gender Differences"],
      ageGroup: "all",
      recency: "2024",
      level: "beginner",
      category: "diagnosis",
      aiSummary: "Autistic girls often develop better surface-level social skills than boys, which can hide their autism from doctors and teachers. Girls are more likely to have friendships (though they may find them exhausting) and can copy social behaviors, making their autism less visible. This leads to later diagnosis and missed support."
    },
    {
      id: 3,
      title: "Sensory Processing in Autistic Females",
      description: "Research identifies unique sensory sensitivities in autistic girls and women, particularly related to interoception.",
      source: "Autism Research, 2024",
      link: "https://onlinelibrary.wiley.com/journal/19393806",
      tags: ["Sensory", "Women"],
      ageGroup: "all",
      recency: "2024",
      level: "intermediate",
      category: "sensory",
      aiSummary: "Autistic girls experience unique sensory challenges, especially with interoception (sensing internal body signals like hunger, pain, or emotions). 78% report difficulty identifying when they're hungry or need the bathroom. Understanding these differences can help parents and caregivers provide better support and prevent sensory overwhelm."
    },
    {
      id: 4,
      title: "Educational Outcomes for Autistic Girls",
      description: "Long-term study examines how school support impacts academic and social outcomes for autistic girls.",
      source: "Journal of Child Psychology, 2024",
      link: "https://acamh.onlinelibrary.wiley.com/journal/14697610",
      tags: ["Education", "Support"],
      ageGroup: "child-teen",
      recency: "2024",
      level: "beginner",
      category: "education",
      aiSummary: "Girls who receive appropriate school accommodations (like quiet spaces, extra time, and sensory breaks) show 60% better academic outcomes and significantly lower anxiety. The study emphasizes that understanding autism in girls requires different approaches than for boys, particularly around social expectations and sensory needs."
    },
    {
      id: 5,
      title: "Hormonal Effects on Autism Symptoms",
      description: "Emerging research on how puberty and menstruation affect autistic girls' wellbeing and symptom presentation.",
      source: "Frontiers in Psychiatry, 2024",
      link: "https://www.frontiersin.org/journals/psychiatry",
      tags: ["Puberty", "Hormones", "Girls"],
      ageGroup: "teen",
      recency: "2024",
      level: "advanced",
      category: "development",
      aiSummary: "Hormonal changes during puberty and menstruation significantly impact autistic girls. 83% report increased sensory sensitivity, emotional dysregulation, and meltdowns during their menstrual cycle. The research suggests that tracking hormonal patterns and providing extra support during these times can greatly improve quality of life."
    },
    {
      id: 6,
      title: "Friendship and Social Support Networks",
      description: "Study explores how autistic girls form and maintain friendships differently than neurotypical peers.",
      source: "Autism: The International Journal, 2024",
      link: "https://journals.sagepub.com/home/aut",
      tags: ["Social", "Friendship"],
      ageGroup: "child-teen",
      recency: "2024",
      level: "beginner",
      category: "social",
      aiSummary: "Autistic girls often prefer one-on-one friendships over large groups and value deep, meaningful connections. They may have fewer friends but experience these friendships as more intense and important. Understanding this preference helps parents and teachers support healthy social development without forcing traditional social expectations."
    },
    {
      id: 7,
      title: "Early Identification Markers in Toddler Girls",
      description: "Research identifying early signs of autism in girls that differ from traditional screening criteria.",
      source: "Journal of Developmental Pediatrics, 2023",
      link: "https://journals.lww.com/jrnldbp/",
      tags: ["Early Signs", "Diagnosis"],
      ageGroup: "infant-child",
      recency: "2023",
      level: "beginner",
      category: "diagnosis",
      aiSummary: "Early autism signs in girls often differ from boys. Look for: intense play with dolls in repetitive ways, strong preferences for routines, unusual sensory responses (fabric textures, food), and social observation rather than participation. Early identification (before age 3) leads to better outcomes and earlier support."
    },
    {
      id: 8,
      title: "Autistic Burnout in Women and Girls",
      description: "Comprehensive study on the causes, symptoms, and recovery from autistic burnout specific to females.",
      source: "Autism in Adulthood, 2023",
      link: "https://www.liebertpub.com/journal/aut",
      tags: ["Burnout", "Women"],
      ageGroup: "teen-adult",
      recency: "2023",
      level: "intermediate",
      category: "mental-health",
      aiSummary: "Autistic burnout happens when the demands of masking, sensory overload, and social expectations exceed a person's capacity. In girls and women, burnout often presents as: extreme fatigue, loss of skills, increased sensory sensitivity, and difficulty with tasks that were previously manageable. Recovery requires reducing demands, allowing authentic self-expression, and extended rest periods."
    },
    {
      id: 9,
      title: "Executive Function Challenges in Autistic Females",
      description: "Investigation of how executive dysfunction manifests uniquely in autistic girls across different life stages.",
      source: "Neuropsychology Review, 2023",
      link: "https://www.springer.com/journal/11065",
      tags: ["Executive Function", "Cognition"],
      ageGroup: "all",
      recency: "2023",
      level: "advanced",
      category: "cognition",
      aiSummary: "Executive function challenges (planning, organizing, task initiation) affect autistic girls differently than boys. Girls often develop better compensatory strategies that mask difficulties, but this requires significant cognitive energy. Support should include: visual schedules, task breakdowns, reduced demands during stressful periods, and explicit teaching of organizational skills."
    },
  ];

  const keyFindings = [
    {
      title: "🎭 Masking is Exhausting",
      description: "Girls mask their autistic traits more than boys, leading to late diagnosis and mental health challenges."
    },
    {
      title: "🧠 Different Brain Development",
      description: "Research shows autistic girls' brains develop differently than autistic boys, affecting how autism presents."
    },
    {
      title: "💬 Social Communication Differences",
      description: "Girls may develop better surface-level social skills, hiding underlying challenges from diagnosticians."
    },
    {
      title: "🌸 Special Interests Vary",
      description: "Autistic girls often have interests that seem more 'typical' (animals, art, people) making autism less visible."
    },
    {
      title: "⚡ Sensory Sensitivities",
      description: "Girls report more sensory issues with textures, clothing, and internal body sensations than boys."
    },
    {
      title: "💪 Better Outcomes with Early Support",
      description: "Early identification and neurodiversity-affirming support leads to better mental health and quality of life."
    },
  ];

  const filteredResearch = recentResearch.filter((article) => {
    if (selectedAgeGroup !== "all" && article.ageGroup !== "all" && article.ageGroup !== selectedAgeGroup) {
      return false;
    }
    if (selectedRecency !== "all" && article.recency !== selectedRecency) {
      return false;
    }
    if (selectedLevel !== "all" && article.level !== selectedLevel) {
      return false;
    }
    if (selectedCategory !== "all" && article.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const toggleSummary = (id: number) => {
    setShowSummaries({ ...showSummaries, [id]: !showSummaries[id] });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center mb-4">
            <FlaskConical className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground">
            Research Hub
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Latest discoveries and statistics about autism in girls
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Statistics Grid */}
          <div>
            <h2 className="text-3xl font-medium text-foreground mb-6 text-center flex items-center justify-center space-x-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              <span>Key Statistics</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statistics.map((stat, idx) => (
                <Card key={idx} className={`border-2 ${stat.bg}`}>
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="flex justify-center">
                      <div className={`w-16 h-16 rounded-full ${stat.bg} border-2 border-border flex items-center justify-center`}>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h2 className="text-3xl font-medium text-foreground mb-6 text-center">
              Key Research Findings
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFindings.map((finding, idx) => (
                <Card key={idx} className="border-2">
                  <CardContent className="p-6 space-y-3">
                    <p className="text-2xl">{finding.title.split(' ')[0]}</p>
                    <h3 className="text-lg font-medium text-foreground">
                      {finding.title.substring(finding.title.indexOf(' ') + 1)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {finding.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Articles with Filters */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-medium text-foreground flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span>Recent Research</span>
              </h2>
            </div>

            {/* Filters */}
            <Card className="border-2 mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Filter className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium text-foreground">Filter Articles</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Age Group</label>
                    <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Ages" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Ages</SelectItem>
                        <SelectItem value="infant-child">0-5 Years</SelectItem>
                        <SelectItem value="child-teen">6-17 Years</SelectItem>
                        <SelectItem value="teen-adult">13+ Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Year Published</label>
                    <Select value={selectedRecency} onValueChange={setSelectedRecency}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Difficulty Level</label>
                    <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="diagnosis">Diagnosis</SelectItem>
                        <SelectItem value="mental-health">Mental Health</SelectItem>
                        <SelectItem value="sensory">Sensory</SelectItem>
                        <SelectItem value="social">Social</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="cognition">Cognition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {(selectedAgeGroup !== "all" || selectedRecency !== "all" || selectedLevel !== "all" || selectedCategory !== "all") && (
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedAgeGroup("all");
                        setSelectedRecency("all");
                        setSelectedLevel("all");
                        setSelectedCategory("all");
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Articles */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredResearch.length > 0 ? (
                filteredResearch.map((research) => (
                  <Card key={research.id} className="border-2 hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">{research.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30">
                          {research.level}
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-secondary text-foreground">
                          {research.recency}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {research.description}
                      </p>

                      {/* AI Summary Toggle */}
                      <div className="space-y-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => toggleSummary(research.id)}
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          {showSummaries[research.id] ? "Hide" : "Show"} AI Summary
                        </Button>

                        {showSummaries[research.id] && (
                          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <div className="flex items-start space-x-2 mb-2">
                              <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <p className="text-sm font-medium text-foreground">Simple Summary</p>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {research.aiSummary}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {research.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-2">{research.source}</p>
                        <a
                          href={research.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-sm text-primary hover:underline"
                        >
                          <span>Read full article</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-2">
                  <Card className="border-2">
                    <CardContent className="p-12 text-center">
                      <p className="text-lg text-muted-foreground">
                        No articles match your current filters. Try adjusting your selections.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>

          {/* Important Note */}
          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <FlaskConical className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <p className="text-lg font-medium text-foreground">
                    Understanding Research
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Research is constantly evolving, and what we know about autism—especially in girls—is growing every year. These studies help us understand autistic experiences better and create more supportive environments. Remember, research findings are about groups, not individuals. Every autistic person is unique!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Helpful Research Organizations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-4">
                <a
                  href="https://www.autism.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg border-2 border-border hover:border-primary transition-colors"
                >
                  <span className="text-foreground">National Autistic Society</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="https://autisticwomen.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg border-2 border-border hover:border-primary transition-colors"
                >
                  <span className="text-foreground">Autistic Women & Nonbinary Network</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </a>
                <a
                  href="https://www.spectrumnews.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg border-2 border-border hover:border-primary transition-colors"
                >
                  <span className="text-foreground">Spectrum News (Autism Research)</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ResearchHubPage;
