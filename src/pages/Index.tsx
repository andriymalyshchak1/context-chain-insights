
import React, { useState } from 'react';
import { Search, Calendar, ExternalLink, Filter, Download, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [selectedNarrative, setSelectedNarrative] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const narratives = [
    {
      id: 1,
      title: "AI in Biopharma is Accelerating",
      description: "Drug discovery platforms are seeing unprecedented investment as AI proves its efficacy in reducing development timelines.",
      category: "biotech",
      timeline: [
        { date: "Jan 2025", event: "Recursion Pharma announces AI-discovered drug enters Phase II", source: "STAT" },
        { date: "Dec 2024", event: "Google DeepMind partners with Isomorphic Labs for protein folding", source: "Nature" },
        { date: "Nov 2024", event: "$2.1B raised across AI-driven biotech startups", source: "TechCrunch" },
        { date: "Oct 2024", event: "FDA releases new guidance on AI in drug development", source: "FDA.gov" }
      ],
      reasoning: [
        "Traditional drug discovery takes 10-15 years; AI platforms are reducing this to 3-5 years",
        "Success rate improvements from 12% to 25% for AI-assisted compounds entering trials",
        "Regulatory bodies are creating fast-track pathways for AI-discovered drugs",
        "Big pharma is acquiring AI-first biotech companies at premium valuations"
      ],
      conflictingTakes: [
        "Critics argue AI is overhyped and real clinical success is still limited",
        "Regulatory hurdles may slow adoption despite technical advances"
      ]
    },
    {
      id: 2,
      title: "Tariffs Reshape Synthetic Chemistry Supply Chains",
      description: "New trade policies are forcing chemical manufacturers to relocate production, creating opportunities for domestic suppliers.",
      category: "geopolitics",
      timeline: [
        { date: "Jan 2025", event: "25% tariff on Chinese chemical intermediates takes effect", source: "Reuters" },
        { date: "Dec 2024", event: "US chemical companies announce $5B in domestic expansion", source: "Chemical Week" },
        { date: "Nov 2024", event: "Mexico emerges as alternative manufacturing hub", source: "WSJ" },
        { date: "Oct 2024", event: "Supply chain disruptions hit pharmaceutical manufacturing", source: "Bloomberg" }
      ],
      reasoning: [
        "Chemical supply chains are being forced to diversify away from China-heavy dependency",
        "Domestic chemical production capacity is expanding for the first time in decades",
        "Mexico and India are becoming alternative manufacturing centers",
        "Pharmaceutical companies are stockpiling critical intermediates"
      ]
    },
    {
      id: 3,
      title: "YC Startups Betting on Agentic Workflows",
      description: "The latest Y Combinator batch shows a clear trend toward AI agents that can complete complex, multi-step business processes autonomously.",
      category: "ai",
      timeline: [
        { date: "Jan 2025", event: "YC W25 batch reveals 40% of startups focus on AI agents", source: "TechCrunch" },
        { date: "Dec 2024", event: "OpenAI announces improved function calling capabilities", source: "OpenAI Blog" },
        { date: "Nov 2024", event: "Enterprise adoption of agentic workflows up 300%", source: "McKinsey" },
        { date: "Oct 2024", event: "Anthropic releases Claude for business process automation", source: "Anthropic" }
      ],
      reasoning: [
        "Manual business processes are becoming bottlenecks as companies scale",
        "AI agents can now reliably handle multi-step workflows without human oversight",
        "ROI on agentic automation is proving compelling across industries",
        "Developer tools for building AI agents are maturing rapidly"
      ]
    },
    {
      id: 4,
      title: "Series A Funding Market Shows Signs of Recovery",
      description: "After two years of decline, Series A rounds are stabilizing with focus on profitability and sustainable growth metrics.",
      category: "finance",
      timeline: [
        { date: "Jan 2025", event: "Series A volume up 15% quarter-over-quarter", source: "PitchBook" },
        { date: "Dec 2024", event: "Median Series A size stabilizes at $12M", source: "Crunchbase" },
        { date: "Nov 2024", event: "Time to raise Series A drops from 8 to 6 months", source: "First Round" },
        { date: "Oct 2024", event: "VCs report higher quality deal flow", source: "Bessemer" }
      ],
      reasoning: [
        "Startups have adapted to new funding reality with focus on unit economics",
        "VCs are seeing more mature companies with proven traction at Series A",
        "Market correction has cleared out weaker players, improving deal quality",
        "Interest rate stabilization is giving investors more confidence"
      ]
    }
  ];

  const sectors = [
    { id: 'all', name: 'All', icon: '📊' },
    { id: 'biotech', name: 'Biotech', icon: '⚕️' },
    { id: 'ai', name: 'AI', icon: '🧠' },
    { id: 'geopolitics', name: 'Geopolitics', icon: '🌎' },
    { id: 'finance', name: 'Finance', icon: '🏦' }
  ];

  const filteredNarratives = narratives.filter(narrative => 
    (activeFilter === 'all' || narrative.category === activeFilter) &&
    (searchTerm === '' || narrative.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     narrative.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-800">ContextChain</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6">
              Log In
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Today's Key Narratives</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Understand the "why" behind market movements and financial news with curated, credible insights.
          </p>
        </div>

        {/* Sector Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveFilter(sector.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                activeFilter === sector.id
                  ? 'bg-blue-100 text-blue-700 shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <span>{sector.icon}</span>
              <span className="font-medium">{sector.name}</span>
            </button>
          ))}
        </div>

        {/* Narrative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredNarratives.map((narrative) => (
            <Card 
              key={narrative.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white rounded-2xl border-0 shadow-sm"
              onClick={() => setSelectedNarrative(narrative)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge className="bg-blue-100 text-blue-700 rounded-lg">
                    {sectors.find(s => s.id === narrative.category)?.icon} {sectors.find(s => s.id === narrative.category)?.name}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{narrative.title}</h3>
                <p className="text-slate-600 leading-relaxed">{narrative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search specific companies or themes (e.g., 'Recursion Pharma', 'AI agents')"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 rounded-2xl border-slate-200 focus:border-blue-300 focus:ring-blue-200 text-lg"
            />
          </div>
        </div>
      </div>

      {/* Narrative Detail Modal */}
      {selectedNarrative && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Badge className="bg-blue-100 text-blue-700 rounded-lg mb-3">
                    {sectors.find(s => s.id === selectedNarrative.category)?.icon} {sectors.find(s => s.id === selectedNarrative.category)?.name}
                  </Badge>
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">{selectedNarrative.title}</h2>
                  <p className="text-slate-600">{selectedNarrative.description}</p>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedNarrative(null)}
                  className="text-slate-400 hover:text-slate-600 rounded-xl"
                >
                  ✕
                </Button>
              </div>

              {/* Timeline */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Key Events Timeline
                </h3>
                <div className="space-y-4">
                  {selectedNarrative.timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                        {event.date}
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 font-medium">{event.event}</p>
                        <div className="flex items-center mt-1">
                          <ExternalLink className="w-3 h-3 text-slate-400 mr-1" />
                          <span className="text-sm text-slate-500">{event.source}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reasoning */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Why This Matters</h3>
                <ul className="space-y-3">
                  {selectedNarrative.reasoning.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="rounded-xl">
                  <Users className="w-4 h-4 mr-2" />
                  View Conflicting Takes
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  Compare Similar Trends
                </Button>
                <Button variant="outline" className="rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Export to PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
