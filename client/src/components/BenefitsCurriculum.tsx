const BenefitsCurriculum = () => {
  return (
    <section className="bg-muted py-12 mb-12 relative">
      {/* Red box for "Headline" - positioned to overlap */}
      <div className="absolute -bottom-32 left-0 w-56 h-32 bg-primary p-4 flex flex-col justify-center z-10">
        <h2 className="text-white text-xl font-bold">Headline</h2>
        <p className="text-white text-xs">sub headline text</p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-muted p-6">
          <div>
            <h3 className="mb-4">
              <span className="red-line"></span>
              <span className="font-bold">Benefits</span>
            </h3>
            <p className="text-secondary text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in.
            </p>
            <p className="text-secondary text-sm">
              Feugiat in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4">
              <span className="red-line"></span>
              <span className="font-bold">Curriculum</span>
            </h3>
            <p className="text-secondary text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in.
            </p>
            <p className="text-secondary text-sm">
              Feugiat in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCurriculum;