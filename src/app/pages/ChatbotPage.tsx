import { useState, useRef, useEffect } from "react";
import { Send, Info, Sparkles, Moon, User, Users, GraduationCap, Heart, Circle, Cake, Palette, AlertCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { ChatbotAvatar } from "@/app/components/ChatbotAvatar";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

type UserType = "girl" | "sibling" | "teacher" | "parent" | null;
type AgeGroup = "child" | "teen" | "adult" | null;

const ChatbotPage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [userType, setUserType] = useState<UserType>(null);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [hairColor, setHairColor] = useState("#9b87c7");
  const [skinTone, setSkinTone] = useState("#f1c27d");
  const [hairStyle, setHairStyle] = useState("long");
  const [showCustomize, setShowCustomize] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const hairColors = [
    { name: "Lavender", value: "#9b87c7" },
    { name: "Brown", value: "#6b4423" },
    { name: "Blonde", value: "#f4d03f" },
    { name: "Black", value: "#2c2c2c" },
    { name: "Auburn", value: "#a0522d" },
    { name: "Blue", value: "#7ba3c7" },
    { name: "Pink", value: "#ffb6c1" },
  ];

  const skinTones = [
    { name: "Light", value: "#f1c27d" },
    { name: "Medium", value: "#d4a89a" },
    { name: "Tan", value: "#c68642" },
    { name: "Deep", value: "#8d5524" },
    { name: "Dark", value: "#5c4033" },
  ];

  const starterPrompts = {
    girl: [
      "I want to learn about... sensory sensitivities",
      "I want to learn about... making friends",
      "I want to learn about... special interests",
      "I need help understanding... my feelings",
      "I'm looking for resources on... school support",
    ],
    sibling: [
      "I want to learn about... my sister",
      "I need help understanding... why she acts differently",
      "I'm looking for resources on... being a supportive adult sibling",
    ],
    teacher: [
      "I want to learn about... classroom accommodations",
      "I need help understanding... special students",
      "I'm looking for resources on... teaching strategies",
    ],
    parent: [
      "I want to learn about... supporting my daughter",
      "I need help understanding... her needs",
      "I'm looking for resources on... diagnosis and therapy",
    ],
  };

  const getPersonalizedGreeting = () => {
    const greetings = {
      girl: "Hi! I'm Luna. I'm here to help you learn and answer any questions you have. What would you like to know?",
      sibling: "Hi! I'm Luna. It's wonderful that you want to learn more about your sibling. I'm here to help! What would you like to know?",
      teacher: "Hi! I'm Luna. Thank you for wanting to support your special students better. I'm here to help! What would you like to know?",
      parent: "Hi! I'm Luna. I'm here to help you support your special girl. What would you like to know?",
    };
    return greetings[userType!] || greetings.girl;
  };

  const handleStartChat = () => {
    if (!userType) return;
    
    const greeting: Message = {
      id: "1",
      text: getPersonalizedGreeting(),
      sender: "bot",
      timestamp: new Date(),
    };
    
    setMessages([greeting]);
    setShowWelcome(false);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Age-appropriate responses
    const isChild = ageGroup === "child";
    const isTeen = ageGroup === "teen";

    if (lowerMessage.includes("autism") || lowerMessage.includes("what is")) {
      if (isChild) {
        return "Autism means your brain works in a special way! You might notice things others don't, have favorite topics you love, and sometimes loud places or bright lights feel too much. That's okay - it's just part of who you are!";
      } else if (isTeen) {
        return "Autism is a neurodevelopmental difference - your brain processes information uniquely. You might have heightened sensory experiences, deep interests, and your own communication style. These aren't flaws - they're part of what makes you who you are.";
      }
      return "Autism is a way of experiencing and interacting with the world. It means thinking and processing information differently, having unique sensory experiences, and communicating in your own way. It's a natural variation in how brains work, not something to fix.";
    } else if (lowerMessage.includes("friend") || lowerMessage.includes("social")) {
      if (isChild) {
        return "Making friends can feel tricky! Try finding kids who like the same things you do - that gives you stuff to talk about! Real friends will like you for being you. It's okay if you need breaks from playing sometimes.";
      }
      return "Making friends as an autistic person can feel challenging. Here's what helps: 1) Connect with people who share your interests 2) Be yourself - true friends accept you as you are 3) Quality matters more than quantity 4) It's okay to need alone time to recharge. Remember, many autistic people prefer deep, meaningful friendships over large social circles.";
    } else if (lowerMessage.includes("sensory") || lowerMessage.includes("sound") || lowerMessage.includes("loud") || lowerMessage.includes("overwhelm")) {
      if (isChild) {
        return "Do loud sounds hurt your ears? Do tags in clothes feel scratchy? That's called sensory sensitivity - your senses notice more than other people's. You can use headphones for loud places, wear comfy clothes, and take breaks in quiet spots when you need to.";
      }
      return "Sensory sensitivity means your nervous system processes sensory input differently - sounds might seem louder, lights brighter, textures more intense. This isn't bad or wrong. Helpful strategies: noise-canceling headphones, sunglasses, sensory breaks, soft comfortable clothing, and communicating your needs to others.";
    } else if (lowerMessage.includes("school")) {
      if (isChild) {
        return "School can be hard sometimes! You can ask your teacher for: a quiet spot to work, breaks when you need them, headphones for noisy times, and help with tricky parts. It's okay to ask for help!";
      }
      return "School can be challenging for autistic students. Important accommodations to request: extra time on tests, quiet spaces for breaks, sensory tools (fidgets, headphones), clear written instructions, and a trusted adult to check in with. Work with your school to create an IEP or 504 plan if needed.";
    } else if (lowerMessage.includes("special interest") || lowerMessage.includes("hobby")) {
      if (isChild) {
        return "Your special interests are AWESOME! The things you love learning about are what make you YOU. They can help you make friends, feel calm and happy, and maybe even turn into a job when you grow up! Keep loving what you love!";
      }
      return "Special interests are a beautiful part of being autistic! They're not obsessions or problems - they're sources of joy, expertise, and regulation. Embrace them, use them to connect with like-minded people, and know they can lead to careers and lifelong fulfillment.";
    } else if (lowerMessage.includes("parent") || lowerMessage.includes("support")) {
      return "Our Parent Corner has lots of information about supporting autistic girls! You'll find strategies for home, school, social situations, and sensory needs. The most important thing? Accept, celebrate, and advocate for the autistic person in your life.";
    } else if (lowerMessage.includes("masking") || lowerMessage.includes("hiding")) {
      return "Masking is when autistic people hide their autistic traits to fit in - like forcing eye contact, suppressing stims, or copying others' behavior. While it might help in the moment, masking is exhausting and can lead to burnout, anxiety, and depression. You deserve spaces where you can be authentically yourself.";
    } else if (lowerMessage.includes("stimming") || lowerMessage.includes("flapping") || lowerMessage.includes("rocking")) {
      if (isChild) {
        return "Stimming means moving your body in ways that feel good - like hand flapping, rocking, or spinning. It helps your body feel calm and happy! Everyone stims in different ways. Your stimming is okay and helps you!";
      }
      return "Stimming (self-stimulatory behavior) is a natural way autistic people regulate emotions, manage sensory input, and express themselves. It includes movements like hand-flapping, rocking, pacing, or vocalizations. Stimming is healthy, helpful, and not something that needs to be stopped unless it's harmful.";
    } else {
      return "That's a great question! I'm here to help you learn about autism, sensory experiences, making friends, managing school, and more. You can also check out our Parent Corner, Ages & Quiz pages, or Research Hub. What would you like to explore?";
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (showWelcome) {
    return (
      <div className="w-full">
        {/* Header */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center border-4 border-primary/30">
                <Moon className="w-16 h-16 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-medium text-foreground flex items-center justify-center space-x-3">
              <span>Meet Luna</span>
              <Moon className="w-12 h-12 text-primary" />
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your supportive companion for learning about autism
            </p>
          </div>
        </section>

        {/* Welcome Menu */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Who is talking */}
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-medium text-foreground flex items-center space-x-3">
                    <User className="w-8 h-8 text-primary" />
                    <span>Who is talking?</span>
                  </h2>
                  <p className="text-muted-foreground">This helps me give you the best support</p>
                </div>

                <RadioGroup value={userType || ""} onValueChange={(value) => setUserType(value as UserType)}>
                  <div className="space-y-3">
                    {[
                      { value: "girl", label: "Special Girls", icon: User, desc: "I'm a special girl" },
                      { value: "sibling", label: "Adult Sibling", icon: Users, desc: "My sister is special" },
                      { value: "teacher", label: "Teacher", icon: GraduationCap, desc: "I teach special students" },
                      { value: "parent", label: "Parent / Caregiver", icon: Heart, desc: "I support my special daughter" },
                    ].map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <div
                          key={option.value}
                          className={`flex items-center space-x-4 p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                            userType === option.value
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setUserType(option.value as UserType)}
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <div className="flex-1">
                            <Label htmlFor={option.value} className="cursor-pointer flex items-center space-x-3">
                              <IconComponent className="w-6 h-6 text-primary flex-shrink-0" />
                              <div>
                                <div className="text-lg font-medium text-foreground">{option.label}</div>
                                <div className="text-sm text-muted-foreground">{option.desc}</div>
                              </div>
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Age Group (only for girls) */}
            {userType === "girl" && (
              <Card className="border-2">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-medium text-foreground flex items-center space-x-3">
                      <Cake className="w-8 h-8 text-primary" />
                      <span>How old are you?</span>
                    </h2>
                    <p className="text-muted-foreground">This helps me talk in a way that works for you</p>
                  </div>

                  <RadioGroup value={ageGroup || ""} onValueChange={(value) => setAgeGroup(value as AgeGroup)}>
                    <div className="space-y-3">
                      {[
                        { value: "child", label: "Under 12", icon: Circle },
                        { value: "teen", label: "13-17 years", icon: GraduationCap },
                        { value: "adult", label: "18+ years", icon: Sparkles },
                      ].map((option) => {
                        const IconComponent = option.icon;
                        return (
                          <div
                            key={option.value}
                            className={`flex items-center space-x-4 p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                              ageGroup === option.value
                                ? "border-primary bg-primary/10"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => setAgeGroup(option.value as AgeGroup)}
                          >
                            <RadioGroupItem value={option.value} id={`age-${option.value}`} />
                            <Label htmlFor={`age-${option.value}`} className="cursor-pointer flex items-center space-x-3 flex-1">
                              <IconComponent className="w-6 h-6 text-primary flex-shrink-0" />
                              <span className="text-lg font-medium text-foreground">{option.label}</span>
                            </Label>
                          </div>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {/* Customize Luna */}
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-medium text-foreground flex items-center space-x-2">
                    <Palette className="w-8 h-8 text-primary" />
                    <span>Customize Luna (Optional)</span>
                  </h2>
                  <p className="text-muted-foreground">Make Luna look however you'd like!</p>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setShowCustomize(!showCustomize)}
                  className="w-full"
                >
                  {showCustomize ? "Hide Customization" : "Show Customization Options"}
                </Button>

                {showCustomize && (
                  <div className="space-y-6 pt-4">
                    <div className="flex justify-center">
                      <ChatbotAvatar hairColor={hairColor} skinTone={skinTone} hairStyle={hairStyle} size="lg" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label className="text-base mb-3 block">Hair Color</Label>
                        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                          {hairColors.map((color) => (
                            <button
                              key={color.value}
                              onClick={() => setHairColor(color.value)}
                              className={`w-12 h-12 rounded-full border-2 transition-all ${
                                hairColor === color.value
                                  ? "border-primary scale-110"
                                  : "border-border hover:scale-105"
                              }`}
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-base mb-3 block">Skin Tone</Label>
                        <div className="grid grid-cols-5 gap-2">
                          {skinTones.map((tone) => (
                            <button
                              key={tone.value}
                              onClick={() => setSkinTone(tone.value)}
                              className={`w-12 h-12 rounded-full border-2 transition-all ${
                                skinTone === tone.value
                                  ? "border-primary scale-110"
                                  : "border-border hover:scale-105"
                              }`}
                              style={{ backgroundColor: tone.value }}
                              title={tone.name}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Start Button */}
            <Button
              size="lg"
              className="w-full rounded-full text-lg flex items-center justify-center space-x-2"
              onClick={handleStartChat}
              disabled={!userType || (userType === "girl" && !ageGroup)}
            >
              <span>Start Chatting with Luna</span>
              <Moon className="w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center mb-4">
            <ChatbotAvatar
              hairColor={hairColor}
              skinTone={skinTone}
              hairStyle={hairStyle}
              size="lg"
              onCustomize={(hair, skin, style) => {
                setHairColor(hair);
                setSkinTone(skin);
                setHairStyle(style);
              }}
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground flex items-center justify-center space-x-3">
            <span>Luna</span>
            <Moon className="w-12 h-12 text-primary" />
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your supportive companion for learning about autism
          </p>
          <p className="text-sm text-muted-foreground">
            (Click Luna's avatar to customize appearance!)
          </p>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2">
            <CardContent className="p-0">
              {/* Info Banner */}
              <div className="p-4 bg-secondary/20 border-b border-border flex items-start space-x-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Luna provides general information and support. For medical advice or emergencies, please contact a healthcare professional.
                </p>
              </div>

              {/* Messages Area */}
              <div className="h-96 sm:h-[500px] overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] sm:max-w-[70%] ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-sm"
                          : "bg-secondary text-foreground rounded-2xl rounded-tl-sm"
                      } p-4`}
                    >
                      {message.sender === "bot" && (
                        <div className="flex items-center space-x-2 mb-2">
                          <ChatbotAvatar
                            hairColor={hairColor}
                            skinTone={skinTone}
                            size="sm"
                          />
                          <span className="text-xs font-medium">Luna</span>
                        </div>
                      )}
                      <p className="text-base leading-relaxed">{message.text}</p>
                      <span className="text-xs opacity-70 mt-2 block">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Starter Prompts */}
              {messages.length <= 2 && userType && (
                <div className="px-6 py-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Try asking about:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {starterPrompts[userType].map((prompt, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        onClick={() => handlePromptClick(prompt)}
                        className="rounded-full text-xs"
                      >
                        {prompt}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message here..."
                    className="flex-1 text-base"
                  />
                  <Button onClick={handleSendMessage} size="icon" className="flex-shrink-0">
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Press Enter to send, or click the button
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ChatbotPage;