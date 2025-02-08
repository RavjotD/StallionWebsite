import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/PageTransition";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import ResidentialSecurity from "@/pages/services/ResidentialSecurity";
import CommercialSecurity from "@/pages/services/CommercialSecurity";
import EventSecurity from "@/pages/services/EventSecurity";
import PersonalSecurity from "@/pages/services/PersonalSecurity";
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow relative">
        <Switch>
          <Route path="/">
            <PageTransition>
              <Home />
            </PageTransition>
          </Route>
          <Route path="/services">
            <PageTransition>
              <Services />
            </PageTransition>
          </Route>
          <Route path="/services/residential">
            <PageTransition>
              <ResidentialSecurity />
            </PageTransition>
          </Route>
          <Route path="/services/commercial">
            <PageTransition>
              <CommercialSecurity />
            </PageTransition>
          </Route>
          <Route path="/services/event">
            <PageTransition>
              <EventSecurity />
            </PageTransition>
          </Route>
          <Route path="/services/personal">
            <PageTransition>
              <PersonalSecurity />
            </PageTransition>
          </Route>
          <Route path="/careers">
            <PageTransition>
              <Careers />
            </PageTransition>
          </Route>
          <Route path="/about">
            <PageTransition>
              <About />
            </PageTransition>
          </Route>
          <Route path="/contact">
            <PageTransition>
              <Contact />
            </PageTransition>
          </Route>
          <Route>
            <PageTransition>
              <NotFound />
            </PageTransition>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold">404 Page Not Found</h1>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            The page you are looking for does not exist.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;