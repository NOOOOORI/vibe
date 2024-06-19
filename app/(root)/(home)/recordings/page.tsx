import CallList from "@/components/CallList";
import React from "react";

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">録画記録</h1>

      <CallList type="recordings" />
    </section>
  );
};

export default Recordings;
