import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { School, Users, Calendar, MessageSquare, BookOpen, Globe2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center mb-6">
          <School className="h-12 w-12 text-primary mr-2" />
          <h1 className="text-4xl font-bold">EduConnect</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Bridging the gap between schools, parents, and community through meaningful engagement and communication.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">Learn More</Link>
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Community Engagement"
            description="Connect with teachers, parents, and community members in meaningful ways."
          />
          <FeatureCard
            icon={<Calendar className="h-8 w-8" />}
            title="Event Management"
            description="Stay updated with school events, meetings, and cultural programs."
          />
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8" />}
            title="Real-time Communication"
            description="Direct messaging and announcements in multiple languages."
          />
          <FeatureCard
            icon={<BookOpen className="h-8 w-8" />}
            title="Resource Hub"
            description="Access educational materials, newsletters, and important documents."
          />
          <FeatureCard
            icon={<Globe2 className="h-8 w-8" />}
            title="Multilingual Support"
            description="Content available in Tamil, Hindi, English, and more."
          />
          <FeatureCard
            icon={<School className="h-8 w-8" />}
            title="Student Progress"
            description="Track attendance and academic progress seamlessly."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="p-8 bg-primary text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of a growing community of parents, teachers, and community members working together to enhance education.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth/register">Sign Up Now</Link>
          </Button>
        </Card>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}
