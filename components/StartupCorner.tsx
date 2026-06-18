import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { startups } from "@/data/portfolio";

export function StartupCorner() {
  return (
    <section id="startup-corner" className="max-w-4xl">
      <SectionHeading>Startup Corner</SectionHeading>
      <p className="text-muted-foreground mb-10 text-lg">
        A sneak peek into the products I&apos;m actively incubating and building.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {startups.map((startup, idx) => (
          <Card
            key={idx}
            className="relative overflow-hidden group p-8 !bg-card hover:!bg-card-hover backdrop-blur-sm transition-colors"
          >
            <div className="absolute top-0 right-0 p-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                {startup.status}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-2 group-hover:text-accent transition-colors">
              {startup.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-loose">
              {startup.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
