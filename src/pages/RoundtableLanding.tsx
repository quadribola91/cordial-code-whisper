import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CalendarDays, Clock, MapPin, Users, FileText, Video } from "lucide-react";
import { useBackgroundImage } from "@/hooks/useBackgroundImage";


interface RoundtableEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  format: "In-person" | "Virtual" | "Hybrid";
  description: string;
  status: "Upcoming" | "Past";
  imageUrl: string;
  policyBriefUrl?: string;
  recordingUrl?: string;
}

const events: RoundtableEvent[] = [
  {
    id: "1",
    title: "Re-Engineering Pathways to Capital: Late-Stage Funding for the Scalability of African Female-led Ventures",
    date: "May 8, 2025",
    time: "2 PM WAT",
    location: "Virtual, Zoom",
    format: "Hybrid",
    description: "While many African women dominate early-stage entrepreneurship and micro-enterprises, they are consistently excluded from capital-intensive stages where businesses scale, expand production, enter new markets, or formalize operations. This has created a “missing middle” for female founders; a structural void where ambition, innovation, and potential are not matched with the resources needed to grow....",
    status: "Upcoming",
    imageUrl: "/placeholder.svg",
  },
];

const RoundtableLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("upcoming");

  const filteredEvents = events.filter(event => 
    activeTab === "all" || event.status.toLowerCase() === activeTab.toLowerCase()
  );
  
  const { backgroundImage } = useBackgroundImage('/header_img.png');
  return (
    <Layout>
      <div className="py-20 px-6 bg-affc-offwhite">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-affc-gray">
              AFFC <span className="text-[#9bbfe0]">Roundtable</span>
            </h1>
            <div className="h-0.5 w-24 bg-[#d687b1] mx-auto my-8"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Solutions-oriented policy conversations around gender-lens investing and venture building, bringing together practitioners, female founders, investors, and policymakers.
            </p>
          </div>

          {/* About Roundtable */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">What is the AFFC Roundtable?</h2>
              <p className="mb-4 text-foreground/80">
                The AFFC Roundtable is a forum for substantive discussions on policies and practices that affect female founders in Africa. We bring together diverse stakeholders to identify challenges, share insights, and develop actionable recommendations.
              </p>
              <p className="mb-6 text-foreground/80">
                Each roundtable focuses on a specific theme relevant to supporting female entrepreneurship across the continent, with the goal of driving meaningful change through evidence-based advocacy and collaboration.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-[#9bbfe0]" size={18} />
                    <h3 className="font-medium">Diverse Voices</h3>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Bringing together multiple perspectives for comprehensive solutions
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="text-[#d687b1]" size={18} />
                    <h3 className="font-medium">Policy Briefs</h3>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Translating insights into actionable policy recommendations
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/header_img.png" alt="AFFC Roundtable Discussion" className="rounded-lg shadow-lg max-h-80 object-cover" />
            </div>
          </div>
         {/* Roundtable Events */}
         <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Roundtable Events</h2>
            
            <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="all">All Events</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              
              <div className="space-y-8">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border-none shadow-md">
                    <div className="grid md:grid-cols-3 h-full">
                      <div className="relative h-full min-h-[200px] md:min-h-full">
                        <div 
                          className="absolute inset-0 bg-center bg-cover"
                          style={{ backgroundImage: `url(${backgroundImage})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-affc-gray/70 to-transparent flex items-center justify-center md:justify-start p-6">
                          <div className="text-white text-center md:text-left">
                            <div className="bg-[#d687b1] text-white text-xs px-3 py-1 rounded inline-block mb-2">
                              {event.status}
                            </div>
                            <div className="text-lg font-medium">{event.date}</div>
                            <div className="text-sm opacity-90">{event.format}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                        <p className="text-foreground/80 mb-4">{event.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-affc-blue" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CalendarDays size={16} className="text-affc-blue" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-affc-blue" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                        
                        {event.status === "Upcoming" ? (
                          <ButtonCustom variant="primary" size="md" className="bg-[#9bbfe0]">
                            Register to Attend
                          </ButtonCustom>
                        ) : (
                          <div className="flex flex-wrap gap-3">
                            {event.policyBriefUrl && (
                              <ButtonCustom variant="outline" size="sm" className="flex items-center gap-1">
                                <FileText size={14} />
                                <span>View Policy Brief</span>
                              </ButtonCustom>
                            )}
                            {event.recordingUrl && (
                              <ButtonCustom variant="outline" size="sm" className="flex items-center gap-1">
                                <Video size={14} />
                                <span>Watch Recording</span>
                              </ButtonCustom>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Tabs>
          </div>
          

          {/* Call to Action */}
          <div className="bg-blue-50 p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Suggest a Roundtable Topic</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Have an idea for an important policy issue affecting female founders in Africa? 
              We welcome suggestions for future roundtable discussions.
            </p>
            <a href="#suggest-topic" className="inline-block">
              <ButtonCustom variant="primary" size="lg" className="bg-[#9bbfe0]">
                Submit a Topic
              </ButtonCustom>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoundtableLanding;
