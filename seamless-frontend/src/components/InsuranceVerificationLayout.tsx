
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card, CardContent } from "./ui/card";

interface InsuranceVerificationLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const InsuranceVerificationLayout = ({ 
  children, 
  title = "Verify Your Insurance Coverage" 
}: InsuranceVerificationLayoutProps) => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-amber-50 pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-3xl py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            {title}
          </h1>
          <Card className="shadow-lg border-orange-100">
            <CardContent className="p-6 md:p-8">
              {children}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default InsuranceVerificationLayout;
