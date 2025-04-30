"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Send, Plus, Star, Archive, Trash2, User } from "lucide-react";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1);

  const chats = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Teacher",
      lastMessage: "About the upcoming parent meeting...",
      time: "10:30 AM",
      unread: true
    },
    {
      id: 2,
      name: "Parent Council Group",
      role: "Group",
      lastMessage: "Let's finalize the event schedule",
      time: "Yesterday",
      unread: false
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Principal",
      lastMessage: "Thank you for your feedback",
      time: "2 days ago",
      unread: false
    }
  ];

  return (
    <div className="h-[calc(100vh-10rem)]">
      <div className="grid grid-cols-12 h-full gap-6">
        {/* Sidebar */}
        <Card className="col-span-4 p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Messages</h2>
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search messages..." />
          </div>

          <ScrollArea className="flex-1">
            <div className="space-y-2">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedChat === chat.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{chat.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {chat.role}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs">{chat.time}</div>
                  </div>
                  <p className="text-sm mt-1 line-clamp-1">{chat.lastMessage}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Chat Area */}
        <Card className="col-span-8 flex flex-col">
          {selectedChat ? (
            <>
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">
                      {chats.find((c) => c.id === selectedChat)?.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {chats.find((c) => c.id === selectedChat)?.role}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Archive className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  <div className="text-center text-sm text-muted-foreground">
                    Today
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <div className="bg-secondary p-3 rounded-lg">
                        <p className="text-sm">Hi! About the upcoming parent meeting, I wanted to discuss some important points regarding the new curriculum changes.</p>
                        <span className="text-xs text-muted-foreground mt-1 block">10:30 AM</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 max-w-[80%] self-end">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        <p className="text-sm">Sure, I'd be happy to discuss that. What specific aspects would you like to cover?</p>
                        <span className="text-xs text-primary-foreground/70 mt-1 block">10:32 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input placeholder="Type your message..." />
                  <Button>
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              Select a conversation to start messaging
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}