"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar as CalendarIcon, Filter, MapPin, Clock, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EventsPage() {
  const [date, setDate] = useState(new Date());

  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "2025-04-15",
      time: "3:00 PM - 6:00 PM",
      location: "School Auditorium",
      attendees: 45,
      type: "conference"
    },
    {
      id: 2,
      title: "Science Fair",
      date: "2025-04-20",
      time: "9:00 AM - 3:00 PM",
      location: "School Gymnasium",
      attendees: 120,
      type: "exhibition"
    },
    {
      id: 3,
      title: "Cultural Day Celebration",
      date: "2025-04-25",
      time: "10:00 AM - 4:00 PM",
      location: "School Grounds",
      attendees: 200,
      type: "cultural"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Events</h1>
        <Button>
          <CalendarIcon className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2 p-6">
          <Tabs defaultValue="upcoming" className="space-y-4">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
                <TabsTrigger value="my-events">My Events</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        {event.attendees} attendees
                      </div>
                    </div>
                    <Button>RSVP</Button>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-4">Calendar</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Upcoming Today</h3>
            <div className="text-sm text-muted-foreground">
              No events scheduled for today
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}