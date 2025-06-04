const CreditTransfer = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex">
          <span className="red-line h-[0.15em] mt-4 w-1/5 sm:w-[3em]"></span>
          <div>
            <h2 className="mb-4">
              <span className="font-bold text-2xl">Credit Transfer</span>
            </h2>
            <p>
              Continuing your schooling at Utah Tech doesn't mean starting over. Your credits at Universae can transfer
              and apply towards relevant Utah Tech programs. 
            </p>
          </div>
        </div>

        <div className="overflow-x-auto shadow-lg">
          <table className="w-full bg-white border border-muted">
            <thead className="bg-primary">
              <tr>
                <th className="px-1 sm:px-6 py-2 sm:py-4 text-center sm:text-left text-white font-semibold border-r border-white w-5">
                  Relevant Utah Tech Program
                </th>
                <th className="px-1 sm:px-6 py-2 sm:py-4 text-center sm:text-left text-white font-semibold border-r border-white">
                  Universae Program
                </th>
                <th className="px-1 sm:px-6 py-2 sm:py-4 text-center sm:text-left text-white font-semibold">
                  Credits Left at Utah Tech
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-muted transition-colors">
                <td rowSpan={2} className=" hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">Software Engineering</td>
                <td className=" hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">Multiplatform</td>
                <td className="hover:bg-muted/50 px-6 py-4 text-sm">69</td>
              </tr>
              {/* Row 2 */}
              <tr className="border-b border-muted transition-colors">
                <td className="hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">Web App</td>
                <td className="hover:bg-muted/50 px-6 py-4 text-sm">76</td>
              </tr>
              {/* Row 3 */}
              <tr className="border-b border-muted transition-colors">
                <td rowSpan={2} className="hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">Information Technology</td>
                <td className="hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">Information Systems</td>
                <td className="hover:bg-muted/50 px-6 py-4 text-sm">81</td>
              </tr>
              {/* Row 4 */}
              <tr className="transition-colors">
                <td className="hover:bg-muted/50 px-6 py-4 border-r border-muted text-sm">Cybersecurity</td>
                <td className="hover:bg-muted/50 px-6 py-4 text-sm">TBD</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      
    </section>
  );
};

export default CreditTransfer;