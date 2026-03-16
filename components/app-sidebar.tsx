'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Settings,
  LogOut,
  ChevronsUpDown,
} from 'lucide-react';
import Link from 'next/link';

const workoutItems = [
  { title: 'Dashboard', url: '/workout/dashboard' },
  { title: 'Log Workout', url: '/workout/log-workout' },
  { title: 'Schedule', url: '/workout/schedule' },
];

const mealPrepItems = [
  { title: 'Grocery List', url: '/meal-prep/grocery-list' },
  { title: 'Meal Planner', url: '/meal-prep/meal-planner' },
  { title: 'Nutrition', url: '/meal-prep/nutrition' },
  { title: 'Recipes', url: '/meal-prep/recipes' },
];

const user = {
  name: 'Ravi Brooks',
  email: 'ravi@example.com',
  avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=man',
  initials: 'JS',
};

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground text-xs font-bold">
                <Link href={'/'}>DS</Link>
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Daily Structure</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        {/* Workout group */}
        <SidebarGroup>
          <SidebarGroupLabel className="border-b border-t border-border rounded-none bg-zinc-100">
            Workout
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {workoutItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Meal Prep group */}
        <SidebarGroup>
          <SidebarGroupLabel className="border-b border-t border-border rounded-none bg-zinc-100">
            Meal Prep
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mealPrepItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer: User avatar */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="size-8 rounded-lg">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback className="rounded-lg text-xs">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5 leading-none text-left">
                    <span className="truncate font-semibold">{user.name}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4 shrink-0 opacity-50" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-popper-anchor-width]"
                side="top"
                align="start"
              >
                <DropdownMenuItem>
                  <Settings className="mr-2 size-4" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 size-4" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
