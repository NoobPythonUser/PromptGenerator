const form = document.getElementById('promptForm');
const output = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');

const templates = {
  brief: ({ brand, goal, audience, channels, tone, budget, timeline }) => `You are a senior Brand Strategy Director at a top advertising agency. Build a strategic creative brief for ${brand}.

Campaign objective: ${goal}
Target audience: ${audience}
Primary channels: ${channels}
Desired brand tone: ${tone}
Budget context: ${budget}
Timeline: ${timeline}

Deliverables:
1) Single-minded proposition and key message hierarchy.
2) 3 campaign territories with rationale, risks, and expected KPI impact.
3) Recommended content mix by channel with launch sequencing.
4) Measurement plan (upper, mid, lower funnel) with suggested benchmarks.
5) Client-facing summary paragraph that can be pasted into a deck.

Make the response concise, executive-ready, and clearly tied to business outcomes.`,

  copy: ({ brand, goal, audience, channels, tone, budget, timeline }) => `Act as a Creative Director + Performance Copywriter team at The Content Lab. Generate ad copy concepts for ${brand}.

Objective: ${goal}
Audience: ${audience}
Channels: ${channels}
Tone: ${tone}
Budget: ${budget}
Timeline: ${timeline}

Please provide:
- 10 headline options
- 6 primary body copy options
- 5 CTA variations
- 3 hooks optimized for short-form video
- Notes on which messages are best for awareness vs conversion

Constraints:
- Keep language brand-safe and non-generic.
- Show one table: copy line, funnel stage, and suggested channel.
- End with top 3 recommended variants to test first and why.`,

  media: ({ brand, goal, audience, channels, tone, budget, timeline }) => `You are a Brand Solutions Executive preparing a paid + organic media recommendation for ${brand}.

Business goal: ${goal}
Audience: ${audience}
Channel focus: ${channels}
Tone/personality: ${tone}
Budget reality: ${budget}
Timeline: ${timeline}

Create a channel strategy that includes:
1) Proposed budget split by channel with rationale.
2) Reach, engagement, and conversion assumptions.
3) Suggested flighting schedule across the timeline.
4) Testing roadmap (creative, audience, bidding, placements).
5) Risks and mitigation plan if performance under-delivers.

Output in a format suitable for a client presentation and include a final "executive recommendation" section.`,

  client: ({ brand, goal, audience, channels, tone, budget, timeline }) => `You are helping The Content Lab Brand Solutions Executive craft a client-ready recommendation narrative for ${brand}.
  client: ({ brand, goal, audience, channels, tone, budget, timeline }) => `You are helping a Brand Solutions Executive craft a client-ready recommendation narrative for ${brand}.

Inputs:
- Goal: ${goal}
- Audience: ${audience}
- Channels: ${channels}
- Brand tone: ${tone}
- Budget: ${budget}
- Timeline: ${timeline}

Build content in slide-ready structure:
- Slide 1: Business challenge and opportunity framing.
- Slide 2: Audience insight and cultural tension.
- Slide 3: Big idea and strategic proposition.
- Slide 4: Channel ecosystem plan.
- Slide 5: KPI model and expected impact.
- Slide 6: Next steps and asks from the client.

For each slide, provide headline + 3 concise bullets and speaker notes. Keep it polished for executive stakeholders.`
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const values = {
    brand: document.getElementById('brand').value.trim(),
    goal: document.getElementById('goal').value.trim(),
    audience: document.getElementById('audience').value.trim(),
    channels: document.getElementById('channels').value.trim() || 'Not specified',
    tone: document.getElementById('tone').value.trim() || 'Not specified',
    budget: document.getElementById('budget').value.trim() || 'Not specified',
    timeline: document.getElementById('timeline').value.trim() || 'Not specified'
  };

  const promptType = document.getElementById('promptType').value;
  output.textContent = templates[promptType](values);
});

copyBtn.addEventListener('click', async () => {
  const text = output.textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Copied';
    setTimeout(() => {
      copyBtn.textContent = 'Copy';
    }, 1200);
  } catch {
    copyBtn.textContent = 'Unavailable';
    setTimeout(() => {
      copyBtn.textContent = 'Copy';
    }, 1200);
  }
});
