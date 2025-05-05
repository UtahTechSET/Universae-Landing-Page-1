import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="mb-4">
            <span className="red-line"></span>
            <span className="font-bold">Why </span>
            <span className="font-bold">Choose Us?</span>
          </h3>
          
          <p className="text-secondary text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in.
          </p>
          
          <p className="text-secondary text-sm mb-8">
            Feugiat in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
          
          <Button className="bg-primary text-white px-8 py-2">
            Call to Action
          </Button>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary"></div>
            <div className="w-64 h-32 bg-muted relative z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 border-t border-muted-foreground w-full max-w-md mx-auto"></div>
    </section>
  );
};

export default WhyChooseUs;