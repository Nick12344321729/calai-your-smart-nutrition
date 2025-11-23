import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Gender from "./pages/onboarding/Gender";
import WorkoutFrequency from "./pages/onboarding/WorkoutFrequency";
import Referral from "./pages/onboarding/Referral";
import Summary from "./pages/onboarding/Summary";
import Dashboard from "./pages/Dashboard";
import AddMeal from "./pages/dashboard/AddMeal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding/gender" element={<Gender />} />
          <Route path="/onboarding/workout-frequency" element={<WorkoutFrequency />} />
          <Route path="/onboarding/referral" element={<Referral />} />
          <Route path="/onboarding/summary" element={<Summary />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/add-meal" element={<AddMeal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
