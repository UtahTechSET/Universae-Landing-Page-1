const CreditTransfer = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-4">
            <span className="red-line"></span>
            <span className="font-bold text-2xl">Credit Transfer</span>
          </h2>
        </div>

        <div className="overflow-x-auto shadow-lg">
          <table className="w-full bg-white border border-muted">
            <thead className="bg-primary">
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold border-r border-white">
                  Universae Program
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold border-r border-white">
                  Relevant Utah Tech Program
                </th>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Credits Remaining at Utah Tech
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-muted hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 border-r border-muted text-sm"></td>
                <td className="px-6 py-4 border-r border-muted text-sm"></td>
                <td className="px-6 py-4 text-sm"></td>
              </tr>
              {/* Row 2 */}
              <tr className="border-b border-muted hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 border-r border-muted text-sm"></td>
                <td className="px-6 py-4 border-r border-muted text-sm"></td>
                <td className="px-6 py-4 text-sm"></td>
              </tr>
              {/* Row 3 */}
              <tr className="border-b border-muted hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 border-r border-muted text-sm"></td>
                <td className="px-6 py-4 border-r border-muted text-sm"></td>
                <td className="px-6 py-4 text-sm"></td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 border-r border-muted text-sm"></td>
                <td className="px-6 py-4 border-r border-muted text-sm"></td>
                <td className="px-6 py-4 text-sm"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-sm text-secondary">
          <p>* Credit transfer evaluations are subject to review and approval by Utah Tech University's Registrar's Office.</p>
        </div>
      </div>
    </section>
  );
};

export default CreditTransfer;