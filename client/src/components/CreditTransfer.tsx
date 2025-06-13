const CreditTransfer = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex">
          <span className="red-line h-[0.15em] mt-4 w-2/5 sm:w-[3em]"></span>
          <div>
            <h2 className="mb-4">
              <span className="font-bold text-2xl">Credit Transfer</span>
            </h2>
            <p>
              Build on your progress at Universae by continuing your education at Utah 
              Tech. Eligible students can transfer and apply toward degree programs that
              align with your goals.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto shadow-lg">
          <table className="w-full bg-white border border-muted">
            <thead className="bg-primary">
              <tr className="">
                <th className="px-1 sm:px-6 py-2 sm:py-4 text-center sm:text-left text-white font-semibold border-r border-white">
                  Universae Academic Program
                </th>
                <th className="px-1 sm:px-6 py-2 sm:py-4 text-center sm:text-left text-white font-semibold border-r border-white">
                  Transfer-Eligible Program at Utah Tech
                </th>
                <th className="px-1 sm:px-6 py-2 sm:py-4 text-center sm:text-left text-white font-semibold">
                  Credits Left at Utah Tech
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-muted transition-colors">
                <td className=" hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">
                  Advanced Technician in Multiplatform Application Development (MAP), Online
                </td>
                <td rowSpan={2} className=" hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">Software Engineering, B.S.</td>
                <td className="hover:bg-muted/50 px-6 py-4 text-sm">69</td>
              </tr>
              {/* Row 2 */}
              <tr className="border-b border-muted transition-colors">
                <td className="hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">
                  Advanced Technician in Online Web Application Development (DAW)
                </td>
                <td className="hover:bg-muted/50 px-6 py-4 text-sm">76</td>
              </tr>
              {/* Row 3 */}
              <tr className="border-b border-muted transition-colors">
                <td className="hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">
                  Advanced Technician in Network Systems Administration (ASIR)
                </td>
                <td className="hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">Information Technology, B.S.</td>
                <td className="hover:bg-muted/50 px-6 py-4 text-sm">81</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      
    </section>
  );
};

export default CreditTransfer;
