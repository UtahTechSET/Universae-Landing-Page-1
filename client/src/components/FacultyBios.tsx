import { useState } from "react";

interface FacultyMember {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  imageUrl: string;
}

const FacultyBios = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  
  // Faculty data
  const facultyData: Record<string, FacultyMember> = {
    "Joe Francom, Ph.D": {
      name: "Joe Francom, Ph.D",
      title: "Professor of Computer Science",
      bio: `Dr. Francom leads the Department of Computing at Utah Tech University, where
            he has taught since 2008. With a Ph.D. in computer science and more than 20
            years of experience in teaching and systems administration, he specializes in
            DevOps, virtualization and cloud infrastructure. His background includes
            extensive work in academic IT networks and curriculum development, preparing
            students for careers at the intersection of software and systems engineering.`,
      expertise: ["Multidisciplinary Degrees", "DevOps", "Cloud Computing"],
      imageUrl: "https://computing.utahtech.edu/wp-content/uploads/sites/273/2019/08/joefrancom.png"
    },
    "Jeff Compas, M.S.C.S.": {
      name: "Jeff Compas, M.S.C.S.",
      title: "Assistant Professor",
      bio: `With more than two decades of experience in software engineering, Compas
            brings deep industry expertise to Utah Tech University. His background includes
            leadership roles at Intel, Optum and several startups. At Utah Tech, he teaches
            programming and software design, blending academic rigor with real-world
            application. He also co-founded Contact Climbing Gym in St. George.`,
      expertise: ["Software Architecture", "Software Practices/Methodologies", "Tech Entrepreneurship"],
      imageUrl: "https://computing.utahtech.edu/wp-content/uploads/sites/273/2024/09/jeff.jpg"
    },
    "Lora Klein": {
      name: "Lora Klein",
      title: "Adjunct Professor",
      bio: `Klein is a front-end developer, designer and educator who teaches programming
            and UI/UX at Utah Tech University. Before joining the faculty, she engineered
            digital experiences at Musicbed and Custom Bit. She brings a student-focused
            approach and a passion for accessible, modern web development.`,
      expertise: ["Front-End Development", "UI/UX Design", "Tech Education"],
      imageUrl: "https://computing.utahtech.edu/wp-content/uploads/sites/273/2024/07/LoraKlein.jpg"
    }
  };

  const showFacultyAbout = (prof: string) => {
    if (window.innerWidth < 640) {
      window.scrollTo({ top: 4700, behavior: "smooth" });
    }
      
    if (selectedFaculty === prof) {
      // If clicking the same faculty again, close the panel
      setSelectedFaculty(null);
    } else {
      // Otherwise, open the panel for the selected faculty
      setSelectedFaculty(prof);
    }
  };


  // ====================== HTML SECTION ===================================
  
  return (
    
    <section className="md:absolute md:top-[22em] mt-15" >
      <div className="md:grid md:grid-cols-12 md:gap-4">
        <div
          className="col-span-12 bg-primary px-4
          md:col-span-4 md:pt-[60px] md:pl-[3em]">
          <h3 className="text-white font-choplin-light text-2xl mb-1 pt-2 md:pt-0">
            Meet our{" "} 
            <span className="font-choplin-medium">Expert</span>
            <br />
            Faculty
          </h3>
          <p className="text-white text-sm pb-2">Department of Computing</p>
        </div>
      </div>

      <div
        className="md:flex md:flexbox md:-mt-[70px]
        bg-muted-foreground pb-5 sm:pt-5 sm:px-5 sm:pb-0 sm:gap-8">
        <div className="md:mt-12 pl-[1em] flex items-center md:w-1/3 mb-7">
          <div>
            <span className="block red-line mt-3 h-[4px]"></span>
            <span className="font-choplin-medium">Meet Your Instructors</span>
            <p className="text-secondary text-xs w-3/4">
              Learn from Faculty with Real-World
              Experience and a Passion for Teaching.
            </p>
          </div>
        </div>

        <div className="sm:relative grid grid-cols-3 sm:gap-[1em] lg:gap-[4em]">
          {Object.keys(facultyData).map((name) => (
            <div key={name} className="relative flex flex-col items-center mb-6">
              <button 
                onClick={() => showFacultyAbout(name)} 
                className={`absolute top-3 left-[1em] sm:left-0 h-6 mb-4 px-4 
                  text-xs border-solid border-2 transition hover:scale-110 duration-150
                  bg-[--red] text-background border-[--red]
                  ${selectedFaculty === name ? "scale-110" : "scale-100"}`}
              >
                About
              </button>
              {/* <div className="bg-muted w-36 h-24 flex items-center justify-center mb-2"></div> */}
              <img className="w-28 flex items-center justify-center mb-2" src={facultyData[name].imageUrl}></img>
              <p className="font-sm text-center">{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Bio Details Panel - Hidden by default */}
      <div 
        className={`transition-all duration-300 overflow-hidden bg-white 
        border-t-4 border-primary mx-4 sm:mx-8 shadow-md relative z-10
        ${selectedFaculty ? 'opacity-100 py-6 px-8 mb-8' : 'opacity-0 py-0 px-0 h-0'}`}
      >
        {selectedFaculty && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <h3 className="font-bold text-lg text-primary mb-2">{facultyData[selectedFaculty].name}</h3>
              <p className="text-sm text-secondary mb-4">{facultyData[selectedFaculty].title}</p>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-semibold mb-2">About</h4>
              <p className="text-sm text-secondary mb-4">
                {facultyData[selectedFaculty].bio}
              </p>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-2">Areas of Expertise</h4>
              <ul className="list-disc pl-5">
                {facultyData[selectedFaculty].expertise.map((item, index) => (
                  <li key={index} className="text-sm text-secondary mb-1">{item}</li>
                ))}
              </ul>
              
              <button 
                onClick={() => setSelectedFaculty(null)}
                className="mt-6 text-xs text-primary border border-primary px-3 py-1 
                hover:bg-primary hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

    </section>
  );
};

export default FacultyBios;
