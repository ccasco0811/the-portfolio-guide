import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const GitHubRedirect = () => {
  window.location.href = "https://github.com/ccasco0811/the-portfolio-guide.git";
  return null;
};
import Index from "./pages/Index";
import ProjectExample from "./pages/ProjectExample";
import NumaProject from "./pages/NumaProject";
import Numa2 from "./pages/Numa2";
import Numa3 from "./pages/Numa3";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project-example" element={<ProjectExample />} />
          <Route path="/numa" element={<NumaProject />} />
          <Route path="/numa2" element={<Numa2 />} />
          <Route path="/numa3" element={<Numa3 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
