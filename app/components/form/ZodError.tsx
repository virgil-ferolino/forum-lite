import React from "react";

const ZodError = ({ error }: { error: string[] }) => {
  if (!error) return null;
  return error.map((err, index) => (
    <div key={index} className="text-red-500 text-xl italic">
      {err}
    </div>
  ));
};

export default ZodError;
