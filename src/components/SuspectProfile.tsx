export default function SuspectProfile() {
  return (
    <>
      <div className="win95-inset p-4 mb-3" style={{ background: "#FFFFF0" }}>
        <div className="text-center mb-3">
          <div className="evidence-stamp inline-block mb-2">WANTED</div>
          <h3 className="text-2xl font-bold">SUNDESI</h3>
          <p className="text-sm text-[#808080]">a.k.a. &quot;The Messenger&quot;</p>
        </div>

        {/* Silhouette */}
        <div className="flex justify-center mb-3">
          <div className="w-28 h-28 bg-[#1B2A4A] border-2 border-[#000] flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="22" r="14" fill="#404040" />
              <ellipse cx="32" cy="56" rx="22" ry="16" fill="#404040" />
              {/* Mask */}
              <rect x="20" y="16" width="24" height="8" rx="2" fill="#000" opacity="0.7" />
            </svg>
          </div>
        </div>

        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-[#C0C0C0]">
              <td className="py-1 font-bold w-36">Alias Origin:</td>
              <td className="py-1">Hindi &quot;Sandesh&quot; (सन्देश) — meaning &quot;Message&quot;</td>
            </tr>
            <tr className="border-b border-[#C0C0C0]">
              <td className="py-1 font-bold">Persona:</td>
              <td className="py-1">Masked bandit figure, inspired by Indian dacoits (Chambal gangs, Phoolan Devi era)</td>
            </tr>
            <tr className="border-b border-[#C0C0C0]">
              <td className="py-1 font-bold">Known Activities:</td>
              <td className="py-1">Underground music production, sampling from global sources, anonymous digital drops</td>
            </tr>
            <tr className="border-b border-[#C0C0C0]">
              <td className="py-1 font-bold">Danger Level:</td>
              <td className="py-1"><span className="text-[#CC0000] font-bold">HIGH</span> — Cultural disruption agent</td>
            </tr>
            <tr className="border-b border-[#C0C0C0]">
              <td className="py-1 font-bold">Last Known Location:</td>
              <td className="py-1">UNKNOWN</td>
            </tr>
            <tr>
              <td className="py-1 font-bold">Status:</td>
              <td className="py-1"><span className="text-[#CC0000] font-bold">AT LARGE</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="win95-status-bar flex gap-2">
        <span className="win95-status-bar-panel flex-1">CASE #SD-2025-0113</span>
        <span className="win95-status-bar-panel">PRIORITY: HIGH</span>
      </div>
    </>
  );
}
