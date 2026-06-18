import { createBrowserRouter } from "react-router";
import Root from "@/app/components/Root";
import HomePage from "@/app/pages/HomePage";
import AgesStagesPage from "@/app/pages/AgesStagesPage";
import ParentCornerPage from "@/app/pages/ParentCornerPage";
import ResearchHubPage from "@/app/pages/ResearchHubPage";
import ChatbotPage from "@/app/pages/ChatbotPage";
import ContactPage from "@/app/pages/ContactPage";
import MoodJournalPage from "@/app/pages/MoodJournalPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "parent-corner", Component: ParentCornerPage },
      { path: "ages-stages", Component: AgesStagesPage },
      { path: "research-hub", Component: ResearchHubPage },
      { path: "mood-journal", Component: MoodJournalPage },
      { path: "chatbot", Component: ChatbotPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);