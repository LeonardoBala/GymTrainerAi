## TrainerAI

A full‑stack fitness coaching app that generates personalized workout and diet programs through an AI voice assistant. Users can speak with the assistant to craft a plan, which is then saved and displayed in their profile.

### What this app contains
- **Next.js (App Router)**: Modern React app structure, routing, and static optimization.
- **Clerk authentication**: User accounts and session management, surfaced via `useUser()`.
- **Vapi AI voice assistant**: Real‑time voice call to generate personalized plans; transcripts and state are shown in the UI.
- **Convex backend**: Data storage and APIs for users and fitness plans (`convex/` with schema, queries, and mutations).
- **Tailwind CSS**: UI styling and small UI components (buttons, cards, etc.).
- **Profile and plan pages**: View active plans and recent activity.

### How it works (brief)
1. The user starts a voice session on `Generate Program`.
2. The app calls Vapi with the user context (name and `user_id`).
3. The AI assistant converses and produces a structured workout/diet plan.
4. The plan is stored in Convex and shown on the user's profile.


## Visit the app

Vercel deployment: [Open TrainerAI](https://gym-trainer-ai.vercel.app)
