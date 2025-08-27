import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Risk Moodboard AI",
    "one_liner": "Visualize the risk landscape of smart contracts at a glance.",
    "why_now": "As the blockchain ecosystem expands, the visual representation of risks can provide clarity to developers and stakeholders.",
    "novel_mechanism": "Utilizes advanced AI for risk assessment visualization, mapping vulnerabilities and strengths interactively.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision"
    ],
    "edge_use_cases": [
      "Real-time risk updates during deployment",
      "Interactive audits for non-technical stakeholders"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Risk assessment visualization",
        "User-friendly dashboard",
        "Basic insights with analytics"
      ],
      "tools": [
        "React",
        "D3.js",
        "Firebase"
      ],
      "data_bootstrap": [
        "synthetic data via LLM",
        "public vulnerability databases"
      ],
      "risk": [
        "User engagement issues",
        "Data inaccuracies"
      ],
      "mitigation": [
        "Incorporate user feedback loops",
        "Continuous data validation"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Interactive demo showcasing risks",
        "Visual storytelling of smart contract explosions"
      ],
      "channels": [
        "ProductHunt",
        "Discord",
        "Twitter Spaces"
      ],
      "pricing": {
        "free": "Basic visualizations",
        "pro": "$15/month for advanced analytics",
        "business": "$100/month for team features"
      }
    },
    "moat": [
      "Dynamic data visualizations",
      "Custom user experiences",
      "Integration with existing developer tools"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "Unlike basic auditing tools that provide static reports, this offers a dynamic, visual approach tailored for active development environments, fostering better engagement."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}