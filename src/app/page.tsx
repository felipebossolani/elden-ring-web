import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-6 -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-medieval text-5xl md:text-7xl lg:text-8xl text-golden-light mb-6 tracking-wide">
            ELDEN RING
          </h1>
          <div className="w-24 h-1 bg-golden mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring 
            and become an Elden Lord in the Lands Between.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/classes">
              <Button size="lg" className="bg-golden hover:bg-golden-dark text-background font-medieval text-lg px-8 py-6 h-auto transition-all duration-300 hover:shadow-lg hover:shadow-golden/30">
                Explore Classes
              </Button>
            </Link>
            <Link href="/weapons">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-golden/50 text-golden hover:bg-golden/10 font-medieval text-lg px-8 py-6 h-auto"
              >
                Explore Weapons
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-medieval text-3xl md:text-4xl text-golden-light mb-4">
              Explore The Lands Between
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the rich lore, formidable classes, and legendary equipment 
              that await in FromSoftware&apos;s masterpiece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-golden/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-medieval text-golden-light">Classes</CardTitle>
                <CardDescription>
                  Discover the 10 starting classes, each with unique stats and origins.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  From the mighty Hero to the arcane Astrologer, choose your path through The Lands Between.
                </p>
                <Link href="/classes">
                  <Button className="w-full bg-golden hover:bg-golden-dark text-background">
                    View Classes
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-golden/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-medieval text-golden-light">Weapons</CardTitle>
                <CardDescription>
                  Legendary armaments await discovery.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore an arsenal of over 300 weapons, from swift daggers to mighty colossal swords.
                </p>
                <Link href="/weapons">
                  <Button className="w-full bg-golden hover:bg-golden-dark text-background">
                    View Weapons
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-golden/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-medieval text-golden-light">Armors</CardTitle>
                <CardDescription>Protect yourself with legendary gear.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse helmets, chest pieces and more to forge the perfect defense.
                </p>
                <Link href="/armors">
                  <Button className="w-full bg-golden hover:bg-golden-dark text-background">
                    View Armors
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm opacity-60">
              <CardHeader>
                <CardTitle className="font-medieval text-muted-foreground">Bosses</CardTitle>
                <CardDescription>
                  Face the demigods and their champions (Coming Soon).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about the fearsome bosses that guard the shards of the Elden Ring.
                </p>
                <Button disabled className="w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Built with the{" "}
            <a 
              href="https://docs.eldenring.fanapis.com/docs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-golden hover:text-golden-light transition-colors"
            >
              Elden Ring Fan API
            </a>
            {" "}• Not affiliated with FromSoftware or BANDAI NAMCO
          </p>
        </div>
      </footer>
    </div>
  );
}

