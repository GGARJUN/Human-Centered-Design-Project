"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, Download, FileText, Video, Image, Folder, Plus } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "Mathematics Curriculum Guide",
      type: "document",
      size: "2.4 MB",
      date: "2025-04-10",
      category: "curriculum"
    },
    {
      id: 2,
      title: "Science Lab Safety Guidelines",
      type: "pdf",
      size: "1.8 MB",
      date: "2025-04-08",
      category: "guidelines"
    },
    {
      id: 3,
      title: "Virtual Learning Best Practices",
      type: "video",
      size: "45 MB",
      date: "2025-04-05",
      category: "training"
    },
    {
      id: 4,
      title: "School Event Photos 2025",
      type: "folder",
      size: "156 MB",
      date: "2025-04-01",
      category: "media"
    }
  ];

  const categories = [
    { name: "Curriculum", count: 15 },
    { name: "Guidelines", count: 8 },
    { name: "Training", count: 12 },
    { name: "Media", count: 24 },
    { name: "Forms", count: 6 }
  ];

  const getIcon = (type) => {
    switch (type) {
      case "document":
      case "pdf":
        return <FileText className="h-6 w-6" />;
      case "video":
        return <Video className="h-6 w-6" />;
      case "folder":
        return <Folder className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Resources</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Upload Resource
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <h2 className="font-semibold mb-4">Categories</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted cursor-pointer"
              >
                <span>{category.name}</span>
                <span className="text-sm text-muted-foreground">{category.count}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search resources..." />
            </div>
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Advanced Search
            </Button>
          </div>

          <Card className="p-6">
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All Files</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="shared">Shared</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                        {getIcon(resource.type)}
                      </div>
                      <div>
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {resource.size} • {resource.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}