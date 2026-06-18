import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import AgesStagesPage from "./pages/AgesStagesPage";
import ParentCornerPage from "./pages/ParentCornerPage";
import ResearchHubPage from "./pages/ResearchHubPage";
import ChatbotPage from "./pages/ChatbotPage";
import ContactPage from "./pages/ContactPage";
import MoodJournalPage from "./pages/MoodJournalPage";
import CopingSkillsPage from "./pages/CopingSkillsPage";

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
      { path: "coping-skills", Component: CopingSkillsPage },
    ],
  },
]);