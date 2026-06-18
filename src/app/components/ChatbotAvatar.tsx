import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Circle, Square, Triangle } from "lucide-react";

interface AvatarProps {
  hairColor: string;
  skinTone: string;
  hairStyle?: string;
  size?: "sm" | "md" | "lg";
  onCustomize?: (hairColor: string, skinTone: string, hairStyle: string) => void;
}

export const ChatbotAvatar = ({ 
  hairColor, 
  skinTone, 
  hairStyle = "long",
  size = "md", 
  onCustomize 
}: AvatarProps) => {
  const [customHair, setCustomHair] = useState(hairColor);
  const [customSkin, setCustomSkin] = useState(skinTone);
  const [customStyle, setCustomStyle] = useState(hairStyle);
  const [open, setOpen] = useState(false);

  const sizes = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
  };

  const hairColors = [
    { value: "#2c1810", label: "Dark Brown" },
    { value: "#6b4423", label: "Brown" },
    { value: "#daa520", label: "Blonde" },
    { value: "#ff6347", label: "Red" },
    { value: "#000000", label: "Black" },
    { value: "#9b59b6", label: "Purple" },
    { value: "#3498db", label: "Blue" },
    { value: "#e91e63", label: "Pink" },
  ];

  const skinTones = [
    { value: "#ffd7ba", label: "Fair" },
    { value: "#f1c27d", label: "Light" },
    { value: "#e0ac69", label: "Medium" },
    { value: "#c68642", label: "Tan" },
    { value: "#8d5524", label: "Brown" },
    { value: "#5c3317", label: "Deep" },
  ];

  const hairStyles = [
    { value: "long", label: "Long Hair", icon: "○" },
    { value: "bob", label: "Bob Cut", icon: "□" },
    { value: "braided", label: "Braided", icon: "△" },
    { value: "pigtails", label: "Pigtails", icon: "◇" },
    { value: "short", label: "Short Hair", icon: "●" },
  ];

  const getHairPath = (style: string) => {
    switch (style) {
      case "long":
        return "M 50 10 Q 20 10, 15 35 L 15 45 Q 15 25, 25 20 Q 30 15, 50 10 Q 70 15, 75 20 Q 85 25, 85 45 L 85 35 Q 80 10, 50 10 Z M 15 45 L 12 75 Q 12 85, 20 85 L 30 85 L 30 50 M 85 45 L 88 75 Q 88 85, 80 85 L 70 85 L 70 50";
      case "bob":
        return "M 50 10 Q 20 10, 15 35 L 15 55 Q 15 60, 20 60 L 35 60 L 35 40 Q 35 25, 50 10 Q 65 25, 65 40 L 65 60 L 80 60 Q 85 60, 85 55 L 85 35 Q 80 10, 50 10 Z";
      case "braided":
        return "M 50 10 Q 20 10, 15 35 L 15 45 Q 15 25, 25 20 Q 30 15, 50 10 Q 70 15, 75 20 Q 85 25, 85 45 L 85 35 Q 80 10, 50 10 Z M 15 45 Q 12 50, 15 55 Q 12 60, 15 65 Q 12 70, 15 75 L 20 75 M 85 45 Q 88 50, 85 55 Q 88 60, 85 65 Q 88 70, 85 75 L 80 75";
      case "pigtails":
        return "M 50 10 Q 30 10, 20 25 L 18 35 Q 18 30, 20 25 Q 25 15, 50 10 Q 75 15, 80 25 Q 82 30, 82 35 L 80 25 Q 70 10, 50 10 Z M 18 35 Q 10 40, 8 50 Q 10 60, 18 65 M 82 35 Q 90 40, 92 50 Q 90 60, 82 65";
      case "short":
        return "M 50 10 Q 20 10, 15 35 L 15 45 Q 15 30, 25 22 Q 35 15, 50 10 Q 65 15, 75 22 Q 85 30, 85 45 L 85 35 Q 80 10, 50 10 Z";
      default:
        return "M 50 10 Q 20 10, 15 35 L 15 45 Q 15 25, 25 20 Q 30 15, 50 10 Q 70 15, 75 20 Q 85 25, 85 45 L 85 35 Q 80 10, 50 10 Z";
    }
  };

  const handleSave = () => {
    if (onCustomize) {
      onCustomize(customHair, customSkin, customStyle);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className={`${sizes[size]} rounded-full relative overflow-hidden cursor-pointer hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary`}>
          {/* Avatar SVG */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Face */}
            <circle cx="50" cy="50" r="40" fill={skinTone} />
            
            {/* Hair */}
            <path
              d={getHairPath(hairStyle)}
              fill={hairColor}
            />
            
            {/* Eyes */}
            <circle cx="37" cy="45" r="4" fill="#2c1810" />
            <circle cx="63" cy="45" r="4" fill="#2c1810" />
            <circle cx="38" cy="44" r="1.5" fill="#ffffff" />
            <circle cx="64" cy="44" r="1.5" fill="#ffffff" />
            
            {/* Smile */}
            <path
              d="M 35 60 Q 50 68, 65 60"
              fill="none"
              stroke="#2c1810"
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* Rosy Cheeks */}
            <circle cx="30" cy="55" r="5" fill="#ff9999" opacity="0.4" />
            <circle cx="70" cy="55" r="5" fill="#ff9999" opacity="0.4" />
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Customize Luna</DialogTitle>
          <DialogDescription>
            Choose Luna's hair style, hair color, and skin tone.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          {/* Preview */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill={customSkin} />
                <path
                  d={getHairPath(customStyle)}
                  fill={customHair}
                />
                <circle cx="37" cy="45" r="4" fill="#2c1810" />
                <circle cx="63" cy="45" r="4" fill="#2c1810" />
                <circle cx="38" cy="44" r="1.5" fill="#ffffff" />
                <circle cx="64" cy="44" r="1.5" fill="#ffffff" />
                <path
                  d="M 35 60 Q 50 68, 65 60"
                  fill="none"
                  stroke="#2c1810"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="30" cy="55" r="5" fill="#ff9999" opacity="0.4" />
                <circle cx="70" cy="55" r="5" fill="#ff9999" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Hair Style Selection */}
          <div className="space-y-3">
            <Label>Hair Style</Label>
            <RadioGroup value={customStyle} onValueChange={setCustomStyle}>
              <div className="grid grid-cols-2 gap-3">
                {hairStyles.map((style) => (
                  <div
                    key={style.value}
                    className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-colors cursor-pointer ${
                      customStyle === style.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setCustomStyle(style.value)}
                  >
                    <RadioGroupItem value={style.value} id={`style-${style.value}`} />
                    <Label htmlFor={`style-${style.value}`} className="cursor-pointer flex items-center space-x-2 flex-1">
                      <span className="text-xl">{style.icon}</span>
                      <span className="text-sm">{style.label}</span>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Hair Color Selection */}
          <div className="space-y-3">
            <Label>Hair Color</Label>
            <div className="grid grid-cols-4 gap-3">
              {hairColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setCustomHair(color.value)}
                  className={`w-full aspect-square rounded-full border-4 transition-all ${
                    customHair === color.value
                      ? "border-primary scale-110"
                      : "border-border hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.label}
                />
              ))}
            </div>
          </div>

          {/* Skin Tone Selection */}
          <div className="space-y-3">
            <Label>Skin Tone</Label>
            <div className="grid grid-cols-3 gap-3">
              {skinTones.map((tone) => (
                <button
                  key={tone.value}
                  onClick={() => setCustomSkin(tone.value)}
                  className={`w-full aspect-square rounded-full border-4 transition-all ${
                    customSkin === tone.value
                      ? "border-primary scale-110"
                      : "border-border hover:scale-105"
                  }`}
                  style={{ backgroundColor: tone.value }}
                  title={tone.label}
                />
              ))}
            </div>
          </div>

          {/* Save Button */}
          <Button onClick={handleSave} className="w-full">
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};