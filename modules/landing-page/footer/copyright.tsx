"use client";

import { useEffect, useState } from "react";

export function Copyright() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <p>
      © {year ?? "2026"} Sprintly. All rights reserved.
    </p>
  );
}