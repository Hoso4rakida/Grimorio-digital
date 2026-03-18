import Header from "../modules/Header";

import backend from '../services/backend.ts';
import { useEffect } from "react";

export function Home() {

  return (
    <main className="items-center px-15">
      <Header />
    </main>
  );
}

