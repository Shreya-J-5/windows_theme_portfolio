import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

import {
  profile,
  experience,
  projects,
  skills,
  achievements,
  certifications,
  events,
} from "@/data/portfolioData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function buildPortfolioContext(): string {
  return [
    `PROFILE:
Name: ${profile.name}
Headline: ${profile.headline}
Summary: ${profile.summary}
Location: ${profile.location}`,

    `EDUCATION:
Degree: ${profile.education.degree}
Institution: ${profile.education.institution}
University affiliation: ${profile.education.affiliation}
CGPA: ${profile.education.cgpa}
Graduation: ${profile.education.graduation}`,

    `EXPERIENCE:
${experience
  .map(
    (item) =>
      `- ${item.role} at ${item.organization} (${item.period}, ${item.mode}). ${item.points.join(
        ". "
      )}.${item.project ? ` Project: ${item.project} (${item.projectStatus}).` : ""}`
  )
  .join("\n")}`,

    `PROJECTS:
${projects
  .map(
    (project) =>
      `- ${project.name} [${project.status}] (${project.category}): ${
        project.purpose
      } Tech: ${project.stack.join(", ")}. Facts: ${project.facts.join(", ")}.${
        project.github ? ` GitHub: ${project.github}` : ""
      }${project.demo ? ` Demo: ${project.demo}` : ""}${
        project.limitations ? ` Limitation: ${project.limitations}` : ""
      }`
  )
  .join("\n")}`,

    `SKILLS:
${skills
  .map((skill) => `- ${skill.category}: ${skill.items.join(", ")}`)
  .join("\n")}`,

    `ACHIEVEMENTS:
${achievements
  .map(
    (achievement) =>
      `- ${achievement.title}${
        achievement.organization ? ` (${achievement.organization})` : ""
      }${achievement.track ? ` — ${achievement.track}` : ""}${
        achievement.location ? ` — ${achievement.location}` : ""
      }${achievement.team ? ` — Team: ${achievement.team}` : ""}${
        achievement.scale ? ` — Scale: ${achievement.scale}` : ""
      }`
  )
  .join("\n")}`,

    `CERTIFICATIONS:
${certifications
  .map(
    (certification) =>
      `- ${certification.title} — ${certification.issuer} (${certification.issued})`
  )
  .join("\n")}`,

    `COMMUNITY & EVENTS:
${events
  .map(
    (event) =>
      `- ${event.name} at ${event.location}. Themes: ${event.themes.join(", ")}.`
  )
  .join("\n")}`,

    `CONTACT:
Email: ${profile.email}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}`,

    `RESUME:
Shreya's resume is available as a PDF document in the portfolio.
If the visitor asks to see/download the resume, use [OPEN_RESUME].`,
  ].join("\n\n");
}

function generateLocalResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("hire") || q.includes("why should") || q.includes("why hire")) {
    return "Here is why Shreya would be a fantastic addition to your engineering team:\n\n1. Real-World AI & Full-Stack Capabilities: She doesn't just study AI/ML at LJ University—she builds and deploys production-ready apps like ScamShield (AI Phishing Detector) and Fyro (24/7 Discord bot).\n2. Technical Versatility: Fluent in Python, React, Next.js, TypeScript, Django, Docker, and PostgreSQL.\n3. Initiative & Growth: 19+ verified public projects demonstrating strong problem-solving, clean architecture, and continuous learning.\n\nTake a look at her projects or about profile to learn more! [OPEN_PROJECTS] [OPEN_ABOUT]";
  }

  if (q.includes("project") || q.includes("built") || q.includes("work")) {
    return "Shreya has built 19 verified projects spanning AI/ML, Full-Stack Development, and DevOps:\n\n• ScamShield: AI-powered phishing & scam detection platform\n• Fyro: Production-grade 24/7 Discord music bot\n• PaletteLens: Color analysis & design tool\n• National Job Market Forecaster: AI analytics platform\n\nWould you like to explore her full project gallery? [OPEN_PROJECTS]";
  }

  if (q.includes("scamshield") || q.includes("phishing") || q.includes("scam")) {
    return "ScamShield is an AI security platform designed by Shreya that detects phishing URLs, malicious links, and scam content in real-time using custom NLP and Machine Learning models. [OPEN_PROJECTS]";
  }

  if (q.includes("fyro") || q.includes("music") || q.includes("bot")) {
    return "Fyro is a high-availability Discord music bot created by Shreya with custom audio stream resolving, Spotify metadata integration, multi-guild queues, and PostgreSQL/Redis backend architecture. [OPEN_PROJECTS]";
  }

  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("technology") ||
    q.includes("languages")
  ) {
    return "Shreya's technical stack includes:\n\n• AI & Machine Learning: Python, TensorFlow, Scikit-learn, OpenCV, NLP\n• Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS\n• Backend & DevOps: Django, Flask, Node.js, Docker, REST APIs, PostgreSQL\n• Programming: Python, Java, C++, JavaScript\n\nCheck out her full skills breakdown! [OPEN_SKILLS]";
  }

  if (
    q.includes("experience") ||
    q.includes("internship") ||
    q.includes("role")
  ) {
    return "Shreya has hands-on experience developing full-stack web applications, AI integrations, data analytics pipelines, and containerized microservices through technical internships and capstone projects. [OPEN_EXPERIENCE]";
  }

  if (q.includes("resume") || q.includes("cv") || q.includes("pdf")) {
    return "You can view and download Shreya's complete resume PDF directly within the portfolio viewer! [OPEN_RESUME]";
  }

  if (
    q.includes("achievement") ||
    q.includes("hackathon") ||
    q.includes("award") ||
    q.includes("win")
  ) {
    return "Shreya actively participates in competitive hackathons and coding challenges, building innovative AI and full-stack solutions. [OPEN_ACHIEVEMENTS]";
  }

  if (
    q.includes("certif") ||
    q.includes("course") ||
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("university") ||
    q.includes("college")
  ) {
    return "Shreya is pursuing her B.Tech in Artificial Intelligence & Machine Learning at LJ University. She holds certifications from Google, IBM, Coursera, and UPenn in Python, Data Science, AI, and Java. [OPEN_CERTIFICATIONS]";
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("github") ||
    q.includes("linkedin")
  ) {
    return "You can reach Shreya directly via:\n\n• Email: shreyajolapara@gmail.com\n• GitHub: github.com/Shreya-J-5\n• LinkedIn: Shreya Jolapara\n\nClick below to open her contact form! [OPEN_CONTACT]";
  }

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey") ||
    q.includes("who are you")
  ) {
    return "Hey there! I'm Ask Shreya, her portfolio assistant. Feel free to ask about her 19+ projects, AI/ML skills, education at LJ University, or why she'd be a great fit for your team! [OPEN_ABOUT]";
  }

  return `Shreya Jolapara is an AI/ML student at LJ University and Full-Stack Developer with 19 verified projects across AI security, Discord bots, web dashboards, and API microservices.\n\nFeel free to ask about her stack, projects, or view her resume! [OPEN_PROJECTS]`;
}

const systemInstruction = `
You are Ask Shreya, an intelligent conversational AI assistant for Shreya Jolapara's professional portfolio.

Your purpose is to answer visitors naturally, intelligently, and conversationally.

CORE BEHAVIOR:
1. Use the portfolio data supplied with the request as your factual source about Shreya.
2. Do NOT behave like a fixed FAQ bot.
3. Generate a fresh response for every visitor question.
4. Answer the visitor's actual question directly.
5. Keep normal answers concise but complete (2-5 sentences).
6. Do not use Markdown formatting (** or ##).
7. Never invent facts.
8. When relevant, append ONE UI action marker like [OPEN_PROJECTS], [OPEN_ABOUT], [OPEN_RESUME], [OPEN_SKILLS], [OPEN_EXPERIENCE], [OPEN_CERTIFICATIONS], [OPEN_CONTACT].
`;

interface HistoryMessage {
  role: "user" | "assistant";
  content: string;
}

function getHistory(value: unknown): HistoryMessage[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (message): message is HistoryMessage =>
        typeof message === "object" &&
        message !== null &&
        ((message as HistoryMessage).role === "user" ||
          (message as HistoryMessage).role === "assistant") &&
        typeof (message as HistoryMessage).content === "string"
    )
    .slice(-6);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const question =
      typeof body.question === "string" ? body.question.trim() : "";

    if (!question) {
      return new Response(JSON.stringify({ error: "Question is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && apiKey !== "your_gemini_api_key_here") {
      try {
        const portfolioContext = buildPortfolioContext();
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction,
        });

        const history = getHistory(body.history).map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        }));

        const chat = model.startChat({
          history,
          generationConfig: { maxOutputTokens: 700 },
        });

        const userMessage = `PORTFOLIO DATA:\n\n${portfolioContext}\n\nVISITOR QUESTION:\n\n${question}`;
        const result = await chat.sendMessageStream(userMessage);

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of result.stream) {
                const text = chunk.text();
                if (text) {
                  controller.enqueue(encoder.encode(text));
                }
              }
              controller.close();
            } catch (error) {
              console.error("Ask Shreya streaming error:", error);
              controller.error(error);
            }
          },
        });

        return new Response(stream, {
          status: 200,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "X-Accel-Buffering": "no",
          },
        });
      } catch (geminiErr) {
        console.warn(
          "Gemini API failed, falling back to local QA engine:",
          geminiErr
        );
      }
    }

    // Fallback local response stream when API key is missing or Gemini API fails
    const localAnswer = generateLocalResponse(question);
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(localAnswer));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("Ask Shreya error:", error);

    const fallback = generateLocalResponse("general");
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(fallback));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}