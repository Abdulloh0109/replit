import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import GeneralRating from "@/pages/GeneralRating";
import Top20 from "@/pages/Top20";
import GrowthRating from "@/pages/GrowthRating";
import StateBanks from "@/pages/StateBanks";
import PrivateBanks from "@/pages/PrivateBanks";
import LowRating from "@/pages/LowRating";
import RegionalRating from "@/pages/RegionalRating";
import CityDistrictRating from "@/pages/CityDistrictRating";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/general" component={GeneralRating} />
      <Route path="/top-20" component={Top20} />
      <Route path="/growth" component={GrowthRating} />
      <Route path="/state" component={StateBanks} />
      <Route path="/private" component={PrivateBanks} />
      <Route path="/low-score" component={LowRating} />
      <Route path="/regional" component={RegionalRating} />
      <Route path="/city-district" component={CityDistrictRating} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
