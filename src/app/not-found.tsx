import Link from "next/link";
import { Button } from "@/components/ui/button";

const notFound = () => {
  return (
    <>
      <main className="grid min-h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-2xl font-semibold text-foregroundText font-syne">Page Not Found</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-foregroundText sm:text-7xl font-syne">
            404
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-foregroundText/80 sm:text-xl/8 font-syne">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="font-syne">
              <Link href="/">
                Voltar
              </Link>
            </Button>
            {/* <Link 
              href="#contact" 
              className="text-sm font-semibold text-foregroundText hover:text-foregroundText/70 transition-colors font-syne"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default notFound;
