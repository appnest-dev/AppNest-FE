"use client";

import { createContext, useContext, useMemo, useState } from "react";

type LoadingContext = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContext | null>(null);

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const providerValue = useMemo<LoadingContext>(
    () => ({ loading, setLoading }),
    [loading]
  );
  return (
    <LoadingContext.Provider value={providerValue}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) throw Error("useLoading must be used within a LoadingProvider");
  return context;
}
