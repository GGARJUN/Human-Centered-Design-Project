"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Search, MessageSquare, Heart, Share2, UserPlus, Calendar } from "lucide-react";

export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      author: "Maria Garcia",
      role: "Parent",
      content: "Looking for volunteers for the upcoming Science Fair! We need help with setting up exhibits and guiding students.",
      time: "2 hours ago",
      likes: 12,
      comments: 5
    },
    {
      id: 2,
      author: "John Smith",
      role: "Teacher",
      content: "Great turnout at yesterday's parent-teacher conference! Thank you to all parents who participated.",
      time: "5 hours ago",
      likes: 24,
      comments: 8
    },
    {
      id: 3,
      author: "Community Council",
      role: "Organization",
      content: "Join us for the monthly community meeting this Friday. We'll be discussing upcoming events and initiatives.",
      time: "1 day ago",
      likes: 18,
      comments: 3
    }
  ];

  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Teacher",
      contributions: 45
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Parent",
      contributions: 32
    },
    {
      id: 3,
      name: "Lisa Anderson",
      role: "Community Leader",
      contributions: 67
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Cleanup Day",
      date: "Apr 20, 2025",
      participants: 15
    },
    {
      id: 2,
      title: "Cultural Exchange Fair",
      date: "Apr 25, 2025",
      participants: 30
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Community</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Members
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="flex gap-4 mb-6">
              <Input placeholder="Share something with the community..." />
              <Button>Post</Button>
            </div>

            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="announcements">Announcements</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id} className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <Users className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{post.author}</span>
                          <span className="text-sm text-muted-foreground">• {post.role}</span>
                          <span className="text-sm text-muted-foreground">• {post.time}</span>
                        </div>
                        <p className="mt-2">{post.content}</p>
                        <div className="flex items-center gap-4 mt-4">
                          <Button variant="ghost" size="sm">
                            <Heart className="h-4 w-4 mr-2" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Active Members</h2>
            <div className="space-y-4">
              {members.map((member) => (
                <div key={member.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.role}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{member.contributions} contributions</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">{event.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {event.date} • {event.participants} participants
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}