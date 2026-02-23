/**
 * Centralized icon map for dynamic icon rendering.
 * Used by services, industries, and other pages that map string names to Lucide icons.
 */
import type { LucideIcon } from "lucide-react";
import {
  // Industry icons
  Store,
  Building,
  TrendingUp,
  Building2,
  Users,
  ShoppingBag,
  Home,
  UserCheck,
  Cloud,
  Rocket,
  UtensilsCrossed,
  Package,

  // Service icons
  Zap,
  Bot,
  Phone,
  Database,
  Shield,
  MessageSquare,
  BarChart3,
  Globe,
  Workflow,
  Headphones,
  Mail,
  Settings,
  MonitorSpeaker,
  Calendar,

  // Additional service icons
  Cog,
  Brain,
  Share2,
  ShoppingCart,
  Bell,
  Briefcase,
  Hotel,
  CreditCard,
  PhoneCall,
  Truck,
  Mic,
  Link2,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  // Industry icons
  Store,
  Building,
  TrendingUp,
  Building2,
  Users,
  ShoppingBag,
  Home,
  UserCheck,
  Cloud,
  Rocket,
  UtensilsCrossed,
  Package,

  // Service icons
  Zap,
  Bot,
  Phone,
  Database,
  Shield,
  MessageSquare,
  BarChart3,
  Globe,
  Workflow,
  Headphones,
  Mail,
  Settings,
  MonitorSpeaker,
  Calendar,

  // Additional service icons
  Cog,
  Brain,
  Share2,
  ShoppingCart,
  Bell,
  Briefcase,
  Hotel,
  CreditCard,
  PhoneCall,
  Truck,
  Mic,
  Link: Link2,
};

/**
 * Get an icon component by name, with a fallback.
 */
export function getIcon(name: string, fallback: LucideIcon = Zap): LucideIcon {
  return iconMap[name] ?? fallback;
}
