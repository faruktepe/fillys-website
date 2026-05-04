"use client";

export default function EmailForm() {
  return (
    <form
      className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="e-posta adresin"
        className="flex-1 bg-transparent border border-[#93945C]/30 text-[#53284E] placeholder-[#93945C]/40 px-5 py-4 outline-none focus:border-[#93945C]/70 transition-colors"
        style={{ fontFamily: "'Apfel Grotezk', system-ui, sans-serif", fontSize: "0.88rem" }}
      />
      <button
        type="submit"
        className="type-nav bg-[#53284E] text-white px-7 py-4 hover:bg-[#93945C] transition-colors duration-200 whitespace-nowrap flex-shrink-0"
        style={{ fontSize: "0.68rem" }}
      >
        KATIL →
      </button>
    </form>
  );
}
