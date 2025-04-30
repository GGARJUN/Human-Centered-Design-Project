import { stackServerApp } from "@/stack";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Calendar,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

export default async function DashboardPage() {
  // Authentication check - will redirect if not logged in
  const user = await stackServerApp.getUser({ or: 'redirect' });
  
  const stats = [
    {
      name: "Upcoming Events",
      value: "3",
      icon: Calendar,
      trend: "+2 this week",
    },
    {
      name: "New Messages",
      value: "12",
      icon: MessageSquare,
      trend: "5 unread",
    },
    {
      name: "Active Members",
      value: "847",
      icon: Users,
      trend: "+14% growth",
    },
    {
      name: "Announcements",
      value: "5",
      icon: Bell,
      trend: "2 new today",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      time: "Tomorrow at 3:00 PM",
      type: "event",
    },
    {
      id: 2,
      title: "New Resource Added: Math Workshop Materials",
      time: "2 hours ago",
      type: "resource",
    },
    {
      id: 3,
      title: "Cultural Day Planning Discussion",
      time: "Yesterday",
      type: "message",
    },
    {
      id: 4,
      title: "Science Fair Registration Open",
      time: "2 days ago",
      type: "announcement",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome back, <span className="text-blue-600">{user.displayName || 'User'}!</span></h1>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-5 w-5" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.name}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <Icon className="h-8 w-8 text-primary opacity-75" />
              </div>
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 mr-1" />
                {stat.trend}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between py-2 border-b last:border-0"
            >
              <div>
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Schedule Meeting</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Book time with teachers or staff members
          </p>
          <Button className="w-full">Schedule Now</Button>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Submit Feedback</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Share your thoughts and suggestions
          </p>
          <Button variant="outline" className="w-full">
            Give Feedback
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">View Resources</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Access learning materials and documents
          </p>
          <Button variant="outline" className="w-full">
            Browse Resources
          </Button>
        </Card>
      </div>
    </div>
  );
}