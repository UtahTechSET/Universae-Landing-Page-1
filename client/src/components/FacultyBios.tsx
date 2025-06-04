import { useState } from "react";

interface FacultyMember {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
}

const FacultyBios = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  
  // Faculty data
  const facultyData: Record<string, FacultyMember> = {
    "Joe Francom, PH.D": {
      name: "Joe Francom, PH.D",
      title: "Professor of Computer Science",
      bio: "Dr. Francom has over 15 years of experience in software development and academic research. His work focuses on artificial intelligence and machine learning applications.",
      expertise: ["Information Technology", "DevOps", "Cloud Computing"]
    },
    "Jeff Compas, MSCS": {
      name: "Jeff Compas, MSCS",
      title: "Assistant Professor",
      bio: "Professor Compas specializes in web development and database systems. He has industry experience at several tech companies before joining academia.",
      expertise: ["Software Architecture", "Software Practices/Methodologies", "Cloud Computing"]
    },
    "Lora Klein": {
      name: "Lora Klein",
      title: "Adjunct Professor",
      bio: "Professor Klein brings real-world cybersecurity expertise to the classroom from her years working in the financial sector.",
      expertise: ["Web Development", "UI/UX Design", "Full-Stack Development"]
    }
  };

  const showFacultyAbout = (prof: string) => {
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
    
    <section className="md:absolute md:top-[22em] mt-15 " >
      <div className="md:grid md:grid-cols-12 md:gap-4">
        <div
          className="md:col-span-4 md:pt-[60px] md:pl-[3em]
          col-span-12 bg-primary px-4">
          <h3 className="text-white font-choplin-light text-2xl mb-1">
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
        bg-muted-foreground pb-5 sm:pt-5 sm:px-5 sm:pb-0">
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

        <div className="sm:relative sm:grid sm:grid-cols-3 sm:gap-[2.5em]">
          {Object.keys(facultyData).map((name) => (
            <div key={name} className="relative flex flex-col items-center mb-6">
              <button 
                onClick={() => showFacultyAbout(name)} 
                className={`absolute top-5 md:left-4 h-6 mb-4 px-4 
                  text-xs border-solid border-2 transition duration-300
                  ${selectedFaculty === name 
                    ? "bg-[--red] text-background border-[--red]" 
                    : "bg-transparent text-[--red] border-[--red] hover:bg-[--red] hover:text-background"
                  }`}
              >
                about
              </button>
              <div className="bg-muted w-36 h-24 flex items-center justify-center mb-2"></div>
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
